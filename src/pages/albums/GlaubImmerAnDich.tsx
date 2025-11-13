import { AlbumDetail } from "@/components/AlbumDetail";

export default function GlaubImmerAnDich() {
  return (
    <AlbumDetail
      title="Glaub' immer an dich"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-05/344229468_568524555269160_8298523082615678619_n.jpg"
      year="Mai 2023"
      spotifyEmbedId="4jLfURnHCqVXhWaV09jj4G"
      description={`"Glaub' immer an dich" ist ein motivierender Song über Selbstvertrauen und innere Stärke. Steven Petersen erinnert mit kraftvollen Worten daran, dass jeder Mensch die Fähigkeit hat, seine Träume zu verwirklichen.

Mit einem aufbauenden Beat und inspirierenden Texten ist dieser Song perfekt für alle Momente, in denen man einen Motivationsschub braucht. "Glaub' immer an dich" ist eine musikalische Umarmung für alle, die an sich zweifeln.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
