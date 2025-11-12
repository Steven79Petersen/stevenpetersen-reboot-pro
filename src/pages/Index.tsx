import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AlbumCard } from "@/components/AlbumCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const latestReleases = [
    {
      title: "Willkommen auf der Erde",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-02/willkommen.jpg?itok=S_xqusev",
      year: "2025"
    },
    {
      title: "Wochenende",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-03/Steven%20Petersen%20-%20Wochenende.jpg?itok=WX69bIzD",
      year: "2025"
    },
    {
      title: "Meine Sonne",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-03/Sonne.jpg?itok=sUy3Njuk",
      year: "2025"
    },
    {
      title: "Digital",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-10/7d31cbd3-c4d2-4cf8-b2fe-779a10ad7eac.jpeg?itok=x2S1gdJF",
      year: "2025"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <Hero />
        
        <section id="discografie" className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12">
            Aktuelle Veröffentlichungen
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {latestReleases.map((album) => (
              <AlbumCard
                key={album.title}
                title={album.title}
                coverUrl={album.coverUrl}
                year={album.year}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/discografie"
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg border border-border hover:border-primary transition-all duration-300"
            >
              Alle Veröffentlichungen ansehen
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
