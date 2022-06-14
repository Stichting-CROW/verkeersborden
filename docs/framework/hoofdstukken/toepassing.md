# Toepassing

Het hoofdstuk over toepassing van het informatiemodel geeft een inzicht in het potentiele gebruik van het informatiemodel bij het genereren van digitale [=Verkeerskundige informatie=].
De wegbeheerder past het informatiemodel toe bij het beheren en publiceren van digitale [=Verkeerskundige informatie=] in drie contexten:

1. Het inmeten en vastleggen van de huidige verkeerskundige situatie om de digitale informatie betrouwbaar, compleet en actueel te maken. De informatie wordt vastgelegd in een landelike netwerkregistratie.
2. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor een verkeersbesluit gepubliceerd wordt. De informatie wordt gepubliceerd door KOOP. Vastlegging van de informatie wordt ondersteund in een verkeersbesluitenapplicatie.
3. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor geen verkeersbesluit gepubliceerd hoeft te worden.


## Wegennetwerk


De use case van het [=Nationaal Wegen Bestand+=] gaat uit van het centraal publiceren van verkeerskundige informatie. Omdat een netwerk moet routeren over gemeente- en provincie- en rijksweggrenzen heen, moet er een controle zijn op de samenhang. Daarom is een landelijke registratie op korte termijn het makkelijkst te organiseren, en je kun je de wegbeheerder die werkt met kaarten beter faciliteren. 

<aside class="note" title="Publicatie bij de bron">
Op langere termijn is publicatie 'bij de bron' wellicht een betere optie. In het Digitaal Stelsel Gebouwde Omgeving wordt ervan uitgegeaan, dat degene die een asset ontwerpt, bouwt of beheert ook degene is die de informatie daarover publiceert (publicatie bij de bron). Dit vraagt een hoog digitaal en procesmatig volwassenheidsniveau van de wegbeheerders die bij wijzigingen in de verkeerssituatie zullen moeten valideren dat het gezamenlijke netwerk nog steeds "wiskundig sluitend" is. De huidige status is dat de meerderheid van de wegbeheerders nog niet in staat zijn om informatiemanagement uit te voeren op dit niveau.
</aside>


## Samenstellen netwerkdata

Dit onderdeel van de usecase beschrijft de use case waarmee een wegbeheerder of een wegontwerper namens de wegbeheerder een correcte dataset kan samenstellen met wijzigingen in het verkeersnetwerk. Het is nog niet uitgewerkt of het systeem uit dit onderdeel van de use case een systeem van de wegbeheerder is, of een systeem van de landelijke registratie.

* De Wegbeheerder markeert het gebied waarbinnen de wijziging valt en geeft aan op welke datum de wijziging ingaat.
* Het Systeem geeft geeft een preselectie van de de wegvakken en juncties die op dat tijdstip actueel zijn in dit gebied (online of als dataset).
* De Wegbeheerder selecteert alle wegvakken en juncties die wijzigen.
* Het Systeem geeft (1) de selectie weer in een overzicht of (2) exporteert een dataset met de geselecteerde wegvakken en juncties.
* De Wegbeheerder geeft (1) in het systeem of (2) in een dataset aan welke wegvakken en juncties vervallen en voegt nieuwe wegvakken en juncties toe. 
* Het Systeem controleert of het nieuwe netwerk sluitend is en (1) toont een validatieoverzicht met eventuele foutmeldingen of (2) exporteert een validatierapport.

De zo samengestelde netwerkdata kan eventueel worden gebruikt in simulaties of om varianten te onderzoeken, daarom is dit een separate stap ten opzichte van de formele transactie van de netwerkdata van de wegbeheerder naar de beheerder van de landelijke registratie.

Omdat het netwerk buiten de scope van het [=Informatiemodel Verkeerstekens=] valt, volgen uit deze use case géén eisen aan het informatiemodel.




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