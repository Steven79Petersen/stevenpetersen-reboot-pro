import { AlbumDetail } from "@/components/AlbumDetail";

export default function UrlaubZuHause() {
  return (
    <AlbumDetail
      title="Urlaub zu hause"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-07/FH-urlaubzuhause.jpg"
      year="Juli 2024"
      spotifyEmbedId="4jLfURnHCqVXhWaV09jj4G"
      description={`"Urlaub zu hause" ist Stevens entspannter Sommersong, der daran erinnert, dass man nicht weit reisen muss, um schöne Momente zu erleben. Mit einer lockeren Melodie und positiven Texten feiert der Song die Freude am einfachen Leben.

Ob auf dem Balkon, im Garten oder einfach auf der Couch – "Urlaub zu hause" bringt Urlaubsstimmung in die eigenen vier Wände und zeigt, dass Entspannung überall möglich ist.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
