import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';

export default function ContactManager() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [contactData, setContactData] = useState({
    id: '',
    email: '',
    phone: '',
    address: '',
    social_facebook: '',
    social_instagram: '',
    social_youtube: '',
    social_spotify: ''
  });

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_info')
      .select('*')
      .maybeSingle();

    if (error) {
      toast({
        title: 'Fehler',
        description: 'Kontaktdaten konnten nicht geladen werden',
        variant: 'destructive'
      });
    } else if (data) {
      setContactData(data);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);

    if (contactData.id) {
      const { error } = await supabase
        .from('contact_info')
        .update({
          email: contactData.email,
          phone: contactData.phone,
          address: contactData.address,
          social_facebook: contactData.social_facebook,
          social_instagram: contactData.social_instagram,
          social_youtube: contactData.social_youtube,
          social_spotify: contactData.social_spotify
        })
        .eq('id', contactData.id);

      if (error) {
        toast({
          title: 'Fehler',
          description: 'Kontaktdaten konnten nicht aktualisiert werden',
          variant: 'destructive'
        });
      } else {
        toast({ title: 'Erfolg', description: 'Kontaktdaten wurden aktualisiert' });
      }
    } else {
      const { error } = await supabase
        .from('contact_info')
        .insert([contactData]);

      if (error) {
        toast({
          title: 'Fehler',
          description: 'Kontaktdaten konnten nicht erstellt werden',
          variant: 'destructive'
        });
      } else {
        toast({ title: 'Erfolg', description: 'Kontaktdaten wurden erstellt' });
        fetchContact();
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
          <h1 className="text-2xl md:text-3xl font-playfair font-bold">Kontakt bearbeiten</h1>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                placeholder="kontakt@example.de"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                value={contactData.phone}
                onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                placeholder="+49 123 456789"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Input
                id="address"
                value={contactData.address}
                onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                placeholder="Musterstraße 1, 12345 Stadt"
              />
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold">Social Media</h3>
              
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook URL</Label>
                <Input
                  id="facebook"
                  value={contactData.social_facebook}
                  onChange={(e) => setContactData({ ...contactData, social_facebook: e.target.value })}
                  placeholder="https://facebook.com/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram URL</Label>
                <Input
                  id="instagram"
                  value={contactData.social_instagram}
                  onChange={(e) => setContactData({ ...contactData, social_instagram: e.target.value })}
                  placeholder="https://instagram.com/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="youtube">YouTube URL</Label>
                <Input
                  id="youtube"
                  value={contactData.social_youtube}
                  onChange={(e) => setContactData({ ...contactData, social_youtube: e.target.value })}
                  placeholder="https://youtube.com/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spotify">Spotify URL</Label>
                <Input
                  id="spotify"
                  value={contactData.social_spotify}
                  onChange={(e) => setContactData({ ...contactData, social_spotify: e.target.value })}
                  placeholder="https://open.spotify.com/..."
                />
              </div>
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
