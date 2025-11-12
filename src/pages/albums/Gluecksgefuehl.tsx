import { AlbumDetail } from "@/components/AlbumDetail";

export default function Gluecksgefuehl() {
  return (
    <AlbumDetail
      title="Glücksgefühl"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/Cover_Gl%C3%BCcksgef%C3%BChl-300x300.jpg"
      year="2022"
      spotifyEmbedId="0axxPjmyy17dNuKPJUHKNc"
      description={`"Glücksgefühl" ist ein positiver und lebensbejahen Song über das Glück und die schönen Momente im Leben. Steven Petersen feiert mit diesem Song die Freude am Leben und all die kleinen Dinge, die uns glücklich machen.

Mit einer fröhlichen Melodie und optimistischen Texten ist "Glücksgefühl" der perfekte Song für alle, die das Leben in vollen Zügen genießen wollen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/0axxPjmyy17dNuKPJUHKNc",
        apple: "https://music.apple.com/de/album/gl%C3%BCcksgef%C3%BChl-single/1639091652",
        amazon: "https://music.amazon.de/albums/B0B8N3LPVZ"
      }}
    />
  );
}
