# Raakvlakanalyse


## Inleiding

De use case "Registreren van verkeersbesluiten" heeft raakvlakken met andere use cases in de levenscyclus: ontwerp; bouw; beheer; gebruik; en sloop / circulair hergebruik. In dit hoofdstuk worden per levensfase de use cases, standaarden en databases genoemd die raakvlakken hebben met de use case "Registreren van verkeersbesluiten"


## Use cases ontwerpfase

### Opstellen verkeersmodellen

Verkeersmodellen worden gebruikt om de toekomstige doorstorming van het verkeer te kunnen voorspellen en zo een optimale inrichting van het netwerk te ontwerpen. Het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeerborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. ([Issue 3](https://github.com/Stichting-CROW/verkeersborden/issues/3))


### Wegontwerp
Ontwerp van wegen met markering en bebording: Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden en markeringen wordt bepaald. Ook kunnen extra verkeersborden en markeringen uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen zoals bij kruispunten. ([Issue 6](https://github.com/Stichting-CROW/verkeersborden/issues/6))

### Registreren van verkeersbesluiten
De use case "Registreren van verkeersbesluiten" heeft betrekking op informatie over weginrichting en verkeerstekens in de ontwerpfase.

### NLCS
[NLCS](https://www.bimloket.nl/p/365/NLCS) is de Nederlandse CAD standaard voor uitwisseling van informatie in 2D CAD-ontwerptekeningen. CAD betekent Computer-aided design: het ontwerpen van onder meer constructies en apparaten met behulp van computerprogramma's. De NLCS bevat basisafspraken over het omgaan met metadata, digitaal tekenen, het uiterlijk van de tekening en – vooral – de bestandsopbouw van 2D-tekenwerk. Deze afspraken zijn onafhankelijk van de CAD-platforms die geleverd worden door softwareleveranciers. 
Met NLCS worden de objecten op een tekening herkend door alle partijen. Het doel van NLCS is het vermijden van dubbel werk, misverstanden en extra kosten met eenduidige tekeningen. Dit vergroot de efficiency, de kwaliteit, geeft een completer en eenduidig beeld en versneld de tijdigheid waarmee wijzigingen worden gecommuniceerd. 

Circa 30% van de verkeersbesluiten ontwerptekeningen bevatten tekeningen die afkomstig zijn uit CAD-systemen. Tijdens het proces om tot deze verkeersbesluiten te komen wordt veel onderliggende data gemaakt, maar deze data wordt niet optimaal gepubliceerd en gebruikt tijdens en na de publicatie van verkeersbesluiten. Om het gebruik van data uit het wegontwerp bij het verkeersbesluit te verbeteren en tot een completere en eenduidigere uitwisseling van data te komen is de intentie van BIM loket om de verkeersborden op te nemen in de NLCS standaard zodra deze gepubliceerd worden in het Informatiemodel verkeersteken en verkeersbesluiten. Hierdoor hoeven gegevens niet telkens handmatig worden overgenomen maar kan deze data automatisch worden ingelezen voor processen in de bouw-, beheer-, gebruik- en hergebruiksfase. Vervolgens worden door het BIM-loket met de leveranciers van CAD-systemen nadere afspraken gemaakt over het kunnen exporteren van de verkeersborden zodat deze als data beschikbaar komen voor andere systemen. 

## Use cases Bouwfase

### Bestellen 

1. Bestellen van verkeersborden en markeringsverf
De publieke opdrachtgever of bouw- en onderhoudsaannemer moet de borden en markeringsmiddelen kunnen bestellen bij een leverancier. Bij het bestellen worden specificaties toegevoegd over het soort, de levensduur, garanties, gewenste materialen of duurzaamheidsklassen. ([Issue 7](https://github.com/Stichting-CROW/verkeersborden/issues/7))

### Produceren
de producent van verkeersborden werkt op basis van specificaties aan de verkeersborden; en voegt informatie toe over het productieproces en over onderhoudsspecificaties.

### Contracteren
Contracteren wegaanleg, markeringsaanleg en plaatsing verkeersborden. De publieke opdrachtgever besteed de plaatsing van verkeersborden en markeringen conform het verkeersbesluit aan (als onderdeel van een groter project). Hierbij worden specificaties toegevoegd aan de gewenste borden en markeringen.

### Bouwen
De bouwaannemer plaatst de verkeersborden op basis van het ontwerp en geeft de actuele geometrie door van het geplaatste verkeersbord.
De bouwaannemer brengt de markeringen op basis van het ontwerp aan en geeft de actuele geometrie door van de markering.

## Use cases Beheerfase

### Beheer verkeersborden


## Use cases Gebruiksfase

### Rijden met incar-informatie

### Handhaving

### NWB
In het nationaal wegen bestand (NWB) ligt het wegennetwerk vast als netwerk van juncties en wegvakken. Het informatiemodel moet hierop aansluiten. 


## Use cases Sloopfase

### Circulair hergebruik



