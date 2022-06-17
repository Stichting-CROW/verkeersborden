# Toepassing




Het hoofdstuk over toepassing van het informatiemodel geeft een inzicht in het potentiele gebruik van het informatiemodel bij het genereren van digitale [=Verkeerskundige informatie=].
De wegbeheerder past het informatiemodel toe bij het beheren en publiceren van digitale [=Verkeerskundige informatie=] in drie contexten:

1. Het inmeten en vastleggen van de huidige verkeerskundige situatie om de digitale informatie betrouwbaar, compleet en actueel te maken. De informatie wordt vastgelegd in een landelike netwerkregistratie.
2. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor een verkeersbesluit gepubliceerd wordt. De informatie wordt gepubliceerd door KOOP. Vastlegging van de informatie wordt ondersteund in een verkeersbesluitenapplicatie.
3. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor geen verkeersbesluit gepubliceerd hoeft te worden.


* Het informatiemodel MOET de relaties bevatten tussen de types verkeersborden en de bijbehorende types [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=]. 

## Use case: Samenstellen data


### Wijzigen wegennetwerk

Als het wegennetwerk wijzigt, moet de wegbeheerder zorgen dat de nieuwe situatie wordt geregistreerd en gepubliceerd in het [=NWB=]. Omdat het netwerk buiten de scope van het [=Informatiemodel Verkeerstekens=] valt, wordt van dit onderdeel geen use case uitgewerkt. Er wordt uitgegaan van een sluitend netwerk op een geselecteerd tijdstip, waarbij de wegbeheerder vervolgens [=verkeerskundige informatie=] opstelt die verwijst naar de [=NWB-wegvakken=] en [NWB-juncties=] in het netwerk.


### Werkingsgebied / zone
Voor de weggebruikers in de primaire use case is reeds beschreven dat zij de locatie van een een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] willen weten. Deze wordt voor hen gerelateerd aan (een gedeelte van) het wegvak. De wegbeheerder denk eerst in termen van een zone [=zone=] of een [=werkingsgebied=] bij een [verkeersbesluit=], daarna aan de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] die van toepassing is; dan aan de te plaatsen verkeersborden.

<figure>
<img src="./hoofdstukken/media/vanbesluitviazonenaarwegvak.JPG">
<figcaption>Van verkeersbesluit naar [verkeerskundige informatie=]. </caption>
</figure>

<dfn data-lt="Werkingsgebied">Werkingsgebied</dfn>
<dd>Een geografisch gebied waarvoor een [=verkeersregel=], [=waarschuwing=] en/of [=adviessnelheid=] geldt. Dit kan een polygoon zijn met meerdere aansluitende wegvakken, zoals bij een weg die over meerdere kruispunten heen een verlaagde maximum snelheid kent, of een [=zone=] </dd>

<dfn data-lt="Zone">Zone</dfn>
<dd>Een geografisch gebied waarvoor een [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] met bijbehorende verkeersbord gelden in de vorm van een vlak waarbinnen meerdere wegvakken (gedeeltelijk) vallen, denk bijvoorbeeld aan een parkeerzone of een milieuzone</dd>

Interactievoorbeeld met een systeem om [=verkeerskundige informatie=] in op te stellen:
1. De wegbeheerder levert een (link naar) een geometrische representatie (een een polygoon of vlak) in GIS of CAD formaat.

### Verkeersbesluit
Daarna komt de stap om de [=verkeerskundige informatie=] voor de eindgebruiker op te stellen, en moet de zone [=zone=] of het [=werkingsgebied=] specifieker worden gemaakt door wegvakken te selecteren en van elk wegvak aan te duiden welk gedeelte in de zone valt. Door in de [=verkeerskundige informatie=] ook te kunnen verwijzen naar een [=zone=] of [=werkingsgebied=] kan de wegbeheerder de relatie met het verkeersbesluit één keer vastleggen. 

