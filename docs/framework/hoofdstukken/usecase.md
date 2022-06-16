# Use case


## Inleiding

De scope van het [=Informatiemodel Verkeerstekens=] is de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de locatie van bijbehorende verkeersborden in een systeem voor [SMART Mobility] dat een [=weggebruiker=] ondersteunt tijdens deelname aan het verkeer." 

<aside class="note" title="Definitie use case">
Een usecase beschrijft een systeem vanuit het gebruikersperspectief. Het beschrijft de actor, de initiator van de interactie, en het systeem zelf als een opeenvolging van eenvoudige stappen. Actoren kunnen iets of iemand zijn, die bestaat buiten het te bestuderen systeem, en die deelneemt in de opeenvolgende activiteiten in een dialoog met het systeem om een bepaald doel te bereiken. Actoren kunnen eindgebruikers, andere systemen of hardware (apparatuur) zijn. Elke usecase is een complete serie van zogenaamde "events", beschreven vanuit het standpunt van de actor. <a HREF="https://nl.wikipedia.org/wiki/Usecase">Bron: Wikipedia</a>
 </aside>

Omdat het een informatiemodel betreft, en de werking en inrichting van een systeem (bijvoorbeeld een applicatie of database) buiten de scope valt, is de bijbehorende use case nog zeer generiek en weinig gedetailleerd. Eventuele systemen die een specifiekere interactie ondersteunen zullen zelf meer gedetailleerde use cases hebben die de interactie van de gebruiker met dit specifieke systeem beschrijft. 

De gebruikers die in deze use case centraal staan zijn de [=weggebruikers=], die tijdens het rijdens willen weten welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] gelden voor de weg waar ze op rijden. De [=weggebruikers=] willen visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. 

In het volgende hoofdstuk wordt ingegaan op een andere groep gebruikers: de wegbeheerders, die digitale [=verkeerskundige informatie=] beheren en publiceren.


<li> Een zone (bijvoorbeeld een parkeerzone)</li></ol> 
<p>De verkeerskundige bedenkt daarbij waar verkeersborden en markeringen nodig zijn. </p>
<p> Een <b>wegontwerper</b> wil weten, of alle verkeersborden die nodig zijn in het ontwerp een plaats heeft gegeven. Voor de wegontwerper is het handig, om de zone te weten en de gewenste verkeersborden. </p>
<p> Een <b>[=weggebruiker=]</b> wil op de locatie waar hij rijdt weten welke regel geldt: hij leest aan de verkeersborden, markeringen en de weginrichting af welke regels gelden. Deze gebruiker moet onthouden dat hij bij inrijden van een zone een verkeersbord is tegengekomen. Voor de mens maakt de digitale registratiewijze niet uit </p>
<p> Een <b>incar systeem of navigatiesysteem</b> wil op de locatie waar het rijdt weten welke regel geldt: 
<ul><li>het localiseert de locatie waar het zich bevindt, vergelijkt dat met de netwerkregistratie, weet op welk wegvak het zich bevindt en leest dan af welke regel geldt in dat wegvak. </li>
<li> Als de verkeersregel is vastgelegd in een zone, komt er een stap bij: het systeem moet dan bepalen of het zich binnen of buiten een zone bevindt, en welke regels in deze zone gelden. Voor een dergelijk systeem is registratie van verkeersregels per wegvak beter dan per zone. </li><ul></p>
<p> Een <b>wegbeheerder<b> wil weten, of alle verkeersborden die nodig zijn nog steeds aanwezig zijn. De wegbeheerder heeft per zone de locatie nodig van de verkeersborden die aanwezig zouden moeten zijn om te kunnen controleren of de verkeersborden er zijn. Voor de wegbeheerder maakt het niet uit of een verkeersbord aan een wegvak is gekoppeld, of aan een zone, de verkeersborden zijn als losse data voldoende. </p> </aside>

 

 ### Geometrische nauwkeurigheid
Het netwerk en de locaties van verkeersborden ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke rijstrook het zich bevindt als op verschillende rijstroken verschillende regels gelden. 
 







