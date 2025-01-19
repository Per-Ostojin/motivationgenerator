# Motivationsgenerator 🌟

En motivationsgenerator som hämtar inspirerande citat med hjälp av
[Advice Slip API](https://api.adviceslip.com). Projektet är designat för att
vara responsivt och fungera på både mobila och stationära enheter.

---

## Utmaningen 🐺

Din utmaning är att:

1. Bygga en motivationsgenerator baserat på designen i `/design`-mappen.
2. Göra applikationen responsiv och optimerad för olika skärmstorlekar.
3. Implementera funktioner som:
   - Generering av nya citat genom att klicka på ikonen.
   - Visa hover-effekter för interaktiva element.

---

## Användarkrav ✅

- **Responsiv design**: Layouten ska anpassa sig till skärmens storlek.
- **Interaktivitet**: Hover-effekter för knappar och ikoner.
- **Citatgenerering**: Hämta och visa nya citat från API:et.

---

## Verktyg och Teknologier 🛠️

- **HTML**: För att strukturera sidan.
- **CSS**: För layout och styling (inklusive media queries).
- **JavaScript**: För att hämta data från API och hantera interaktivitet.
- **Advice Slip API**: För att generera slumpmässiga citat.

---

## Steg-för-steg Guide 🌟

1. **Bygg HTML-strukturen**:

   - Skapa kortet med plats för citat och knappar.
   - Lägg till alla ikoner och bilder.

2. **Design med CSS**:

   - Använd CSS för att placera och styla alla element.
   - Använd exempeltext innan API-integrationen för att säkerställa korrekt
     layout.

3. **Färgsättning och typsnitt**:

   - Applicera färger och typsnitt enligt designen i `style-guide.md`.

4. **Implementera API**:
   - Skapa en JavaScript-funktion för att hämta data från Advice Slip API.
   - Skicka API-data till HTML för att uppdatera citat och ID.

---

## Design och Tillgångar 🎨

- **Designer**: Finns i `/design`-mappen, inklusive versioner för både mobil och skrivbord.
- **Tillgångar**: Bilder och ikoner finns i `/images`-mappen.
- **Style Guide**: Färgpalett och typografiinformation finns i `style-guide.md`.

---

## Så här kör du projektet lokalt 🖥️

1.	Klona repositoryt:
```bash
git clone https://github.com/Per-Ostojin/motivationsgenerator.git

2.	Navigera till projektmappen:
   cd motivationsgenerator

   Öppna index.html i din webbläsare.

   Förbättringsmöjligheter 🚀
    •	Implementera fler designvarianter.
    •	Lägg till ett mörkt läge (dark mode).
    •	Skapa en fallback om API:et inte svarar.