Interactievoorbeeld met een systeem om [=verkeerskundige informatie=] in op te stellen:
2. Het systeem vraagt de wegbeheerder om een link te leggen tussen de ingevoerde geometrie en de officiele publicatie van het [=verkeersbesluit=]. Als de ingevoerde [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] niet verkeersbesluitplichtig is wordt deze stap overgeslagen.

* Het informatiemodel MOET de mogelijkheid bieden om een link te leggen naar het [=verkeersbesluit=] waarin een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] is gepubliceerd. 

### Verkeersregel


### NWB-Wegvakken


### Verkeersborden


### 


3. Het systeem vraagt de wegbeheerder om aan te duiden welke [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] hier van toepassing is
4. 




* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] van toepassing te laten zijn op een zone:
  * De [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] wordt direct aan de wegvakken in de zone verbonden
  * De [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] krijgt daarnaast een relatie met een "zone"
* Het informatiemodel MOET de mogelijkheid bieden om een relatie tussen een zone en een geometrisch object (vlak) te leggen, maar de gebruiker is niet verplicht om dit te doen.

Omdat de verkeersborden al gerelateerd zijn aan een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=], is het niet nodig om deze ook te koppelen aan een zone.




### Selecteren verkeersregel
De wegbeheerder wil een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] opnemen in de [=verkeerskundige informatie=].

### Selecteren bord

### Selecteren onderbord

* Het informatiemodel MOET de relaties bevatten tussen de types verkeersborden en de bijbehorende types onderborden.




## Valideren data






## Overige wijzigingen

<aside class="note" title="Mens versus machine">
<p> Verkeersbesluiten worden door wegbeheerders vaak ontwikkeld op basis van een GIS-kaart of een 2D CAD-ontwerp, waar de nieuwe wegligging en/of oude en nieuwe verkeersborden op geplot worden; bij besluiten die gelden voor een zone wordt deze soms aangeduid met een vlak op de kaart. Als deze kaarten of ontwerpen rechtstreeks door een 'Systeem' moeten worden ingelezen en verwerkt tot verkeersdata, gerelateerd aan een wegennetwerk, moeten door het systeem veel complexe puzzels worden gemaakt. Wegen zijn op een GIS-kaart weergegeven met een lijn of vlak, in een CAD-ontwerp vaak met lijnen die de stroken en de kant van de verharding aangeven. Om van hieruit een wegennetwerk te kunnen afleiden met wegvakken ('hartlijn van een weg') en juncties ('knopen'), is niet goed programmeerbaar. Ook rekenfouten in het aansluiten op het bestaande netwerk worden door een computer niet begrepen - bijvoorbeeld de juncties verschillen 0.00001 mm van elkaar en het systeem loopt vast, waar een mens ze zo over elkaar plaatst wetend dat de afwijking minimaal is.
Ook van een verkeersbord kent het systeem de reikweidte niet, al kan het ernaar raden: een waarschuwingsbord voor een drempel geldt voor maximaal 50 meter lengte, een verkeersbord "kijk uit herten" heeft een onderbord wat vertelt hoeveel meter deze waarschuwing geldt. Al met al zit er een verschil in de mens, die de kaart met wegen en verkeersborden 'in een oogopslag' begrijpt, en een systeem waarvoor dit te complex en tegenstrijdig is. Daarom geldt in deze use case beschrijving de aanname, dat een wegbeheerder wijzigingen doorgeeft passend bij de centrale netwerkregistratie. </p>
<p> De andere kant op is minder complex: als het netwerk eenmaal is opgebouwd, kunnen met 'rules' wegvakken en verkeersborden worden afgeleid. Hierbij geldt: hoe beter en uitgebreider de netwerkdata, hoe beter dit gaat. Als een wegvak per rijstrook is aangeduid en de breedte van de rijstrook op elke lengte is aangegeven, kan het systeem het "wegontwerp" genereren en de 'in lengterichting' aangeduide verkeersborden visualiseren. De wegbeheerder kan dat goed overzien, of hij de 'data' op de juiste manier heeft aangeleverd / ingevoerd.</p></aside>  



