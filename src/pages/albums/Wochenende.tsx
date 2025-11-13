import { AlbumDetail } from "@/components/AlbumDetail";

export default function Wochenende() {
  return (
    <AlbumDetail
      title="Wochenende"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-03/Steven%20Petersen%20-%20Wochenende.jpg"
      year="März 2025"
      spotifyEmbedId="4jLfURnHCqVXhWaV09jj4G"
      description={`"Wochenende" ist Stevens Hymne an die schönsten Tage der Woche. Mit einem entspannten Sound und positiven Vibes feiert dieser Song die Freude am freien Wochenende und all die schönen Momente, die damit verbunden sind.

Perfekt für entspannte Momente, Grillpartys oder einfach zum Zurücklehnen und Genießen – "Wochenende" bringt gute Laune und Urlaubsfeeling ins Wohnzimmer.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
