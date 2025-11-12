import { AlbumDetail } from "@/components/AlbumDetail";

export default function EineNacht() {
  return (
    <AlbumDetail
      title="Eine Nacht..."
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-01/einenachtjg.jpg"
      year="2023"
      spotifyEmbedId="3q3bG1m4jYZEQlCHgmJVfr"
      description={`"Ich hab nur eine Nacht nicht nachgedacht" erzählt die Geschichte einer impulsiven Entscheidung und deren Konsequenzen. Steven Petersen beschreibt mit einem Augenzwinkern, wie eine einzige Nacht ohne nachzudenken das ganze Leben durcheinanderbringen kann.

Mit einem eingängigen Refrain und humorvollen Texten ist dieser Song perfekt für alle, die auch schon mal eine spontane Entscheidung getroffen haben, die sie später bereut haben.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/3q3bG1m4jYZEQlCHgmJVfr",
        apple: "https://music.apple.com/de/album/ich-hab-nur-eine-nacht-nicht-nachgedacht-single/1667372341",
        amazon: "https://music.amazon.de/albums/B0BTXW6Q5V"
      }}
    />
  );
}
