import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AlbumCard } from "@/components/AlbumCard";

const Discografie = () => {
  const albums = [
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
    {
      title: "Happy Birthday",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/birthday.jpg?itok=v3jSeSdw",
      year: "2024"
    },
    {
      title: "Fastfood",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/fastfood%20%281%29.jpg?itok=xeXlNebh",
      year: "2024"
    },
    {
      title: "Ohne Dich",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-09/OhneDich.jpg?itok=-e4blNmy",
      year: "2024"
    },
    {
      title: "Geburtstag",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Geburtstag.jpg?itok=o0e9Hvhv",
      year: "2024"
    },
    {
      title: "noDay",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven%20Petersen%20-%20noDay.jpg?itok=9UphsqcZ",
      year: "2024"
    },
    {
      title: "I Wish You This Day",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Tag.jpg?itok=ogl2n4MV",
      year: "2024"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-center">
            Discografie
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Alle Veröffentlichungen von Steven Petersen
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {albums.map((album) => (
              <AlbumCard
                key={album.title}
                title={album.title}
                coverUrl={album.coverUrl}
                year={album.year}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Discografie;
