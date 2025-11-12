import { AlbumDetail } from "@/components/AlbumDetail";

export default function GehMirNichtDurchsHaar() {
  return (
    <AlbumDetail
      title="Geh mir nicht durchs Haar"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/steven-GehMirNichtDurchsHaar.jpg"
      year="2023"
      spotifyEmbedId="6hvemLG5AzY5xgN0Y2NLHZ"
      description={`"Geh mir nicht durchs Haar" ist ein humorvoller und gleichzeitig liebevoller Song über die kleinen Eigenheiten in Beziehungen. Steven Petersen erzählt mit einem Augenzwinkern von den Momenten, in denen der Partner genau weiß, wie er einen auf die Palme bringen kann.

Mit einem fröhlichen Beat und witzigen Texten bringt "Geh mir nicht durchs Haar" jedes Paar zum Schmunzeln, das sich in den beschriebenen Situationen wiedererkennt.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/6hvemLG5AzY5xgN0Y2NLHZ",
        apple: "https://music.apple.com/de/album/geh-mir-nicht-durchs-haar-single/1668913195",
        amazon: "https://music.amazon.de/albums/B0BWZZ7Q9X"
      }}
    />
  );
}
