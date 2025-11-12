import { AlbumDetail } from "@/components/AlbumDetail";

export default function DieWildeErna() {
  return (
    <AlbumDetail
      title="Die wilde Erna"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2021-08/AEE36F96-7FD1-43C1-9FF1-AE64C924EE56.jpeg"
      year="2021"
      spotifyEmbedId="3bZf5PnzWRxLMz3cLdYNdZ"
      description={`"Die wilde Erna" erzählt die Geschichte einer außergewöhnlichen Frau namens Erna, die nach ihren eigenen Regeln lebt und sich von niemandem etwas sagen lässt. Steven Petersen hat mit diesem Song eine lustige und charmante Charakterstudie geschaffen.

Mit humorvollen Texten und einer fröhlichen Melodie ist "Die wilde Erna" ein Lied, das zum Schmunzeln einlädt und zeigt, dass es okay ist, anders zu sein.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/3bZf5PnzWRxLMz3cLdYNdZ",
        apple: "https://music.apple.com/de/album/die-wilde-erna-single/1580861836",
        amazon: "https://music.amazon.de/albums/B09B386KQQ"
      }}
    />
  );
}
