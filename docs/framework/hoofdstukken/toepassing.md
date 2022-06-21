









### Selecteren verkeersregel
De wegbeheerder wil een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] opnemen in de [=verkeerskundige informatie=].

### Selecteren bord

### Selecteren onderbord

* Het informatiemodel MOET de relaties bevatten tussen de types verkeersborden en de bijbehorende types onderborden.






## Valideren data


<aside class="note" title="Use case samenstellen verkeerskundige informatie">
Een voorbeeld van een happy flow van de use case "samenstellen verkeerskundige informatie" is bijvoorbeeld als volgt:
<ul>
<li>De wegbeheerder levert een (link naar) een geometrische representatie (een een polygoon of vlak) in GIS of CAD formaat.</li> 
<li>Het systeem vraagt de wegbeheerder om een link te leggen tussen de ingevoerde geometrie en de officiele publicatie van het [=verkeersbesluit=]. Als de ingevoerde [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] niet verkeersbesluitplichtig is wordt deze stap overgeslagen.</li> 
<li>....</li> 
<li>....</li> 
<li>....</li> </ul> 
</aside> 




## Overige wijzigingen





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



## Ingangsdatum
Voor de primaire use case is het niet nodig om historische gegevens te kunnen vinden - alle actuele verkeerskundige gegevens zijn voldoende.

Voor gebruik van de digitale [=Verkeerskundige informatie=] in verkeersberekeningen en wegontwerpen is het wel noodzakelijk om te kunnen bepalen welke verkeersregels gelden, en welke verkeersborden aanwezig zijn op een bepaald tijdstip.

Ook voor publicatie van een verkeersbesluit is het handig, om een datum in de toekomst te kunnen vastleggen, waarop de verkeersregel van toepassing wordt. Daarmee kan gezorgd worden dat de data actueel en beschikbaar is op het moment van ingaan van het verkeersbesluit. 

* Het informatiemodel MOET de mogelijkheid bieden om een begin- en einddatum en -tijdstip aan te duiden voor een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=]
* Het informatiemodel MOET de mogelijkheid bieden om een begin- en einddatum en -tijdstip aan te duiden voor plaatsing en weghalen van een verkeersbord. 

<div class="issue" data-number="150"></div>