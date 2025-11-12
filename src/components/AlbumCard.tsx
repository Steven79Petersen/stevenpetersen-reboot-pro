import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

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
  detailPath?: string;
}

export const AlbumCard = ({ title, coverUrl, year, info, streamingLinks, detailPath }: AlbumCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (detailPath) {
      navigate(detailPath);
    }
  };

  return (
    <Card 
      className="group overflow-hidden glass-card hover:border-primary/50 transition-all duration-500 hover:shadow-glow cursor-pointer"
      onClick={handleCardClick}
    >
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
          
          {/* Streaming Links - Button Style */}
          {streamingLinks && (
            <div className="flex flex-wrap gap-1.5">
              {streamingLinks.spotify && (
                <a
                  href={streamingLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 h-8 px-3 text-xs font-medium rounded-md border transition-colors flex items-center justify-center bg-spotify/10 hover:bg-spotify/20 border-spotify/30 text-spotify"
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
                  className="flex-1 min-w-0 h-8 px-3 text-xs font-medium rounded-md border transition-colors flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 border-foreground/20"
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
                  className="flex-1 min-w-0 h-8 px-3 text-xs font-medium rounded-md border transition-colors flex items-center justify-center bg-amazon/10 hover:bg-amazon/20 border-amazon/30 text-amazon"
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
