# Use case


## Inleiding
Bij het primaire doel van het [=Informatiemodel Verkeerstekens=] hoort de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de bijbehorende verkeersborden in een systeem voor [=SMART Mobility=] dat een [=weggebruiker=] ondersteunt tijdens deelname aan het verkeer." 

<aside class="note" title="Definitie use case">
Een usecase beschrijft een systeem vanuit het gebruikersperspectief. Het beschrijft de actor, de initiator van de interactie, en het systeem zelf als een opeenvolging van eenvoudige stappen. Actoren kunnen iets of iemand zijn, die bestaat buiten het te bestuderen systeem, en die deelneemt in de opeenvolgende activiteiten in een dialoog met het systeem om een bepaald doel te bereiken. Actoren kunnen eindgebruikers, andere systemen of hardware (apparatuur) zijn. Elke usecase is een complete serie van zogenaamde "events", beschreven vanuit het standpunt van de actor. <a HREF="https://nl.wikipedia.org/wiki/Usecase">Bron: Wikipedia</a>
 </aside>

De daadwerkelijke werking en inrichting van een systeem voor [=SMART Mobility=] dat [=verkeerskundige informatie=] gebruikt conform het informatiemodel (bijvoorbeeld een applicatie of database) valt buiten de scope van dit document. Daarom is de bijbehorende use case nog zeer generiek en weinig gedetailleerd. Eventuele systemen die een specifiekere interactie ondersteunen zullen zelf meer gedetailleerde use cases hebben die de interactie van de gebruiker met dit specifieke systeem beschrijft. 

## SMART Mobility

<dfn data-lt="Smart Mobility">Smart Mobility</dfn>
    <dd>Reis- en rijgedrag ondersteund door digitale systemen waaronder andere navigatiesystemen, rijtaakondersteunende systemen, zelfrijdende voertuigen, intelligente verkeersregelinstallaties en systemen waarmee reizigers hun reis online kunnen plannen, reserveren, betalen en onderweg op de hoogte te blijven </dd>

Verkeersborden zijn bedoeld om de menselijke [=weggebruikers=] te informeren over het gebruik van de weg en de bijbehorende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=]. [=Weggebruikers=] kunnen daarbij ondersteund worden door digitale systemen die hen helpen de weg te vinden, of assisteren bij het besturen van het voertuig:
1. In navigatiesystemen wordt informatie gegeven over de maximum snelheid en de beschikbare routes en verwachte rijtijden. Deze systemen zouden meer [=verkeerskundige informatie=] kunnen bieden als deze beschikbaar is. 
2. Voertuigen worden steeds slimmer met geavanceerde rijtaakondersteunende systemen (Advanced Driver Assistance Systems ofwel ADAS). Deze systemen zouden meer [=verkeerskundige informatie=] kunnen bieden of gebruiken als deze beschikbaar is.
3. Er worden in Nederland en in het buitenland verschillende experimenten gedaan met volledig zelfrijdende voertuigen. Deze systemen zouden meer [=verkeerskundige informatie=] kunnen gebruiken als deze beschikbaar is.
4. Het verkeer kan steeds beter worden aangestuurd via centrales (intelligente Verkeersregelinstallaties ofwel iVRI's), een ontwikkeling die 'Connected Intelligent Transport Systems', ofwel C-ITS wordt genoemd. Denk daarbij aan het geleiden van hulpvoertuigen, waarbij via centrale aansturing van de verkeerslichten wordt gezorgd voor een veilige route waarin alle verkeerslichten 'mee zitten'. Deze systemen zouden meer [=verkeerskundige informatie=] kunnen bieden of gebruiken als deze beschikbaar is.


  
## Informatiebehoefte


### NWB-Wegvak 
De gebruiker wil van de actuele locatie waar hij rijdt of straks gaat rijden weten, welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] er gelden. Dit betekent, dat het systeem het [=NWB-wegvak=] moet kunnen herkennen waarop het rijdt, op basis van de locatie. Als de regel slechts geldt voor één rijstrook, zal dit ook duidelijk moeten zijn voor het systeem.

