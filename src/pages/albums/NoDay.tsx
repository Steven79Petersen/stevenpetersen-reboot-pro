import { AlbumDetail } from "@/components/AlbumDetail";

export default function NoDay() {
  return (
    <AlbumDetail
      title="noDay"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven%20Petersen%20-%20noDay.jpg"
      year="August 2024"
      spotifyEmbedId="5LLqSQ0v5LzRsmL7HRrQ3X"
      description={`Steven Petersen präsentiert stolz seine neueste Single "noDay", die erste rein englischsprachige Nummer des Künstlers. In "noDay" beschreibt Steven einen dieser Tage, an denen man besser im Bett geblieben wäre – Tage, die jeder kennt und niemand mag. Der Text bringt diese Stimmung auf den Punkt und wird von einer modernen musikalischen Begleitung untermalt.

Mit "noDay" zeigt Steven Petersen erneut seine Vielseitigkeit und beweist, dass man Menschen nicht in Schubladen stecken sollte. Er bewegt sich frei zwischen den Genres und schafft es, immer wieder neue Facetten seiner Musik zu präsentieren.

Erleben Sie einen neuen musikalischen Ansatz von Steven Petersen und lassen Sie sich von "noDay" mitreißen!`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/5LLqSQ0v5LzRsmL7HRrQ3X",
        apple: "https://music.apple.com/de/album/noday-single/1760681267",
        amazon: "https://music.amazon.de/albums/B0DCCX7DG1"
      }}
    />
  );
}
