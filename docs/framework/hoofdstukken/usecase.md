# Use case


## Inleiding

De scope van het Informatiemodel Verkeerstekens en Verkeersbesluiten is de use case "Publiceren van verkeersbesluiten" in een landelijke netwerkregistratie.

De use case bevat de volgende onderdelen:

1. Het samenstellen van een dataset met een nieuwe netwerkinrichting.
2. De communicatie over de nieuwe weginrichting van wegbeheerder naar de landelijke registratie (transactie)
3. Het samenstellen van een dataset met functionele verkeersinstructies en verkeerstekens met daarin de wijziging in de verkeersregels
4. De communicatie over de toe te passen verkeersregels van wegbeheerder naar de landelijke registratie (transactie)
5. Het valideren van de aangeboden wijziging;
6. Het publiceren van de wijziging in de landelijke netwerkregistratie. 
7. Het publiceren van de wijziging op [www.overheid.nl](www.overheid.nl) 

### Centrale publicatie
De use case gaat uit van het centraal publiceren van verkeersbesluiten. Omdat het netwerk moet routeren over gemeente- en provincie- en rijksweggrenzen heen, moet er een controle zijn op de samenhang. Daarom is een landelijke registratie op korte termijn het makkelijkst te organiseren, en je kun je de wegbeheerder die werkt met kaarten beter faciliteren. 

Op langere termijn is locale publicatie wel een optie. In het Digitaal Stelsel Gebouwde Omgeving wordt ervan uitgegeaan, dat degene die een asset ontwerpt, bouwt of beheert ook degene is die de informatie daarover publiceert (publicatie bij de bron). Dit vraagt een hoog digitaal en procesmatig volwassenheidsniveau van de wegbeheerders die bij wijzigingen in de verkeerssituatie zullen moeten valideren dat het gezamenlijke netwerk nog steeds "wiskundig sluitend" is. De huidige status is dat de meerderheid van de wegbeheerders nog niet in staat zijn om informatiemanagement uit te voeren op dit niveau.

## Samenstellen netwerkdata
Dit onderdeel van de usecase beschrijft de use case waarmee een wegbeheerder of een wegontwerper namens de wegbeheerder een correcte dataset kan samenstellen met wijzigingen in het verkeersnetwerk. Het is nog niet uitgewerkt of het systeem uit dit onderdeel van de use case een systeem van de wegbeheerder is, of een systeem van de landelijke registratie.

* De Wegbeheerder markeert het gebied waarbinnen de wijziging valt.
* Het Systeem geeft dit gebied weer op een kaart.
* De Wegbeheerder geeft aan op welke datum de netwerkwijziging in gaat.
* Het Systeem geeft een preselectie van de de wegvakken en juncties die op dat tijdstip actueel zijn.
* De Wegbeheerder selecteert alle wegvakken en juncties die wijzigen.
* Het Systeem geeft (1) de selectie weer in een overzicht of (2) exporteert een dataset met de geselecteerde wegvakken en juncties
* De Wegbeheerder geeft (1) in het systeem of (2) in een dataset aan welke wegvakken en juncties vervallen en voegt nieuwe wegvakken en juncties toe. 
* Het Systeem controleert of het nieuwe netwerk sluitend is en (1) toont een validatieoverzicht met eventuele foutmeldingen of (2) exporteert een validatierapport.

De zo samengestelde netwerkdata kan eventueel worden gebruikt in simulaties of om varianten te onderzoeken, daarom is dit een separate stap ten opzichte van de formele transactie van de netwerkdata van de wegbeheerder naar de beheerder van de landelijke registratie.

## Transactie netwerkdata 
Happy flow (met tussen haakjes de link naar het standaard DEMO transactiepatroon)
* De wegbeheerder biedt de wijziging aan en vraagt om deze te publiceren (Request)
* De beheerder van de landelijke registratie belooft dit te zullen doen na validatie (Promise)
* Het Systeem controleert of aan alle leveringsvoorwaarden is voldaan en of de aangeboden wijziging aansluit op de ongewijzigde netwerkdelen (Produce)
* De beheerder van de landelijke registratie geeft aan dat de dataset voldoet aan alle voorwaarden (State)
* De wegbeheerder bedankt de beheerder van de landelijke registratie voor de acceptatie

## Samenstellen verkeersbesluit
Dit onderdeel van de usecase beschrijft wat er nodig is zodat een wegbeheerder een correcte dataset kan samenstellen met een verkeersbesluit. 

De wegbeheerder heeft daarvoor een "Informatieleveringsspecificatie" nodig waarin staat:
- Welke informatie minimaal verplicht is uit het Informatiemodel Verkeerstekens en verkeersbesluiten en het model van het verkeersnetwerk. 
- Welke informatie mag worden toegevoegd uit het Informatiemodel Verkeerstekens en verkeersbesluiten en het model van het verkeersnetwerk. 
- In welke formaten de wijziging kan worden aangeleverd
- Of informatie mag worden toegevoegd uit een eigen informatiemodel

De wijziging bestaat vermoedelijk uit een tweetrapsraket: 
- Een wijziging aanbieden in de ligging van het netwerk: als de weg fysiek wordt gewijzigd qua ligging, hoeveelheid rijstroken of wijzigingen in de afslagrichting van een rijbaan bij een kruising
- 

## Transactie verkeersbesluit
Dit onderdeel van de use case bevast de transactie tussen de **wegbeheerder** en de **Landelijke registratie** waarbij de wegbeheerder een wijziging in de wegligging en/of de verkeersregels aanbiedt aan de landelijke registratie. 

De wegbeheerder heeft daarvoor "Aanleverinstructies" nodig waarin staat:
- Hoe de wijziging kan worden aangeleverd: via VISI, een website, via een API


## Valideren verkeersbesluit


## Publiceren netwerkdata
 geschikt om deze op een eenvoudige wijze in een machine-leesbare vorm te kunnen verwerken van besluiten tot kenmerken die gebruikt kunnen worden voor de digitalisering van werkprocessen van wegbeheerders en service providers en om de weggebruiker of rij-assistent digitaal te informeren.

## Publiceren verkeersbesluit
Het publiceren van de wijziging op [www.overheid.nl](www.overheid.nl) 






