import { AlbumDetail } from "@/components/AlbumDetail";

export default function MeineSonne() {
  return (
    <AlbumDetail
      title="Meine Sonne"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2025-03/Sonne.jpg"
      year="März 2025"
      description={`"Meine Sonne" ist eine gefühlvolle Liebeserklärung und Hymne an die Liebe und das Leben. Steven Petersen beschreibt mit poetischen Worten, wie ein besonderer Mensch das Leben zum Leuchten bringt und selbst die dunkelsten Tage erhellt.

Mit einer warmen Melodie und herzlichen Texten schafft Steven einen Song, der direkt ins Herz geht und die Kraft der Liebe feiert. "Meine Sonne" erinnert uns daran, wie wichtig es ist, die Menschen zu schätzen, die unser Leben erhellen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
