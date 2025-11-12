import { AlbumDetail } from "@/components/AlbumDetail";

export default function StrasseDerZerbrochenenTraeume() {
  return (
    <AlbumDetail
      title="Straße der zerbrochenen Träume"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/zerbrochenen_0.jpg"
      year="2023"
      spotifyEmbedId="5vB5Ng8tWbW7Pjr7OVkrMl"
      description={`"Straße der zerbrochenen Träume" ist ein melancholischer Song über gescheiterte Hoffnungen und verlorene Träume. Steven Petersen erzählt in diesem emotionalen Stück von Menschen, die ihre Ziele aus den Augen verloren haben.

Mit einer berührenden Melodie und tiefgründigen Texten schafft Steven eine Atmosphäre, die zum Nachdenken anregt und Trost spendet für alle, die ähnliche Erfahrungen gemacht haben.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/5vB5Ng8tWbW7Pjr7OVkrMl",
        apple: "https://music.apple.com/de/album/stra%C3%9Fe-der-zerbrochenen-tr%C3%A4ume-single/1670911881",
        amazon: "https://music.amazon.de/albums/B0BYM4TNNZ"
      }}
    />
  );
}
