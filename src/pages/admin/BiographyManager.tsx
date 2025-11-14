import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';

export default function BiographyManager() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [bioData, setBioData] = useState({
    id: '',
    content: '',
    portrait_url: ''
  });

  useEffect(() => {
    fetchBiography();
  }, []);

  const fetchBiography = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('biography')
      .select('*')
      .maybeSingle();

    if (error) {
      toast({
        title: 'Fehler',
        description: 'Biografie konnte nicht geladen werden',
        variant: 'destructive'
      });
    } else if (data) {
      setBioData(data);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);

    if (bioData.id) {
      const { error } = await supabase
        .from('biography')
        .update({
          content: bioData.content,
          portrait_url: bioData.portrait_url
        })
        .eq('id', bioData.id);

      if (error) {
        toast({
          title: 'Fehler',
          description: 'Biografie konnte nicht aktualisiert werden',
          variant: 'destructive'
        });
      } else {
        toast({ title: 'Erfolg', description: 'Biografie wurde aktualisiert' });
      }
    } else {
      const { error } = await supabase
        .from('biography')
        .insert([{ content: bioData.content, portrait_url: bioData.portrait_url }]);

      if (error) {
        toast({
          title: 'Fehler',
          description: 'Biografie konnte nicht erstellt werden',
          variant: 'destructive'
        });
      } else {
        toast({ title: 'Erfolg', description: 'Biografie wurde erstellt' });
        fetchBiography();
      }
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl md:text-3xl font-playfair font-bold">Biografie bearbeiten</h1>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="portrait_url">Portrait URL</Label>
              <Input
                id="portrait_url"
                value={bioData.portrait_url}
                onChange={(e) => setBioData({ ...bioData, portrait_url: e.target.value })}
                placeholder="https://..."
              />
              {bioData.portrait_url && (
                <img 
                  src={bioData.portrait_url} 
                  alt="Portrait"
                  className="w-32 h-32 rounded-lg object-cover mt-2"
                />
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Biografie-Text</Label>
              <Textarea
                id="content"
                value={bioData.content}
                onChange={(e) => setBioData({ ...bioData, content: e.target.value })}
                placeholder="Ihre Biografie..."
                rows={15}
                className="font-sans"
              />
            </div>

            <Button onClick={handleSave} className="w-full gap-2" disabled={saving}>
              <Save className="h-4 w-4" />
              {saving ? 'Wird gespeichert...' : 'Speichern'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
