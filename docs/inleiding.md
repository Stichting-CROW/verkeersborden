# Inleiding


## Aanleiding

Voor het domein mobiliteit wordt gewerkt aan het beschikbaar krijgen van data over verkeersborden. De behoefte komt voort uit de digitalisering van werkprocessen van wegbeheerders en service providers om de weggebruiker te informeren. Op dit moment wordt door verschillende (markt)partijen definities gemaakt over verkeersborden.

Het ministerie I&W heeft in 2021 rondom het management van verkeersborden twee digitaliseringstrajecten lopen: 

1. Het neerzetten van een Nationaal Wegen Bestand+ ([Issue 4](https://github.com/Stichting-CROW/verkeersborden/issues/4)) en
2. Het bouwen van een verkeersbesluiten database ([Issue 5](https://github.com/Stichting-CROW/verkeersborden/issues/5))

Beide trajecten lopen tegen de uitdaging aan dat er meerdere bestanden zijn voor verkeersborden en dat deze bestanden ook nog eens zijn opgesteld vanuit verschillende contexten. Om uiteindelijk richting een goede centrale database toe te kunnen werken is een informatiemodel voor verkeersborden essentieel. 

## Doel document
Dit document beschrijft de uitgangspunten, use case en het architectuur framework voor een informatiemodel verkeersborden.

## Doel informatiemodel
Doel van het informatiemodel verkeersborden is zorgen dat verkeersborden, in de context van verkeersbesluiten, op eenduidige manier gepubliceerd kunnen worden en daarmee machine-verwerkbaar. In de toekomst, na 2023, is het doel:

Auto en automobilist kunnen veilig rijden, waarbij de auto haar snelheid en rijrichting automatisch aanpast aan de daar geldende verkeersregels (oa?) gepubliceerd conform het Informatiemodel Verkeersborden. Alle na 2022 gefabriceerde autos voor de europese markt moeten over techniek beschikken om deze techniek te ondersteunen. [lees hierover meer](https://www.consilium.europa.eu/nl/press/press-releases/2019/11/08/safer-cars-in-the-eu/)


## Scope

De scope van het "Informatiemodel Verkeersborden" is een informatiemodel voor de use case "registratie van verkeersbesluiten".


**[Issue 9](https://github.com/Stichting-CROW/verkeersborden/issues/9)** Registratie: is ook het proces van aanleveren van verkeersbesluiten binnen scope (transactie-achtige zaken, aanleveren en valideren van het verkeersbesluit); of moet een "instantie" van het verkeersbord alleen kunnen worden gepubliceerd conform het informatiemodel? (op x,y,z en x type bord met y inhoud)

Een verkeersbord geldt voor een of meerdere rijstroken: wat is de relatie met andere modellen / moet dit worden vastgelegd in het informatiemodel? [Issue 11](https://github.com/Stichting-CROW/verkeersborden/issues/11)

Wat is het doel van het informatiemodel: voor welke levensfase van een verkeersbord? [Issue 10](https://github.com/Stichting-CROW/verkeersborden/issues/10)

Verkeersborden of ook markeringen? [Issue 16](https://github.com/Stichting-CROW/verkeersborden/issues/16)


## Raakvlakken

Deze use case heeft raakvlakken met andere use cases in de levenscyclus van een verkeersbord [Issue 10](https://github.com/Stichting-CROW/verkeersborden/issues/10).

### Wegennetwerken
Vanuit Smart Mobility/verkeerskunde zien we de behoefte aan accurate en actuele informatie, waarin voor het wegennet (NWB) de attributen voor wettelijk maximum snelheid en ge- en verboden (bijvoorbeeld parkeerverbod, inhaalverbod, stopverbod) per voertuigcategorie en met de daarbij geldende uitzonderingen/nadere aanduidingen op het onderbord (tijden, alleen bij glad wegdek, etc.) gevuld zijn voor ieder individueel wegvak of zelfs nog nauwkeuriger. 
Verkeerskundig gezien is het de vraag of wegvakniveau het juist niveau van aggregatie is. Het komt regelmatig voor dat binnen een wegvak er meerdere snelheidsregimes van kracht zijn (vb: een kombord halverwege een wegvak). [Issue 11](https://github.com/Stichting-CROW/verkeersborden/issues/11)



### Planfase
* **Opstellen verkeersmodellen**: het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeerborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. ([Issue 3](https://github.com/Stichting-CROW/verkeersborden/issues/3))

### Ontwerpfase
* **Ontwerp van wegen met markering en bebording**: Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden wordt bepaald. Ook kunnen extra verkeersborden uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen. ([Issue 6](https://github.com/Stichting-CROW/verkeersborden/issues/6))

### Bouwfase
* **Bestellen van verkeersborden**; de publieke opdrachtgever of bouw- en onderhoudsaannemer moet de juiste borden kunnen bestellen bij een leverancier. Bij het bestellen worden specificaties toegevoegd. ([Issue 7](https://github.com/Stichting-CROW/verkeersborden/issues/7))
* **Produceren van verkeersborden**: de producent van verkeersborden werkt op basis van specificaties aan de verkeersborden; en voegt informatie toe over het productieproces en over onderhoudsspecificaties.
* **Contracteren plaatsing verkeersborden**: De publieke opdrachtgever besteed de plaatsing van verkeersborden conform het verkeersbesluit aan (als onderdeel van een groter project). Hierbij worden specificaties toegevoegd aan het ontworpen verkeersbord.
* **Plaatsing verkeersborden**: De bouwaannemer plaatst de verkeersborden op basis van het ontwerp en geeft de actuele geometrie door van het geplaatste verkeersbord.

### Beheerfase
* **Beheer verkeersborden**:


### Gebruiksfase
* **Rijden met incar-informatie**:
* **Handhaving**:

### Sloopfase
* **Circulair hergebruik**

## Uitgangspunten
* Het informatiemodel wordt opgesteld conform de regels voor semantisch modelleren en met de relaties en concepten in de NEN 2660:2021.
* Het architectuur framework moet generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt. 


## Leeswijzer

Dit document beschrijft de uitgangspunten, use case en het architectuur framework voor een informatiemodel verkeersborden.


Dit document bevat: 
* **Stakeholderanalyse**
Allereerst is het belangrijk om in kaart te brengen welke bouwstenen er al zijn en welke partijen er belanghebbende, “leverancier” en “afnemer” zouden kunnen worden van dit informatiemodel. Hiervoor voeren wij een krachtenveld analyse uit waarbij de relevante spelers in kaart brengen.


# Stakeholderanalyse
... Met daarbij de noodzakelijke afstemming met de relevante organisatie/gremia zoals het BIM-Loket, Geonovem, normcomissie verkeerstekens, Nationale Databank Wegverkeersgegevens en andere volgens CROW relevante gremia/organisaties).

Toevoegen welke databases en informatiemodellen bestaan per use case [issue 13](https://github.com/Stichting-CROW/verkeersborden/issues/13)



## Planfase
....

### NDW: Netwerkregistratie
Het NDW krijgt een rol in de realisatie van de netwerkregistratie. .....
[Issue 14](https://github.com/Stichting-CROW/verkeersborden/issues/14)

## Ontwerpfase


### Open standaard: NLCS
[Issue 15](https://github.com/Stichting-CROW/verkeersborden/issues/15)








