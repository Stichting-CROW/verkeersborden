# Technische Uitgangspunten

## Informatiemodellering

1. Het informatiemodel MOET worden opgesteld conform de regels voor semantisch modelleren en met de relaties en concepten in de NEN 2660:2021.
2. Het informatiemodel MOET waar mogelijk aangesloten op de NEN 3610 en de MIM. Bij tegenstrijdigheden geldt de NEN 2660.
3. Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt. 
4. Het informatiemodel MOET van alle concepten een definite geven of verwijzen naar een definitie in wetten of andere informatiemodellen. 

## Verkeersregels RVV 1990

1. Het informatiemodel MOET de types en definities van de [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=] bevatten die in de [=RVV 1990=] (Reglement verkeersregels en verkeerstekens 1990) staan. </li>
2. Het informatiemodel MOET de definities gebruiken uit het [=RVV 1990=].


## Adviessnelheid+
1. Het informatiemodel MOET mogelijk maken dat een wegbeheerder bij een (deel van) een [=NWB-wegvak=] een [=adviessnelheid=] meegeeft, zonder dat hierbij een fysiek verkeersbord geplaatst wordt.

### Werkingsgebied 

1. Het informatiemodel MOET mogelijk maken om het werkingsgebied van een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] aan te duiden voor een of meerdere [=NWB-wegvakken=]; de default situatie is dat het werkingsgebied het gehele wegvak beslaat, in beide richtingen.
2. Het informatiemodel MOET mogelijk maken om het werkingsgebied van een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] aan te duiden voor een zone:
* De [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] wordt direct aan de wegvakken in de zone verbonden
* De [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] krijgt daarnaast een relatie met een "zone"
* De "zone" MAG een relatie hebben naar een geometrisch object (vlak), dit is niet verplicht.  
<li> Een zone (bijvoorbeeld een parkeerzone)</li></ol> 
<p>De verkeerskundige bedenkt daarbij waar verkeersborden en markeringen nodig zijn. </p>
<p> Een <b>wegontwerper</b> wil weten, of alle verkeersborden die nodig zijn in het ontwerp een plaats heeft gegeven. Voor de wegontwerper is het handig, om de zone te weten en de gewenste verkeersborden. </p>
<p> Een <b>[=weggebruiker=]</b> wil op de locatie waar hij rijdt weten welke regel geldt: hij leest aan de verkeersborden, markeringen en de weginrichting af welke regels gelden. Deze gebruiker moet onthouden dat hij bij inrijden van een zone een verkeersbord is tegengekomen. Voor de mens maakt de digitale registratiewijze niet uit </p>
<p> Een <b>incar systeem of navigatiesysteem</b> wil op de locatie waar het rijdt weten welke regel geldt: 
<ul><li>het localiseert de locatie waar het zich bevindt, vergelijkt dat met de netwerkregistratie, weet op welk wegvak het zich bevindt en leest dan af welke regel geldt in dat wegvak. </li>
<li> Als de verkeersregel is vastgelegd in een zone, komt er een stap bij: het systeem moet dan bepalen of het zich binnen of buiten een zone bevindt, en welke regels in deze zone gelden. Voor een dergelijk systeem is registratie van verkeersregels per wegvak beter dan per zone. </li><ul></p>
<p> Een <b>wegbeheerder<b> wil weten, of alle verkeersborden die nodig zijn nog steeds aanwezig zijn. De wegbeheerder heeft per zone de locatie nodig van de verkeersborden die aanwezig zouden moeten zijn om te kunnen controleren of de verkeersborden er zijn. Voor de wegbeheerder maakt het niet uit of een verkeersbord aan een wegvak is gekoppeld, of aan een zone, de verkeersborden zijn als losse data voldoende. </p> </aside>

## Verkeersborden

1. Het informatiemodel MOET de types en definities van de verkeersborden bevatten die in de [=RVV 1990=] (Reglement verkeersregels en verkeerstekens 1990) staan.
2. Het informatiemodel MOET de relaties bevatten tussen de types verkeersborden en de bijbehorende types [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=].
3. Het informatiemodel MOET een schaalbare afbeelding van de fysieke verschijningsvorm van verkeersborden en onderborden bevatten. 

### Onderborden
1. Het informatiemodel MOET mogelijk maken om een vrije tekst toe te voegen aan een onderbord.



## Wegennetwerk

Het informatiemodel MOET de mogelijkheid bieden om de [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] te laten gelden voor (gedeeltes van)  [=NWB-Wegvakken=] in het [=Nationaal Wegen Bestand=]. Daarbij worden de volgende regels gebruikt:

