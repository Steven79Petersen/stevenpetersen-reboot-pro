import { AlbumDetail } from "@/components/AlbumDetail";

export default function Geburtstag() {
  return (
    <AlbumDetail
      title="Geburtstag"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Geburtstag.jpg"
      year="August 2024"
      spotifyEmbedId="1Xs8pfdnI4ht68bSpfTHDh"
      description={`"Geburtstag" ist Stevens deutscher Geburtstagssong, der mit herzlichen Texten und einer fröhlichen Melodie überzeugt. Der Song feiert das Leben und die besonderen Momente, die einen Geburtstag so einzigartig machen.

Mit authentischen deutschen Texten und einem eingängigen Refrain schafft Steven einen Song, der auf keiner Geburtstagsfeier fehlen sollte. "Geburtstag" ist mehr als nur ein Lied – es ist eine musikalische Umarmung für das Geburtstagskind.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/1Xs8pfdnI4ht68bSpfTHDh",
        apple: "https://music.apple.com/de/album/geburtstag-single/1759877690",
        amazon: "https://music.amazon.de/albums/B0DBRMS7MS"
      }}
    />
  );
}
