# Technische Uitgangspunten


## Informatiemodellering

* Het informatiemodel wordt opgesteld conform de regels voor semantisch modelleren en met de relaties en concepten in de NEN 2660:2021.
* Waar mogelijk wordt aangesloten op de NEN 3610 en de MIM. Bij tegenstrijdigheden geldt de NEN 2660.
* Het architectuur framework moet generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt. 
* In het informatiemodel worden definities opgenomen van concepten of wordt verwezen naar definities in wetten of andere informatiemodellen.


## Verkeersinstructies RVV 1990
1. Het informatiemodel geeft functionele verkeersinstructies voor de weggebruiker op basis van het [RVV 1990](https://wetten.overheid.nl/BWBR0004825/2021-07-01) (Reglement verkeersregels en verkeerstekens 1990). Aanwijzingen door verkeersregelaars zijn buiten scope van het informatiemodel. 
2. Het informatiemodel gebruikt de definities uit het [RVV 1990](https://wetten.overheid.nl/BWBR0004825/2021-07-01)


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

De in het NWB-Wegen opgenomen geografische basisobjecten zijn ‘wegvak’ en ‘junctie’, aan de hand waarvan het complete Nederlandse wegennetwerk kan worden geïdentificeerd. Elk wegvak loopt van een begin- naar een eindjunctie en kent een positieve en een negatieve richting. Het Nationaal Wegen Bestand is mog niet tot op het niveau van een "rijstrook" gedifferentieerd; afhankelijk van de wegindeling kan een wegvak gaan over een weg met twee rijrichtingen; of over een rijbaan met meerdere rijstroken in één richting van de weg, waarbij de rijstroken niet zijn opgesplitst in afzonderlijke wegvakken. 

Het informatiemodel geeft verkeersinstructies voor de weggebruiker weer ten opzichte van een "Wegvak" in het Nationaal Wegenbestand. Daarbij worden de volgende regels gebruikt:

### Rijrichting

Het informatiemodel geeft verkeersinstructies voor de weggebruiker default weer voor beide rijrichtingen indien deze in het wegvak zijn inbegrepen. Indien de instructie slechts geldt voor één richting of een deel van het wegvak, moet deze worden opgesplitst per richting.


### Rijstrook
Het informatiemodel maakt het mogelijk om de verkeersinstructie te laten gelden voor één van de rijstroken, die worden genummerd vanuit het midden van de weg. 


### Beginpunt

Het informatiemodel geeft verkeersinstructies voor de weggebruiker default weer over de gehele lengte van het wegvak; dus van junctie tot junctie. De verkeersinstructie kan worden beperkt door het aangeven van een specifiek beginpunt; default loopt de instructie door tot de junctie, tenzij ook een eindpunt is aangegeven. 

### Eindpunt

Het informatiemodel maakt het mogelijk om de verkeersinstructie te laten gelden vanaf een specifiek beginpunt; default loopt de instructie door tot de junctie, tenzij ook een eindpunt is aangegeven. 


### Bord / markeringspunt
Het informatiemodel maakt het mogelijk om aan te duiden waar het fysieke verkeersbord / de markering zou moeten staan ten opzichte van de lengterichting van het Wegvak; default is dit op het beginpunt van de verkeersinstructie. 


### Bordlocatie
Het informatiemodel maakt het mogelijk om aan te duiden of het fysieke verkeersbord boven het Wegvak / de rijbaan / de rijstrook is gesitueerd, of naast de weg.


# Organisatorische uitgangspunten
BOMOS


