# Technische Uitgangspunten


<section>
  <h2>Informatiemodellering</h2>
  <p> <ul> <li> Het informatiemodel MOET worden opgesteld conform de regels voor semantisch modelleren en met de relaties en concepten in de NEN 2660:2021. </li>
<li> Het informatiemodel MOET waar mogelijk aangesloten op de NEN 3610 en de MIM. Bij tegenstrijdigheden geldt de NEN 2660. </li>
<li> Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt.  </li>
<li> Het informatiemodel MOET van alle concepten een definite geven of verwijzen naar een definitie in wetten of andere informatiemodellen. </li></ul></p>
</section>
<section id="conformance"></section>


<section>
<h2>Verkeersinstructies RVV 1990</h2>
  <p> <ul> <li> Het informatiemodel MOET functionele verkeersinstructies voor de weggebruiker op basis van het <a>RVV 1990</a> (Reglement verkeersregels en verkeerstekens 1990). Aanwijzingen door verkeersregelaars zijn buiten scope van het informatiemodel. </li>
<li> Het informatiemodel MOET de definities gebruiken uit het <a>RVV 1990</a> </li></ul></p>
</section>
<section id="conformance"></section>


## Adviessnelheid
Naast de wettelijk geldende verkeersinstructie over bijvoorbeeld de maximum snelheid zijn er veel waarschuwingsborden die indirect (voor de mens goed te interpreteren) advies geven over het matigen van de snelheid. Bijvoorbeeld gewenste lage snelheid bij donker en schemering om aanrijdingen met wild te beperken, of bij een drempel, inrit of zebrapad. Het informatiemodel geeft de mogelijkheid een adviessnelheid toe te voegen, naast de maximumsnelheid. Afhankelijk van de verkeerssituatie kan dit leiden tot een lagere snelheid langs meerdere gevaarlijke punten (bijvoorbeeld, een zebra (met bord) een inrit (zonder bord) en daarna wordt een kruispunt genaderd: over de gehele lengte kan een lagere snelheid gelden, los van de individuele waarschuwingen bij de gevaarlijke punten.

## Verkeersborden
1. Het informatiemodel geeft naast de functionele verkeersinstructies ook de mogelijkheid om de fysieke verschijningsvorm van een bord met een of meerdere onderborden vast te leggen. 
2. Het informatiemodel geeft de fysieke verschijningsvorm van het bord weer conform - [issue 24](https://github.com/Stichting-CROW/verkeersborden/issues/24) Is er een bestand met afbeeldingen van wettelijk toegestane borden? Of zijn deze alleen beschreven in de wet? 
3. Bij elk bord geeft het informatiemodel een link naar de afbeelding van het bord in het [Reglement verkeersregels en verkeerstekens 1990]. 
4. Een wegbeheerder mag eigen borden toevoegen, hiervan dient een definitie en afbeelding opgesteld te zijn en als linked open data gepubliceerd op de wijze van het informatiemodel.
5. Het informatiemodel geeft naast vaste borden ook de mogelijkheid om de locatie van dynamische borden weer te geven, zodat we weggebruiker kan worden geattendeerd om hierop te letten. 


## Verkeersnetwerk



### Wegvak

De in het NWB-Wegen opgenomen geografische basisobjecten zijn [[=wegvak=]] en [[=junctie=]], aan de hand waarvan het complete Nederlandse wegennetwerk kan worden geïdentificeerd. 

Het Nationaal Wegen Bestand is mog niet tot op het niveau van een "rijstrook" gedifferentieerd; afhankelijk van de wegindeling kan een wegvak gaan over een weg met twee rijrichtingen; of over een rijbaan met meerdere rijstroken in één richting van de weg, waarbij de rijstroken niet zijn opgesplitst in afzonderlijke wegvakken. 

<aside class="def"> Een wegvak in het Nationaal Wegen Bestand (NWB) is een deel van een weg, dat zich tussen twee punten (juncties) bevindt. Een wegvak in het NWB is een Road element conform de Europese standaard voor wegeninformatie (Geografic Data Files). Een wegvak in het NWB is een lijn met x- en y coördinaten. Elk wegvak loopt van een begin- naar een eindjunctie en kent een positieve en een negatieve richting. Welke van beide juncties als beginjunctie van het wegvak wordt benoemd, is volstrekt willekeurig. Verandering van een eigenschap van een wegvak resulteert in splitsing in twee of meerdere wegvakken. Juncties dus splitsingen van wegvakken komt voor bij gemeentegrenzen, provinciegrenzen, beheergrenzen en bij bepaalde specifieke kenmerkwijzigingen. </aside>

### Junctie

<aside class="def"> Een junctie is het begin- of eindpunt van één of meer wegvakken in het Nationaal Wegen Bestand (NWB). In het NWB hebben juncties aan de hand van X- en Y-coördinaten een locatie in het digitale netwerk gekregen. </aside>




Het informatiemodel geeft verkeersinstructies voor de weggebruiker weer ten opzichte van een [[=Wegvak=]] in het Nationaal Wegenbestand. Daarbij worden de volgende regels gebruikt:

### Geometrische nauwkeurigheid
Het netwerk en de locaties van verkeerstekens ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke rijstrook het zich bevindt als op verschillende rijstroken verschillende regels gelden. 

### Rijrichting

Het informatiemodel geeft verkeersinstructies voor de weggebruiker default weer voor beide rijrichtingen indien deze in het wegvak zijn inbegrepen. Indien de instructie slechts geldt voor één richting of een deel van het wegvak, moet deze worden opgesplitst per richting.


### Rijstrook
Het informatiemodel maakt het mogelijk om de verkeersinstructie te laten gelden voor één van de rijstroken, die worden genummerd vanuit het midden van de weg. 


### Beginpunt

Het informatiemodel geeft verkeersinstructies voor de weggebruiker default weer over de gehele lengte van het wegvak; dus van junctie tot junctie. De verkeersinstructie kan worden beperkt door het aangeven van een specifiek beginpunt; default loopt de instructie door tot de junctie, tenzij ook een eindpunt is aangegeven. 

### Eindpunt

Het informatiemodel maakt het mogelijk om de verkeersinstructie te laten gelden vanaf een specifiek beginpunt; default loopt de instructie door tot de junctie, tenzij ook een eindpunt is aangegeven. 


### Bord / markeringspunt
1. Het informatiemodel maakt het mogelijk om aan te duiden waar het fysieke verkeersbord / de markering zou moeten staan ten opzichte van de lengterichting van het Wegvak; default is dit op het beginpunt van de verkeersinstructie. 

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