## Samenstellen verkeersbesluit
Dit onderdeel van de usecase beschrijft wat er nodig is zodat een wegbeheerder een correcte dataset kan samenstellen met een verkeersbesluit.

* De Wegbeheerder selecteert het wegvak (in de netwerkdata) waar hij een verkeersbesluit aan wil toevoegen.
* Het Systeem controleert of het wegvak uit twee richtingen bestaat. Indien dit zo is, krijgt de wegbeheerder de keuze om een junctie als startpunt aan te duiden of beide
* De wegbeheerder geeft antwoord
* Het Systeem vraagt welke verkeersregel of waarschuwing van toepasssing is en presenteert een lijst waar de gebruiker uit kan kiezen <sup>1</sup>
* De wegbeheerder geeft antwoord
* Het Systeem vraagt op welke lengte langs het wegvak het verkeersbesluit begint en eindigt.
* De wegbeheerder geeft antwoord
* Het Systeem geeft een lijst met verkeersborden en markeringen die bij deze verkeersregel passen en vraagt aan te geven op welke lengterichting deze staan, en (bij een verkeersbord) of dit naast de weg of boven de rijbaan bevestigd is
* De wegbeheerder geeft antwoord <sup>2</sup>
*  Het systeem geeft een lijst met onderborden passend bij de gekozen verkeersborden en vraagt de gebruiker of deze worden toegevoegd en eventueel om variabele waarden in te vullen
* De wegbeheerder geeft antwoord

<p class="note" title="Voetnoten">
<ol><li> Indien uitbreiding van verkeersregels en verkeersborden mogelijk wordt gemaakt moet de wegbeheerder deze aanvullingen eerst publiceren, dan het systeem wijzen op de uitbreiding. </li>
<li> De verkeersborden en markeringen kunnen eventueel ook via een NLCS tekening worden aangeleverd, indien hier zodanige regels voor zijn ontwikkeld dat dit redelijkerwijs zonder foutmeldingen kan. In dat geval moet de gebruiker nog steeds selecteren, welke verkeersborden betrekking hebben op de verkeersregel die wordt ingevoerd </li></ol>
</p>




## Valideren verkeersbesluit


## Publiceren netwerkdata
 geschikt om deze op een eenvoudige wijze in een machine-leesbare vorm te kunnen verwerken van besluiten tot kenmerken die gebruikt kunnen worden voor de digitalisering van werkprocessen van wegbeheerders en service providers en om de [=weggebruiker=] of rij-assistent digitaal te informeren.

## Publiceren verkeersbesluit 
(of doe je dit eerder dan het publiceren van netwerkdata)
Het publiceren van de wijziging op [www.overheid.nl](www.overheid.nl) 


## Machineleesbare informatie
  <p> Een <b>wegbeheerder</b> die een drempel wil aanleggen, kan daarmee twee verschillende doelen hebben: </p>
  <ol><li> Zorgen dat het verkeer <i>snelheid mindert ten opzichte van de maximum snelheid</i>, zodat een gevaarlijke situatie voorkomen wordt (een kruising, een school, een uitrit....) </li>
  <li> Zorgen dat het verkeer zijn <i>snelheid beperkt tot de maximum snelheid</i>, zodat over de gehele lengte van de weg niet te hard gereden wordt.</li></ol>
