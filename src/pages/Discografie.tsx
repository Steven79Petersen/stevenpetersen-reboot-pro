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
      detailPath: "/album/digital",
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
      detailPath: "/album/happy-birthday",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/7rl3DKVmJdCzYYxaBG4dIl",
        apple: "https://music.apple.com/de/album/happy-birthday-single/1772368788",
        amazon: "https://music.amazon.de/albums/B0DN8WBVK1"
      }
    },
    {
      title: "Fastfood",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/fastfood%20%281%29.jpg?itok=xeXlNebh",
      year: "2024",
      detailPath: "/album/fastfood",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/3TJYCEhgvZm1l1L0c0zGEG",
        apple: "https://music.apple.com/de/album/fastfood-single/1773843726",
        amazon: "https://music.amazon.de/albums/B0DPFT82H9"
      }
    },
    {
      title: "What's up",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/whatsup-web.jpg?itok=KAVd6eL2",
      year: "2024",
      detailPath: "/album/whats-up",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/21N6AYXqLFfaUyWqyigqr0",
        apple: "https://music.apple.com/de/album/whats-up-single/1772961113",
        amazon: "https://music.amazon.de/albums/B0DNYBVD7L"
      }
    },
    {
      title: "Ohne Dich",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-09/OhneDich.jpg?itok=-e4blNmy",
      year: "2024",
      detailPath: "/album/ohne-dich",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/0rDQW01wXfQSrjZ6IgjUFv",
        apple: "https://music.apple.com/de/album/ohne-dich-single/1767110558",
        amazon: "https://music.amazon.de/albums/B0DHSXKRJC"
      }
    },
    {
      title: "Geburtstag",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Geburtstag.jpg?itok=o0e9Hvhv",
      year: "2024",
      detailPath: "/album/geburtstag",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/1Xs8pfdnI4ht68bSpfTHDh",
        apple: "https://music.apple.com/de/album/geburtstag-single/1759877690",
        amazon: "https://music.amazon.de/albums/B0DBRMS7MS"
      }
    },
    {
      title: "Bass that quakes",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven%20-%20Bass.jpg?itok=NLW0IhWs",
      year: "2024",
      detailPath: "/album/bass-that-quakes",
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
      detailPath: "/album/noday",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/5LLqSQ0v5LzRsmL7HRrQ3X",
        apple: "https://music.apple.com/de/album/noday-single/1760681267",
        amazon: "https://music.amazon.de/albums/B0DCCX7DG1"
      }
    },
    {
      title: "I wish you this day",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Tag.jpg?itok=ogl2n4MV",
      year: "2024",
      detailPath: "/album/i-wish-you-this-day",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/4fMHIEbSUl4LYdHcj3z2jE",
        apple: "https://music.apple.com/de/album/i-wish-you-this-day-single/1760966813",
        amazon: "https://music.amazon.de/albums/B0DD1K8B6N"
      }
    },
    {
      title: "Urlaub zu hause",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/FH-urlaubzuhause.jpg?itok=yuIQk8I0",
      year: "2024",
      detailPath: "/album/urlaub-zu-hause",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "The future is now",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/Jumping2.jpg?itok=t5G-dvVE",
      year: "2024",
      detailPath: "/album/the-future-is-now",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/7fIw9nYrn34GgqPnlL1aUC",
        apple: "https://music.apple.com/de/album/the-future-is-now-single/1754236879",
        amazon: "https://music.amazon.de/albums/B0D88X56ZB"
      }
    },
    {
      title: "Fußballfieber",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-03/CoverSVF-FF.jpg?itok=nMEjKGtm",
      year: "2024",
      detailPath: "/album/fussballfieber",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/4Zh23XiXAz9JiATXhAl1qg",
        apple: "https://music.apple.com/de/album/fu%C3%9Fballfieber-fu%C3%9Fball-jugend-hymne-single/1736085395",
        amazon: "https://music.amazon.de/albums/B0CXLWZJ4H"
      }
    },
    {
      title: "Lass mich dein Held sein",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-10/tksp-Held-Cover.jpeg?itok=pIMJtWNH",
      year: "2023",
      detailPath: "/album/lass-mich-dein-held-sein",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Glaub' immer an dich",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-05/344229468_568524555269160_8298523082615678619_n.jpg?itok=cZF1KGXa",
      year: "2023",
      detailPath: "/album/glaub-immer-an-dich",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Straße der zerbrochenen Träume",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/zerbrochenen_0.jpg?itok=JqWNCeD3",
      year: "2023",
      detailPath: "/album/strasse-der-zerbrochenen-traeume",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/5vB5Ng8tWbW7Pjr7OVkrMl",
        apple: "https://music.apple.com/de/album/stra%C3%9Fe-der-zerbrochenen-tr%C3%A4ume-single/1670911881",
        amazon: "https://music.amazon.de/albums/B0BYM4TNNZ"
      }
    },
    {
      title: "Für Dich",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fuerdich.jpg?itok=AukJYj86",
      year: "2023",
      detailPath: "/album/fuer-dich",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Wieso gerade ich?",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/rc-album.jpg?itok=Cq41SyfD",
      year: "2023",
      detailPath: "/album/wieso-gerade-ich",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Ein fast perfektes Jahr",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fastperfekt.jpg?itok=L9QapJja",
      year: "2023",
      detailPath: "/album/ein-fast-perfektes-jahr",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/2OG6J18wl5v8rL6QPZkW5S",
        apple: "https://music.apple.com/de/album/ein-fast-perfektes-jahr-single/1671026898",
        amazon: "https://music.amazon.de/albums/B0BYP3D5YX"
      }
    },
    {
      title: "Geh mir nicht durchs Haar",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/steven-GehMirNichtDurchsHaar.jpg?itok=x84fR8TC",
      year: "2023",
      detailPath: "/album/geh-mir-nicht-durchs-haar",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/6hvemLG5AzY5xgN0Y2NLHZ",
        apple: "https://music.apple.com/de/album/geh-mir-nicht-durchs-haar-single/1668913195",
        amazon: "https://music.amazon.de/albums/B0BWZZ7Q9X"
      }
    },
    {
      title: "Du machst mir Gänsehaut",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/Steven%20-%20G%C3%A4nsehaut.jpg?itok=UACR9kU1",
      year: "2023",
      detailPath: "/album/du-machst-mir-gaensehaut",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Hampelmann",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/hampelmann.jpg?itok=z_ZztzmM",
      year: "2023",
      detailPath: "/album/hampelmann",
      streamingLinks: {
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }
    },
    {
      title: "Manchmal ist das Leben...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-01/98F802A2-C83D-4C7F-B172-B80FB1F222ED.jpeg?itok=2-TIjUQI",
      year: "2023",
      detailPath: "/album/manchmal-ist-das-leben",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/0qzPIJIxoUbwxHJAo7y8Wg",
        apple: "https://music.apple.com/de/album/manchmal-ist-das-leben-single/1662903699",
        amazon: "https://music.amazon.de/albums/B0BS2VD9YR"
      }
    },
    {
      title: "Eine Nacht...",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-01/einenachtjg.jpg?itok=Y9aXiXFv",
      year: "2023",
      detailPath: "/album/eine-nacht",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/3q3bG1m4jYZEQlCHgmJVfr",
        apple: "https://music.apple.com/de/album/ich-hab-nur-eine-nacht-nicht-nachgedacht-single/1667372341",
        amazon: "https://music.amazon.de/albums/B0BTXW6Q5V"
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
      detailPath: "/album/gluecksgefuehl",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/0axxPjmyy17dNuKPJUHKNc",
        apple: "https://music.apple.com/de/album/gl%C3%BCcksgef%C3%BChl-single/1639091652",
        amazon: "https://music.amazon.de/albums/B0B8N3LPVZ"
      }
    },
    {
      title: "Lebenskraft",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/Kraft.jpg?itok=2j-u1dy7",
      year: "2022",
      detailPath: "/album/lebenskraft",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/2Z9zqGVwWwBqAz3Wz6n0YL",
        apple: "https://music.apple.com/de/album/lebenskraft-single/1642085542",
        amazon: "https://music.amazon.de/albums/B0BCKVLQGJ"
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
      detailPath: "/album/discokoenigin",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/1F5t2tNhKqkn8GXkC8Tp5D",
        apple: "https://music.apple.com/de/album/discok%C3%B6nigin-single/1641344896",
        amazon: "https://music.amazon.de/albums/B0BBY8SN92"
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
      detailPath: "/album/der-goldfisch-oscar",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/2kAa9YbTCdW2U90p6KjpkM",
        apple: "https://music.apple.com/de/album/der-goldfisch-oscar-single/1580876966",
        amazon: "https://music.amazon.de/albums/B09B3JQKZG"
      }
    },
    {
      title: "Die wilde Erna",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/AEE36F96-7FD1-43C1-9FF1-AE64C924EE56.jpeg?itok=w49_twNe",
      year: "2021",
      detailPath: "/album/die-wilde-erna",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/3bZf5PnzWRxLMz3cLdYNdZ",
        apple: "https://music.apple.com/de/album/die-wilde-erna-single/1580861836",
        amazon: "https://music.amazon.de/albums/B09B386KQQ"
      }
    },
    {
      title: "Tonight i'll be with you",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/98BD7ECC-FC1E-4C7B-A779-1C758CC3DCDF.jpeg?itok=9zuaPwjp",
      year: "2021",
      detailPath: "/album/tonight-ill-be-with-you",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/1t7WeLKIyhYGO3AjLXY5HL",
        apple: "https://music.apple.com/de/album/tonight-ill-be-with-you-single/1580900677",
        amazon: "https://music.amazon.de/albums/B09B4D6V7N"
      }
    },
    {
      title: "Herzen brennen",
      coverUrl: "https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fhHerzen.jpg?itok=4bpzBS9O",
      year: "2023",
      detailPath: "/album/herzen-brennen",
      streamingLinks: {
        spotify: "https://open.spotify.com/intl-de/track/0vCVxqd8OT9Wj0FVbVOlQX",
        apple: "https://music.apple.com/de/album/herzen-brennen-single/1671027068",
        amazon: "https://music.amazon.de/albums/B0BYP3FHZG"
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
