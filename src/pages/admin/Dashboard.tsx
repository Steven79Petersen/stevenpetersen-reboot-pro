import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, FileText, Mail, FileCheck, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Dashboard() {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Abgemeldet',
      description: 'Sie wurden erfolgreich abgemeldet.'
    });
    navigate('/');
  };

  const adminSections = [
    {
      title: 'Albums',
      description: 'Verwalten Sie Ihre Discografie',
      icon: Music,
      path: '/admin/albums',
      color: 'from-primary to-secondary'
    },
    {
      title: 'Biografie',
      description: 'Bearbeiten Sie Ihre Biografie',
      icon: FileText,
      path: '/admin/biography',
      color: 'from-secondary to-accent'
    },
    {
      title: 'Kontakt',
      description: 'Kontaktinformationen verwalten',
      icon: Mail,
      path: '/admin/contact',
      color: 'from-accent to-primary'
    },
    {
      title: 'Impressum',
      description: 'Rechtliche Seiten bearbeiten',
      icon: FileCheck,
      path: '/admin/legal',
      color: 'from-primary/80 to-accent/80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Willkommen zurück, {user?.email}</p>
          </div>
          <Button onClick={handleSignOut} variant="outline" className="gap-2">
            <LogOut className="h-4 w-4" />
            Abmelden
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {adminSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card 
                key={section.path}
                className="group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
                onClick={() => navigate(section.path)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:shadow-glow transition-all`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-start">
                    Verwalten →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Schnellzugriff</CardTitle>
            <CardDescription>Navigieren Sie zur öffentlichen Website</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={() => navigate('/')} className="flex-1">
              Zur Startseite
            </Button>
            <Button variant="outline" onClick={() => navigate('/discografie')} className="flex-1">
              Zur Discografie
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
