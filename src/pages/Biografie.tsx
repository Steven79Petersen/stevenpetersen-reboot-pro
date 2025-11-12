import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Biografie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-8 text-center">
            Biografie
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-primary">
                Steven Petersen
              </h2>
              
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Steven Petersen ist ein vielseitiger deutscher Künstler, der als Liedtexter, 
                Moderator und Sänger tätig ist. Mit seiner einzigartigen musikalischen Stimme 
                und seinem kreativen Schaffen hat er sich einen Namen in der deutschen Musikszene gemacht.
              </p>
              
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Seine Arbeit als Liedtexter zeichnet sich durch emotionale Tiefe und authentische 
                Geschichten aus. Als Sänger überzeugt er mit seiner charakteristischen Stimme und 
                bringt seinen Songs eine besondere Note.
              </p>
              
              <p className="text-foreground text-lg leading-relaxed">
                Mit zahlreichen Veröffentlichungen und einer stetig wachsenden Fangemeinde setzt 
                Steven Petersen seinen künstlerischen Weg fort und bereichert die deutsche Musiklandschaft 
                mit seiner Kreativität.
              </p>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground">
                  <strong className="text-primary">GEMA-Mitgliedsnummer:</strong> 144 422
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Biografie;