### Geometrische nauwkeurigheid
Het netwerk en de locaties van verkeersborden ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke rijstrook het zich bevindt als op verschillende rijstroken verschillende regels gelden. 

### Rijrichting

Het informatiemodel geeft verkeersregels voor de [=weggebruiker=] default weer voor beide rijrichtingen indien deze in het wegvak zijn inbegrepen. Indien de verkeersregel slechts geldt voor één richting of een deel van het wegvak, moet deze worden opgesplitst per richting.


### Rijstrook
Het informatiemodel MOET het mogelijk maken om de verkeersregel te laten gelden voor één van de [=rijstroken=], die worden genummerd vanuit het midden van de weg. Ook als het [=NWB-Wegvak=] nog niet is gesplitst in rijstroken.
Als in de toekomst een [=NWB-Wegvak=] maar één rijstrook weergeeft, hoeft de nummering niet meer te worden aangeduid. 

### Beginpunt

Het informatiemodel geeft verkeersregel voor de [=weggebruiker=] default weer over de gehele lengte van het wegvak; dus van junctie tot junctie. De verkeersregel kan worden beperkt door het aangeven van een specifiek beginpunt; default loopt de verkeersregel door tot de junctie, tenzij ook een eindpunt is aangegeven. 

### Eindpunt

Het informatiemodel maakt het mogelijk om de verkeersregel te laten gelden vanaf een specifiek beginpunt; default loopt de verkeersregel door tot de junctie, tenzij ook een eindpunt is aangegeven. 


### verkeersbord / markeringspunt
1. Het informatiemodel maakt het mogelijk om aan te duiden waar het fysieke verkeersbord / de markering zou moeten staan ten opzichte van de lengterichting van het Wegvak; default is dit op het beginpunt van de verkeersregel. 

### Grafische weergave van de verkeersborden
1. Bij elk verkeersbord en onderbord is een grafische weergave beschikbaar in het informatiemodel. 
2. Een verkeersbord wordt gevisualiseerd conform [Uitvoeringsvoorschriften BABW inzake verkeerstekens](https://wetten.overheid.nl/jci1.3:c:BWBR0009104&hoofdstuk=II&paragraaf=3&z=2012-07-01&g=2012-07-01)



### verkeersbordlocatie
Het informatiemodel maakt het mogelijk om aan te duiden of het fysieke verkeersbord boven het Wegvak / de rijbaan / de rijstrook is gesitueerd, of naast de weg.

## Raakvlakeisen 

### NLCS
1. Om bestaande, in gebruik zijnde verkeersborden goed te kunnen toepassen in een ontwerp voor een nieuwe weginrichting moeten deze kunnen worden ingelezen/geviewed in CAD systemen.
2. Om vanuit het bestaande werkproces een verkeersbesluit digitaal te kunnen publiceren is het nodig om levering van een CAD tekening op basis van NLCS met wegligging en verkeersborden toe te staan tijdens het registreren van verkeersbesluiten. 

### CB-NL
1. De begrippen en definities uit het [=Informatiemodel Verkeerstekens=] en Verkeersbesluiten moeten worden gelinked aan concepten in CB-NL.

### SMART Mobility

1. Voor de gebruikers is het handig, als het verkeersbesluit visueel kan worden getoond in de systemen, bijvoorbeeld het tonen van het snelheidsbord in het navigatiesysteem. Hiertoe dient het [=Informatiemodel Verkeerstekens=] een grafische weergave te bevatten van de verkeersborden. 


## Historische informatie
Voor de primaire use case is het niet nodig om historische gegevens te kunnen vinden - alle actuele verkeerskundige gegevens zijn voldoende.

Voor gebruik van de digitale [=Verkeerskundige informatie=] in verkeersberekeningen en wegontwerpen is het wel noodzakelijk om te kunnen bepalen welke verkeersregels gelden, en welke verkeersborden aanwezig zijn op een bepaald tijdstip.

Ook voor publicatie van een verkeersbesluit is het handig, om een datum in de toekomst te kunnen vastleggen, waarop de verkeersregel van toepassing wordt. Daarmee kan gezorgd worden dat de data actueel en beschikbaar is op het moment van ingaan van het verkeersbesluit. 

1. Het informatiemodel dient een begin- en einddatum en -tijdstip te bevatten voor het ingaan van de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=], en voor de (geplande) plaatsing en weghalen van het bijbehorende verkeersbord. 