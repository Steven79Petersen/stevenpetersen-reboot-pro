import { AlbumDetail } from "@/components/AlbumDetail";

export default function DerGoldfischOscar() {
  return (
    <AlbumDetail
      title="Der Goldfisch Oscar"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/C41FD5E9-4846-4C5E-93CC-1FB036CF724B.jpeg"
      year="2021"
      spotifyEmbedId="2kAa9YbTCdW2U90p6KjpkM"
      description={`"Der Goldfisch Oscar" ist ein liebenswerter Song über einen kleinen Goldfisch namens Oscar. Mit humorvollen Texten und einer fröhlichen Melodie erzählt Steven die Geschichte dieses besonderen Haustiers.

Der Song zeigt Stevens Fähigkeit, auch über alltägliche und scheinbar banale Themen unterhaltsame und charmante Musik zu schaffen. "Der Goldfisch Oscar" ist perfekt für gute Laune und bringt jeden zum Lächeln.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/2kAa9YbTCdW2U90p6KjpkM",
        apple: "https://music.apple.com/de/album/der-goldfisch-oscar-single/1580876966",
        amazon: "https://music.amazon.de/albums/B09B3JQKZG"
      }}
    />
  );
}
