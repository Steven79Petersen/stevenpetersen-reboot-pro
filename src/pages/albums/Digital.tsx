import { AlbumDetail } from "@/components/AlbumDetail";

export default function Digital() {
  return (
    <AlbumDetail
      title="Digital"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-10/7d31cbd3-c4d2-4cf8-b2fe-779a10ad7eac.jpeg"
      year="Oktober 2025"
      spotifyEmbedId="4jLfURnHCqVXhWaV09jj4G"
      description={`Mit "Digital" wagt sich Steven Petersen in moderne Sound-Gefilde und reflektiert über das Leben im digitalen Zeitalter. Der Song verbindet elektronische Elemente mit authentischen Texten und schafft eine Brücke zwischen Tradition und Moderne.

"Digital" thematisiert die Herausforderungen und Möglichkeiten unserer vernetzten Welt und lädt zum Nachdenken darüber ein, wie wir Technologie nutzen und gleichzeitig echte menschliche Verbindungen bewahren können.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
