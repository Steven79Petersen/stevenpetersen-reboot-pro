import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Plus, Pencil, Trash2, Save, X } from 'lucide-react';
import { z } from 'zod';

const albumSchema = z.object({
  title: z.string().min(1, 'Titel ist erforderlich').max(200),
  slug: z.string().min(1, 'Slug ist erforderlich').max(200),
  year: z.string().min(1, 'Jahr ist erforderlich').max(50),
  cover_url: z.string().url('Ungültige URL'),
  description: z.string().min(10, 'Beschreibung muss mindestens 10 Zeichen lang sein').max(2000),
  spotify_id: z.string().max(100).optional(),
  apple_music_link: z.string().url('Ungültige URL').optional().or(z.literal('')),
  amazon_music_link: z.string().url('Ungültige URL').optional().or(z.literal(''))
});

type Album = z.infer<typeof albumSchema> & { id?: string };

export default function AlbumsManager() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingAlbum, setEditingAlbum] = useState<Album | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const emptyAlbum: Album = {
    title: '',
    slug: '',
    year: '',
    cover_url: '',
    description: '',
    spotify_id: '',
    apple_music_link: '',
    amazon_music_link: ''
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('albums')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: 'Fehler',
        description: 'Alben konnten nicht geladen werden',
        variant: 'destructive'
      });
    } else {
      setAlbums(data || []);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!editingAlbum) return;

    try {
      albumSchema.parse(editingAlbum);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Validierungsfehler',
          description: error.errors[0].message,
          variant: 'destructive'
        });
        return;
      }
    }

    if (isCreating) {
      const { error } = await supabase.from('albums').insert([editingAlbum]);
      if (error) {
        toast({
          title: 'Fehler',
          description: 'Album konnte nicht erstellt werden',
          variant: 'destructive'
        });
      } else {
        toast({ title: 'Erfolg', description: 'Album wurde erstellt' });
        fetchAlbums();
        setEditingAlbum(null);
        setIsCreating(false);
      }
    } else {
      const { error } = await supabase
        .from('albums')
        .update(editingAlbum)
        .eq('id', editingAlbum.id);

      if (error) {
        toast({
          title: 'Fehler',
          description: 'Album konnte nicht aktualisiert werden',
          variant: 'destructive'
        });
      } else {
        toast({ title: 'Erfolg', description: 'Album wurde aktualisiert' });
        fetchAlbums();
        setEditingAlbum(null);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Möchten Sie dieses Album wirklich löschen?')) return;

    const { error } = await supabase.from('albums').delete().eq('id', id);

    if (error) {
      toast({
        title: 'Fehler',
        description: 'Album konnte nicht gelöscht werden',
        variant: 'destructive'
      });
    } else {
      toast({ title: 'Erfolg', description: 'Album wurde gelöscht' });
      fetchAlbums();
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  if (editingAlbum) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" onClick={() => {
              setEditingAlbum(null);
              setIsCreating(false);
            }}>
              <X className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl md:text-3xl font-playfair font-bold">
              {isCreating ? 'Neues Album' : 'Album bearbeiten'}
            </h1>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titel *</Label>
                <Input
                  id="title"
                  value={editingAlbum.title}
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    setEditingAlbum({
                      ...editingAlbum,
                      title: newTitle,
                      slug: generateSlug(newTitle)
                    });
                  }}
                  placeholder="Albumtitel"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL-Slug * (automatisch generiert)</Label>
                <Input
                  id="slug"
                  value={editingAlbum.slug}
                  onChange={(e) => setEditingAlbum({ ...editingAlbum, slug: e.target.value })}
                  placeholder="album-slug"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Jahr *</Label>
                <Input
                  id="year"
                  value={editingAlbum.year}
                  onChange={(e) => setEditingAlbum({ ...editingAlbum, year: e.target.value })}
                  placeholder="2024"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover_url">Cover URL *</Label>
                <Input
                  id="cover_url"
                  value={editingAlbum.cover_url}
                  onChange={(e) => setEditingAlbum({ ...editingAlbum, cover_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Beschreibung *</Label>
                <Textarea
                  id="description"
                  value={editingAlbum.description}
                  onChange={(e) => setEditingAlbum({ ...editingAlbum, description: e.target.value })}
                  placeholder="Albumtext..."
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spotify_id">Spotify Embed ID</Label>
                <Input
                  id="spotify_id"
                  value={editingAlbum.spotify_id || ''}
                  onChange={(e) => setEditingAlbum({ ...editingAlbum, spotify_id: e.target.value })}
                  placeholder="2Z9zqGVwWwBqAz3Wz6n0YL"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apple_music_link">Apple Music Link</Label>
                <Input
                  id="apple_music_link"
                  value={editingAlbum.apple_music_link || ''}
                  onChange={(e) => setEditingAlbum({ ...editingAlbum, apple_music_link: e.target.value })}
                  placeholder="https://music.apple.com/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amazon_music_link">Amazon Music Link</Label>
                <Input
                  id="amazon_music_link"
                  value={editingAlbum.amazon_music_link || ''}
                  onChange={(e) => setEditingAlbum({ ...editingAlbum, amazon_music_link: e.target.value })}
                  placeholder="https://music.amazon.de/..."
                />
              </div>

              <Button onClick={handleSave} className="w-full gap-2">
                <Save className="h-4 w-4" />
                Speichern
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/admin')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl md:text-3xl font-playfair font-bold">Albums verwalten</h1>
          </div>
          <Button onClick={() => {
            setEditingAlbum(emptyAlbum);
            setIsCreating(true);
          }} className="gap-2">
            <Plus className="h-4 w-4" />
            Neues Album
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {albums.map((album) => (
              <Card key={album.id} className="overflow-hidden">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src={album.cover_url} 
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{album.title}</CardTitle>
                  <CardDescription>{album.year}</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 gap-2"
                    onClick={() => setEditingAlbum(album)}
                  >
                    <Pencil className="h-4 w-4" />
                    Bearbeiten
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(album.id!)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
