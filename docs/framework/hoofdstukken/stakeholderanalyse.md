# Stakeholderanalyse


## Inleiding

De stakeholderanalyse verkent welke partijen er belanghebbende, ‘leverancier’ en ‘afnemer’ zouden kunnen worden van de informatie, gemodelleerd met het Informatiemodel Verkeerstekens en Verkeersbesluiten.

Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. 

### Representatie

<aside class="note" title="Representatie">
Voor een juiste interpretatie van de use cases is het begrip van ‘representatie’ van belang. Een manier om dit toe te lichten is de ‘Betekenisdriehoek’, zoals gedefinieerd in de NEN 2660-1 (2020). Hier staat: “De betekenisdriehoek visualiseert de relatie tussen ‘dingen’, ‘concepten’ en ‘symbolen’. De rechterbenedenhoek vertegenwoordigt ‘iets dat waarneembaar of voorstelbaar is in de werkelijkheid’. De bovenhoek staat ‘de gedachte aan iets uit de werkelijkheid’, kortweg ‘concept’. De linkerbenedenhoek staat voor het symbool dat de gedachte symboliseert en het ‘iets’ representeert.   

![De betekenisdriehoek conform NEN 2660-1 (2020)](./hoofdstukken/media/representatie.png "De betekenisdriehoek conform NEN 2660-1 (2020)")

Wanneer in de context van het Informatiemodel Verkeerstekens en Verkeersbesluiten toegepast krijgen we de volgende tabel:

<table class="wikitable">
<tr>
<th> Individueel concept
</th>
<th> Objecttype
</th>
<th> “Wegvak”
</th></tr>
<tr>
<td> Individueel ding </td>
<td> Object </td>
<td> “Maasdamstraat”
</td></tr>
 <tr>
<td> Individueel symbool </td>
<td> Geometrische representatie </td>
<td> “Geometrie van Maasdamstraat in de netwerkregistratie”
</td></tr>
</table>

<p> De gegevens van een object zitten zodoende in de rechterbenedenhoek. Van de “Maasdamstraat” wordt vast gelegd van welke objecttype (“Weg”) hij is. Hierdoor is duidelijke welke gegevens er vastgelegd moeten worden (bijvoorbeeld wat zijn naam is, wat het bouwjaar is, welke constructie het is, etc.). Er kunnen dan ook één of meerdere representaties vastgelegd worden. Het object kan gerepresenteerd worden in een GIS bestand, op een CAD tekening, maar ook in een 3D model en zelfs alleen in een spreadsheet. Er zijn dus meerdere representaties (of ‘symbolen’) mogelijk van één individueel object.</p>

<p> Dit is nodig om te weten, omdat vanuit de GIS gedachte de geometrie leidend is. Er wordt een feature (polygoon bijvoorbeeld) gemaakt, deze krijgt allerlei attributen en daar worden de waarden ingevuld. Dit werkt prima, totdat men vraagt om een 3D model of CAD tekening erbij. Dan zullen veel van de gegevens herhaald moeten worden en het 3D model kan niet gelinkt worden aan de geo-feature. </p> 

<p> Het is toekomstvaster om te redeneren vanuit het object. Het object heeft een uniek ID en heeft allemaal attributen (in bijvoorbeeld in spreadsheet). De representaties van het object hebben alleen de gegevens benodigd voor die representatie (de geometrie) en het zelfde unieke ID. Zo is het makkelijk te matchen. </p>

</aside>


## Ontwerpfase

![Ontwerpfase](./hoofdstukken/media/ontwerpfase.jpg "Ontwerpfase")


### Aanvraag maatregel

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

Het ontwerpproces start met de aanvraag van een verkeersbesluit. Dit kan gebeuren omdat er een (nieuw)bouwproject wordt uitgevoerd en de inrichting van de wegen wijzigen, of bijvoorbeeld omdat een omwonende of bedrijf een melding doet van een onveilige situatie of onwenselijke parkeersituatie die vraagt om andere verkeersregels. Hoe dan ook, hierdoor ontstaat een aanvraag voor het nemen van een verkeersbesluit. Dit leidt tot een inhoudelijke behandeling van de aanvraag door een verkeerskundige en waar nodig tot uitwerking in een ontwerp van de nieuwe situatie. 

