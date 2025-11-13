import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AlbumCard } from "@/components/AlbumCard";
import { Footer } from "@/components/Footer";
import { Music2 } from "lucide-react";

const Index = () => {
  const latestReleases = [
    {
      title: "Willkommen auf der Erde",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-02/willkommen.jpg?itok=S_xqusev",
      year: "2025",
      info: "Die neueste Single mit emotionaler Tiefe und authentischem Sound",
      detailPath: "/album/willkommen-auf-der-erde",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Wochenende",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-03/Steven%20Petersen%20-%20Wochenende.jpg?itok=WX69bIzD",
      year: "2025",
      info: "Der perfekte Song für entspannte Momente",
      detailPath: "/album/wochenende",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Meine Sonne",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-03/Sonne.jpg?itok=sUy3Njuk",
      year: "2025",
      info: "Eine Hymne an die Liebe und das Leben",
      detailPath: "/album/meine-sonne",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Digital",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-10/7d31cbd3-c4d2-4cf8-b2fe-779a10ad7eac.jpeg?itok=x2S1gdJF",
      year: "2025",
      info: "Moderne Klänge treffen auf authentische Texte",
      detailPath: "/album/digital",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="discografie" className="container mx-auto px-4 py-32">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass-card rounded-full">
              <Music2 className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Neueste Veröffentlichungen</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aktuelle Musik
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie die neuesten Songs von Steven Petersen und hören Sie direkt auf Ihrer Lieblingsplattform
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
            {latestReleases.map((album, index) => (
              <div 
                key={album.title} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AlbumCard {...album} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="/discografie"
              className="inline-flex items-center gap-2 px-8 py-4 glass-card font-semibold rounded-full border-2 border-primary/50 hover:border-primary hover:shadow-glow transition-all duration-300"
            >
              Alle Veröffentlichungen ansehen
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
