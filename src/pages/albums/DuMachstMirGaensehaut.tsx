import { AlbumDetail } from "@/components/AlbumDetail";

export default function DuMachstMirGaensehaut() {
  return (
    <AlbumDetail
      title="Du machst mir Gänsehaut"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/Steven%20-%20G%C3%A4nsehaut.jpg"
      year="Februar 2023"
      spotifyEmbedId="4jLfURnHCqVXhWaV09jj4G"
      description={`"Du machst mir Gänsehaut" ist ein romantischer Song über die aufregenden Gefühle der Verliebtheit. Steven Petersen beschreibt mit poetischen Worten, wie ein Mensch einen derart berühren kann, dass man regelrecht Gänsehaut bekommt.

Mit einer gefühlvollen Melodie und leidenschaftlichen Texten fängt Steven die Magie des Verliebtseins ein. "Du machst mir Gänsehaut" ist perfekt für verliebte Paare und alle, die an die große Liebe glauben.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