<p> Door op een kaart aan te geven dat er een waarschuwingsbord komt voor een drempel, en de drempel op de kaart te zetten, is de bedoeling voor een verkeerskundige duidelijk, maar is het onderscheid tussen het eerste en tweede doel niet meer af te leiden. Door het ontwerp van de drempel kan een maximale snelheid worden "afgedwongen" omdat het niet comfortabel is om er harder overheen te rijden.</p>
  <p> Een <b>Menselijke chauffeur</b> die het verkeersbord visueel waarneemt, neemt (meestal) ook gelijktijdig de drempel visueel waar. Als de drempel er hoog uitziet ten opzichte van de snelheid, mindert de chauffeur tot minder dan de maximum snelheid. Als de drempel er laag uitziet ten opzichte van de maximum snelheid, beperkt de chauffeur zich tot de maximum snelheid. Voor een menselijke chauffeur voldoet het verkeersbord. Vooral omdat een deel van de chauffeurs de route kent, en na een keer te hard over de drempel te zijn gereden de tweede keer de snelheid iets mindert. </p>
  <p> Een <b>Automatische pilot</b> of een <b>Rij-assistent</b> kan ook via beeldherkenning het verkeersbord en de drempel waarnemen. De menselijke afweging hoe snel comfortabel over de drempel gereden kan worden, is voor een machine echter moeilijk te maken. De machine weet niet goed welke snelheid het voertuig zou moeten hebben bij de drempel. </p>
  <p> Een <b>Automatische pilot</b> of een <b>Rij-assistent</b> krijgt in het ideale geval via de netwerkregistratie door, dat er een drempel ligt. Of eigenlijk: dat tussen punt x en punt y op zijn route (over de lengte van de drempel) snelheid geminderd moet worden tot x. Indien de drempel de maximum snelheid afdwingt, is de waarschuwing eigenlijk niet nodig; tenzij de menselijke chauffeur die zelf rijdt gewaarschuwd moet worden om hier toch maar even snelheid te minderen (bijvoorbeeld door het verkeersbord ook op de boordcomputer te tonen). Indien de drempel een lagere snelheid afdwingt, kan de machine de informatie goed interpreteren. Zowel het verkeersbord, als de lengte waarover de waarschuwing geldt, als de <i>consequentie</i>, langzamer rijden, zal opgenomen moeten worden in de landelijke registratie, om het hierboven beschreven doel te halen. </p>


  


<li> Een zone (bijvoorbeeld een parkeerzone)</li></ol> 
<p>De verkeerskundige bedenkt daarbij waar verkeersborden en markeringen nodig zijn. </p>
<p> Een <b>wegontwerper</b> wil weten, of alle verkeersborden die nodig zijn in het ontwerp een plaats heeft gegeven. Voor de wegontwerper is het handig, om de zone te weten en de gewenste verkeersborden. </p>
<p> Een <b>[=weggebruiker=]</b> wil op de locatie waar hij rijdt weten welke regel geldt: hij leest aan de verkeersborden, markeringen en de weginrichting af welke regels gelden. Deze gebruiker moet onthouden dat hij bij inrijden van een zone een verkeersbord is tegengekomen. Voor de mens maakt de digitale registratiewijze niet uit </p>
<p> Een <b>incar systeem of navigatiesysteem</b> wil op de locatie waar het rijdt weten welke regel geldt: 
<ul><li>het localiseert de locatie waar het zich bevindt, vergelijkt dat met de netwerkregistratie, weet op welk wegvak het zich bevindt en leest dan af welke regel geldt in dat wegvak. </li>
<li> Als de verkeersregel is vastgelegd in een zone, komt er een stap bij: het systeem moet dan bepalen of het zich binnen of buiten een zone bevindt, en welke regels in deze zone gelden. Voor een dergelijk systeem is registratie van verkeersregels per wegvak beter dan per zone. </li><ul></p>
<p> Een <b>wegbeheerder<b> wil weten, of alle verkeersborden die nodig zijn nog steeds aanwezig zijn. De wegbeheerder heeft per zone de locatie nodig van de verkeersborden die aanwezig zouden moeten zijn om te kunnen controleren of de verkeersborden er zijn. Voor de wegbeheerder maakt het niet uit of een verkeersbord aan een wegvak is gekoppeld, of aan een zone, de verkeersborden zijn als losse data voldoende. </p> </aside>