import { AlbumDetail } from "@/components/AlbumDetail";

export default function HerzenBrennen() {
  return (
    <AlbumDetail
      title="Herzen brennen"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fhHerzen.jpg"
      year="2023"
      spotifyEmbedId="0vCVxqd8OT9Wj0FVbVOlQX"
      description={`"Herzen brennen" ist ein leidenschaftlicher Song über die intensive Liebe und die Gefühle, die zwei Menschen füreinander empfinden. Steven Petersen beschreibt mit emotionalen Worten, wie die Herzen zweier Liebender in Flammen stehen.

Mit einer romantischen Melodie und gefühlvollen Texten ist "Herzen brennen" der perfekte Song für Verliebte und alle, die an die große Liebe glauben.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/0vCVxqd8OT9Wj0FVbVOlQX",
        apple: "https://music.apple.com/de/album/herzen-brennen-single/1671027068",
        amazon: "https://music.amazon.de/albums/B0BYP3FHZG"
      }}
    />
  );
}
