import { AlbumDetail } from "@/components/AlbumDetail";

export default function WiesoGeradeIch() {
  return (
    <AlbumDetail
      title="Wieso gerade ich?"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/rc-album.jpg"
      year="Februar 2023"
      spotifyEmbedId="4jLfURnHCqVXhWaV09jj4G"
      description={`"Wieso gerade ich?" ist ein nachdenklicher Song über die Frage nach dem Warum in schwierigen Situationen. Steven Petersen singt über die Herausforderungen des Lebens und die Momente, in denen man sich fragt, warum ausgerechnet einem selbst etwas Schweres widerfährt.

Mit emotionalen Texten und einer berührenden Melodie bietet dieser Song Trost und zeigt, dass man mit seinen Gefühlen nicht allein ist. "Wieso gerade ich?" ist ehrlich und authentisch.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/artist/4jLfURnHCqVXhWaV09jj4G",
        apple: "https://music.apple.com/de/artist/steven-petersen/1609906898",
        amazon: "https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
      }}
    />
  );
}
