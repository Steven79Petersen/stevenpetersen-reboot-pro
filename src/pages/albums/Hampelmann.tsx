import { AlbumDetail } from "@/components/AlbumDetail";

export default function Hampelmann() {
  return (
    <AlbumDetail
      title="Hampelmann"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/hampelmann.jpg"
      year="2023"
      spotifyEmbedId="5FOKyRI64xH2502x1aCZrj"
      description={`"Hampelmann" ist ein fröhlicher und humorvoller Song, der mit einem Augenzwinkern die Leichtigkeit des Lebens feiert. Steven Petersen zeigt mit diesem Lied seine verspielte Seite und lädt zum Mitmachen und Tanzen ein.

Mit einem eingängigen Refrain und verspielten Melodien ist "Hampelmann" perfekt für gute Laune und bringt jeden zum Lächeln. Der Song erinnert daran, dass man sich selbst nicht immer zu ernst nehmen sollte.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/5FOKyRI64xH2502x1aCZrj",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
