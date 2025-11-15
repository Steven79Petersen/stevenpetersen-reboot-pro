import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AlbumDetailProps {
  title: string;
  coverUrl: string;
  year?: string;
  description: string;
  additionalInfo?: string;
  spotifyEmbedId?: string;
  streamingLinks?: {
    spotify?: string;
    apple?: string;
    amazon?: string;
  };
}

export const AlbumDetail = ({
  title,
  coverUrl,
  year,
  description,
  additionalInfo,
  spotifyEmbedId,
  streamingLinks,
}: AlbumDetailProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 hover:bg-primary/10"
          onClick={() => navigate('/discografie')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Discografie
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Cover Image */}
            <div className="space-y-6">
              <div className="aspect-square overflow-hidden rounded-lg border border-border/50 shadow-glow">
                <img
                  src={coverUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Streaming Links */}
              {streamingLinks && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Jetzt anhören bei</h3>
                  <div className="flex flex-col gap-2">
                    {streamingLinks.spotify && (
                      <a
                        href={streamingLinks.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border transition-colors bg-spotify/10 hover:bg-spotify/20 border-spotify/30 text-spotify font-medium"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Auf Spotify anhören
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    )}
                    
                    {streamingLinks.apple && (
                      <a
                        href={streamingLinks.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border transition-colors bg-foreground/5 hover:bg-foreground/10 border-foreground/20 font-medium"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        Auf Apple Music anhören
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    )}
                    
                    {streamingLinks.amazon && (
                      <a
                        href={streamingLinks.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border transition-colors bg-amazon/10 hover:bg-amazon/20 border-amazon/30 text-amazon font-medium"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.404-3.045.607-4.546.607-2.738 0-5.39-.542-7.948-1.628-2.003-.85-3.71-2.028-5.13-3.537-.18-.18-.226-.36-.136-.538z"/>
                        </svg>
                        Auf Amazon Music anhören
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {title}
                </h1>
                {year && (
                  <p className="text-muted-foreground">{year}</p>
                )}
              </div>

              {/* Spotify Embed Player */}
              {spotifyEmbedId && spotifyEmbedId !== '4jLfURnHCqVXhWaV09jj4G' && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Hörprobe</h3>
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <iframe
                      style={{ borderRadius: '12px' }}
                      src={`https://open.spotify.com/embed/track/${spotifyEmbedId}?utm_source=generator&theme=0&market=DE`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-lg font-semibold mb-3">Produktinfo</h3>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {description}
                </div>
              </div>

              {/* Additional Info */}
              {additionalInfo && (
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold mb-3">Zusätzliche Informationen</h3>
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {additionalInfo}
                  </div>
                </div>
              )}

              {/* GEMA Info */}
              <div className="text-sm text-muted-foreground pt-6 border-t border-border/50">
                GEMA-Mitglied Nr.: 144 422
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
