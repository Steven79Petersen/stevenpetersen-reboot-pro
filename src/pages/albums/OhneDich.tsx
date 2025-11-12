import { AlbumDetail } from "@/components/AlbumDetail";

export default function OhneDich() {
  return (
    <AlbumDetail
      title="Ohne Dich"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-09/OhneDich.jpg"
      year="September 2024"
      spotifyEmbedId="0rDQW01wXfQSrjZ6IgjUFv"
      description={`"Ohne Dich" ist eine gefühlvolle Ballade von Steven Petersen, die von der Sehnsucht nach einem geliebten Menschen erzählt. Mit emotionalen Texten und einer berührenden Melodie schafft Steven eine intime Atmosphäre, die direkt ins Herz geht.

Der Song handelt von den Momenten, in denen man jemanden so sehr vermisst, dass die Welt ohne ihn grau und leer erscheint. "Ohne Dich" ist ein ehrliches Liebesgeständnis und zeigt Stevens emotionale Seite als Künstler.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/0rDQW01wXfQSrjZ6IgjUFv",
        apple: "https://music.apple.com/de/album/ohne-dich-single/1767110558",
        amazon: "https://music.amazon.de/albums/B0DHSXKRJC"
      }}
    />
  );
}
