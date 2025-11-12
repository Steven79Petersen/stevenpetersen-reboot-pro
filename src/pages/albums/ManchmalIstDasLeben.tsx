import { AlbumDetail } from "@/components/AlbumDetail";

export default function ManchmalIstDasLeben() {
  return (
    <AlbumDetail
      title="Manchmal ist das Leben..."
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-01/98F802A2-C83D-4C7F-B172-B80FB1F222ED.jpeg"
      year="2023"
      spotifyEmbedId="0qzPIJIxoUbwxHJAo7y8Wg"
      description={`"Manchmal ist das Leben..." ist ein ehrlicher und tiefgründiger Song über die Höhen und Tiefen des Lebens. Steven Petersen singt darüber, dass das Leben manchmal schwer sein kann, aber es sich trotzdem lohnt, weiterzumachen.

Mit emotionalen Texten und einer berührenden Melodie trifft Steven den Nerv vieler Menschen, die ähnliche Erfahrungen gemacht haben. Der Song ist eine musikalische Umarmung für alle, die gerade schwere Zeiten durchmachen.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/0qzPIJIxoUbwxHJAo7y8Wg",
        apple: "https://music.apple.com/de/album/manchmal-ist-das-leben-single/1662903699",
        amazon: "https://music.amazon.de/albums/B0BS2VD9YR"
      }}
    />
  );
}
