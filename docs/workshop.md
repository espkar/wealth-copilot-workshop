# Workshop-oppgave: Bygg Wealth Copilot

## Utfordringen

Design og lag en prototype av en Wealth Copilot som gir kunder en samlet og intelligent
oversikt over sin økonomiske situasjon.

Ta utgangspunkt i den fungerende demoen i dette repoet. Deltakere kan utforske API-et, utvide
frontend, endre de syntetiske dataene og bruke promptene i `/prompts` sammen med GitHub
Copilot CLI.

## 8 spørsmål å svare på

1. Hvilke data bør samles inn?
2. Hvordan bør dataplattformen designes?
3. Hvilke teknologier bør brukes?
4. Hvordan bør datakvalitet sikres?
5. Hvordan bør sikkerhet og personvern håndteres?
6. Hvordan kan AI skape verdi?
7. Hvordan bør sanntidsdata håndteres?
8. Hva er de største risikoene?

Se `docs/itok-guide.md` for en enklere, ikke-teknisk gjennomgang av disse 8 spørsmålene,
med både en IT-vinkel og en økonomi-vinkel for hvert av dem.

## Foreslåtte arbeidssteg

### 1. Forstå utgangspunktet

Kjør applikasjonen, bytt mellom de fiktive kundene og se på API-svarene bak Dashboard,
Portefølje, Innsikter og Wealth Copilot.

### 2. Velg et kundeproblem

Eksempler: kontantstrøm-coaching, forklaring av porteføljediversifisering, pensjonsplanlegging,
konsolidering av eksterne aktiva eller gjennomsiktig datasporing (provenance).

### 3. Design dataflyten

Identifiser kildedata, krav til ferskhet, kvalitetsregler, behov for identitet/samtykke og
hvilket API eller event som støtter opplevelsen.

### 4. Lag en prototype

Bruk de eksisterende API- og UI-mønstrene. Hold beregningene deterministiske og forklarbare.
Hvis dere legger til et AI-lag, definer nøyaktig hva modellen har lov til og ikke lov til.

### 5. Evaluer

Test normale tilfeller og kanttilfeller, se på datasporing (lineage), utfordre antakelser og
forklar hvordan feil håndteres.

## Leveranser

- fungerende prototype
- arkitekturdiagram
- teknologivalg
- forretningsverdi
- risikoer og utfordringer
- kort forklaring av datakvalitet, personvern og AI-governance

## Definisjon av ferdig

Prototypen skal fungere for minst én fiktiv kunde, vise hvor dataene kommer fra, synlig
håndtere manglende eller utdaterte data, og aldri fremstille den pedagogiske risikoscoren som
reell finansiell rådgivning.
