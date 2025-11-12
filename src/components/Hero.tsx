import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          Steven Petersen
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Liedtexter · Moderator · Sänger
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#discografie"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-glow transition-all duration-300"
          >
            Musik entdecken
          </a>
          <a
            href="/kontakt"
            className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg border border-border hover:border-primary transition-all duration-300"
          >
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
};
