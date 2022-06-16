# Use case


## Scope


De primaire scope van het [=Informatiemodel Verkeerstekens=] is de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de locatie van bijbehorende verkeersborden in een systeem voor [SMART Mobility] dat een [=weggebruiker=] ondersteunt tijdens deelname aan het verkeer." 

<aside class="note" title="Definitie use case">
Een usecase beschrijft een systeem vanuit het gebruikersperspectief. Het beschrijft de actor, de initiator van de interactie, en het systeem zelf als een opeenvolging van eenvoudige stappen. Actoren kunnen iets of iemand zijn, die bestaat buiten het te bestuderen systeem, en die deelneemt in de opeenvolgende activiteiten in een dialoog met het systeem om een bepaald doel te bereiken. Actoren kunnen eindgebruikers, andere systemen of hardware (apparatuur) zijn. Elke usecase is een complete serie van zogenaamde "events", beschreven vanuit het standpunt van de actor. <a HREF="https://nl.wikipedia.org/wiki/Usecase">Bron: Wikipedia</a>
 </aside>

Omdat het een informatiemodel betreft, en de werking en inrichting van een systeem (bijvoorbeeld een applicatie of database) buiten de scope valt, is de bijbehorende use case nog zeer generiek en weinig gedetailleerd. Eventuele systemen die een specifiekere interactie ondersteunen zullen zelf meer gedetailleerde use cases hebben die de interactie van de gebruiker met dit specifieke systeem beschrijft. 

## Doelgroep

De doelgroep van de use case centraal staan zijn de [=weggebruikers=], die tijdens het rijden ondersteund willen worden door [=SMART Mobility=] systemen om te weten welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] gelden voor de weg waar ze op rijden. 

## SMART Mobility

<dfn data-lt="Smart Mobility">Smart Mobility</dfn>
    <dd>Reis- en rijgedrag ondersteund door digitale systemen waaronder andere navigatiesystemen, rijtaakondersteunende systemen, zelfrijdende voertuigen, intelligente verkeersregelinstallaties en systemen waarmee reizigers hun reis online kunnen plannen, reserveren, betalen en onderweg op de hoogte te blijven </dd>

De verkeersborden zijn in eerste instantie bedoeld om de menselijke [=weggebruikers=] te informeren over het gebruik van de weg. [=weggebruikers=] kunnen daarbij ondersteund worden door digitale systemen die hen helpen de weg te vinden, of assisteren bij het besturen van het voertuig:
1. In navigatiesystemen wordt informatie gegeven over de maximum snelheid. Deze systemen zouden meer informatie kunnen geven op basis van het verkeersbesluit. De navigatiesystemen kunnen ook gebruik maken van de netwerkinformatie om een route te bepalen.  
2. Voertuigen worden steeds slimmer met geavanceerde rijtaakondersteunende systemen (Advanced Driver Assistance Systems ofwel ADAS).
3. Er worden in Nederland en in het buitenland verschillende experimenten gedaan met volledig zelfrijdende voertuigen.
4. Het verkeer kan steeds beter worden aangestuurd via centrales (intelligente Verkeersregelinstallaties ofwel iVRI's), een ontwikkeling die 'Connected Intelligent Transport Systems', ofwel C-ITS wordt genoemd. Denk daarbij aan het geleiden van hulpvoertuigen, waarbij via centrale aansturing van de verkeerslichten wordt gezorgd voor een veilige route waarin alle verkeerslichten 'mee zitten'.


## Locatie bepalen
De gebruiker wil van de actuele locatie waar hij rijdt of straks gaat rijden weten, welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] er gelden. Dit betekent, dat het systeem het wegvak moet kunnen herkennen waarop het rijdt, op basis van de locatie. Daarnaast moet ook de plaats in de lengterichting van het wegvak bepaald kunnen worden omdat niet alle regels gelden voor het gehele [=NWB-wegvak=].

 ### Geometrische nauwkeurigheid
Het netwerk en de locaties van verkeersborden ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke rijstrook het zich bevindt als op verschillende rijstroken verschillende regels gelden. 

1. Het netwerk en de locaties van verkeersborden ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke [=rijstrook=] het zich bevindt als op verschillende rijstroken verschillende regels gelden. 
2. Voor de gebruikers is het noodzakelijk dat de actuele verkeersregels, waarschuwingen en adviezen die op de weg gelden visueel kunnen worden getoond in de systemen. Bijvoorbeeld het tonen van het snelheidsbord in het navigatiesysteem. Hiertoe dient het [=Informatiemodel Verkeerstekens=] een grafische weergave te bevatten van de verkeersborden. 


## Regels tonen



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

<div class="issue" data-number="146"></div>

## Rijrichting
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden vanaf welke [NWB-junctie] een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt, indien deze alleen in één richting geldt. 

## Rijstrook
* Het informatiemodel MOET de mogelijkheid bieden om de verkeersregel te laten gelden voor één van de [=rijstroken=], die worden genummerd vanuit het midden van de weg. Ook als het [=NWB-Wegvak=] nog niet is gesplitst in rijstroken.

Als in de toekomst een [=NWB-Wegvak=] maar één rijstrook weergeeft, hoeft de nummering niet meer te worden aangeduid. 




### Visuele ondersteuning
De [=weggebruikers=] willen door hun systeem visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. 

* Het informatiemodel MOET een schaalbare afbeelding van de fysieke verschijningsvorm van verkeersborden en onderborden bevatten. 



 


 






