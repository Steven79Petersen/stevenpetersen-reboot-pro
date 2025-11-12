import stevenPortrait from "@/assets/steven-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Music, Mic, Radio } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Portrait */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${stevenPortrait})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Verfügbar auf allen Plattformen</span>
          </div>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-scale-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Steven Petersen
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
            <Music className="h-5 w-5 text-primary" />
            <span className="text-foreground font-semibold">Liedtexter</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
            <Radio className="h-5 w-5 text-secondary" />
            <span className="text-foreground font-semibold">Moderator</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
            <Mic className="h-5 w-5 text-accent" />
            <span className="text-foreground font-semibold">Sänger</span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Erleben Sie authentische deutsche Musik mit Herz und Leidenschaft
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-gradient-accent text-white font-semibold px-8 py-6 text-lg rounded-full hover:shadow-glow transition-all duration-300"
            onClick={() => document.getElementById('discografie')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt anhören
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-card font-semibold px-8 py-6 text-lg rounded-full border-2 hover:border-primary transition-all duration-300"
            onClick={() => window.location.href = '/kontakt'}
          >
            Kontakt aufnehmen
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="mt-16 flex items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Veröffentlichungen</div>
          </div>
          <div className="h-12 w-px bg-border"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">2025</div>
            <div className="text-sm text-muted-foreground">Aktuelle Songs</div>
          </div>
          <div className="h-12 w-px bg-border"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">GEMA</div>
            <div className="text-sm text-muted-foreground">Mitglied 144 422</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
