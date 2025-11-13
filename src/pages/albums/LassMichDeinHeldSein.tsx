import { AlbumDetail } from "@/components/AlbumDetail";

export default function LassMichDeinHeldSein() {
  return (
    <AlbumDetail
      title="Lass mich dein Held sein"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-10/tksp-Held-Cover.jpeg"
      year="Oktober 2023"
      spotifyEmbedId="4jLfURnHCqVXhWaV09jj4G"
      description={`"Lass mich dein Held sein" ist eine emotionale Liebeserklärung und das Versprechen, für einen geliebten Menschen da zu sein. Steven Petersen singt mit aufrichtigen Worten über den Wunsch, jemanden zu beschützen und zu unterstützen.

Mit einer gefühlvollen Melodie und ehrlichen Texten schafft Steven einen Song, der Stärke und Verletzlichkeit gleichermaßen zeigt. "Lass mich dein Held sein" ist perfekt für alle, die bereit sind, alles für ihre Liebsten zu tun.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
