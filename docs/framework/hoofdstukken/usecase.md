# Use case


## Inleiding

De scope van het [=Informatiemodel Verkeerstekens=] is de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de locatie van bijbehorende verkeersborden in een systeem voor [SMART Mobility] dat een weggebruiker ondersteunt tijdens deelname aan het verkeer." 

<aside class="note" title="Definitie use case">
Een usecase beschrijft een systeem vanuit het gebruikersperspectief. Het beschrijft de actor, de initiator van de interactie, en het systeem zelf als een opeenvolging van eenvoudige stappen. Actoren kunnen iets of iemand zijn, die bestaat buiten het te bestuderen systeem, en die deelneemt in de opeenvolgende activiteiten in een dialoog met het systeem om een bepaald doel te bereiken. Actoren kunnen eindgebruikers, andere systemen of hardware (apparatuur) zijn. Elke usecase is een complete serie van zogenaamde "events", beschreven vanuit het standpunt van de actor. <a HREF="https://nl.wikipedia.org/wiki/Usecase">Bron: Wikipedia</a>
 </aside>

Omdat het een informatiemodel betreft, en de werking en inrichting van een systeem (bijvoorbeeld een applicatie of database) buiten de scope valt, is de bijbehorende use case nog zeer generiek en weinig gedetailleerd. Eventuele systemen die een specifiekere interactie ondersteunen zullen zelf meer gedetailleerde use cases hebben die de interactie van de gebruiker met dit specifieke systeem beschrijft. 

De gebruikers die in deze use case centraal staan zijn de Weggebruikers, die tijdens het rijdens willen weten welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] gelden voor de weg waar ze op rijden. De weggebruikers willen visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. 

In het volgende hoofdstuk wordt ingegaan op een andere groep gebruikers: de wegbeheerders, die digitale [=verkeerskundige informatie=] beheren en publiceren.




 
 

## Transactie netwerkdata 

Omdat het netwerk buiten de scope van het [=Informatiemodel Verkeerstekens=] valt, volgen uit deze use case géén eisen aan het informatiemodel.

## Samenstellen verkeersbesluit
Dit onderdeel van de usecase beschrijft wat er nodig is zodat een wegbeheerder een correcte dataset kan samenstellen met een verkeersbesluit.

* De Wegbeheerder selecteert het wegvak (in de netwerkdata) waar hij een verkeersbesluit aan wil toevoegen.\
* Het Systeem controleert of het wegvak uit twee richtingen bestaat. Indien dit zo is, krijgt de wegbeheerder de vraag: welke junctie is het startpunt? 
* De wegbeheerder geeft antwoord
* Het Systeem vraagt welke verkeersregel of waarschuwing van toepasssing is en presenteert een lijst waar de gebruiker uit kan kiezen <sup>1</sup>
* De wegbeheerder geeft antwoord
* Het Systeem vraagt op welke lengte langs het wegvak het verkeersbesluit begint en eindigt.
* De wegbeheerder geeft antwoord
* Het Systeem geeft een lijst met borden en markeringen die bij deze verkeersregel passen en vraagt aan te geven op welke lengterichting deze staan, en (bij een bord) of dit naast de weg of boven de rijbaan bevestigd is
* De wegbeheerder geeft antwoord <sup>2</sup>
*  Het systeem geeft een lijst met onderborden passend bij de gekozen borden en vraagt de gebruiker of deze worden toegevoegd en eventueel om variabele waarden in te vullen
* De wegbeheerder geeft antwoord

<p class="note" title="Voetnoten">
<ol><li> Indien uitbreiding van verkeersregels en borden mogelijk wordt gemaakt moet de wegbeheerder deze aanvullingen eerst publiceren, dan het systeem wijzen op de uitbreiding. </li>
<li> De borden en markeringen kunnen eventueel ook via een NLCS tekening worden aangeleverd, indien hier zodanige regels voor zijn ontwikkeld dat dit redelijkerwijs zonder foutmeldingen kan. In dat geval moet de gebruiker nog steeds selecteren, welke borden betrekking hebben op de verkeersregel die wordt ingevoerd </li></ol>
</p>

## Transactie verkeersbesluit
Dit onderdeel van de use case bevast de transactie tussen de **wegbeheerder** en de **Landelijke registratie** waarbij de wegbeheerder een wijziging in de wegligging en/of de verkeersregels aanbiedt aan de landelijke registratie. 

De wegbeheerder heeft daarvoor "Aanleverinstructies" nodig waarin staat:
- Hoe de wijziging kan worden aangeleverd: via VISI, een website, via een API


## Valideren verkeersbesluit


## Publiceren netwerkdata
 geschikt om deze op een eenvoudige wijze in een machine-leesbare vorm te kunnen verwerken van besluiten tot kenmerken die gebruikt kunnen worden voor de digitalisering van werkprocessen van wegbeheerders en service providers en om de weggebruiker of rij-assistent digitaal te informeren.

## Publiceren verkeersbesluit
Het publiceren van de wijziging op [www.overheid.nl](www.overheid.nl) 


