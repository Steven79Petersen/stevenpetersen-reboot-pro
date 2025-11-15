import { AlbumDetail } from "@/components/AlbumDetail";

export default function WillkommenAufDerErde() {
  return (
    <AlbumDetail
      title="Willkommen auf der Erde"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-02/willkommen.jpg"
      year="Februar 2025"
      description={`Mit "Willkommen auf der Erde" präsentiert Steven Petersen seine neueste Single für 2025. Der Song verbindet emotionale Tiefe mit authentischem Sound und reflektiert über das Ankommen im Leben und die Wertschätzung des gegenwärtigen Moments.

Steven schafft es mit diesem Lied, komplexe Gefühle in eingängige Melodien zu verpacken und lädt seine Zuhörer ein, das Leben mit all seinen Facetten willkommen zu heißen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