### Verkeersmodel

*Stakeholders: Verkeerskundigen*

Verkeersmodellen worden gebruikt om de toekomstige doorstorming van het verkeer te kunnen voorspellen en zo een optimale inrichting van het netwerk te ontwerpen. Het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeersborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. Dit proces gebeurt vaak tegelijkertijd (iteratief en paralel aan) het ontwerpen van de weg(inrichting) waardoor onderzocht wordt of het gewenste netwerk ook ruimtelijk inpasbaar is.

### Wegontwerp

*Stakeholders: Ontwerpers*

Wegontwerp is ontwerp van wegen, afhankelijk van het detailniveau van het ontwerp inclusief markeringen en bebording. Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden en markeringen wordt bepaald. Ook kunnen extra verkeersborden en markeringen uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen zoals bij kruispunten. Tijdens het wegontwerp wordt niet het netwerk ontworpen, maar de fysieke ligging van de weg, met een alignement ("hartlijn") met bogen, overgangsbogen en rechtstanden en daarnaast de rijstrookbreedte die breder wordt bij hogere snelheden of krappe bochten. Dit alignement wordt vaak gevisualiseerd in een CAD-tekening volgens de open BIM standaard NLCS , met op tekening de markering van rijstroken of kanten van de stoepbanden, en de verkeerstekens. Hierbij wordt de BIM standaard NLCS gebruikt. Ook kan het wegontwerp onderdeel zijn van een BIM model.

1. Om met een wegontwerp aan te sluiten op een landelijke netwerkregistratie van wegen zouden afspraken gemaakt moeten worden om ook het ontworpen netwerk in termen van juncties en wegvakken op te nemen in ontwerptekeningen of BIM modellen, naast de verkeerstekens. Zo kan makkelijker de vertaling worden gemaakt tussen wegontwerp en netwerkregistratie. Deze afspraak zou goed passen bij de BIM standaard NLCS. 

2. Om het geregistreerde netwerk en de verkeersbesluiten te kunnen gebruiken als input voor een nieuw wegontwerp is het bijhouden van de alignementskenmerken van de weg aan te raden. Als het netwerk een hoger detailniveau krijgt om per rijstrook verkeersbesluiten te kunnen vastleggen, is een standaard nodig waarmee het alignement wordt vastgelegd, omdat het alignement wordt ontworpen per weg of in een enkele geval per rijbaan, niet per rijstrook.

3. In het wegontwerp worden zaken onderzocht die niet altijd op een ontwerptekening staan. In een BIM model kunnen bijvoorbeeld zichtlijnen zijn onderzocht; bij een beperkt zicht mag niet worden ingehaald. Dit resulteert niet altijd in een bord. De menselijke weggebruiker kan dit op zicht inschatten. Moet deze informatie worden opgenomen in het informatiemodel? 

<div class="issue" data-number="65"></div>

