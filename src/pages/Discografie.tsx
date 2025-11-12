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
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/87"
      }
    },
    {
      title: "Wochenende",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-03/Steven%20Petersen%20-%20Wochenende.jpg?itok=WX69bIzD",
      year: "2025",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/88"
      }
    },
    {
      title: "Meine Sonne",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-03/Sonne.jpg?itok=sUy3Njuk",
      year: "2025",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/89"
      }
    },
    {
      title: "Digital",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-10/7d31cbd3-c4d2-4cf8-b2fe-779a10ad7eac.jpeg?itok=x2S1gdJF",
      year: "2025",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/90"
      }
    },
    {
      title: "Happy Birthday",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/birthday.jpg?itok=v3jSeSdw",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/84"
      }
    },
    {
      title: "Fastfood",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/fastfood%20%281%29.jpg?itok=xeXlNebh",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/86"
      }
    },
    {
      title: "What's up",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/whatsup-web.jpg?itok=KAVd6eL2",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/85"
      }
    },
    {
      title: "Ohne Dich",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-09/OhneDich.jpg?itok=-e4blNmy",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/82"
      }
    },
    {
      title: "Geburtstag",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Geburtstag.jpg?itok=o0e9Hvhv",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/78"
      }
    },
    {
      title: "Bass that quakes",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven%20-%20Bass.jpg?itok=NLW0IhWs",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/81"
      }
    },
    {
      title: "noDay",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven%20Petersen%20-%20noDay.jpg?itok=9UphsqcZ",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/79"
      }
    },
    {
      title: "I wish you this day",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Tag.jpg?itok=ogl2n4MV",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/80"
      }
    },
    {
      title: "Urlaub zu hause",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/FH-urlaubzuhause.jpg?itok=yuIQk8I0",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/74"
      }
    },
    {
      title: "The future is now",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/Jumping2.jpg?itok=t5G-dvVE",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/73"
      }
    },
    {
      title: "Fußballfieber",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-03/CoverSVF-FF.jpg?itok=nMEjKGtm",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/69"
      }
    },
    {
      title: "Lass mich dein Held sein",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-10/tksp-Held-Cover.jpeg?itok=pIMJtWNH",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/68"
      }
    },
    {
      title: "Glaub' immer an dich",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-05/344229468_568524555269160_8298523082615678619_n.jpg?itok=cZF1KGXa",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/67"
      }
    },
    {
      title: "Straße der zerbrochenen Träume",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/zerbrochenen_0.jpg?itok=JqWNCeD3",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/50"
      }
    },
    {
      title: "Für Dich",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fuerdich.jpg?itok=AukJYj86",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/53"
      }
    },
    {
      title: "Wieso gerade ich?",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/rc-album.jpg?itok=Cq41SyfD",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/54"
      }
    },
    {
      title: "Ein fast perfektes Jahr",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fastperfekt.jpg?itok=L9QapJja",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/51"
      }
    },
    {
      title: "Geh mir nicht durchs Haar",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/steven-GehMirNichtDurchsHaar.jpg?itok=x84fR8TC",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/45"
      }
    },
    {
      title: "Du machst mir Gänsehaut",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/Steven%20-%20G%C3%A4nsehaut.jpg?itok=UACR9kU1",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/47"
      }
    },
    {
      title: "Hampelmann",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/hampelmann.jpg?itok=z_ZztzmM",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/24"
      }
    },
    {
      title: "Manchmal ist das Leben...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-01/98F802A2-C83D-4C7F-B172-B80FB1F222ED.jpeg?itok=2-TIjUQI",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/38"
      }
    },
    {
      title: "Eine Nacht...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-01/einenachtjg.jpg?itok=Y9aXiXFv",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/43"
      }
    },
    {
      title: "In meinem Bett...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-01/bett.jg_.jpg?itok=nnzFjVN3",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/44"
      }
    },
    {
      title: "Bunny Baby",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-01/bunnybaby.jpg?itok=1IiCQZF5",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/41"
      }
    },
    {
      title: "Leuchtender Stern",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/cenk1.jpg?itok=Z_qXYlzU",
      year: "2023",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/40"
      }
    },
    {
      title: "Glücksgefühl",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/Cover_Gl%C3%BCcksgef%C3%BChl-300x300.jpg?itok=W3kjC0st",
      year: "2022",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/23"
      }
    },
    {
      title: "Lebenskraft",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/Kraft.jpg?itok=2j-u1dy7",
      year: "2022",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/27"
      }
    },
    {
      title: "Ich habe mich total in dich...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/ich%20habe%20mich.jpg?itok=Ka7WTuTq",
      year: "2022",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/35"
      }
    },
    {
      title: "Discokönigin",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/disco.jpg?itok=l135oR1i",
      year: "2022",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/36"
      }
    },
    {
      title: "Beauty Queen",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/beautyqueen.jpg?itok=h3K_dxmh",
      year: "2022",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/31"
      }
    },
    {
      title: "Held der Welt",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/heldderwelt.jpg?itok=VIZFt0SI",
      year: "2022",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/34"
      }
    },
    {
      title: "So ist das Leben",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/matze.jpg?itok=YdhVWHdx",
      year: "2022",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/33"
      }
    },
    {
      title: "Der Goldfisch Oscar",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/C41FD5E9-4846-4C5E-93CC-1FB036CF724B.jpeg?itok=8d-AJM8u",
      year: "2021",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/10"
      }
    },
    {
      title: "Die wilde Erna",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/AEE36F96-7FD1-43C1-9FF1-AE64C924EE56.jpeg?itok=w49_twNe",
      year: "2021",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/7"
      }
    },
    {
      title: "Tonight i'll be with you",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/98BD7ECC-FC1E-4C7B-A779-1C758CC3DCDF.jpeg?itok=9zuaPwjp",
      year: "2021",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/4"
      }
    },
    {
      title: "Herzen brennen",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fhHerzen.jpg?itok=4bpzBS9O",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/3"
      }
    },
    {
      title: "Alibaba",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/alibaba.jpg?itok=LRLaiWb0",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/1"
      }
    },
    {
      title: "Kurz davor",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/kurzdavor.jpg?itok=OfixMOae",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/2"
      }
    },
    {
      title: "Im Falle eines Falles",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/imfalle.jpg?itok=r2bTgmS4",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/5"
      }
    },
    {
      title: "Ich werd nun gehen, my sweet...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/tennissen.jpg?itok=pua6EQJ2",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/29"
      }
    },
    {
      title: "All what you want",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/F74E21E7-29E8-45C7-9FAD-43EE7C603FEA.jpeg?itok=hIteVc0y",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/8"
      }
    },
    {
      title: "Hart am Limit",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/hartamlimit.jpg?itok=VipqbREV",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/26"
      }
    },
    {
      title: "Soft und Fresh",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/Steven%20-%20Softundfresh.jpg?itok=4vaZcOw7",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/70"
      }
    },
    {
      title: "Jumping Violin",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/jumping%20violine.jpg?itok=NOAWG_v7",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/72"
      }
    },
    {
      title: "Freundin",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/Steven%20-%20Freundin.jpg?itok=roVA7FVL",
      year: "2024",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/71"
      }
    },
    {
      title: "Ich hab einen Stern...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/stern2.jpg?itok=WCpwRdfO",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/46"
      }
    },
    {
      title: "Wann bist du bereit...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/wann%20bist%20du.jpg?itok=x07hXWlG",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/30"
      }
    },
    {
      title: "Sorry Baby",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/sorrybaby.jpg?itok=A3v69EAO",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/39"
      }
    },
    {
      title: "Regenbogen",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/F%20THOMAS.jpg?itok=Yt1cKgH2",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/22"
      }
    },
    {
      title: "Sommerfeeling",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/B86477DC-0470-48EC-9308-94A40010EBBE.jpeg?itok=7Xf2K4eM",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/12"
      }
    },
    {
      title: "The dark waves",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/laud.jpg?itok=paQ4ITsN",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/9"
      }
    },
    {
      title: "Meister 2010 & Germanen...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/tusmeister10.jpg?itok=6LL1WXIz",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen",
        preview: "https://www.stevenpetersen.de/index.php/node/25"
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {albums.map((album, index) => (
              <div 
                key={album.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.02}s` }}
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
