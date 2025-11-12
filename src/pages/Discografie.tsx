import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AlbumCard } from "@/components/AlbumCard";
import { Music2 } from "lucide-react";

const Discografie = () => {
  const albums = [
    {
      title: "Willkommen auf der Erde",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-02/willkommen.jpg?itok=S_xqusev",
      year: "2025",
      info: "Die neueste Single mit emotionaler Tiefe",
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
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Happy Birthday",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/birthday.jpg?itok=v3jSeSdw",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Fastfood",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/fastfood%20%281%29.jpg?itok=xeXlNebh",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Ohne Dich",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-09/OhneDich.jpg?itok=-e4blNmy",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Geburtstag",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Geburtstag.jpg?itok=o0e9Hvhv",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "noDay",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven%20Petersen%20-%20noDay.jpg?itok=9UphsqcZ",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "I Wish You This Day",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Tag.jpg?itok=ogl2n4MV",
      year: "2024",
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
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass-card rounded-full">
              <Music2 className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Komplette Sammlung</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Discografie
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alle Veröffentlichungen von Steven Petersen - Verfügbar auf Spotify, Apple Music und Amazon Music
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {albums.map((album, index) => (
              <div 
                key={album.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AlbumCard {...album} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Discografie;
