# Toepassing

Het hoofdstuk over toepassing van het informatiemodel geeft een inzicht in het potentiele gebruik van het informatiemodel bij het genereren van digitale verkeerskundige informatie.
De wegbeheerder past het informatiemodel toe bij het beheren en publiceren van digitale verkeerskundige informatie in drie contexten:

1. Het inmeten en vastleggen van de huidige verkeerskundige situatie om de digitale informatie betrouwbaar, compleet en actueel te maken. De informatie wordt vastgelegd in een  landelike netwerkregistratie.
2. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor een verkeersbesluit gepubliceerd wordt. De informatie wordt gepubliceerd door KOOP. Vastlegging van de informatie wordt ondersteund in een verkeersbesluitenapplicatie.
3. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor geen verkeersbesluit gepubliceerd hoeft te worden.

## Netwerkregistratie



## Verkeersbesluitenapplicatie


## Overige wijzigingen

<aside class="note" title="Mens versus machine">
<p> Verkeersbesluiten worden door wegbeheerderes vaak ontwikkeld op basis van een GIS-kaart of een 2D CAD-ontwerp, waar de nieuwe wegligging en/of oude en nieuwe borden op geplot worden; bij besluiten die gelden voor een zone wordt deze soms aangeduid met een vlak op de kaart. Als deze kaarten of ontwerpen rechtstreeks door een 'Systeem' moeten worden ingelezen en verwerkt tot verkeersdata, gerelateerd aan een wegennetwerk, moeten door het systeem veel complexe puzzels worden gemaakt. Wegen zijn op een GIS-kaart weergegeven met een vlak, in een CAD-ontwerp vaak met lijnen die de stroken en de kant van de verharding aangeven. Om van hieruit een wegennetwerk te kunnen afleiden met wegvakken ('hartlijn van een weg') en juncties ('knopen'), is niet goed programmeerbaar. Ook rekenfouten in het aansluiten op het bestaande netwerk worden door een computer niet begrepen - bijvoorbeeld de juncties verschillen 0.00001 mm van elkaar en het systeem loopt vast, waar een mens ze zo over elkaar plaatst wetend dat de afwijking minimaal is.
Ook van een bord kent het systeem de reikweidte niet, al kan het ernaar raden: een waarschuwingsbord voor een drempel geldt voor maximaal 50 meter lengte, een bord "kijk uit herten" heeft een onderbord wat vertelt hoeveel meter deze waarschuwing geldt. Al met al zit er een verschil in de mens, die de kaart met wegen en borden 'in een oogopslag' begrijpt, en een systeem waarvoor dit te complex en tegenstrijdig is. Daarom geldt in deze use case beschrijving de aanname, dat een wegbeheerder wijzigingen doorgeeft passend bij de centrale netwerkregistratie. </p>
<p> De andere kant op is minder complex: als het netwerk eenmaal is opgebouwd, kunnen met 'rules' wegvakken en borden worden afgeleid. Hierbij geldt: hoe beter en uitgebreider de netwerkdata, hoe beter dit gaat. Als een wegvak per rijstrook is aangeduid en de breedte van de rijstrook op elke lengte is aangegeven, kan het systeem het "wegontwerp" genereren en de 'in lengterichting' aangeduide borden visualiseren. De wegbeheerder kan dat goed overzien, of hij de 'data' op de juiste manier heeft aangeleverd / ingevoerd.</p></aside>  