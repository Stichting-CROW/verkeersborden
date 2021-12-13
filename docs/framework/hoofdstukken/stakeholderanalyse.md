# Stakeholderanalyse


## Inleiding

De stakeholderanalyse verkent welke partijen er belanghebbende, ‘leverancier’ en ‘afnemer’ zouden kunnen worden van de informatie, gemodelleerd met het Informatiemodel Verkeerstekens en Verkeersbesluiten.

Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. 

### Representatie
<p class="example" title="Representatie">
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

De gegevens van een object zitten zodoende in de rechterbenedenhoek. Van de “Maasdamstraat” wordt vast gelegd van welke objecttype (“Weg”) hij is. Hierdoor is duidelijke welke gegevens er vastgelegd moeten worden (bijvoorbeeld wat zijn naam is, wat het bouwjaar is, welke constructie het is, etc.). Er kunnen dan ook één of meerdere representaties vastgelegd worden. Het object kan gerepresenteerd worden in een GIS bestand, op een CAD tekening, maar ook in een 3D model en zelfs alleen in een spreadsheet. Er zijn dus meerdere representaties (of ‘symbolen’) mogelijk van één individueel object.

Dit is nodig om te weten, omdat vanuit de GIS gedachte de geometrie leidend is. Er wordt een feature (polygoon bijvoorbeeld) gemaakt, deze krijgt allerlei attributen en daar worden de waarden ingevuld. Dit werkt prima, totdat men vraagt om een 3D model of CAD tekening erbij. Dan zullen veel van de gegevens herhaald moeten worden en het 3D model kan niet gelinkt worden aan de geo-feature. 

Het is toekomstvaster om te redeneren vanuit het object. Het object heeft een uniek ID en heeft allemaal attributen (in bijvoorbeeld in spreadsheet). De representaties van het object hebben alleen de gegevens benodigd voor die representatie (de geometrie) en het zelfde unieke ID. Zo is het makkelijk te matchen. 

</p>


## Use cases ontwerpfase

### Verkeersmodel

*Stakeholders: Verkeerskundigen*

Verkeersmodellen worden gebruikt om de toekomstige doorstorming van het verkeer te kunnen voorspellen en zo een optimale inrichting van het netwerk te ontwerpen. Het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeersborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. Dit proces gebeurt vaak tegelijkertijd (iteratief en paralel aan) het ontwerpen van de weg(inrichting) waardoor onderzocht wordt of het gewenste netwerk ook ruimtelijk inpasbaar is.

### Wegontwerp

*Stakeholders: Ontwerpers*

Wegontwerp is ontwerp van wegen, afhankelijk van het detailniveau van het ontwerp inclusief markeringen en bebording. Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden en markeringen wordt bepaald. Ook kunnen extra verkeersborden en markeringen uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen zoals bij kruispunten. Tijdens het wegontwerp wordt niet het netwerk ontworpen, maar de fysieke ligging van de weg, met een alignement ("hartlijn") met bogen, overgangsbogen en rechtstanden en daarnaast de rijstrookbreedte die breder wordt bij hogere snelheden of krappe bochten. Dit alignement wordt vaak gevisualiseerd in een CAD-tekening volgens de open BIM standaard NLCS , met op tekening de markering van rijstroken of kanten van de stoepbanden, en de verkeerstekens. Hierbij wordt de BIM standaard NLCS gebruikt. Ook kan het wegontwerp onderdeel zijn van een BIM model.

1. Om met een wegontwerp aan te sluiten op een landelijke netwerkregistratie van wegen zouden afspraken gemaakt moeten worden om ook het ontworpen netwerk in termen van juncties en wegvakken op te nemen in ontwerptekeningen of BIM modellen, naast de verkeerstekens. Zo kan makkelijker de vertaling worden gemaakt tussen wegontwerp en netwerkregistratie. Deze afspraak zou goed passen bij de BIM standaard NLCS. 

2. Om het geregistreerde netwerk en de verkeersbesluiten te kunnen gebruiken als input voor een nieuw wegontwerp is het bijhouden van de alignementskenmerken van de weg aan te raden. Als het netwerk een hoger detailniveau krijgt om per rijstrook verkeersbesluiten te kunnen vastleggen, is een standaard nodig waarmee het alignement wordt vastgelegd, omdat het alignement wordt ontworpen per weg of in een enkele geval per rijbaan, niet per rijstrook.

### Verkeersbesluiten

*Stakeholders: Wegbeheerders*

De scope van het Informatiemodel Verkeerstekens en Verkeersbesluiten, de use case "Registreren van verkeersbesluiten", valt binnen de ontwerpfase. Het verkeersbesluit geeft de *wettelijke kaders* voor het gedrag van het verkeer. 

## Use cases Bouwfase

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


## Use cases Beheerfase

### Beheren

*Stakeholders: Wegbeheerders*

