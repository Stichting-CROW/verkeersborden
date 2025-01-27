# Use case


<aside class="note" title="Definitie use case">
Een usecase beschrijft een systeem vanuit het gebruikersperspectief. Het beschrijft de actor, de initiator van de interactie, en het systeem zelf als een opeenvolging van eenvoudige stappen. Actoren kunnen iets of iemand zijn, die bestaat buiten het te bestuderen systeem, en die deelneemt in de opeenvolgende activiteiten in een dialoog met het systeem om een bepaald doel te bereiken. Actoren kunnen eindgebruikers, andere systemen of hardware (apparatuur) zijn. Elke usecase is een complete serie van zogenaamde "events", beschreven vanuit het standpunt van de actor. <a href="https://nl.wikipedia.org/wiki/Usecase">Bron: Wikipedia</a>
</aside>

## Inleiding
Bij het primaire doel van het [=Informatiemodel Verkeerstekens=] hoort de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende maat en de bijbehorende verkeersborden in een systeem voor [=SMART Mobility=] dat een [=weggebruiker=] ondersteunt tijdens deelname aan het verkeer." 



De daadwerkelijke werking en inrichting van een systeem voor [=SMART Mobility=] dat [=verkeerskundige informatie=] gebruikt conform het informatiemodel (bijvoorbeeld een applicatie of database) valt buiten de scope van dit document. Daarom is de bijbehorende use case nog zeer generiek en weinig gedetailleerd. Eventuele systemen die een specifiekere interactie ondersteunen zullen zelf meer gedetailleerde use cases hebben die de interactie van de gebruiker met dit specifieke systeem beschrijft. 

## SMART Mobility

