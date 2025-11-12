import { AlbumDetail } from "@/components/AlbumDetail";

export default function Lebenskraft() {
  return (
    <AlbumDetail
      title="Lebenskraft"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/Kraft.jpg"
      year="2022"
      spotifyEmbedId="2Z9zqGVwWwBqAz3Wz6n0YL"
      description={`"Lebenskraft" ist ein kraftvoller Song über die innere Stärke, die uns durch schwere Zeiten trägt. Peter Sebastian und Steven Petersen haben gemeinsam einen Song geschaffen, der Mut macht und zum Durchhalten motiviert.

Mit einer starken Melodie und inspirierenden Texten ist "Lebenskraft" ein Lied für alle, die gerade eine schwierige Phase durchmachen und neue Energie brauchen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/2Z9zqGVwWwBqAz3Wz6n0YL",
        apple: "https://music.apple.com/de/album/lebenskraft-single/1642085542",
        amazon: "https://music.amazon.de/albums/B0BCKVLQGJ"
      }}
    />
  );
}
