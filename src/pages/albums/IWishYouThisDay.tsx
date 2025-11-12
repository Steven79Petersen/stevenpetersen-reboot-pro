import { AlbumDetail } from "@/components/AlbumDetail";

export default function IWishYouThisDay() {
  return (
    <AlbumDetail
      title="I wish you this day"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-08/Steven-Tag.jpg"
      year="August 2024"
      spotifyEmbedId="4fMHIEbSUl4LYdHcj3z2jE"
      description={`"I wish you this day" ist ein gefühlvoller englischsprachiger Song von Steven Petersen, der die Wertschätzung für den gegenwärtigen Moment zelebriert. Der Song erinnert daran, jeden Tag zu schätzen und das Beste aus jeder Situation zu machen.

Mit einer modernen Produktion und eingängigen Melodien schafft Steven eine positive Atmosphäre, die zum Nachdenken anregt und gleichzeitig Freude bereitet.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/4fMHIEbSUl4LYdHcj3z2jE",
        apple: "https://music.apple.com/de/album/i-wish-you-this-day-single/1760966813",
        amazon: "https://music.amazon.de/albums/B0DD1K8B6N"
      }}
    />
  );
}
