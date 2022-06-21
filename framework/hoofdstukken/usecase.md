# Use case


## Scope

De primaire scope van het [=Informatiemodel Verkeerstekens=] is de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de bijbehorende verkeersborden in een systeem voor [=SMART Mobility=] dat een [=weggebruiker=] ondersteunt tijdens deelname aan het verkeer." 

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


## Wegvak bepalen
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

* Het informatiemodel MOET aansluiten op het informatiemodel van het [=NWB=] om te zorgen dat [=Verkeerskundige informatie=] gekoppeld kan worden aan het juiste [=NWB-wegvak=] en de juiste richting in het [=NWB-wegvak=].

## Verkeersregels ophalen
De gebruiker wil van de actuele locatie waar hij rijdt of straks gaat rijden weten, welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] er gelden. Dit betekent, dat het systeem deze regels bij het [=NWB-wegvak=] moet kunnen vinden. 

* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] van toepassing te laten zijn op een of meerdere [=NWB-wegvakken=].

### Rijrichting bepalen
Omdat een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] zowel voor één als voor beide richtingen kan gelden, zal het systeem moet kunnen vinden voor welke richting de regel van toepassing is.

* Het informatiemodel MOET als default situatie hebben dat een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] van toepassing is op het gehele [=NWB-wegvak=], in beide richtingen.
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden vanaf welke [NWB-junctie] een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt, indien deze alleen in één richting geldt. 

### Rijstrook bepalen
* Het informatiemodel MOET de mogelijkheid bieden om de verkeersregel te laten gelden voor één van de [=rijstroken=], die oplopend vanaf één worden genummerd vanuit het midden van de weg. Ook als het [=NWB-Wegvak=] nog niet is gesplitst in rijstroken.

Als in de toekomst een [=NWB-Wegvak=] maar één rijstrook weergeeft, hoeft de nummering niet meer te worden aangeduid. 


### Werkingslengte vinden
Omdat een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] zowel voor het gehele als voor een gedeelte van het [=NWB-wegvak=] kan gelden, zal het systeem moeten kunnen vinden voor welk gedeelte van het [=NWB-wegvak=] de regel van toepassing is. 

<dfn data-lt="Werkingslengte">Werkingslengte</dfn>
<dd>Het gedeelte van het [=NWB-wegvak=] waarvoor een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheden=] met bijbehorend verkeersbord geldt.</dd>


#### Beginpunt 
* Het informatiemodel MOET als default situatie hebben dat de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] start op de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] te laten gelden vanaf een specifiek beginpunt gemeten in meters vanaf de [NWB-junctie].


#### Eindpunt
* Het informatiemodel MOET als default situatie hebben dat de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] eindigt op de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] te laten gelden tot een specifiek eindpunt op x lengte ná de [NWB-junctie]. 

<div class="issue" data-number="146"></div>


## Fysiek bord tonen
De gebruiker wil van de actuele locatie waar hij nu of binnen enkele minuten rijdt zien welk fysiek verkeersbord er staat.

* Het informatiemodel MOET de mogelijkheid bieden om aan een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] een of meerdere verkeersborden te verbinden.
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden voor welke rijrichting het fysieke verkeersbord bedoeld is, door de [NWM-junctie] op het startpunt van de rijrichting aan te duiden bij het bord.
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat gemeten in meters vanaf de [NWB-junctie]. 
* Het informatiemodel MOET de mogelijkheid bieden om aan te duiden waar het fysieke verkeersbord staat: boven de weg, of links of rechts naast de weg.

<div class="issue" data-number="145"></div>

## Visualisatie
De [=weggebruikers=] willen door hun systeem visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. Dit betekent dat het systeem zal moeten weten, welk bord getoond moet worden om duidelijk te maken welke [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt. 

Daarbij geldt als "complicatie" dat niet elke [=verkeersregel=] gepaard gaat met een fysiek bord, of niet met een specifiek bord. Bijvoorbeeld in het geval van de maximumsnelheid, wordt dit fysiek soms aangeduid door een bord met het wegtype ("autoweg") terwijl de visuele ondersteuning beter van het type "A1" kan zijn (snelheidsbord).


* Het informatiemodel MOET voor elke [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] weergeven, welk type bord in combinatie met onderbord deze informatie *in de visuele ondersteuning* weergeeft.
* Het informatiemodel MOET een schaalbare afbeelding van de fysieke verschijningsvorm van verkeersborden en onderborden bevatten. 



 


 






