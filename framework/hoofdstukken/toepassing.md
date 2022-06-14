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
<p> Verkeersbesluiten worden door wegbeheerders vaak ontwikkeld op basis van een GIS-kaart of een 2D CAD-ontwerp, waar de nieuwe wegligging en/of oude en nieuwe borden op geplot worden; bij besluiten die gelden voor een zone wordt deze soms aangeduid met een vlak op de kaart. Als deze kaarten of ontwerpen rechtstreeks door een 'Systeem' moeten worden ingelezen en verwerkt tot verkeersdata, gerelateerd aan een wegennetwerk, moeten door het systeem veel complexe puzzels worden gemaakt. Wegen zijn op een GIS-kaart weergegeven met een lijn of vlak, in een CAD-ontwerp vaak met lijnen die de stroken en de kant van de verharding aangeven. Om van hieruit een wegennetwerk te kunnen afleiden met wegvakken ('hartlijn van een weg') en juncties ('knopen'), is niet goed programmeerbaar. Ook rekenfouten in het aansluiten op het bestaande netwerk worden door een computer niet begrepen - bijvoorbeeld de juncties verschillen 0.00001 mm van elkaar en het systeem loopt vast, waar een mens ze zo over elkaar plaatst wetend dat de afwijking minimaal is.
Ook van een bord kent het systeem de reikweidte niet, al kan het ernaar raden: een waarschuwingsbord voor een drempel geldt voor maximaal 50 meter lengte, een bord "kijk uit herten" heeft een onderbord wat vertelt hoeveel meter deze waarschuwing geldt. Al met al zit er een verschil in de mens, die de kaart met wegen en borden 'in een oogopslag' begrijpt, en een systeem waarvoor dit te complex en tegenstrijdig is. Daarom geldt in deze use case beschrijving de aanname, dat een wegbeheerder wijzigingen doorgeeft passend bij de centrale netwerkregistratie. </p>
<p> De andere kant op is minder complex: als het netwerk eenmaal is opgebouwd, kunnen met 'rules' wegvakken en borden worden afgeleid. Hierbij geldt: hoe beter en uitgebreider de netwerkdata, hoe beter dit gaat. Als een wegvak per rijstrook is aangeduid en de breedte van de rijstrook op elke lengte is aangegeven, kan het systeem het "wegontwerp" genereren en de 'in lengterichting' aangeduide borden visualiseren. De wegbeheerder kan dat goed overzien, of hij de 'data' op de juiste manier heeft aangeleverd / ingevoerd.</p></aside>  