# Technische Uitgangspunten

## Informatiemodellering

- Het informatiemodel MOET worden opgesteld conform de regels voor semantisch modelleren en met de relaties en concepten in de NEN 2660:2021.
- Het informatiemodel MOET waar mogelijk aangesloten op de NEN 3610 en de MIM. Bij tegenstrijdigheden geldt de NEN 2660.
- Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt. 
- Het informatiemodel MOET van alle concepten een definite geven of verwijzen naar een definitie in wetten of andere informatiemodellen. 

## Verkeersregels RVV 1990

- Het informatiemodel MOET de op een weg geldende verkeersregels, waarschuwingen, adviessnelheden en de bijbehorende analoge verkeersborden bevatten die in de [=RVV 1990=] (Reglement verkeersregels en verkeerstekens 1990) staan. </li>
- Het informatiemodel MOET de definities gebruiken uit het [=RVV 1990=].


### Adviessnelheid+
- Het informatiemodel MOET mogelijk maken dat een wegbeheerder bij een (deel van) een [=NWB-wegvak=] een adviessnelheid meegeeft, zonder dat hierbij een fysiek verkeersbord geplaatst wordt.

### Verkeersborden

1. Het informatiemodel MOET een schaalbare afbeelding van de fysieke verschijningsvorm van verkeersborden en onderborden bevatten. 
2. Het informatiemodel MOET mogelijk maken om een vrije tekst toe te voegen aan een onderbord.
3. Het informatiemodel MOET bij elk bord een link naar het bord in de [=RVV 1990=] geven.


## Netwerk

### Wegvak

De in het NWB-Wegen opgenomen geografische basisobjecten zijn [=NWB-wegvak=] en [=NWB-junctie=], aan de hand waarvan het complete Nederlandse wegennetwerk kan worden geïdentificeerd. 

Het Nationaal Wegen Bestand is mog niet tot op het niveau van een "rijstrook" gedifferentieerd; afhankelijk van de wegindeling kan een wegvak gaan over een weg met twee rijrichtingen; of over een rijbaan met meerdere rijstroken in één richting van de weg, waarbij de rijstroken niet zijn opgesplitst in afzonderlijke wegvakken. 

<dfn data-lt="NWB-Wegvak|Road element">NWB-Wegvak</dfn>
<dd>Een wegvak in het Nationaal Wegen Bestand (NWB) is een deel van een weg, dat zich tussen twee punten (juncties) bevindt. Road element conform de Europese standaard voor wegeninformatie (Geografic Data Files). Een wegvak in het NWB is een lijn met x- en y coördinaten. Elk wegvak loopt van een begin- naar een eindjunctie en kent een positieve en een negatieve richting. Welke van beide juncties als beginjunctie van het wegvak wordt benoemd, is volstrekt willekeurig. Verandering van een eigenschap van een wegvak resulteert in splitsing in twee of meerdere wegvakken. Juncties dus splitsingen van wegvakken komt voor bij gemeentegrenzen, provinciegrenzen, beheergrenzen en bij bepaalde specifieke kenmerkwijzigingen. </dd>

### Junctie

<dfn data-lt="NWB-Junctie|">NWB-Junctie</dfn>
<dd>het begin- of eindpunt van één of meer wegvakken in het Nationaal Wegen Bestand (NWB). In het NWB hebben juncties aan de hand van X- en Y-coördinaten een locatie in het digitale netwerk gekregen.</dd>

Het informatiemodel geeft verkeersregels voor de weggebruiker weer die kunnen worden toegepast op een of meer [=NWB-Wegvak=]ken in het Nationaal Wegenbestand. Daarbij worden de volgende regels gebruikt:

### Geometrische nauwkeurigheid
Het netwerk en de locaties van verkeerstekens ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke rijstrook het zich bevindt als op verschillende rijstroken verschillende regels gelden. 

### Rijrichting

