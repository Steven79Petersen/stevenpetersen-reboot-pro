import { AlbumDetail } from "@/components/AlbumDetail";

export default function HappyBirthday() {
  return (
    <AlbumDetail
      title="Happy Birthday"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/birthday.jpg"
      year="November 2024"
      spotifyEmbedId="7rl3DKVmJdCzYYxaBG4dIl"
      description={`Mit "Happy Birthday" präsentiert Steven Petersen einen fröhlichen Party-Song, der jeden Geburtstag zu einem unvergesslichen Fest macht. Der Song vereint eingängige Melodien mit einem modernen Beat und lädt zum Tanzen und Feiern ein.

"Happy Birthday" ist die perfekte musikalische Begleitung für jede Geburtstagsfeier – egal ob groß oder klein. Steven zeigt mit diesem Song seine Fähigkeit, auch festliche Anlässe musikalisch zu gestalten und dabei für gute Laune zu sorgen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/7rl3DKVmJdCzYYxaBG4dIl",
        apple: "https://music.apple.com/de/album/happy-birthday-single/1772368788",
        amazon: "https://music.amazon.de/albums/B0DN8WBVK1"
      }}
    />
  );
}
