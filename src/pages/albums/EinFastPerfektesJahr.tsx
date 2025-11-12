import { AlbumDetail } from "@/components/AlbumDetail";

export default function EinFastPerfektesJahr() {
  return (
    <AlbumDetail
      title="Ein fast perfektes Jahr"
      coverUrl="https://www.stevenpetersen.de/sites/default/files/styles/cover_klein/public/2023-02/fastperfekt.jpg"
      year="2023"
      spotifyEmbedId="2OG6J18wl5v8rL6QPZkW5S"
      description={`"Ein fast perfektes Jahr" blickt zurück auf ein Jahr voller schöner Momente, kleiner Enttäuschungen und großer Hoffnungen. Steven Petersen erzählt von einem Jahr, das zwar nicht perfekt war, aber trotzdem viele wunderbare Erinnerungen hinterlassen hat.

Mit einer nachdenklichen Melodie und ehrlichen Texten lädt der Song zum Reflektieren ein und erinnert daran, dass das Leben trotz seiner Unvollkommenheit lebenswert ist.`}
      streamingLinks={{
        spotify: "https://open.spotify.com/intl-de/track/2OG6J18wl5v8rL6QPZkW5S",
        apple: "https://music.apple.com/de/album/ein-fast-perfektes-jahr-single/1671026898",
        amazon: "https://music.amazon.de/albums/B0BYP3D5YX"
      }}
    />
  );
}
