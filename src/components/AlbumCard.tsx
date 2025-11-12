import { Card, CardContent } from "@/components/ui/card";

interface AlbumCardProps {
  title: string;
  coverUrl: string;
  year?: string;
}

export const AlbumCard = ({ title, coverUrl, year }: AlbumCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-foreground font-semibold text-lg">{title}</h3>
              {year && <p className="text-muted-foreground text-sm">{year}</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
