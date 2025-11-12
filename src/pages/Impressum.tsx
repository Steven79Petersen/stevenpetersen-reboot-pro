import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
const Impressum = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-12 text-center">
            Impressum
          </h1>
          
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Angaben gemäß § 5 TMG</h2>
              <p className="text-foreground">Steven Petersen Otto-Meentz-Str. 48 26382 Wilhelmshaven Deutschland<br />
                [Straße und Hausnummer]<br />
                [PLZ und Ort]<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Kontakt</h2>
              <p className="text-foreground">
                E-Mail: info@stevenpetersen.de<br />
                Telefon: +49 (0) 123 456 789
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">GEMA</h2>
              <p className="text-foreground">
                GEMA-Mitgliedsnummer: 144 422
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Verantwortlich für den Inhalt</h2>
              <p className="text-foreground">
                Steven Petersen<br />
                [Adresse wie oben]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">Haftung für Inhalte</h3>
              <p className="text-muted-foreground mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-foreground">Haftung für Links</h3>
              <p className="text-muted-foreground mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
                oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-foreground">Urheberrecht</h3>
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Impressum;