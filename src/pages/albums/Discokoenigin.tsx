import { AlbumDetail } from "@/components/AlbumDetail";

export default function Discokoenigin() {
  return (
    <AlbumDetail
      title="Discokönigin"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2022-08/disco.jpg"
      year="2022"
      spotifyEmbedId="1F5t2tNhKqkn8GXkC8Tp5D"
      description={`"Discokönigin" ist ein funky Partysong über eine Frau, die auf der Tanzfläche alle Blicke auf sich zieht. Sascha Valentino und Steven Petersen feiern mit diesem Song die Lebensfreude und das Selbstbewusstsein der Discokönigin.

Mit einem tanzbaren Beat und einem eingängigen Refrain ist "Discokönigin" der perfekte Song für jede Party und bringt garantiert jeden zum Tanzen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/1F5t2tNhKqkn8GXkC8Tp5D",
        apple: "https://music.apple.com/de/album/discok%C3%B6nigin-single/1641344896",
        amazon: "https://music.amazon.de/albums/B0BBY8SN92"
      }}
    />
  );
}
