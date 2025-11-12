import { AlbumDetail } from "@/components/AlbumDetail";

export default function TonightIllBeWithYou() {
  return (
    <AlbumDetail
      title="Tonight i'll be with you"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/98BD7ECC-FC1E-4C7B-A779-1C758CC3DCDF.jpeg"
      year="2021"
      spotifyEmbedId="1t7WeLKIyhYGO3AjLXY5HL"
      description={`"Tonight i'll be with you" ist ein romantischer englischsprachiger Song über die Vorfreude, den geliebten Menschen wiederzusehen. Steven Petersen fängt die Sehnsucht und das Glücksgefühl ein, das man empfindet, wenn man weiß, dass man bald wieder zusammen sein wird.

Mit einer sanften Melodie und gefühlvollen Texten ist dieser Song perfekt für romantische Momente und zeigt Stevens emotionale Seite als Künstler.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/1t7WeLKIyhYGO3AjLXY5HL",
        apple: "https://music.apple.com/de/album/tonight-ill-be-with-you-single/1580900677",
        amazon: "https://music.amazon.de/albums/B09B4D6V7N"
      }}
    />
  );
}