Verkeersborden zijn bedoeld om de menselijke [=weggebruikers=] te informeren over het gebruik van de weg en de bijbehorende maat. [=Weggebruikers=] kunnen daarbij ondersteund worden door digitale systemen die hen helpen de weg te vinden, of assisteren bij het besturen van het voertuig:
1. In navigatiesystemen wordt informatie gegeven over de maximum snelheid en de beschikbare routes en verwachte rijtijden. Deze systemen zouden meer [=verkeerskundige informatie=] kunnen bieden als deze beschikbaar is. 
2. Voertuigen worden steeds slimmer met geavanceerde rijtaakondersteunende systemen (Advanced Driver Assistance Systems ofwel ADAS). Deze systemen zouden meer [=verkeerskundige informatie=] kunnen bieden of gebruiken als deze beschikbaar is.
3. Er worden in Nederland en in het buitenland verschillende experimenten gedaan met volledig zelfrijdende voertuigen. Deze systemen zouden meer [=verkeerskundige informatie=] kunnen gebruiken als deze beschikbaar is.
4. Het verkeer kan steeds beter worden aangestuurd via centrales (intelligente Verkeersregelinstallaties ofwel iVRI's), een ontwikkeling die 'Connected Intelligent Transport Systems', ofwel C-ITS wordt genoemd. Denk daarbij aan het geleiden van hulpvoertuigen, waarbij via centrale aansturing van de verkeerslichten wordt gezorgd voor een veilige route waarin alle verkeerslichten 'mee zitten'. Deze systemen zouden meer [=verkeerskundige informatie=] kunnen bieden of gebruiken als deze beschikbaar is.


  
## Informatiebehoefte

### Locatie in wegennetwerk
#### NWB-Wegvak 
De gebruiker wil van de actuele locatie waar hij rijdt of straks gaat rijden weten, welke maat er gelden. Dit betekent, dat het systeem het [=NWB-wegvak=] moet kunnen herkennen waarop het rijdt, op basis van de locatie. Als de regel slechts geldt voor één rijstrook, zal dit ook duidelijk moeten zijn voor het systeem.


<aside class="note" title="Geometrische nauwkeurigheid [=verkeerskundig wegennetwerk=]">
Het [=verkeerskundige wegennetwerk=] en de locaties van verkeersborden ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: 
<ol><li>Een systeem moet wel vóór de drempel de snelheid verlagen, niet erna;
<li>Als op een [=rijstrook=] een afwijkende [=verkeersmaatregel=] of [=waarschuwing=] geldt, moet het duidelijk zijn voor het systeem op welke [=rijstrook=] het zich bevindt. Op dit moment wordt de geometrie van een rijstrook nog niet vastgelegd in het [=NWB=] en zal het systeem op basis van visuele input moeten kunnen bepalen op welke rijstrook het zich bevindt.  </li>
</aside> 

* Het informatiemodel MOET aansluiten op het informatiemodel van het [=NWB=] om te zorgen dat [=verkeerskundige informatie=] gekoppeld kan worden aan het juiste [=NWB-wegvak=] en de juiste richting in het [=NWB-wegvak=].



##### Rijrichting 
Omdat een [=verkeersmaatregel=] of [=waarschuwing=] zowel voor één als voor beide richtingen kan gelden, zal het systeem moet kunnen vinden voor welke richting de regel van toepassing is.

* Het informatiemodel MOET als default situatie hebben dat een [=verkeersmaatregel=] of [=waarschuwing=] van toepassing is op het gehele [=NWB-wegvak=], in beide richtingen.
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden vanaf welke [NWB-junctie] een [=verkeersmaatregel=] of [=waarschuwing=] geldt, indien deze alleen in één richting geldt. 

<aside class="note" title="Richting van het geometrische NWB-wegvak versus rijrichting">
<p>Een geometrische representatie, de lijn, van een wegvak in het NWB heeft bij publicatie een beginpunt en een eindpunt. Dit is de geometrische richting van het wegvak. Daarnaast heeft het wegvak een of twee rijrichtingen: de richting waarop gereden mag worden. In onderstaand voorbeeld zie je dat bij het beginpunt van het wegvak een bord met verboden in te rijden staat. De rijrichting op het wegvak is in dit geval Terug. </p>
<figure>
<img src="../images/wegvakrichting.png"  style="width:50%; max-width:none;">
<figcaption>Voorbeeld van wegvak waarbij de weg bij het beginpunt niet mag worden ingereden. De geometrische richting van de lijn op de kaart is hier tegengesteld aan de rijrichting voor voertuigen op de weg. </caption>
</figure>
</aside>

##### Rijstrook 
* Het informatiemodel MOET de mogelijkheid bieden om de [=verkeersmaatregelen=] en [=waarschuwingen=] te laten gelden voor één van de [=rijstroken=], die oplopend vanaf één worden genummerd vanuit het midden van de weg. Ook als het [=NWB-Wegvak=] nog niet is gesplitst in rijstroken.

Als in de toekomst een [=NWB-Wegvak=] maar één rijstrook weergeeft, hoeft de nummering niet meer te worden aangeduid. 


<aside class="note" title="Levels of Detail">
Verschillende <i>gebruikers</i> van de [=verkeerskundige informatie=] hebben een verschillend Level of Detail nodig. Een Wegontwerper heeft aan één hartlijn van de weg voldoende, vooral als informatie uit het alignement is toegevoegd. Hiermee kan de wegligging gereconstrueerd worden. Voor [=SMART Mobility=] geldt dat het het [=verkeerskundige wegennetwerk=] het liefst gedetailleerder moet zijn met een polygoon per [=rijstrook=]. Omdat het [=NWB=] op dit moment geen rijstroken weergeeft, zal het systeem zelf visueel moeten vaststellen hoeveel rijstroken er zijn en op welke rijstrook het zich bevindt. Dit kan lastig zijn.

Zie voor toelichting op Levels of Detail bijvoorbeeld <a href="https://docs.3dbag.nl/en/schema/concepts">dit document</a> van TU Delft over de LOD's in de Basisregistratie Gebouwen (BAG).

<figure>
<img src="../images/levelofdetail.jpg">
<figcaption>Level of detail van een rotonde. Van links naar rechts: LOD0, LOD1, LOD2. Het NWB streeft op dit moment naar LOD1. Dat betekent dat alle nieuw ingebrachte rotondes dat hebben en dat er toegewerkt wordt naar op allerlei manieren uit bijvoorbeeld luchtfoto’s en verkeersborden  herkennen van rotondes om die op dat niveau te brengen. LOD2 vereist rijbaanscheiding en dat is er in het huidige NWB nog niet.
. </caption>
</figure>

</aside>



#### Werkingslengte 
Omdat een [=verkeersmaatregel=] of [=waarschuwing=] zowel voor het gehele als voor een gedeelte van het [=NWB-wegvak=] kan gelden, zal het systeem moeten kunnen vinden voor welk gedeelte van het [=NWB-wegvak=] de regel van toepassing is. 

* Het informatiemodel MOET als default situatie hebben dat de [=verkeersmaatregel=] of [=waarschuwing=] geldt voor het gehele NWB-wegvak.


**Beginpunt**
 
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersmaatregel=] of [=waarschuwing=] te laten gelden vanaf een beginpunt in het [NWB-wegvak].