## Machineleesbare informatie
  <p> Een <b>wegbeheerder</b> die een drempel wil aanleggen, kan daarmee twee verschillende doelen hebben: </p>
  <ol><li> Zorgen dat het verkeer <i>snelheid mindert ten opzichte van de maximum snelheid</i>, zodat een gevaarlijke situatie voorkomen wordt (een kruising, een school, een uitrit....) </li>
  <li> Zorgen dat het verkeer zijn <i>snelheid beperkt tot de maximum snelheid</i>, zodat over de gehele lengte van de weg niet te hard gereden wordt.</li></ol>
<p> Door op een kaart aan te geven dat er een waarschuwingsbord komt voor een drempel, en de drempel op de kaart te zetten, is de bedoeling voor een verkeerskundige duidelijk, maar is het onderscheid tussen het eerste en tweede doel niet meer af te leiden. Door het ontwerp van de drempel kan een maximale snelheid worden "afgedwongen" omdat het niet comfortabel is om er harder overheen te rijden.</p>
  <p> Een <b>Menselijke chauffeur</b> die het verkeersbord visueel waarneemt, neemt (meestal) ook gelijktijdig de drempel visueel waar. Als de drempel er hoog uitziet ten opzichte van de snelheid, mindert de chauffeur tot minder dan de maximum snelheid. Als de drempel er laag uitziet ten opzichte van de maximum snelheid, beperkt de chauffeur zich tot de maximum snelheid. Voor een menselijke chauffeur voldoet het bord. Vooral omdat een deel van de chauffeurs de route kent, en na een keer te hard over de drempel te zijn gereden de tweede keer de snelheid iets mindert. </p>
  <p> Een <b>Automatische pilot</b> of een <b>Rij-assistent</b> kan ook via beeldherkenning het bord en de drempel waarnemen. De menselijke afweging hoe snel comfortabel over de drempel gereden kan worden, is voor een machine echter moeilijk te maken. De machine weet niet goed welke snelheid het voertuig zou moeten hebben bij de drempel. </p>
  <p> Een <b>Automatische pilot</b> of een <b>Rij-assistent</b> krijgt in het ideale geval via de netwerkregistratie door, dat er een drempel ligt. Of eigenlijk: dat tussen punt x en punt y op zijn route (over de lengte van de drempel) snelheid geminderd moet worden tot x. Indien de drempel de maximum snelheid afdwingt, is de waarschuwing eigenlijk niet nodig; tenzij de menselijke chauffeur die zelf rijdt gewaarschuwd moet worden om hier toch maar even snelheid te minderen (bijvoorbeeld door het bord ook op de boordcomputer te tonen). Indien de drempel een lagere snelheid afdwingt, kan de machine de informatie goed interpreteren. Zowel het bord, als de lengte waarover de waarschuwing geldt, als de <i>consequentie</i>, langzamer rijden, zal opgenomen moeten worden in de landelijke registratie, om het hierboven beschreven doel te halen. </p>



## Werkingsgebied 
<p> De verkeerskundige die een verkeersbesluit neemt, heeft een heel gebied op het oog, waar de verkeersregels in samenhang moeten zorgen voor een goede doorstroming en veiligheid van het wegverkeer. Deze verkeerskundige zal een verkeersregel willen geven die geldt voor:
<ol><li> Een wegvak; </li>
<li> Een paar wegvakken (bijvoorbeeld doorlopend over kruisingen heen geldt dezelfde snelheid); </li>
<li> Een zone (bijvoorbeeld een parkeerzone)</li></ol> 
<p>De verkeerskundige bedenkt daarbij waar borden en markeringen nodig zijn. </p>
<p> Een <b>wegontwerper</b> wil weten, of alle borden die nodig zijn in het ontwerp een plaats heeft gegeven. Voor de wegontwerper is het handig, om de zone te weten en de gewenste borden. </p>
<p> Een <b>menselijke weggebruiker</b> wil op de locatie waar hij rijdt weten welke regel geldt: hij leest aan de borden, markeringen en de weginrichting af welke regels gelden. Deze gebruiker moet onthouden dat hij bij inrijden van een zone een bord is tegengekomen. Voor de mens maakt de digitale registratiewijze niet uit </p>
<p> Een <b>incar systeem of navigatiesysteem</b> wil op de locatie waar het rijdt weten welke regel geldt: 
<ul><li>het localiseert de locatie waar het zich bevindt, vergelijkt dat met de netwerkregistratie, weet op welk wegvak het zich bevindt en leest dan af welke regel geldt in dat wegvak. </li>
<li> Als de verkeersregel is vastgelegd in een zone, komt er een stap bij: het systeem moet dan bepalen of het zich binnen of buiten een zone bevindt, en welke regels in deze zone gelden. Voor een dergelijk systeem is registratie van verkeersregels per wegvak beter dan per zone. </li><ul></p>
<p> Een <b>wegbeheerder<b> wil weten, of alle borden die nodig zijn nog steeds aanwezig zijn. De wegbeheerder heeft per zone de locatie nodig van de borden die aanwezig zouden moeten zijn om te kunnen controleren of de borden er zijn. Voor de wegbeheerder maakt het niet uit of een bord aan een wegvak is gekoppeld, of aan een zone, de borden zijn als losse data voldoende. </p> </aside>