<aside class="note" title="Ontwerp versus netwerkdata">
<p> Verkeersbesluiten worden door wegbeheerderes vaak ontwikkeld op basis van een GIS-kaart of een 2D CAD-ontwerp, waar de nieuwe wegligging en/of oude en nieuwe borden op geplot worden; bij besluiten die gelden voor een zone wordt deze soms aangeduid met een vlak op de kaart. Als deze kaarten of ontwerpen rechtstreeks door een 'Systeem' moeten worden ingelezen en verwerkt tot verkeersdata, gerelateerd aan een wegennetwerk, moeten door het systeem veel complexe puzzels worden gemaakt. Wegen zijn op een GIS-kaart weergegeven met een vlak, in een CAD-ontwerp vaak met lijnen die de stroken en de kant van de verharding aangeven. Om van hieruit een wegennetwerk te kunnen afleiden met wegvakken ('hartlijn van een weg') en juncties ('knopen'), is niet goed programmeerbaar. Ook rekenfouten in het aansluiten op het bestaande netwerk worden door een computer niet begrepen - bijvoorbeeld de juncties verschillen 0.00001 mm van elkaar en het systeem loopt vast, waar een mens ze zo over elkaar plaatst wetend dat de afwijking minimaal is.
Ook van een bord kent het systeem de reikweidte niet, al kan het ernaar raden: een waarschuwingsbord voor een drempel geldt voor maximaal 50 meter lengte, een bord "kijk uit herten" heeft een onderbord wat vertelt hoeveel meter deze waarschuwing geldt. Al met al zit er een verschil in de mens, die de kaart met wegen en borden 'in één oogopslag' begrijpt, en een systeem waarvoor dit te complex en tegenstrijdig is. Daarom geldt in deze use case beschrijving de aanname, dat een wegbeheerder wijzigingen doorgeeft passend bij de centrale netwerkregistratie. </p>
<p> De andere kant op is minder complex: als het netwerk eenmaal is opgebouwd, kunnen met 'rules' wegvakken en borden worden afgeleid. Hierbij geldt: hoe beter en uitgebreider de netwerkdata, hoe beter dit gaat. Als een wegvak per rijstrook is aangeduid en de breedte van de rijstrook op elke lengte is aangegeven, kan het systeem het "wegontwerp" genereren en de 'in lengterichting' aangeduide borden visualiseren. De wegbeheerder kan dat goed overzien, of hij de 'data' op de juiste manier heeft aangeleverd / ingevoerd.</p></aside>  

### Omgevingsmanagement

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

Van overheden wordt verwacht dat zij actief aan de slag gaan met burgerparticipatie en ander omgevingsmanagement tijdens het ontwerpproces. Dit moet er toe leiden dat een verkeersbesluit dat ter visie wordt gelegd al bekend is bij de stakeholders. Toch kan het voorkomen dat dit leidt tot bezwaarprocedures. 

### Registratie

*Stakeholders: Wegbeheerders*

De scope van het Informatiemodel Verkeerstekens en Verkeersbesluiten, de use case "Registreren van verkeersbesluiten", valt binnen de ontwerpfase. Het verkeersbesluit geeft de *wettelijke kaders* voor het gedrag van het verkeer. Bij de registratie hoort het publiceren op www.overheid.nl, en het pulbiceren van de data voer het verkeersbesluit in een landelijke registratie.

## Bouwfase

![Bouwfase](./hoofdstukken/media/bouwfase.jpg "Bouwfase")

### Bestellen 

*Stakeholders: Publieke opdrachtgevers, bouwaannemers, producenten, toeleveranciers*

De publieke opdrachtgever of bouw- en onderhoudsaannemer moet de borden en markeringsmiddelen kunnen bestellen bij een producent of toeleverancier. Bij het bestellen worden specificaties toegevoegd over het soort, de levensduur, garanties, gewenste materialen of duurzaamheidsklassen. 

### Produceren

*Stakeholders: Producenten en toeleveranciers*

De producent van verkeersborden werkt op basis van specificaties aan de verkeersborden en markeringsmiddelen; en voegt informatie toe over het productieproces en over onderhoudsspecificaties.

### Contracteren

*Stakeholders: Contractmanagers*

Contracteren wegaanleg, markeringsaanleg en plaatsing verkeersborden. De publieke opdrachtgever besteed de plaatsing van verkeersborden en markeringen conform het verkeersbesluit aan (als onderdeel van een groter project). Hierbij worden specificaties toegevoegd aan de gewenste borden en markeringen.

### Bouwen

*Stakeholders: Bouwbedrijven*

De bouwaannemer bouwt de weg op basis van het ontwerp en het verkeersbesluit en geeft de actuele geometrie door van de gebouwde weg.
De bouwaannemer plaatst de verkeersborden op basis van het ontwerp en het verkeersbesluit en geeft de actuele geometrie door van het geplaatste verkeersbord.
De bouwaannemer brengt de markeringen op basis van het ontwerp en het verkeersbesluit aan en geeft de actuele geometrie door van de markering.

