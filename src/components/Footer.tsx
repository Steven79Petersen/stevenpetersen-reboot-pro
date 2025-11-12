import { Facebook, Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            <p>GEMA-Nr.: 144 422</p>
            <p className="mt-1">© {new Date().getFullYear()} Steven Petersen. Alle Rechte vorbehalten.</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/stevenpetersen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@stevenpetersen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <Music className="h-6 w-6" />
            </a>
            <a
              href="https://music.amazon.de/artists/B0CW6KLLSL/steven-petersen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Amazon Music"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.404-3.045.607-4.546.607-2.738 0-5.39-.542-7.948-1.628-2.003-.85-3.71-2.028-5.13-3.537-.18-.18-.226-.36-.136-.538z"/>
                <path d="M21.95 16.35c-.15-.05-.27-.05-.39.02l-1.37.75c-.09.05-.16.14-.2.24-.03.1-.01.19.07.27l.02.02c.06.06.14.09.23.09.06 0 .12-.01.17-.04l1.37-.75c.09-.05.16-.14.2-.24.03-.1.01-.19-.07-.27l-.02-.02c-.06-.06-.14-.09-.23-.09-.06 0-.12.01-.17.04z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
