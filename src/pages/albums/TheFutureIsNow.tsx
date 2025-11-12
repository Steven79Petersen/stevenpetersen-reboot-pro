import { AlbumDetail } from "@/components/AlbumDetail";

export default function TheFutureIsNow() {
  return (
    <AlbumDetail
      title="The future is now"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/Jumping2.jpg"
      year="2024"
      spotifyEmbedId="7fIw9nYrn34GgqPnlL1aUC"
      description={`"The future is now" von DeeJay KI feat. Steven Petersen ist ein energiegeladener Dance-Track über das Leben im Hier und Jetzt. Der Song motiviert dazu, die Zukunft selbst in die Hand zu nehmen und keine Zeit zu verschwenden.

Mit einem treibenden Beat und motivierenden Texten ist "The future is now" perfekt für die Tanzfläche und als Motivationssong für alle, die ihre Träume verwirklichen wollen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/7fIw9nYrn34GgqPnlL1aUC",
        apple: "https://music.apple.com/de/album/the-future-is-now-single/1754236879",
        amazon: "https://music.amazon.de/albums/B0D88X56ZB"
      }}
    />
  );
}
