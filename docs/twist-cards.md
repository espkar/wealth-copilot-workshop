# Scenarioendringer for workshopen

Introduser ett kort om gangen etter at gruppene har laget et første design. Be hver gruppe
oppdatere både arkitekturen og brukeropplevelsen.

## Scenario 1: Eksterne investeringer

**Scenario:** Kunden har investeringer hos en annen finansinstitusjon. Hvordan bør plattformen
håndtere dette?

Diskuter samtykke gjennom åpen bank, ferskhet på data, kobling av instrumenter,
bekreftelse av eierskap, grenser for sammenstilling, manglende kostpris og hva Copilot kan
si når eksterne data er ufullstendige.

## Scenario 2: Kjøp skal vises umiddelbart

**Scenario:** Kunden kjøper et aktivum og forventer at Wealth Copilot viser endringen med en
gang.

Diskuter hendelsesdrevne oppdateringer, livssyklusen til ordre og handler, ventende versus
oppgjorte posisjoner, prisens ferskhet, ugyldiggjøring av cache, idempotens og hvordan
brukergrensesnittet kommuniserer foreløpige verdier.

## Scenario 3: Åpenhet om personopplysninger

**Scenario:** Kunden ber banken vise nøyaktig hvilke personopplysninger som ble brukt til å
lage en AI-innsikt.

Diskuter dataopprinnelse, forklarbarhet, formålsbegrensning, datakataloger, kildehenvisninger
i svaret, revisjonsspor, lagringstid og en kundeopplevelse som svarer på «Hvorfor ser jeg
dette?».

## Scenario 4: Feil AI-innsikt

**Scenario:** AI-en gir kunden en feilaktig investeringsrelatert innsikt. Hvordan oppdager,
forklarer og retter banken dette?

Diskuter kontroller av forankring i datagrunnlaget, deterministiske kalkulatorer,
modellevaluering, hendelseshåndtering, korrigering for kunden, eskalering til rådgiver,
tilbakerulling, revisjonsspor og regulatorisk rapportering.