Het informatiemodel geeft verkeersregels voor de weggebruiker default weer voor beide rijrichtingen indien deze in het wegvak zijn inbegrepen. Indien de verkeersregel slechts geldt voor één richting of een deel van het wegvak, moet deze worden opgesplitst per richting.


### Rijstrook
Het informatiemodel MOET het mogelijk maken om de verkeersregel te laten gelden voor één van de [=rijstroken=], die worden genummerd vanuit het midden van de weg. Ook als het [=NWB-Wegvak=] nog niet is gesplitst in rijstroken.
Als in de toekomst een [=NWB-Wegvak=] maar één rijstrook weergeeft, hoeft de nummering niet meer te worden aangeduid. 

### Beginpunt

Het informatiemodel geeft verkeersregel voor de weggebruiker default weer over de gehele lengte van het wegvak; dus van junctie tot junctie. De verkeersregel kan worden beperkt door het aangeven van een specifiek beginpunt; default loopt de verkeersregel door tot de junctie, tenzij ook een eindpunt is aangegeven. 

### Eindpunt

Het informatiemodel maakt het mogelijk om de verkeersregel te laten gelden vanaf een specifiek beginpunt; default loopt de verkeersregel door tot de junctie, tenzij ook een eindpunt is aangegeven. 


### Bord / markeringspunt
1. Het informatiemodel maakt het mogelijk om aan te duiden waar het fysieke verkeersbord / de markering zou moeten staan ten opzichte van de lengterichting van het Wegvak; default is dit op het beginpunt van de verkeersregel. 

### Grafische weergave van de borden
1. Bij elk bord en onderbord is een grafische weergave beschikbaar in het informatiemodel. 
2. Een bord wordt gevisualiseerd conform [Uitvoeringsvoorschriften BABW inzake verkeerstekens](https://wetten.overheid.nl/jci1.3:c:BWBR0009104&hoofdstuk=II&paragraaf=3&z=2012-07-01&g=2012-07-01)



### Bordlocatie
Het informatiemodel maakt het mogelijk om aan te duiden of het fysieke verkeersbord boven het Wegvak / de rijbaan / de rijstrook is gesitueerd, of naast de weg.

## Raakvlakeisen 

### NLCS
1. Om bestaande, in gebruik zijnde verkeerstekens goed te kunnen toepassen in een ontwerp voor een nieuwe weginrichting moeten deze kunnen worden ingelezen/geviewed in CAD systemen.
2. Om vanuit het bestaande werkproces een verkeersbesluit digitaal te kunnen publiceren is het nodig om levering van een CAD tekening op basis van NLCS met wegligging en borden toe te staan tijdens het registreren van verkeersbesluiten. 

### CB-NL
1. De begrippen en definities uit het [=Informatiemodel Verkeerstekens=] en Verkeersbesluiten moeten worden gelinked aan concepten in CB-NL.

### SMART Mobility

1. Voor de gebruikers is het handig, als het verkeersbesluit visueel kan worden getoond in de systemen, bijvoorbeeld het tonen van het snelheidsbord in het navigatiesysteem. Hiertoe dient het Informatiemodel Verkeersbesluiten en Verkeerstekens een grafische weergave te bevatten van de borden. 


## Historische informatie
Voor de primaire use case is het niet nodig om historische gegevens te kunnen vinden - alle actuele verkeerskundige gegevens zijn voldoende.

Voor gebruik van de digitale [=Verkeerskundige informatie=] in verkeersberekeningen en wegontwerpen is het wel noodzakelijk om te kunnen bepalen welke verkeersregels gelden, en welke borden aanwezig zijn op een bepaald tijdstip.

Ook voor publicatie van een verkeersbesluit is het handig, om een datum in de toekomst te kunnen vastleggen, waarop de verkeersregel van toepassing wordt. Daarmee kan gezorgd worden dat de data actueel en beschikbaar is op het moment van ingaan van het verkeersbesluit. 

1. Het informatiemodel dient een begin- en einddatum en -tijdstip te bevatten voor het ingaan van de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=], en voor de (geplande) plaatsing en weghalen van het bijbehorende verkeersbord. 