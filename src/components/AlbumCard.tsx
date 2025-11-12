import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
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
    <Card className="group overflow-hidden glass-card hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
      <CardContent className="p-0">
        {/* Album Cover */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
        
        {/* Album Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight mb-1 line-clamp-2">{title}</h3>
            {year && (
              <p className="text-xs text-muted-foreground">{year}</p>
            )}
            {info && (
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{info}</p>
            )}
          </div>
          
          {/* Streaming Links - Text only */}
          {streamingLinks && (
            <div className="flex flex-wrap gap-2 text-xs">
              {streamingLinks.spotify && (
                <a
                  href={streamingLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-spotify hover:underline font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  Spotify
                </a>
              )}
              
              {streamingLinks.apple && (
                <a
                  href={streamingLinks.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  Apple Music
                </a>
              )}
              
              {streamingLinks.amazon && (
                <a
                  href={streamingLinks.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amazon hover:underline font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  Amazon Music
                </a>
              )}
            </div>
          )}
          
        </div>
      </CardContent>
    </Card>
  );
};
