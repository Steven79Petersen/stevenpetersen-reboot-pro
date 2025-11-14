import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';

export default function LegalManager() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [impressum, setImpressum] = useState({ id: '', content: '' });
  const [privacy, setPrivacy] = useState({ id: '', content: '' });

  useEffect(() => {
    fetchLegalPages();
  }, []);

  const fetchLegalPages = async () => {
    setLoading(true);
    
    const { data: impressumData } = await supabase
      .from('legal_pages')
      .select('*')
      .eq('page_type', 'impressum')
      .maybeSingle();

    const { data: privacyData } = await supabase
      .from('legal_pages')
      .select('*')
      .eq('page_type', 'privacy')
      .maybeSingle();

    if (impressumData) setImpressum(impressumData);
    if (privacyData) setPrivacy(privacyData);

    setLoading(false);
  };

  const handleSave = async (pageType: 'impressum' | 'privacy') => {
    setSaving(true);
    const data = pageType === 'impressum' ? impressum : privacy;

    if (data.id) {
      const { error } = await supabase
        .from('legal_pages')
        .update({ content: data.content })
        .eq('id', data.id);

      if (error) {
        toast({
          title: 'Fehler',
          description: 'Seite konnte nicht aktualisiert werden',
          variant: 'destructive'
        });
      } else {
        toast({ title: 'Erfolg', description: 'Seite wurde aktualisiert' });
      }
    } else {
      const { error } = await supabase
        .from('legal_pages')
        .insert([{ page_type: pageType, content: data.content }]);

      if (error) {
        toast({
          title: 'Fehler',
          description: 'Seite konnte nicht erstellt werden',
          variant: 'destructive'
        });
      } else {
        toast({ title: 'Erfolg', description: 'Seite wurde erstellt' });
        fetchLegalPages();
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl md:text-3xl font-playfair font-bold">Rechtliche Seiten</h1>
        </div>

        <Tabs defaultValue="impressum" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="impressum">Impressum</TabsTrigger>
            <TabsTrigger value="privacy">Datenschutz</TabsTrigger>
          </TabsList>

          <TabsContent value="impressum">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="impressum-content">Impressum (HTML möglich)</Label>
                  <Textarea
                    id="impressum-content"
                    value={impressum.content}
                    onChange={(e) => setImpressum({ ...impressum, content: e.target.value })}
                    placeholder="Impressum-Text..."
                    rows={20}
                    className="font-mono text-sm"
                  />
                </div>
                <Button onClick={() => handleSave('impressum')} className="w-full gap-2" disabled={saving}>
                  <Save className="h-4 w-4" />
                  {saving ? 'Wird gespeichert...' : 'Impressum speichern'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="privacy-content">Datenschutz (HTML möglich)</Label>
                  <Textarea
                    id="privacy-content"
                    value={privacy.content}
                    onChange={(e) => setPrivacy({ ...privacy, content: e.target.value })}
                    placeholder="Datenschutz-Text..."
                    rows={20}
                    className="font-mono text-sm"
                  />
                </div>
                <Button onClick={() => handleSave('privacy')} className="w-full gap-2" disabled={saving}>
                  <Save className="h-4 w-4" />
                  {saving ? 'Wird gespeichert...' : 'Datenschutz speichern'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
