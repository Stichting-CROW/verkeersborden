# Stakeholderanalyse


## Inleiding

De stakeholderanalyse verkent welke partijen er belanghebbende, “leverancier” en “afnemer” zouden kunnen worden van de informatie, gemodelleerd met het Informatiemodel Verkeerstekens en Verkeersbesluiten.

Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. 

## Use cases ontwerpfase

### Verkeersmodel

*Stakeholders: Verkeerskundigen*

Verkeersmodellen worden gebruikt om de toekomstige doorstorming van het verkeer te kunnen voorspellen en zo een optimale inrichting van het netwerk te ontwerpen. Het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeersborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. Dit proces gebeurt vaak tegelijkertijd (iteratief en paralel aan) het ontwerpen van de weg(inrichting) waardoor onderzocht wordt of het gewenste netwerk ook ruimtelijk inpasbaar is.

### Wegontwerp

*Stakeholders: Ontwerpers*

Ontwerp van wegen met markering en bebording: Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden en markeringen wordt bepaald. Ook kunnen extra verkeersborden en markeringen uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen zoals bij kruispunten. Tijdens het wegontwerp wordt niet het netwerk ontworpen, maar de fysieke ligging van de weg, met een alignement ("hartlijn") met bogen, overgangsbogen en rechtstanden. Dit alignement wordt vaak gevisualiseerd in een CAD-tekening volgens de open BIM standaard NLCS , met daarnaast op tekening de markering van wegstroken of kanten van de stoepbanden, en de verkeerstekens. Hierbij wordt de BIM standaard NLCS gebruikt. Ook kan het wegontwerp onderdeel zijn van een BIM model.

1. Om met een wegontwerp aan te sluiten op een landelijke netwerkregistratie van wegen zouden afspraken gemaakt moeten worden om ook het ontworpen netwerk in termen van juncties en wegvakken op te nemen in ontwerptekeningen of BIM modellen, naast de verkeerstekens. Zo kan makkelijker de vertaling worden gemaakt tussen wegontwerp en netwerkregistratie. Deze afspraak zou goed passen bij de BIM standaard NLCS. 

2. Om het geregistreerde netwerk en de verkeersbesluiten te kunnen gebruiken als input voor een nieuw wegontwerp is het bijhouden van de alignementskenmerken van de weg aan te raden. Als het netwerk een hoger detailniveau krijgt om per rijstrook verkeersbesluiten te kunnen vastleggen, is een standaard nodig waarmee het alignement wordt vastgelegd, omdat het alignement wordt ontworpen per weg of in een enkele geval per rijbaan, niet per rijstrook.

### Verkeersbesluiten

*Stakeholders: Wegbeheerders*

De scope van het Informatiemodel Verkeerstekens en Verkeersbesluiten, de use case "Registreren van verkeersbesluiten", valt binnen de ontwerpfase. Het verkeersbesluit geeft de *wettelijke kaders* voor het gedrag van het verkeer. 

## Use cases Bouwfase

### Bestellen 

*Stakeholders: Contractmanagers*

De publieke opdrachtgever of bouw- en onderhoudsaannemer moet de borden en markeringsmiddelen kunnen bestellen bij een leverancier. Bij het bestellen worden specificaties toegevoegd over het soort, de levensduur, garanties, gewenste materialen of duurzaamheidsklassen. 

### Produceren

*Stakeholders: Producenten*

de producent van verkeersborden werkt op basis van specificaties aan de verkeersborden; en voegt informatie toe over het productieproces en over onderhoudsspecificaties.

### Contracteren

*Stakeholders: Contractmanagers*

Contracteren wegaanleg, markeringsaanleg en plaatsing verkeersborden. De publieke opdrachtgever besteed de plaatsing van verkeersborden en markeringen conform het verkeersbesluit aan (als onderdeel van een groter project). Hierbij worden specificaties toegevoegd aan de gewenste borden en markeringen.

### Bouwen

*Stakeholders: Bouwbedrijven*

De bouwaannemer bouwt de weg op basis van het ontwerp en het verkeersbesluit en geeft de actuele geometrie door van de gebouwde weg.
De bouwaannemer plaatst de verkeersborden op basis van het ontwerp en het verkeersbesluit en geeft de actuele geometrie door van het geplaatste verkeersbord.
De bouwaannemer brengt de markeringen op basis van het ontwerp en het verkeersbesluit aan en geeft de actuele geometrie door van de markering.

De *gewenste ligging* volgens het ontwerp en het verkeersbesluit komt niet per sé overeen met de *werkelijke ligging* van de weg en de verkeerstekens. Dit zijn twee verschillende "representaties" van de objecten, die beide waarde hebben. 

## Use cases Beheerfase

### Beheren
In de beheerfase wordt van de borden en markeringen informatie bijgehouden over de kwaliteit: vervuiling, slijtage en bijbehorende maatregelen waarmee de borden en markeringen functioneel en zichtbaar blijven. Ook wil de beheerder generieke informatie gebruiken over de verkeersborden en markeringen: wie de beherende partij is, wie het onderhoud uitvoert, wanneer welke onderhoudsmaatregel is uitgevoerd, en informatie uit de ontwerp- en bouwfase: locatie, paal of mast waarop een bord bevestigd is, datum plaatsing, levensduur of garanties, enzovoorts. Met deze informatie kan de asset manager risico's, prestaties en kosten afwegen en de juiste maatregelen treffen: onderhoud of vervanging. 

![Asset management proces volgens iAMPro](./hoofdstukken/media/Beheerfase.jpg "Asset management proces volgens iAMPro")


## Use cases Gebruiksfase

### Rijden met incar-informatie

### Handhaving




## Use cases Sloopfase

### Circulair hergebruik



