import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-center">
            Kontakt
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Nehmen Sie Kontakt mit Steven Petersen auf
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
                <p className="text-muted-foreground mb-4">
                  Für allgemeine Anfragen und Buchungen
                </p>
                <a 
                  href="mailto:info@stevenpetersen.de" 
                  className="text-primary hover:underline"
                >
                  info@stevenpetersen.de
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p className="text-muted-foreground mb-4">
                  Rufen Sie uns an
                </p>
                <a 
                  href="tel:+49015223045595" 
                  className="text-primary hover:underline"
                >
                  +49 (0) 1522 3045595
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8">
              <MapPin className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Management</h3>
              <div className="text-center text-muted-foreground space-y-2">
                <p>Steven Petersen Management</p>
                <p>Deutschland</p>
                <p className="pt-4 text-sm">
                  <strong className="text-primary">GEMA-Nr.:</strong> 144 422
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
