# Referansearkitektur for Wealth Copilot

Workshopprototypen bruker statiske JSON-filer og et lite REST API slik at deltakerne kan
fokusere på produkt- og plattformvalg uten å bruke den første timen på infrastruktur.
En produksjonsplattform for formuesforvaltning ville skilt tydeligere mellom datainnhenting,
styrte dataprodukter, analyse og AI-tjenester.

## Logisk dataflyt

```text
Kjernebank, kort, megler, pensjon, åpen bank, markedsdata
        ↓
Batch-inntak + strømme-/event-adaptere
        ↓
Landingssone i en dataplattform/lakehouse
        ↓
Standardiserte transformasjoner og domenedataprodukter
        ↓
Datakvalitetsregler, avstemming og håndtering av avvik
        ↓
Datastyring, katalog, dataopprinnelse, samtykke og masterdata
        ↓
Analyse i warehouse/lakehouse, ML-features og porteføljetjenester
        ↓
AI-plattform: gjenfinning, verktøy, modellgateway, sikkerhetsregler og evaluering
        ↓
Autentiserte API-er og hendelsesdrevne tjenester
        ↓
Digitale web-/mobilkanaler og rådgiververktøy
```

## Plattformens byggesteiner

### Datakilder og datainntak

Bruk batch-inntak for kontoutskrifter, posisjoner ved dagens slutt og periodiske
referansedata. Bruk strømme- eller hendelsesdrevet inntak for handler, betalinger,
prisoppdateringer, endringer i kundeønsker og porteføljeoppdateringer. Hver hendelse bør ha
en idempotensnøkkel, hendelsestidspunkt, kildesystem, skjemaversjon og sporings-ID.

### Lakehouse og warehouse

Lakehouse fungerer som et varig og kostnadseffektivt lag for rådata og historikk. Et
warehouse eller semantisk lag leverer styrt rapportering og raske forretningsspørringer.
Hold rå, standardiserte og kuraterte soner adskilt slik at en transformasjon kan kjøres på
nytt og revideres.

### Masterdata, katalog og dataopprinnelse

Kunde-, konto-, instrument- og organisasjons-ID-er trenger standardiserte koblinger mellom
kildesystemene. En datakatalog bør beskrive eier, sensitivitet, lagringstid og
kvalitetsforventninger. Dataopprinnelse bør vise hvordan en AI-innsikt eller et
dashboard-tall kan spores tilbake til kilderegistre og versjoner av transformasjoner.

### Datakvalitet

Typiske kontroller er skjemavalidering, obligatoriske felt, unikhet, referanseintegritet,
avstemming mot totalsummer i kilden, ferskhet, avviksdeteksjon og deteksjon av dupliserte
hendelser. Kvalitetsfeil bør opprette synlige avvik i stedet for å forkaste data i stillhet.

### Identitets- og tilgangsstyring

Bruk sterk kundeautentisering, tjenesteidentiteter, kortlevde tokens, minste privilegium og
tilgang knyttet til et bestemt formål. Skill mellom kunde-API-er, rådgivertilgang og intern
tilgang for datavitenskap. Autoriser hver forespørsel for kunden, kontoen og formålet som
ligger innenfor omfanget.

### Sikkerhet, personvern og GDPR

Krypter data under overføring og lagring. Tokeniser eller begrens sensitive felt i analyse-
og AI-sammenheng. Implementer sporing av samtykke og formål, arbeidsflyter for innsyn og
sletting, grenser for lagringstid, kontroll med geografisk behandling og en tydelig
forklaring av automatiserte beslutninger. Ikke send unødvendige personopplysninger til en
modell-leverandør.

### Revisjonslogger og observability

Registrer hvem som fikk tilgang til hvilke data, hvilket verktøy eller hvilken modell som
ble kalt, hvilken policybeslutning som ble tatt, hvilke dataversjoner som ble brukt og hvilket
svar kunden fikk. Overvåk svartid, feil, ferskhet, kvalitet, modellendring,
prompt-injection-signaler og uvanlige tilgangsmønstre. Logger må beskyttes mot endring og
mot å inneholde unødvendige sensitive data.

### AI-plattform og styring

En Copilot i produksjon bør bruke en modellgateway, register over godkjente modeller,
styring av prompter og versjoner, kontrollert gjenfinning, tillatte verktøy,
innholdssikkerhet, grenser for økonomiske råd og eskalering til mennesker. Svar bør
referere til dataene som ble brukt, skille fakta fra forklaringer, vise usikkerhet og unngå
regulerte anbefalinger uten nødvendige kontroller.

Modellevaluering bør omfatte faktakorrekthet, forankring i datagrunnlaget,
avvisningsatferd, rettferdighet, lekkasje av personopplysninger, motstand mot
prompt-injection og scenariospesifikk økonomisk sikkerhet. Overvåk disse målene kontinuerlig
etter lansering.

## Fra prototype til produksjon

| Prototype | Retning for produksjon |
| --- | --- |
| `data/*.json` | Styrt lakehouse og domenedataprodukter |
| `api/src/data.ts` | Datalag med policyhåndheving |
| Porteføljetjeneste | Porteføljedomenetjeneste basert på posisjoner og priser |
| Regelbaserte innsikter | Feature store/analyse og styrt innsynstjeneste |
| Deterministisk Copilot | Modellgateway, gjenfinning, verktøy og evaluering |
| Vite-frontend | Autentisert web-/mobilkanal |

Det viktigste designprinsippet er å holde deterministiske beregninger og policykontroller
utenfor språkmodellen. Modellen kan forklare styrte fakta, men bør ikke være kilden til
saldobeløp, priser, tillatelser eller egnethetsbeslutninger.