De *gewenste ligging* volgens het ontwerp en het verkeersbesluit komt niet per sé overeen met de *werkelijke ligging* van de weg en de verkeerstekens. Dit zijn twee verschillende "representaties" van de objecten, die beide waarde hebben. 

### Tijdelijke verkeerssituaties

*Stakeholders: Bouwbedrijven*

Tijdens bouw en beheren kan een bouwbedrijf tijdelijk de verkeerssituatie aanpassen of borden plaatsen. In de ideale wereld wordt deze situatie ook gepubliceerd als (tijdelijk) verkeersbesluit, zodat de netwerkinformatie en de verkeersinstructies altijd overeen komen met de fysieke situatie. Als dit niet het geval is worden digitale systemen van weggebruikers niet altijd van de juiste informatie voorzien.


## Beheerfase

![Beheer- en gebruiksfase](./hoofdstukken/media/beheerfase.jpg "Beheer- en gebruiksfase")

### Beheren

*Stakeholders: Wegbeheerders*

In de beheerfase wordt van de borden en markeringen informatie bijgehouden over de kwaliteit: vervuiling, slijtage en bijbehorende maatregelen waarmee de borden en markeringen functioneel en zichtbaar blijven. Ook wil de beheerder generieke informatie gebruiken over de verkeersborden en markeringen: wie de beherende partij is, wie het onderhoud uitvoert, wanneer welke onderhoudsmaatregel is uitgevoerd, en informatie uit de ontwerp- en bouwfase: locatie, paal of mast waarop een bord bevestigd is, datum plaatsing, levensduur of garanties, enzovoorts. Met deze informatie kan de asset manager risico's, prestaties en kosten afwegen en de juiste maatregelen treffen: onderhoud of vervanging. 

Een wegbeheerder zal daarnaast moeten controleren of de volgens het verkeersbesluit geregistreerde *gewenste objecten* ook *fysiek* aanwezig zijn. Zowel na de bouw als tijdens het beheer zal regelmatige controle nodig zijn om te controleren of borden aanwezig zijn en markeringen niet te veel versleten. De informatie uit het verkeersbesluit kan daarbij helpen: een digitaal systeem krijt hiermee de informatie waar een bord of markering aanwezig is en kan dit controleren op camerabeelden of in ingemeten puntenwolken uit een laserscanner. 

![Asset management proces volgens iAMPro](./hoofdstukken/media/Beheerfase.jpg "Asset management proces volgens iAMPro")

## Gebruiksfase

### SMART mobility

*Stakeholders: Weggebruikers* 

De verkeerstekens en markeringen zijn in eerste instantie bedoeld om de menselijke weggebruikers te informeren over het gebruik van de weg. Weggebruikers kunnen daarbij ondersteund worden door digitale systemen die hen helpen de weg te vinden, of assisteren bij het besturen van het voertuig:
1. In navigatiesystemen wordt informatie gegeven over de maximum snelheid. Deze systemen zouden meer informatie kunnen geven op basis van het verkeersbesluit. De navigatiesystemen kunnen ook gebruik maken van de netwerkinformatie om een route te bepalen.  
2. Voertuigen worden steeds slimmer met geavanceerde rijtaakondersteunende systemen (Advanced Driver Assistance Systems ofwel ADAS).
3. Er worden in Nederland en in het buitenland verschillende experimenten gedaan met volledig zelfrijdende voertuigen.
4. Het verkeer kan steeds beter worden aangestuurd via centrales (intelligente Verkeersregelinstallaties ofwel iVRI’s), een ontwikkeling die ‘Connected Intelligent Transport Systems’, ofwel C-ITS wordt genoemd. Denk daarbij aan het geleiden van hulpvoertuigen, waarbij via centrale aansturing van de verkeerslichten wordt gezorgd voor een veilige route waarin alle verkeerslichten 'mee zitten'.
5. Reizigers worden steeds beter geïnformeerd voor en tijdens hun reis, waarbij het steeds makkelijker wordt om online te plannen, reserveren, betalen en onderweg op de hoogte te blijven. Dit noemen wij ook wel Mobility as a Service (MaaS). Daarbinnen worden bestaande en nieuwe mobiliteitsdiensten (deelauto’s, stepjes, openbaar vervoer, deeltaxi’s, etc.) op een slimme manier gecombineerd. Als netwerkinformatie wordt gecombineerd met informatie over de bezetting van de netwerken kan worden gezorgd dat minder files ontstaan.

