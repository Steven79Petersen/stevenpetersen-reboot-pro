import { AlbumDetail } from "@/components/AlbumDetail";

export default function Fastfood() {
  return (
    <AlbumDetail
      title="Fastfood"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2024-11/fastfood%20%281%29.jpg"
      year="November 2024"
      spotifyEmbedId="3TJYCEhgvZm1l1L0c0zGEG"
      description={`Steven Petersen bringt Ende November eine neue Single heraus, die sich rund um zwei absolute Favoriten vieler Menschen dreht: Zocken und den beliebten Lieferservice. Der Titel des Songs lautet passenderweise "Fastfood".

In "Fastfood" vereint Steven Petersen seine Leidenschaft für das Zocken mit der Bequemlichkeit und dem Genuss von Fastfood. Ob er nun selbst beim Lieferservice bestellt oder bei einer der vielen Burgerketten vorbeischaut, die Thematik ist so präsent und allgegenwärtig, dass es höchste Zeit war, diesem Thema einen Song zu widmen.

Mit einem fröhlichen, technoiden Sound lädt "Fastfood" sowohl zum Tanzen als auch zum Feiern ein – perfekt für eine Party oder eine entspannte Zocker-Session mit Freunden. Der Song ist nicht zu kritisch, sondern soll in erster Linie Spaß machen und die gute Laune unterstreichen, die mit dem Genuss von Fastfood einhergeht.`}
      additionalInfo={`**Genre:** Techno
**Produzent:** Steven Petersen
**Verfügbarkeit:** Digital auf allen großen Musikplattformen

Der Song bringt das Lebensgefühl vieler Menschen auf den Punkt und verbindet die Freude am Essen mit dem Spaß am Zocken. Ein Ohrwurm, der auf keiner Playlist fehlen darf!`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/3TJYCEhgvZm1l1L0c0zGEG",
        apple: "https://music.apple.com/de/album/fastfood-single/1773843726",
        amazon: "https://music.amazon.de/albums/B0DPFT82H9"
      }}
    />
  );
}
