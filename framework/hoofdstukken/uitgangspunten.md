# Technische Uitgangspunten

## Informatiemodellering

* Het informatiemodel MOET worden opgesteld conform de regels voor semantisch modelleren en met de relaties en concepten in de NEN 2660:2021.
* Het informatiemodel MOET waar mogelijk aangesloten op de NEN 3610 en de MIM. Bij tegenstrijdigheden geldt de NEN 2660.
* Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt. 
* Het informatiemodel MOET van alle concepten een definite geven of verwijzen naar een definitie in wetten of andere informatiemodellen. 

## RVV 1990
* Het informatiemodel MOET de definities gebruiken uit het [=RVV 1990=].

### Verkeersregels 

* Het informatiemodel MOET de types en definities van de [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=] bevatten die in de [=RVV 1990=] (Reglement verkeersregels en verkeerstekens 1990) staan. 
* Het informatiemodel MOET de relaties bevatten tussen de types verkeersborden en de bijbehorende types [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=]. 

### Verkeersborden

* Het informatiemodel MOET de types en definities van de verkeersborden bevatten die in de [=RVV 1990=] (Reglement verkeersregels en verkeerstekens 1990) staan.
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden of een bord bedoeld is als [=voorwaarschuwingsbord=].
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden of een bord bedoeld is als [=herhalingsbord=].

<dfn data-lt="Voorwaarschuwingsbord">Voorwaarschuwingsbord</dfn>
<dd>Een op enige afstand voor het bord geplaatst identiek bord van bijlage 1 van het RVV 1990, met een onderbord waarop een afstandsaanduiding is vermeld. Definitie conform de [=BABW=].</dd>

<dfn data-lt="Herhalingsbord">Herhalingsbord</dfn>
<dd>Een bord geplaatst ter herinnering aan eenzelfde bord dat aan het begin van een en hetzelfde wegvak geplaatst is. Definitie conform de [=BABW=].</dd>


#### Bordlocatie
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden voor welke rijrichting het fysieke verkeersbord bedoeld is, door de [NWM-junctie] op het startpunt van de rijrichting aan te duiden.
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat gemeten in meters vanaf de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat: boven de weg, of links of rechts naast de weg.

<div class="issue" data-number="145"></div>

#### Bordafbeelding
* Het informatiemodel MOET een schaalbare afbeelding van de fysieke verschijningsvorm van verkeersborden en onderborden bevatten. 
* De afbeeldingen van de borden MOETEN gevisualiseerd zijn conform de [=BABW=]:


#### Onderborden
* Het informatiemodel MOET de types en definities van onderborden definiëren die volgen uit de [=RVV 1990=].
* Het informatiemodel MOET de mogelijkheid bieden om een niet nader aangeduid onderbord te gebruiken met een vrij in te vullen tekst.
* Het informatiemodel MOET de relaties bevatten tussen de types verkeersborden en de bijbehorende types onderborden.

### Adviessnelheid+
* Het informatiemodel MOET de mogelijkheid bieden bij een (deel van) een [=NWB-wegvak=] een [=adviessnelheid=] mee te geven, zonder dat hierbij een fysiek verkeersbord geplaatst wordt.

## Werkingslengte
* Het informatiemodel MOET aansluiten op het informatiemodel van het [=NWB=] om te zorgen dat [=Verkeerskundige informatie=] gekoppeld kan worden aan het juiste wegvak en de juiste richting in het wegvak.
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] van toepassing te laten zijn op een of meerdere [=NWB-wegvakken=]; deze wegvakken kunnen één 
* Het informatiemodel MOET als default situatie hebben dat het werkingsgebied het gehele [=NWB-wegvak=] beslaat, in beide richtingen en van [NWB-junctie] tot [NWB-junctie].
* Het informatiemodel MOET de mogelijkheid bieden om de [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] te laten gelden voor een richting of een gedeelte van een [=NWB-Wegvak=].

<dfn data-lt="Werkingslengte">Werkingslengte</dfn>
<dd>De lengte in het wegvak waarvoor een [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] met bijbehorend verkeersbord geldt.</dd>


### Beginpunt
* Het informatiemodel MOET als default situatie hebben dat de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] start op de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] te laten gelden vanaf een specifiek beginpunt gemeten in meters vanaf de [NWB-junctie].

Default start 

### Eindpunt
* Het informatiemodel MOET als default situatie hebben dat de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] eindigt op de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] te laten gelden tot een specifiek eindpunt op x lengte ná de [NWB-junctie]. 



## Rijrichting
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden vanaf welke [NWB-junctie] een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt, indien deze alleen in één richting geldt. 

## Rijstrook
* Het informatiemodel MOET de mogelijkheid bieden om de verkeersregel te laten gelden voor één van de [=rijstroken=], die worden genummerd vanuit het midden van de weg. Ook als het [=NWB-Wegvak=] nog niet is gesplitst in rijstroken.

Als in de toekomst een [=NWB-Wegvak=] maar één rijstrook weergeeft, hoeft de nummering niet meer te worden aangeduid. 

## Zone
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] van toepassing te laten zijn op een zone:
    * De [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] wordt direct aan de wegvakken in de zone verbonden
    * De [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] krijgt daarnaast een relatie met een "zone"
    * De "zone" MAG een relatie hebben naar een geometrisch object (vlak), dit is niet verplicht. 

Omdat de verkeersborden al gerelateerd zijn aan een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=], is het niet nodig om deze ook te koppelen aan een zone.


### CB-NL
* De begrippen en definities uit het [=Informatiemodel Verkeerstekens=] en Verkeersbesluiten MOETEN worden gelinked aan concepten in CB-NL.



## Ingangsdatum
Voor de primaire use case is het niet nodig om historische gegevens te kunnen vinden - alle actuele verkeerskundige gegevens zijn voldoende.

Voor gebruik van de digitale [=Verkeerskundige informatie=] in verkeersberekeningen en wegontwerpen is het wel noodzakelijk om te kunnen bepalen welke verkeersregels gelden, en welke verkeersborden aanwezig zijn op een bepaald tijdstip.

Ook voor publicatie van een verkeersbesluit is het handig, om een datum in de toekomst te kunnen vastleggen, waarop de verkeersregel van toepassing wordt. Daarmee kan gezorgd worden dat de data actueel en beschikbaar is op het moment van ingaan van het verkeersbesluit. 

* Het informatiemodel MOET de mogelijkheid bieden om een begin- en einddatum en -tijdstip aan te duiden voor het ingaan van de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=], en voor de (geplande) plaatsing en weghalen van het bijbehorende verkeersbord. 