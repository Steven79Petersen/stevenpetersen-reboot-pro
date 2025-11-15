import { AlbumDetail } from "@/components/AlbumDetail";

export default function FuerDich() {
  return (
    <AlbumDetail
      title="Für Dich"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fuerdich.jpg"
      year="Februar 2023"
      description={`"Für Dich" ist eine herzliche Widmung an einen besonderen Menschen. Steven Petersen drückt mit diesem Song seine Gefühle aus und zeigt, wie wichtig es ist, den Menschen in unserem Leben zu sagen, wie sehr wir sie schätzen.

Mit einer sanften Melodie und ehrlichen Texten schafft Steven eine intime Atmosphäre. "Für Dich" ist perfekt für romantische Momente und als Geschenk an einen geliebten Menschen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
