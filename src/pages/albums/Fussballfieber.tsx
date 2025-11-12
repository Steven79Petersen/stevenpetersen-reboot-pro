import { AlbumDetail } from "@/components/AlbumDetail";

export default function Fussballfieber() {
  return (
    <AlbumDetail
      title="Fußballfieber"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-03/CoverSVF-FF.jpg"
      year="2024"
      spotifyEmbedId="4Zh23XiXAz9JiATXhAl1qg"
      description={`"Fußballfieber" ist die ultimative Jugend-Fußballhymne von SV Fighter feat. Steven Petersen. Der Song feiert die Leidenschaft für den Fußball und die Begeisterung junger Spieler für ihren Sport.

Mit einem energiegeladenen Beat und motivierenden Texten ist "Fußballfieber" perfekt für jede Sportveranstaltung, Trainingseinheit oder als Motivationslied für junge Fußballteams.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/4Zh23XiXAz9JiATXhAl1qg",
        apple: "https://music.apple.com/de/album/fu%C3%9Fballfieber-fu%C3%9Fball-jugend-hymne-single/1736085395",
        amazon: "https://music.amazon.de/albums/B0CXLWZJ4H"
      }}
    />
  );
}
