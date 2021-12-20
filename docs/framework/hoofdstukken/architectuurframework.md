# Technische uitwerking

## Informatiemodel

Er bestaan verschillende andere informatiemodellen die verkeersbesluiten, wegkenmerken of verkeersborden beschrijven. 
Dat zijn raakvlakken of juist ijkingsbronnen om het Informatiemodel Verkeerstekens en verkeersbesluiten beter vorm te geven.

### TN-ITS

Wijzigingen aan wegkenmerken worden beschreven voor het TN-ITS systeem o.b.v. de norm **CEN/TS 17268**:2018: 
_Intelligent transport systems - ITS spatial data - Data exchange on changes in road attributes_.

De norm is te koop bij NEN à ca. 80 EUR incl. BTW.
De GML schema's die eraan ten grondslag liggen zijn wel beschikbaar op https://tn-its.eu/standardisation. 

<div class="issue" data-number="59"></div>

### Inspire

De dataspecificaties van INSPIRE, infrastructuur voor ruimtelijke informatie in Europa, zijn openbaar beschreven op 
https://inspire.ec.europa.eu/Themes/115/2892 met UML-diagrammen en uitgebreide technische documentatie.

Alleen het Wegennetwerk, uit het thema Transportnetwerken is hierbij relevant.
De FeatureType supertype _TransportProperty_ is relevant voor bijna alle wegkenmerken.

### OSLO

De Vlaamse overheid heeft binnen het project Lokale Besluiten als Gelinkte Open Data verschillende vocabulaira en applicatieprofielen ontwikkeld die (deels) overlappen met de doelen van het Informatiemodel Verkeerstekens en verkeersbesluiten.

Er wordt gebruik gemaakt van vocabularia die de herbruikbare concepten beschrijven. 
De applicatieprofielen stellen dan vereisten aan eigenschappen van en relaties tussen die concepten.

- https://data.vlaanderen.be/ns/openbaardomein/infrastructuur
- https://data.vlaanderen.be/ns/mobiliteit
- https://data.vlaanderen.be/ns/besluit

#### _Besluiten Mobiliteit_

https://data.vlaanderen.be/doc/applicatieprofiel/besluit-mobiliteit/

> Dit applicatieprofiel definieert een specificatie voor de publicatie van inname- en signalisatievergunningen en aanvullende reglementen van een bestuursorgaan .

#### _Wegenregister_

https://data.vlaanderen.be/doc/applicatieprofiel/wegenregister/

> De applicatie waarop dit profiel betrekking heeft is het Wegenregister. Het Wegenregister is het middenschalig referentiebestand van de wegen in Vlaanderen die beheerd zijn door het gewest, de provincies, de gemeenten of andere instanties en die openbaar toegankelijk zijn. Het moet alle (openbaar toegankelijke) wegen van Vlaanderen bevatten, met bijbehorende attribuutgegevens. Het bestand heeft een middenschalige precisie.

####  _Verkeersborden_

https://data.vlaanderen.be/doc/applicatieprofiel/verkeersborden/

> Dit applicatieprofiel definieert een specificatie voor de uitwisseling van [statische, verticale] verkeersbordinformatie die geplaatst zijn of worden op het openbaar domein.

> Doorheen de verschillende werkgroepen is gekomen tot een model dat bruikbaar is in de toepassingscontexten van zowel de regelgeving als technisch onderhoud.


### Datex II

https://www.datex2.eu/, Gepubliceerd als CEN 16157, deel 1 t/m 9. 
Deze norm is niet vrij beschikbaar en zijn te koop bij NEN à ca. 100 p.s. tot ca. 250 EUR excl. BTW p.s. 
Voor Nederlands is er door NDW een Nederlands profiel opgesteld. Mogelijke relevante aspecten:

- beborde omleiding
- snelheidsbeperkingen (`SpeedManagement`)

De focus bij Datex ligt eerder op incidenten, dynamische borden en de huidige situatie, niet op de besluitvorming en statische borden.

### Toegankelijk, security, privacy, duurzaamheid

Een goed informatiemodel heeft ook gedocumenteerde afwegingen gemaakt op het gebied van:

- toegankelijkheid en duurzaamheid, bijv:

  Zijn de specficiaties duidelijk genoeg en behapbaar genoeg dat grote en kleine spelers op gelijkwaardige voet informatie kunnen leveren volgens het informatiemodel?
  Zijn de specificaties geschikt alleen voor de Nederlandse context in het huidige jaar -- of zijn ze wereldwijd geschikt voor Verkeerstekens en verkeersbesluiten die ook in het verleden zijn genomen.
  Is het geschikt voor toekomstige toepassingen, doordat het eenvoudig uit te breiden is?

- security en privacy, bijv:

  Stelt de specificatie niet te veel evt. privacygevoelige informatie verplicht?
  Schrijft de specificatie voorzorgsmaatregelen voor t.b.v. informatiebeveiliging?
  Worden privacygevoelige elementen van het informatiemodel expliciet genoemd?

### Publicatieplatform

Een informatiemodel kan pas marktadoptie krijgen als de specificaties ervan in verschillende vrije formaten vrij beschikbaar zijn.
Dat houdt in dat het Informatiemodel Verkeerstekens en verkeersbesluiten open en publiek gepubliceerd moet worden én dat het zowel in mens- als machineleesbare formaten wordt gepubliceerd.

In de beschrijving van het informatiemodel moeten gemaakte keuzes beschreven worden, zodat implementaties en toekomstige uitbreidingen afgewogen keuzes kunnen maken.
Het informatiemodel vermeldt expliciet welke onderdelen normatief zijn, en welke niet-normatief (informatief).

Een voorbeeld van een vrij, machineleesbaar formaat is een RDF-ontologie.
Een voorbeeldimplementatie is aanbevelenswaardig, omdat het aantoont dat de specificatie van het informatiemodel werkbaar is.
Voorbeelden van data conform het informatiemodel helpen de implementatie ervan ook. 

### API's en uitwisselformaten

Het informatiemodel dient los te staan van specifieke uitwisselingsstandaarden, zoals API's en uitwisselformaten.
Dat komt het hergebruik van het Informatiemodel ten goede, als er niet technologie-specifieke beperkingen zijn gemaakt.

## Voorbeeld- of normafbeeldingen borden en onderborden

Gaat niet om wat NBd (Nationale Bewegwijzeringsdienst) publiceert over concrete borden aan een concrete weg, maar om referentievectorbestanden van verkeersborden en -tekens niet zijnde wegwijzers en straatnaamborden.

### Formaten

- Het formaat is SVG, dat zijn schaalbare vectorafbeeldingen die op het web en in print altijd scherp blijven.
- Merk op dat 

### Publicatieplatform

Een vrije licentie is noodzakelijk om hergebruik van de afbeeldingen te stimulren. 

## Transacties


## Informatieleveringsspecificatie
De wegbeheerder heeft voor het aanleveren van het verkeersbesluit twee "Informatieleveringsspecificaties" nodig. Een voor de wijziging in de netwerkdata, en een voor de wijziging van de funvtionele instructie voor het gebruik van het netwerk en de bijbehorende verkeerstekens. 

In deze Informatieleveringsspecificaties staat (voor een machine leesbaar):
- Welke informatie minimaal verplicht is uit het Informatiemodel Verkeerstekens en verkeersbesluiten of het model van het verkeersnetwerk. 
- Welke informatie mag worden toegevoegd uit het Informatiemodel Verkeerstekens en verkeersbesluiten of het model van het verkeersnetwerk. 
- In welke formaten de wijziging kan worden aangeleverd
- Of informatie mag worden toegevoegd uit een eigen informatiemodel