Vanuit Smart Mobility en verkeerskunde zien we de behoefte aan accurate en actuele informatie, waarin voor het wegennet de wettelijke maximum snelheid en ge- en verboden (bijvoorbeeld parkeerverbod, inhaalverbod, stopverbod) per voertuigcategorie en met de daarbij geldende uitzonderingen/nadere aanduidingen op het onderbord (tijden, alleen bij glad wegdek, etc.) gevuld zijn voor ieder individueel wegvak of zelfs nog nauwkeuriger, per rijstrook en richting. Zodat een rij-assistent of navigatie-assistent de weggebruiker op het juiste moment kan informeren over het juiste gebruik van de weg, of een autonoom rijdend voertuig deze informatie kan gebruiken. Daarbij geldt:

1. Het netwerk en de locaties van verkeerstekens ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke rijstrook het zich bevindt als op verschillende rijstroken verschillende regels gelden. 
2. Voor de gebruikers is het handig, als het verkeersbesluit visueel kan worden getoond in de systemen, bijvoorbeeld het tonen van het snelheidsbord in het navigatiesysteem. Hiertoe dient het Informatiemodel Verkeersbesluiten en Verkeerstekens een grafische weergave te bevatten van de borden. 

### Handhaving

*Stakeholders: Toezichthouders* 

Bij handhaving in het verkeer is informatie over de locale verkeersregels van belang. Daarbij is op dit moment de *fysieke instructie* oftewel het daadwerkelijk aanwezig zijn van een fysiek bord of markering nodig, om te kunnen handhaven. De *digitale instructie* via een geregistreerd verkeersbesluit is niet voldoende om te kunnen handhaven. Deze controle is de verantwoordelijkheid van de wegbeheerder, zie bij de [use case beheren](./#beheren).


## Use cases Sloopfase

### Circulair hergebruik
Bij nieuwbouw of renovatie worden borden en markeringen weggehaald of verplaatst. Hierbij is informatie nodig uit de bouw- en beheerfase die wel wordt aangeduid als een "materialenpaspoort" om te kunnen bepalen of de borden kunnen worden hergebruikt, en of zij hiertoe moeten worden gerestaureerd. 

1. In het Informatiemodel Verkeersteken en verkeersbesluiten moet een verkeersbesluit en daarmee de de bijbehorende borden en markeringen een begin- en eindtijd krijgen zodat duidelijk is of deze aanweizg zijn op een specifiek tijdstip of niet. 


## Data producenten
De producenten van de verkeersbesluiten zijn de wegbeheerders, ondersteund door wegontwerpers en bouwbedrijven. 

## Data gebruikers
De gebruikers van de verkeersbesluiten zijn de weggebruikers, beheerders en toezichthouders en hun systemen.

<aside class="note" title="Levels of Detail">
Verschillende <i>gebruikers</i> van de informatie over verkeersbesluiten hebben een verschillend Level of Detail nodig. Een Wegontwerper heeft aan één hartlijn van de weg voldoende, vooral als informatie uit het alignement is toegevoegd. Hiermee kan de wegligging gereconstrueerd worden. Voor SMART Mobility geldt dat het het netwerk gedetailleerder moet zijn met een polygoon per rijstrook. Daarnaast moet de nauwkeurigheid van de geometrie niet te veel afwijken van de werkelijkheid. Het bijbehorende verkeersbesluit is zo gedetailleerd als het netwerk toestaat. 

Zie voor toelichting op Levels of Detail bijvoorbeeld <a href="https://docs.3dbag.nl/en/schema/concepts">dit document</a> van TU Delft over de LOD's in de Basisregistratie Gebouwen (BAG).
</aside>