**Eindpunt** 
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersmaatregel=] of [=waarschuwing=] te laten gelden tot een eindpunt in het [NWB-wegvak].

### Verkeersmaatregel
De gebruiker wil van de actuele locatie waar hij rijdt of straks gaat rijden weten, welke [=verkeersmaatregelen=] en [=waarschuwingen=] er gelden. Dit betekent, dat het systeem deze regels bij het [=NWB-wegvak=] moet kunnen vinden. 

* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersmaatregel=] of [=waarschuwing=] van toepassing te laten zijn op een of meerdere [=NWB-wegvakken=].


### Fysiek verkeersbord 
De gebruiker wil van de actuele locatie waar hij nu of binnen enkele minuten rijdt zien welk fysiek verkeersbord er staat. Daarbij wordt dit op twee manieren aangeboden, zodat zowel gewerkt kan worden met een relatieve plaatsbepaling in het wegennetwerk, als met een kaart of driedimensionale weergave van de omgeving. 

1. De netwerklocatie
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat ten opzichte van het wegennetwerk, de netwerklocatie:
  * Het informatiemodel MOET de mogelijkheid bieden om aan te duiden voor welk wegvak het fysieke verkeersbord bedoeld is.
  * Het informatiemodel MOET de mogelijkheid bieden om aan te duiden voor welke rijrichting het fysieke verkeersbord bedoeld is (heen of terug)
  * Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat: boven de weg, of links of rechts naast de weg.