<dfn data-lt="rijstrook|rijstroken">Rijstrook</dfn>
<dd>Door doorgetrokken of onderbroken strepen gemarkeerd gedeelte van de [=rijbaan=] van zodanige breedte dat bestuurders van motorvoertuigen op meer dan twee wielen daarvan gebruik kunnen maken. Definitie conform de [=RVV 1990=]</dd>
<dd>De rijstrook is het begrensde gedeelte van de rijbaan dat voldoende breed is voor een rij van het voor dat gedeelte bestemde verkeer. <a href="https://data.crow.nl/thesaurus/term/66A00E27-6E73-4385-A4AB-EC20413581D9">Bron: CROW thesaurus</a></dd>

<aside class="note" title="Geometrische nauwkeurigheid netwerk">
Het netwerk en de locaties van verkeersborden ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: 
<ol><li>Het netwerk en de locaties van verkeersborden ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna;
<li>Als op een [=rijstrook=] een afwijkende [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt, moet het duidelijk zijn voor het systeem op welke [=rijstrook=] het zich bevindt. Op dit moment wordt de geometrie van een rijstrook nog niet vastgelegd in het [=NWB=] en zal het systeem op basis van visuele input moeten kunnen bepalen op welke rijstrook het zich bevindt.  </li>
<li>Voor de gebruikers is het noodzakelijk dat de actuele verkeersregels, waarschuwingen en adviezen die op de weg gelden visueel kunnen worden getoond in de systemen. Bijvoorbeeld het tonen van het snelheidsbord in het navigatiesysteem. Hiertoe dient het [=Informatiemodel Verkeerstekens=] een grafische weergave te bevatten van de verkeersborden. </li>
</aside> 

* Het informatiemodel MOET aansluiten op het informatiemodel van het [=NWB=] om te zorgen dat [=verkeerskundige informatie=] gekoppeld kan worden aan het juiste [=NWB-wegvak=] en de juiste richting in het [=NWB-wegvak=].



#### Rijrichting 
Omdat een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] zowel voor één als voor beide richtingen kan gelden, zal het systeem moet kunnen vinden voor welke richting de regel van toepassing is.

* Het informatiemodel MOET als default situatie hebben dat een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] van toepassing is op het gehele [=NWB-wegvak=], in beide richtingen.
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden vanaf welke [NWB-junctie] een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt, indien deze alleen in één richting geldt. 

#### Rijstrook 
* Het informatiemodel MOET de mogelijkheid bieden om de verkeersregel te laten gelden voor één van de [=rijstroken=], die oplopend vanaf één worden genummerd vanuit het midden van de weg. Ook als het [=NWB-Wegvak=] nog niet is gesplitst in rijstroken.

Als in de toekomst een [=NWB-Wegvak=] maar één rijstrook weergeeft, hoeft de nummering niet meer te worden aangeduid. 


<aside class="note" title="Levels of Detail">
Verschillende <i>gebruikers</i> van de [=verkeerskundige informatie=] hebben een verschillend Level of Detail nodig. Een Wegontwerper heeft aan één hartlijn van de weg voldoende, vooral als informatie uit het alignement is toegevoegd. Hiermee kan de wegligging gereconstrueerd worden. Voor [=SMART Mobility=] geldt dat het het netwerk het liefst gedetailleerder moet zijn met een polygoon per [=rijstrook=]. Omdat het [=NWB=] op dit moment geen rijstroken weergeeft, zal het systeem zelf visueel moeten vaststellen hoeveel rijstroken er zijn en op welke rijstrook het zich bevindt. Dit kan lastig zijn.

Zie voor toelichting op Levels of Detail bijvoorbeeld <a href="https://docs.3dbag.nl/en/schema/concepts">dit document</a> van TU Delft over de LOD's in de Basisregistratie Gebouwen (BAG).

<figure>
<img src="./hoofdstukken/media/levelofdetail.jpg">
<figcaption>Level of detail van een rotonde. Van links naar rechts: LOD0, LOD1, LOD2. Het NWB levert op dit moment LOD0. </caption>
</figure>

