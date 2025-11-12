import { Card, CardContent } from "@/components/ui/card";
import { Play, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StreamingLinks {
  spotify?: string;
  apple?: string;
  amazon?: string;
}

interface AlbumCardProps {
  title: string;
  coverUrl: string;
  year?: string;
  info?: string;
  streamingLinks?: StreamingLinks;
}

export const AlbumCard = ({ title, coverUrl, year, info, streamingLinks }: AlbumCardProps) => {
  return (
    <Card className="group relative overflow-hidden glass-card hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:scale-105">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
          
          {/* Info Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Music2 className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">{year || "2024"}</span>
            </div>
            
            <h3 className="text-foreground font-bold text-lg mb-2 line-clamp-2">{title}</h3>
            
            {info && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {info}
              </p>
            )}
            
            {/* Streaming Links */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
              {streamingLinks?.spotify && (
                <Button
                  size="sm"
                  className="flex-1 bg-spotify hover:bg-spotify/90 text-white border-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(streamingLinks.spotify, '_blank');
                  }}
                >
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </Button>
              )}
              
              {streamingLinks?.apple && (
                <Button
                  size="sm"
                  className="flex-1 bg-apple hover:bg-apple/90 text-white border-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(streamingLinks.apple, '_blank');
                  }}
                >
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Apple
                </Button>
              )}
              
              {streamingLinks?.amazon && (
                <Button
                  size="sm"
                  className="flex-1 bg-amazon hover:bg-amazon/90 text-black border-0 font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(streamingLinks.amazon, '_blank');
                  }}
                >
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.404-3.045.607-4.546.607-2.738 0-5.39-.542-7.948-1.628-2.003-.85-3.71-2.028-5.13-3.537-.18-.18-.226-.36-.136-.538z"/>
                  </svg>
                  Amazon
                </Button>
              )}
            </div>
            
            {/* Play Button (wenn keine Links vorhanden) */}
            {!streamingLinks && (
              <Button
                size="sm"
                className="w-full bg-gradient-accent text-white border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"
              >
                <Play className="h-4 w-4 mr-2" />
                Anhören
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
