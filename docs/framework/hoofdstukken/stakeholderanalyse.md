# Stakeholderanalyse


## Inleiding

De stakeholderanalyse verkent welke partijen er belanghebbende, “leverancier” en “afnemer” zouden kunnen worden van de informatie, gemodelleerd met het Informatiemodel Verkeerstekens en Verkeersbesluiten.

Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. De scope van het informatiemodel, de use case "Registreren van verkeersbesluiten", valt binnen de ontwerpfase.


## Use cases ontwerpfase

### Verkeersmodel

*Stakeholders: Verkeerskundigen*

Verkeersmodellen worden gebruikt om de toekomstige doorstorming van het verkeer te kunnen voorspellen en zo een optimale inrichting van het netwerk te ontwerpen. Het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeersborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. ([Issue 3](https://github.com/Stichting-CROW/verkeersborden/issues/3)). Dit proces gebeurt vaak tegelijkertijd (iteratief en paralel aan) het ontwerpen van de weg(inrichting) waardoor onderzocht wordt of het gewenste netwerk ook ruimtelijk inpasbaar is.


### Wegontwerp

*Stakeholders: Ontwerpers*

Ontwerp van wegen met markering en bebording: Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden en markeringen wordt bepaald. Ook kunnen extra verkeersborden en markeringen uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen zoals bij kruispunten. Tijdens het wegontwerp wordt niet het netwerk ontworpen, maar de fysieke ligging van de weg, met een alignement ("hartlijn") met bogen, overgangsbogen en rechtstanden. Dit alignement wordt vaak gevisualiseerd in een CAD-tekening volgens de open BIM standaard NLCS , met daarnaast op tekening de markering van wegstroken of kanten van de stoepbanden, en de verkeerstekens. Hierbij wordt de BIM standaard NLCS gebruikt. 

1. Om aan te sluiten op een landelijke netwerkregistratie van wegen zouden afspraken gemaakt moeten worden om ook het ontworpen netwerk in termen van juncties en wegvakken op te nemen in het ontwerp, naast de verkeerstekens. Zo kan makkelijker de vertaling worden gemaakt tussen wegontwerp en netwerkregistratie. Deze afspraak zou goed passen bij de BIM standaard NLCS. 

2. Om het geregistreerde netwerk en de verkeersbesluiten te kunnen gebruiken als input voor een nieuw ontwerp is het bijhouden van de alignementskenmerken van de weg aan te raden. 





## Use cases Bouwfase

### Bestellen 
De publieke opdrachtgever of bouw- en onderhoudsaannemer moet de borden en markeringsmiddelen kunnen bestellen bij een leverancier. Bij het bestellen worden specificaties toegevoegd over het soort, de levensduur, garanties, gewenste materialen of duurzaamheidsklassen. ([Issue 7](https://github.com/Stichting-CROW/verkeersborden/issues/7))

### Produceren
de producent van verkeersborden werkt op basis van specificaties aan de verkeersborden; en voegt informatie toe over het productieproces en over onderhoudsspecificaties.

### Contracteren
Contracteren wegaanleg, markeringsaanleg en plaatsing verkeersborden. De publieke opdrachtgever besteed de plaatsing van verkeersborden en markeringen conform het verkeersbesluit aan (als onderdeel van een groter project). Hierbij worden specificaties toegevoegd aan de gewenste borden en markeringen.

### Bouwen
De bouwaannemer plaatst de verkeersborden op basis van het ontwerp en geeft de actuele geometrie door van het geplaatste verkeersbord.
De bouwaannemer brengt de markeringen op basis van het ontwerp aan en geeft de actuele geometrie door van de markering.

## Use cases Beheerfase

### Beheren
In de beheerfase wordt van de borden en markeringen informatie bijgehouden over de kwaliteit: vervuiling, slijtage en bijbehorende maatregelen waarmee de borden en markeringen functioneel en zichtbaar blijven. Ook wil de beheerder generieke informatie gebruiken over de verkeersborden en markeringen: wie de beherende partij is, wie het onderhoud uitvoert, wanneer welke onderhoudsmaatregel is uitgevoerd, en informatie uit de ontwerp- en bouwfase: locatie, paal of mast waarop een bord bevestigd is, datum plaatsing, levensduur of garanties, enzovoorts. Met deze informatie kan de asset manager risico's, prestaties en kosten afwegen en de juiste maatregelen treffen: onderhoud of vervanging. 

![Asset management proces volgens iAMPro](Beheerfase.JPG "Asset management proces volgens iAMPro")

### IMBOR
In het informatiemodel beheer openbare ruimte (IMBOR) zijn borden en markeringen opgenomen met daarbij de vaste objectgegevens die in de beheerfase nodig zijn. Dit model wordt gebruikt om informatie over de fysiek buiten geplaatste verkeersborden te kunnen opslaan en gebruiken in areaalbeheerpakketten (asset management pakketten gericht op het tactische en operationele beheer).

## Use cases Gebruiksfase

### Rijden met incar-informatie

### Handhaving

### NWB
In het nationaal wegen bestand (NWB) ligt het wegennetwerk vast als netwerk van juncties en wegvakken. Het informatiemodel moet hierop aansluiten. 


## Use cases Sloopfase

### Circulair hergebruik