</aside>



#### Werkingslengte 
Omdat een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] zowel voor het gehele als voor een gedeelte van het [=NWB-wegvak=] kan gelden, zal het systeem moeten kunnen vinden voor welk gedeelte van het [=NWB-wegvak=] de regel van toepassing is. 

<dfn data-lt="Werkingslengte">Werkingslengte</dfn>
<dd>Het gedeelte van het [=NWB-wegvak=] waarvoor een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheden=] met bijbehorend verkeersbord geldt.</dd>


**Beginpunt**

* Het informatiemodel MOET als default situatie hebben dat de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] start op de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] te laten gelden vanaf een specifiek beginpunt gemeten in meters vanaf de [NWB-junctie].


**Eindpunt**
* Het informatiemodel MOET als default situatie hebben dat de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] eindigt op de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] te laten gelden tot een specifiek eindpunt op x lengte ná de [NWB-junctie]. 

<div class="issue" data-number="146"></div>


### Verkeersregel
De gebruiker wil van de actuele locatie waar hij rijdt of straks gaat rijden weten, welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] er gelden. Dit betekent, dat het systeem deze regels bij het [=NWB-wegvak=] moet kunnen vinden. 

* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] van toepassing te laten zijn op een of meerdere [=NWB-wegvakken=].


### Fysiek bord 
De gebruiker wil van de actuele locatie waar hij nu of binnen enkele minuten rijdt zien welk fysiek verkeersbord er staat.


* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat gemeten in meters vanaf de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat: boven de weg, of links of rechts naast de weg.
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden voor welke rijrichting het fysieke verkeersbord bedoeld is, door de [NWM-junctie] op het startpunt van de rijrichting aan te duiden bij het bord.


<div class="issue" data-number="145"></div>

### Onderbord
De gebruiker wil bij de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] weten, of deze met een [=onderbord=] nader gespecificeerd is:

* Het informatiemodel MOET de mogelijkheid bieden om bij een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] en nadere aanduiding te geven met een type [=onderbord=] 
* Het informatiemodel MOET de mogelijkheid bieden om bij een onderbord een keuzelijst te bieden van mogelijke inhoud van het [=onderbord=]

