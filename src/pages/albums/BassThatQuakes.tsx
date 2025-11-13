import { AlbumDetail } from "@/components/AlbumDetail";

export default function BassThatQuakes() {
  return (
    <AlbumDetail
      title="Bass that quakes"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven%20-%20Bass.jpg"
      year="August 2024"
      spotifyEmbedId="4jLfURnHCqVXhWaV09jj4G"
      description={`"Bass that quakes" ist ein energiegeladener Dance-Track, der mit kraftvollen Basslines und treibenden Beats überzeugt. Steven Petersen zeigt mit diesem Song seine Vielseitigkeit und beweist, dass er auch elektronische Tanzmusik perfekt beherrscht.

Der Song ist perfekt für die Tanzfläche und bringt mit seinem erdenden Bass und den hypnotischen Rhythmen jede Party in Schwung. "Bass that quakes" ist ein Statement für alle Liebhaber elektronischer Musik.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
