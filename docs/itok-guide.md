# ITØK-guide: Hva går workshopen egentlig ut på?

Denne guiden er for deg som er usikker på hva oppgaven forventer — spesielt hvis du kommer fra
IT-økonomi (ITØK) og ikke nødvendigvis skal skrive mye kode selv.

## Kort sagt

Dette er **ikke** en programmeringsoppgave. Det er en case-oppgave hvor dere har fått et
ferdig, fungerende demo-produkt (Wealth Copilot), og skal jobbe som et team som skal
**videreutvikle det som et produkt** — med IT-forståelse og økonomifaglig forståelse i skjønn
forening.

Dere kan velge selv hvor teknisk dere vil gå:

- **Lite teknisk**: diskutere, tegne arkitektur, skrive ned beslutninger og begrunnelser
- **Middels teknisk**: endre tekster, tall, regler eller synthetic data
- **Mer teknisk**: endre kode i frontend/API hvis noen i gruppa vil og kan

Alle nivåer er gyldige. Det viktigste er at dere kan **forklare og begrunne** valgene deres.

## Hva finnes i appen fra før?

- **Kunder** med kontoer, transaksjoner og porteføljer (fiktive/syntetiske data)
- **Portefølje-oversikt**: hva kunden eier, fordelt på aktivaklasser
- **Risikoscore**: en enkel, forklarbar modell (IKKE ekte finansiell rådgivning)
- **Innsikter**: automatisk genererte observasjoner om kundens økonomi
- **Wealth Copilot**: en enkel "chatbot" som svarer på spørsmål om kundens egen økonomi —
  i dag er den regelbasert (ikke en ekte AI/LLM)

## Hva skal dere egentlig gjøre?

Se de 8 spørsmålene i `docs/workshop.md`. De er kjernen i oppgaven. For hvert spørsmål,
tenk over **både** IT-siden og økonomi-siden:

| Spørsmål | IT-vinkel | Økonomi-vinkel |
|---|---|---|
| Hvilke data trengs? | Datakilder, format, oppdateringsfrekvens | Hvilke tall er relevante for kundens økonomi? |
| Hvordan bør plattformen designes? | Arkitektur, skalering | Hvem eier/bruker dataene? |
| Hvordan sikre datakvalitet? | Validering, feilhåndtering | Konsekvens av feil tall for kunden |
| Sikkerhet og personvern? | Tilgangsstyring, kryptering | GDPR, samtykke, bankhemmelighet |
| Hvordan kan AI skape verdi? | Hvor i systemet passer AI inn? | Hva bør/bør ikke AI si om kundens penger? |
| Sanntidsdata? | Events, oppdateringsjobber | Hvor "fersk" må et tall være for å være nyttig? |
| Største risikoer? | Systemfeil, nedetid | Feilinformasjon, tap av tillit |

## Om AI/LLM-spørsmålet spesielt

Dere trenger **ikke** koble på en ekte språkmodell (LLM). Det holder å **resonnere seg fram
til**:

- Hvor i systemet ville en AI passe inn (f.eks. for å forklare tall i tekst)?
- Hva bør AI-en få lov til (forklare/oppsummere) og **ikke** lov til (finne på tall, gi
  investeringsråd)?
- Hvilke risikoer følger med (feilinformasjon, personvern, kostnad, avhengighet av en
  ekstern leverandør)?

Dette er nok til å svare godt på spørsmål 6 i `docs/workshop.md`.

## Hva teller som en god leveranse?

Ikke mengden kode. Se `docs/workshop.md` under "Final deliverables" og "Definition of done" —
kort oppsummert:

1. Dere kan vise/forklare **ett** kundeproblem dere har jobbet med
2. Dere kan forklare hvor dataene kommer fra og hvor "ferske" de er
3. Dere har tenkt gjennom personvern og risiko
4. Dere har vært tydelige på at risikoscore og "AI-svar" ikke er ekte finansiell rådgivning

## Hvor finner jeg mer?

- `README.md` — hvordan kjøre appen
- `docs/workshop.md` — selve oppgaveteksten og de 8 spørsmålene
- `docs/architecture.md` — hvordan systemet er bygget opp
- `docs/twist-cards.md` — ekstra scenarioer hvis dere blir ferdige tidlig
- `prompts/` — ferdige prompts for å utforske/endre koden med GitHub Copilot CLI