### Visualisatie bord
De [=weggebruikers=] willen door hun systeem visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. Dit betekent dat het systeem zal moeten weten, welk bord getoond moet worden om duidelijk te maken welke [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt. 

Daarbij geldt als "complicatie" dat niet elke [=verkeersregel=] gepaard gaat met een fysiek bord, of niet met een specifiek bord. Bijvoorbeeld in het geval van de maximumsnelheid, wordt dit fysiek soms aangeduid door een bord over het wegtype, zoals een G3 ("autoweg"), terwijl de visuele ondersteuning beter van het type "A1" kan zijn (snelheidsbord).

* Het informatiemodel moet onderscheid maken tussen de *fysiek aanwezige* verkeersborden en het type verkeersbord dat getoond kan worden ten behoeve van de *visuele ondersteuning van de weggebruiker*.
* Het informatiemodel MOET voor elk type [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] weergeven, welk type bord moet worden getoond ten behoeve van *de visuele ondersteuning van de weggebruiker*.
* Het informatiemodel MOET een schaalbare afbeelding van de fysieke verschijningsvorm van verkeersborden en onderborden bevatten ten behoeve van *de visuele ondersteuning van de weggebruiker*.


### Adviessnelheid+
De wegbeheerder heeft de mogelijkheid een [=adviessnelheid] te geven met een A4 verkeersbord.
Daarnaast zijn er veel waarschuwingsborden die indirect advies geven over het matigen van de snelheid. Bijvoorbeeld gewenste lage snelheid bij donker en schemering om aanrijdingen met wild te beperken, of bij een drempel, school, inrit of zebrapad. Deze waarschuwingen zijn voor de mens een duidelijk, maar niet voor een machine. Daarom geeft het informatiemodel geeft de mogelijkheid een adviessnelheid toe te voegen, zonder plaatsing van een bijbehorend A4 verkeersbord. Over de gehele lengte van een [=NWB-wegvak=] kan een lagere adviessnelheid worden opgegevens, los van de individuele waarschuwingen bij de gevaarlijke punten.

* Het informatiemodel MOET de mogelijkheid bieden bij een (deel van) een [=NWB-wegvak=] een [=adviessnelheid=] mee te geven, zonder dat hierbij een fysiek verkeersbord geplaatst wordt.

<aside class="note" title="Machineleesbare informatie">
  <p> Een <b>wegbeheerder</b> die een drempel wil aanleggen, kan daarmee twee verschillende doelen hebben: </p>
  <ol><li> Zorgen dat het verkeer <i>snelheid mindert ten opzichte van de maximum snelheid</i>, zodat een gevaarlijke situatie voorkomen wordt (een kruising, een school, een uitrit....) </li>
  <li> Zorgen dat het verkeer zijn <i>snelheid beperkt tot de maximum snelheid</i>, zodat over de gehele lengte van de weg niet te hard gereden wordt.</li></ol>
<p> Door op een kaart aan te geven dat er een waarschuwingsbord komt voor een drempel, en de drempel op de kaart te zetten, is de bedoeling voor een verkeerskundige duidelijk, maar is het onderscheid tussen het eerste en tweede doel niet meer af te leiden. Door het ontwerp van de drempel kan een maximale snelheid worden "afgedwongen" omdat het niet comfortabel is om er harder overheen te rijden.</p>
  <p> Een <b>Menselijke chauffeur</b> die het verkeersbord visueel waarneemt, neemt (meestal) ook gelijktijdig de drempel visueel waar. Als de drempel er hoog uitziet ten opzichte van de snelheid, mindert de chauffeur tot minder dan de maximum snelheid. Als de drempel er laag uitziet ten opzichte van de maximum snelheid, beperkt de chauffeur zich tot de maximum snelheid. Voor een menselijke chauffeur voldoet het verkeersbord. Vooral omdat een deel van de chauffeurs de route kent, en na een keer te hard over de drempel te zijn gereden de tweede keer de snelheid iets mindert. </p>
  <p> Een <b>Automatische pilot</b> of een <b>Rij-assistent</b> kan ook via beeldherkenning het verkeersbord en de drempel waarnemen. De menselijke afweging hoe snel comfortabel over de drempel gereden kan worden, is voor een machine echter moeilijk te maken. De machine weet niet goed welke snelheid het voertuig zou moeten hebben bij de drempel. </p>
  <p> Een <b>Automatische pilot</b> of een <b>Rij-assistent</b> krijgt in het ideale geval via de netwerkregistratie door, dat er een drempel ligt. Of eigenlijk: dat tussen punt x en punt y op zijn route (over de lengte van de drempel) snelheid geminderd moet worden tot x. Indien de drempel de maximum snelheid afdwingt, is de waarschuwing eigenlijk niet nodig; tenzij de menselijke chauffeur die zelf rijdt gewaarschuwd moet worden om hier toch maar even snelheid te minderen (bijvoorbeeld door het verkeersbord ook op de boordcomputer te tonen). Indien de drempel een lagere snelheid afdwingt, kan de machine de informatie goed interpreteren. Zowel het verkeersbord, als de lengte waarover de waarschuwing geldt, als de <i>consequentie</i>, langzamer rijden, zal opgenomen moeten worden in de landelijke registratie, om het hierboven beschreven doel te halen. </p>
  </aside>

 

## visualisatie informatiemodel

In onderstaande figuur wordt de manier van informatie opslaan over een verkeersregel gevisualiseerd. De onderdelen die voortkomen uit het volgende hoofdstuk, de stakeholderanalyse, en met name uit de use case "beheer van [=verkeerskundige informatie=] zijn ook in deze afbeelding opgenomen.
<figure>
<img src="./hoofdstukken/media/verkeersregel.jpg">
<figcaption>De informatiebehoefte bij een specifieke verkeersregel, voorbeeld: maximum snelheid. </caption>
</figure> 





