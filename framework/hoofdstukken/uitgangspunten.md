# Technische Uitgangspunten

## Informatiemodellering

- Het informatiemodel MOET worden opgesteld conform de regels voor semantisch modelleren en met de relaties en concepten in de NEN 2660:2021.
- Het informatiemodel MOET waar mogelijk aangesloten op de NEN 3610 en de MIM. Bij tegenstrijdigheden geldt de NEN 2660.
- Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt. 
- Het informatiemodel MOET van alle concepten een definite geven of verwijzen naar een definitie in wetten of andere informatiemodellen. 

## Verkeersregels RVV 1990

- Het informatiemodel MOET functionele verkeersregels en verkeersadviezen voor de weggebruiker op basis van het <a>RVV 1990</a> (Reglement verkeersregels en verkeerstekens 1990) bevatten. Aanwijzingen door verkeersregelaars zijn buiten scope van het informatiemodel. </li>
- Het informatiemodel MOET de definities gebruiken uit het <a>RVV 1990</a>.


## Adviessnelheid
Naast de wettelijk geldende verkeersregels over bijvoorbeeld de maximum snelheid zijn er veel waarschuwingsborden die indirect (voor de mens goed te interpreteren) advies geven over het matigen van de snelheid. Bijvoorbeeld gewenste lage snelheid bij donker en schemering om aanrijdingen met wild te beperken, of bij een drempel, inrit of zebrapad. Het informatiemodel geeft de mogelijkheid een adviessnelheid toe te voegen, naast de maximumsnelheid. Afhankelijk van de verkeerssituatie kan dit leiden tot een lagere snelheid langs meerdere gevaarlijke punten (bijvoorbeeld, een zebra (met bord) een inrit (zonder bord) en daarna wordt een kruispunt genaderd: over de gehele lengte kan een lagere snelheid gelden, los van de individuele waarschuwingen bij de gevaarlijke punten.

## Verkeersborden
1. Het informatiemodel geeft naast de functionele verkeersregels en verkeersadviezen ook de mogelijkheid om de fysieke verschijningsvorm van een bord met een of meerdere onderborden vast te leggen. 
2. Het informatiemodel geeft de fysieke verschijningsvorm van het bord weer conform - [issue 24](https://github.com/Stichting-CROW/verkeersborden/issues/24) Is er een bestand met afbeeldingen van wettelijk toegestane borden? Of zijn deze alleen beschreven in de wet? 
3. Bij elk bord geeft het informatiemodel een link naar de afbeelding van het bord in het [Reglement verkeersregels en verkeerstekens 1990]. 
4. Een wegbeheerder mag eigen borden toevoegen, hiervan dient een definitie en afbeelding opgesteld te zijn en als linked open data gepubliceerd op de wijze van het informatiemodel.
5. Het informatiemodel geeft naast vaste borden ook de mogelijkheid om de locatie van dynamische borden weer te geven, zodat we weggebruiker kan worden geattendeerd om hierop te letten. 

<aside class="example" title="Invloedssfeer van een bord of bord als afgeleide van een verkeersregel">
<p> De verkeerskundige die een verkeersbesluit neemt, heeft een heel gebied op het oog, waar de verkeersregels in samenhang moeten zorgen voor een goede doorstroming en veiligheid van het wegverkeer. Deze verkeerskundige zal een verkeersregel willen geven die geldt voor <ol>
  <li> Een wegvak; </li>
  <li> Een paar wegvakken (bijvoorbeeld doorlopend over kruisingen heen geldt dezelfde snelheid); </li>
  <li> Een zone (bijvoorbeeld een parkeerzone)</li></ol> 
  De verkeerskundige bedenkt daarbij waar borden en markeringen nodig zijn. </p>
  
  <p> Een <b>Wegontwerper</b> wil weten, of alle borden die nodig zijn in het ontwerp een plaats heeft gegeven. Voor de wegontwerper is het handig, om de zone te weten en de gewenste borden. </p>
  
  <p> Een <b>menselijke weggebruiker</b> wil op de locatie waar hij rijdt weten welke regel geldt: hij leest aan de borden, markeringen en de weginrichting af welke regels gelden. Deze gebruiker moet onthouden dat hij bij inrijden van een zone een bord is tegengekomen. Voor de mens maakt de digitale registratiewijze niet uit </p>
  
  <p> Een <b>incar systeem of navigatiesysteem</b> wil op de locatie waar het rijdt weten welke regel geldt: 
  <ul><li>het localiseert de locatie waar het zich bevindt, vergelijkt dat met de netwerkregistratie, weet op welk wegvak het zich bevindt en leest dan af welke regel geldt in dat wegvak. </li>
  <li> Als de verkeersregel is vastgelegd in een zone, komt er een stap bij: het systeem moet dan bepalen of het zich binnen of buiten een zone bevindt, en welke regels in deze zone gelden. Voor een dergelijk systeem is registratie van verkeersregels per wegvak beter dan per zone. </li><ul></p>
  
  <p> Een <b>wegbeheerder<b> wil weten, of alle borden die nodig zijn nog steeds aanwezig zijn. De wegbeheerder heeft per zone de locatie nodig van de borden die aanwezig zouden moeten zijn om te kunnen controleren of de borden er zijn. Voor de wegbeheerder maakt het niet uit of een bord aan een wegvak is gekoppeld, of aan een zone, de borden zijn als losse data voldoende. </p> </aside>

  <div class="issue" data-number="77"></div>


## Verkeersnetwerk



### Wegvak

De in het NWB-Wegen opgenomen geografische basisobjecten zijn [[=wegvak=]] en [[=junctie=]], aan de hand waarvan het complete Nederlandse wegennetwerk kan worden geïdentificeerd. 

Het Nationaal Wegen Bestand is mog niet tot op het niveau van een "rijstrook" gedifferentieerd; afhankelijk van de wegindeling kan een wegvak gaan over een weg met twee rijrichtingen; of over een rijbaan met meerdere rijstroken in één richting van de weg, waarbij de rijstroken niet zijn opgesplitst in afzonderlijke wegvakken. 

<aside class="def"> Een wegvak in het Nationaal Wegen Bestand (NWB) is een deel van een weg, dat zich tussen twee punten (juncties) bevindt. Een wegvak in het NWB is een Road element conform de Europese standaard voor wegeninformatie (Geografic Data Files). Een wegvak in het NWB is een lijn met x- en y coördinaten. Elk wegvak loopt van een begin- naar een eindjunctie en kent een positieve en een negatieve richting. Welke van beide juncties als beginjunctie van het wegvak wordt benoemd, is volstrekt willekeurig. Verandering van een eigenschap van een wegvak resulteert in splitsing in twee of meerdere wegvakken. Juncties dus splitsingen van wegvakken komt voor bij gemeentegrenzen, provinciegrenzen, beheergrenzen en bij bepaalde specifieke kenmerkwijzigingen. </aside>

### Junctie

<aside class="def"> Een junctie is het begin- of eindpunt van één of meer wegvakken in het Nationaal Wegen Bestand (NWB). In het NWB hebben juncties aan de hand van X- en Y-coördinaten een locatie in het digitale netwerk gekregen. </aside>




Het informatiemodel geeft verkeersregels voor de weggebruiker weer ten opzichte van een [[=Wegvak=]] in het Nationaal Wegenbestand. Daarbij worden de volgende regels gebruikt:

### Geometrische nauwkeurigheid
Het netwerk en de locaties van verkeerstekens ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke rijstrook het zich bevindt als op verschillende rijstroken verschillende regels gelden. 

### Rijrichting

Het informatiemodel geeft verkeersregels voor de weggebruiker default weer voor beide rijrichtingen indien deze in het wegvak zijn inbegrepen. Indien de verkeersregel slechts geldt voor één richting of een deel van het wegvak, moet deze worden opgesplitst per richting.


### Rijstrook
Het informatiemodel maakt het mogelijk om de verkeersregel te laten gelden voor één van de rijstroken, die worden genummerd vanuit het midden van de weg. 


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
2. Om vanuit het bestaande werkproces een verkeersbesluit digitaal te kunnen publiceren is het handig om levering van een CAD tekening op basis van NLCS met wegligging en verkeerstekens toe te staan tijdens het registreren van verkeersbesluiten. 

### CB-NL
1. De begrippen en definities uit het Informatiemodel Verkeerstekens en Verkeersbesluiten moeten worden gelinked aan concepten in CB-NL.

### SMART Mobility

1. Voor de gebruikers is het handig, als het verkeersbesluit visueel kan worden getoond in de systemen, bijvoorbeeld het tonen van het snelheidsbord in het navigatiesysteem. Hiertoe dient het Informatiemodel Verkeersbesluiten en Verkeerstekens een grafische weergave te bevatten van de borden. 


## Historische informatie
Voor de primaire use case is het niet nodig om historische gegevens te kunnen vinden - alle actuele verkeerskundige gegevens zijn voldoende.

Voor gebruik van de digitale verkeerskundige informatie in verkeersberekeningen en wegontwerpen is het wel noodzakelijk om te kunnen bepalen welke verkeersregels gelden, en welke borden aanwezig zijn op een bepaald tijdstip.

Ook voor publicatie van een verkeersbesluit is het handig, om een datum in de toekomst te kunnen vastleggen, waarop de verkeersregel van toepassing wordt. Daarmee kan gezorgd worden dat de data actueel en beschikbaar is op het moment van ingaan van het verkeersbesluit. 

1. Het informatiemodel dient een begin- en einddatum en -tijdstip te bevatten voor het ingaan van de verkeersregel, waarschuwing of snelheidsadvies, en voor de (geplande) plaatsing en weghalen van het bijbehorende verkeersbord. 