In de beheerfase wordt van de borden en markeringen informatie bijgehouden over de kwaliteit: vervuiling, slijtage en bijbehorende maatregelen waarmee de borden en markeringen functioneel en zichtbaar blijven. Ook wil de beheerder generieke informatie gebruiken over de verkeersborden en markeringen: wie de beherende partij is, wie het onderhoud uitvoert, wanneer welke onderhoudsmaatregel is uitgevoerd, en informatie uit de ontwerp- en bouwfase: locatie, paal of mast waarop een bord bevestigd is, datum plaatsing, levensduur of garanties, enzovoorts. Met deze informatie kan de asset manager risico's, prestaties en kosten afwegen en de juiste maatregelen treffen: onderhoud of vervanging. 

Een wegbeheerder zal daarnaast moeten controleren of de volgens het verkeersbesluit geregistreerde *gewenste objecten* ook *fysiek* aanwezig zijn. Zowel na de bouw als tijdens het beheer zal regelmatige controle nodig zijn om te controleren of borden aanwezig zijn en markeringen niet te veel versleten. De informatie uit het verkeersbesluit kan daarbij helpen: een digitaal systeem krijt hiermee de informatie waar een bord of markering aanwezig is en kan dit controleren op camerabeelden of in ingemeten puntenwolken uit een laserscanner. 

![Asset management proces volgens iAMPro](./hoofdstukken/media/Beheerfase.jpg "Asset management proces volgens iAMPro")

## Use cases Gebruiksfase

### SMART mobility

*Stakeholders: Weggebruikers* 

De verkeerstekens en markeringen zijn in eerste instantie bedoeld om de menselijke weggebruikers te informeren over het gebruik van de weg. Weggebruikers kunnen daarbij ondersteund worden door digitale systemen die hen helpen de weg te vinden, of assisteren bij het besturen van het voertuig:
1. In navigatiesystemen wordt informatie gegeven over de maximum snelheid. Deze systemen zouden meer informatie kunnen geven op basis van het verkeersbesluit. De navigatiesystemen kunnen ook gebruik maken van de netwerkinformatie om een route te bepalen.  
2. Voertuigen worden steeds slimmer met geavanceerde rijtaakondersteunende systemen (Advanced Driver Assistance Systems ofwel ADAS).
3. Er worden in Nederland en in het buitenland verschillende experimenten gedaan met volledig zelfrijdende voertuigen.
4. Het verkeer kan steeds beter worden aangestuurd via centrales (intelligente Verkeersregelinstallaties ofwel iVRI’s), een ontwikkeling die ‘Connected Intelligent Transport Systems’, ofwel C-ITS wordt genoemd. Denk daarbij aan het geleiden van hulpvoertuigen, waarbij via centrale aansturing van de verkeerslichten wordt gezorgd voor een veilige route waarin alle verkeerslichten 'mee zitten'.
5. Reizigers worden steeds beter geïnformeerd voor en tijdens hun reis, waarbij het steeds makkelijker wordt om online te plannen, reserveren, betalen en onderweg op de hoogte te blijven. Dit noemen wij ook wel Mobility as a Service (MaaS). Daarbinnen worden bestaande en nieuwe mobiliteitsdiensten (deelauto’s, stepjes, openbaar vervoer, deeltaxi’s, etc.) op een slimme manier gecombineerd. Als netwerkinformatie wordt gecombineerd met informatie over de bezetting van de netwerken kan worden gezorgd dat minder files ontstaan.

De combinatie van digitalisering, elektrificering, automatisering en deeleconomie heeft mogelijk disruptieve gevolgen voor de manier waarop de bereikbaarheid van steden (maar ook het platteland) wordt georganiseerd. Deze beweging wordt samengevat met het begrip ‘smart mobility’.

### Handhaving

*Stakeholders: Toezichthouders* 

Bij handhaving in het verkeer is informatie over de locale verkeersregels van belang. Daarbij is op dit moment de *fysieke instructie* oftewel het daadwerkelijk aanwezig zijn van een fysiek bord of markering nodig, om te kunnen handhaven. De *digitale instructie* via een geregistreerd verkeersbesluit is niet voldoende om te kunnen handhaven. Deze controle moet5 worden uitgevoerd door de wegbeheerder, zie bij de [use case beheren](./#beheren).


## Use cases Sloopfase

### Circulair hergebruik
Bij nieuwbouw of renovatie worden borden en markeringen weggehaald of verplaatst. Hierbij is informatie nodig uit de bouw- en beheerfase die wel wordt aangeduid als een "materialenpaspoort" om te kunnen bepalen of de borden kunnen worden hergebruikt, en of zij hiertoe moeten worden gerestaureerd. 

1. In het Informatiemodel Verkeersteken en verkeersbesluiten moet een verkeersbesluit en daarmee de de bijbehorende borden en markeringen een begin- en eindtijd krijgen zodat duidelijk is of deze aanweizg zijn op een specifiek tijdstip of niet. 



