import { AlbumDetail } from "@/components/AlbumDetail";

export default function WhatsUp() {
  return (
    <AlbumDetail
      title="What's up"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/whatsup-web.jpg"
      year="November 2024"
      spotifyEmbedId="21N6AYXqLFfaUyWqyigqr0"
      description={`Steven Petersen präsentiert seine neue Single "What's up", einen modernen Song über die Tücken und Missverständnisse der digitalen Kommunikation. In einer Zeit, in der ein einzelner Satz aus dem Zusammenhang gerissen werden kann, beleuchtet Steven humorvoll, wie schnell ein Missverständnis entstehen kann.

Der Song erzählt von einer ganz normalen Situation: Eine Nachricht wird verschickt, doch plötzlich entsteht ein Streit – nur wegen eines Satzes, der falsch verstanden wurde. "What's up" fängt diese alltägliche Herausforderung perfekt ein und lädt zum Schmunzeln ein.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/21N6AYXqLFfaUyWqyigqr0",
        apple: "https://music.apple.com/de/album/whats-up-single/1772961113",
        amazon: "https://music.amazon.de/albums/B0DNYBVD7L"
      }}
    />
  );
}