Zie voor de uitwerking de [Gids voor Databeheer: netwerklocatie fysieke plaat](https://docs.crow.nl/verkeersborden/howtodatamanagement/#netwerklocatie-fysieke-plaat)

2. De fysieke locatie op een kaart of in een 3D model
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat op een kaart of in een 3D model, daarvoor is een geolocatie en een geo-orientatiehoek nodig. 

Zie voor de uitwerking de [Gids voor databeheer: geolocatie fysieke plaat](https://docs.crow.nl/verkeersborden/howtodatamanagement/#geo-locatie-fysieke-plaat)

<aside class="note" title="Locatieaanduiding verkeersbord">
<br>
<b>Argumenten voor x,y:</b><ul>
<li>Doelgroep: wegontwerpers. Om bestaande, in gebruik zijnde verkeersborden goed te kunnen toepassen in een ontwerp voor een nieuwe weginrichting moeten deze kunnen worden ingelezen/geviewed in CAD systemen. Een x,y kan daarbij gebruikt worden, CAD kan niet goed omgaan met netwerklocaties zoals dat gebruikelijk is in GIS-systemen. Voor 3D ontwerpen is de z ook nog nodig. Ook voor teuglevering uit het wegontwerp naar de registratie van verkeersborden kan het CAD systeem alleen maar met geolocatie overweg. </li>
<li>Doelgroep: bouwbedrijven: Om het bord te kunnen plaatsen is een x,y ook makkelijker te gebruiken dan de relatieve locatie ten opzichte van een theoretisch netwerk, deze is buiten niet te vinden.</li></ul>
<b>Argumenten voor lengterichting, in meters of % vanaf het wegvak (dit maakt voor deze argumenten geen verschil):</b><ul>
<li>Doelgroep: Weggebruikers. Voor een SMART mobility systeem is nauwkeurig bepalen op welk moment het [=NWB-wegvak=] in loodrechte lijn een verkeersbord tegenkomt in verhouding tot de eigen x,y locatie die daar ook iets van afwijkt minder eenvoudig dan bepalen op hoeveel meter van de [=NWB-junctie=] men zich bevindt.</li>
<li>Doelgroep: Wegbeheerders. Bij het opstellen van verkeerskundige data kun je met de lengterichting een relatie leggen met het beginpunt van de [=verkeersmaatregel=] en controleren of deze hetzelfde is</li>
<li>Doelgroep: Wegbeheerders. Bij correcties van de geometrie van een [=NWB-wegvak=] of bij intekenen van borden met behulp van xy op een andere kaart dan het NWB leidt % tot nauwkeuriger informatie.</li></ul>
Op dit moment worden beide opties meegenomen, al betekent dit dat er feitelijk dubbele informatie moet worden opgeslagen.
</aside>


### Onderbord
De gebruiker wil bij de [=verkeersmaatregel=] of [=waarschuwing=] weten, of deze met een [=onderbord=] of  met een ondertekst op hetzelfde bord nader gespecificeerd is. Daarbij geldt:

* Het informatiemodel MOET de mogelijkheid bieden om de informatie op een [=onderbord=] weer te geven.


### Visualisatie verkeersbord
De [=weggebruikers=] willen door hun systeem visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. Dit betekent dat het systeem zal moeten weten, welk bord getoond moet worden om duidelijk te maken welke [=verkeersmaatregel=] of [=waarschuwing=] geldt. 

Daarbij geldt als "complicatie" dat niet elke [=verkeersmaatregel=] gepaard gaat met een fysiek bord, of niet met een specifiek bord. Bijvoorbeeld in het geval van de maximumsnelheid, wordt dit fysiek soms aangeduid door een bord over het wegtype, zoals een G3 ("autoweg"), terwijl de visuele ondersteuning beter van het type "A1" kan zijn (snelheidsbord).

* Het informatiemodel moet onderscheid maken tussen de *fysiek aanwezige* verkeersborden en onderborden en het type verkeersbord dat in een SMART Mobility systeem getoond kan worden ten behoeve van de *visuele ondersteuning van de weggebruiker*.
* Het informatiemodel MOET voor elk type [=verkeersmaatregel=] of [=waarschuwing=] weergeven, welk type bord moet worden getoond ten behoeve van *de visuele ondersteuning van de weggebruiker*.


#### Afbeeldingen verkeersborden
De afbeeldingen van de verkeersborden en - onderborden zijn referentievectorbestanden van verkeersborden en -tekens niet zijnde wegwijzers en straatnaamborden met als doel:
* Visualisatie in SMART Mobility systemen
* Een nationale standaard visualisatie voor toepassing van de productie van verkeersborden.

Dit is een ander doel dan de publicatie van de Nationale Bewegwijzeringsdienst met concrete verkeersborden aan een concrete weg.
Het formaat is SVG, dat zijn schaalbare vectorafbeeldingen die op het web en in print altijd scherp blijven.

* Het informatiemodel MOET een schaalbare afbeelding ([SVG](https://www.w3.org/TR/SVG/)) van de fysieke verschijningsvorm van verkeersborden en onderborden bevatten grote gelijkenis met de afbeeldingen in de RVV-1990.
* Het informatiemodel MOET gebruik maken van een lettertype uit het publiek domein met grote gelijkenis met de lettertypes in de RVV-1990.
* Het informatiemodel moet een schaalbare afbeelding bevatten met kleuren met grote gelijkenis met de kleuren op de afbeeldingen in de RVV-1990.
* Het informatiemodel moet een schaalbare afbeelding bevatten met contrasterende kleuren of grijstinten voor gebruik voor kleurenblinde weggebruikers.


 

## visualisatie informatiemodel

In onderstaande figuur wordt de logica van het vastleggen van verkeersmaatregelen volgens het informatiemodel gevisualiseerd. 

<img src="../images/logicavastleggenverkeersregels.PNG">
<figcaption>De informatie die nodig is om een verkeersmaatregel, met als voorbeeld wettelijke maximumsnelheid, vast te leggen. </caption>
</figure> 





