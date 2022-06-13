# Stakeholderanalyse


## Inleiding

De stakeholderanalyse verkent welke partijen er belanghebbende, 'leverancier' en 'afnemer' zouden kunnen worden van de informatie, gemodelleerd met het Informatiemodel Verkeerstekens.

Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. 



## Ontwerpfase

De informatie die wordt gepubliceerd over *wijzigingen* in de verkeerskundige situatie op basis van het Informatiemodel Verkeerstekens, wordt gemaakt tijdens de ontwerpfase. 

![Ontwerpfase](./hoofdstukken/media/ontwerpfase.jpg "Ontwerpfase")


### Aanvraag maatregel

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

Het ontwerpproces start met de aanvraag van een verkeersbesluit. Dit kan gebeuren omdat er een (nieuw)bouwproject wordt uitgevoerd en de inrichting van de wegen wijzigen, of bijvoorbeeld omdat een omwonende of bedrijf een melding doet van een onveilige situatie of onwenselijke parkeersituatie die vraagt om andere verkeersregels. Hoe dan ook, hierdoor ontstaat een aanvraag voor het nemen van een verkeersbesluit. Dit leidt tot een inhoudelijke behandeling van de aanvraag door een verkeerskundige en waar nodig tot uitwerking in een ontwerp van de nieuwe situatie. 

### Verkeersmodel

*Stakeholders: Verkeerskundigen*

Verkeersmodellen worden gebruikt om de toekomstige doorstroming van het verkeer te kunnen voorspellen en zo een optimale inrichting van het netwerk te ontwerpen. Het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeersborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. Dit proces gebeurt vaak tegelijkertijd (iteratief en paralel aan) het ontwerpen van de weg(inrichting) waardoor onderzocht wordt of het gewenste netwerk ook ruimtelijk inpasbaar is.

### Wegontwerp

*Stakeholders: Ontwerpers*

Wegontwerp is ontwerp van wegen, afhankelijk van het detailniveau van het ontwerp inclusief markeringen en bebording. Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden en markeringen wordt bepaald. Ook kunnen extra verkeersborden en markeringen uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen zoals bij kruispunten. Tijdens het wegontwerp wordt niet het netwerk ontworpen, maar de fysieke ligging van de weg, met een alignement ("hartlijn") met bogen, overgangsbogen en rechtstanden en daarnaast de rijstrookbreedte die breder wordt bij hogere snelheden of krappe bochten. Dit alignement wordt vaak gevisualiseerd in een CAD-tekening volgens de open BIM standaard NLCS , met op tekening de markering van rijstroken of kanten van de stoepbanden, en de verkeerstekens. Hierbij wordt de BIM standaard NLCS gebruikt. Ook kan het wegontwerp onderdeel zijn van een BIM model.

1. Om met een wegontwerp aan te sluiten op een landelijke netwerkregistratie van wegen zouden afspraken gemaakt moeten worden om ook het ontworpen netwerk in termen van juncties en wegvakken op te nemen in ontwerptekeningen of BIM modellen, naast de verkeerstekens. Zo kan makkelijker de vertaling worden gemaakt tussen wegontwerp en netwerkregistratie. Deze afspraak zou goed passen bij de BIM standaard NLCS. 

2. Om het geregistreerde netwerk en de verkeersbesluiten te kunnen gebruiken als input voor een nieuw wegontwerp is het bijhouden van de alignementskenmerken van de weg aan te raden. Als het netwerk een hoger detailniveau krijgt om per rijstrook verkeersbesluiten te kunnen vastleggen, is een standaard nodig waarmee het alignement wordt vastgelegd, omdat het alignement wordt ontworpen per weg of in een enkele geval per rijbaan, niet per rijstrook.

3. In het wegontwerp worden zaken onderzocht die niet altijd op een ontwerptekening staan. In een BIM model kunnen bijvoorbeeld zichtlijnen zijn onderzocht; bij een beperkt zicht mag niet worden ingehaald. Dit resulteert niet altijd in een bord. De menselijke weggebruiker kan dit op zicht inschatten. In de digitale verkeerskundige informatie kan wel een adviessnelheid worden toegevoegd zonder bord. Een systeem kan daarmee de informatie die een mens visueel kan inschatten ook goed interpreteren.


### Omgevingsmanagement

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

Van overheden wordt verwacht dat zij actief aan de slag gaan met burgerparticipatie en ander omgevingsmanagement tijdens het ontwerpproces. Dit moet er toe leiden dat een verkeersbesluit dat ter visie wordt gelegd al bekend is bij de stakeholders. Toch kan het voorkomen dat dit leidt tot bezwaarprocedures. De ontwerpen die tijdens het ter inzageproces worden gedeeld met omwonenden zijn buiten scope van het informatiemodel, dit is onderdeel van de juridische informatie.

### Registratie

*Stakeholders: Wegbeheerders*

Het verkeersbesluit geeft de *wettelijke kaders* voor het gedrag van het verkeer. Bij de registratie hoort het publiceren van het verkeersbesluit, en het publiceren van de bijbehorende data op basis van het Informatiemodel Verkeerstekens in een landelijke registratie.

## Bouwfase

![Bouwfase](./hoofdstukken/media/bouwfase.jpg "Bouwfase")
In de bouwfase wordt de gewenste weginrichting en verkeersborden besteld, gemaakt en geplaatst op basis van het verkeerskundige model en het bijbehorende wegontwerp. 

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

Tijdens bouw en beheren kan een bouwbedrijf tijdelijk de verkeerssituatie aanpassen of borden plaatsen. Bij een situatie langer dan vier maanden is een tijdelijke situatie ook verkeersbesluitplichting. In de ideale wereld worden alle tijdelijke situaties als digitale verkeerskundige informatie gepubliceerd, zodat het netwerk,, de [=verkeersregels=], [=waarschuwingen=], [=snelheidsadviezen=] en [=borden=] altijd overeen komen met de fysieke situatie. Als dit niet het geval is worden digitale systemen van weggebruikers niet altijd van de juiste informatie voorzien.


## Beheerfase

![Beheer- en gebruiksfase](./hoofdstukken/media/beheerfase.jpg "Beheer- en gebruiksfase")

### Beheren

*Stakeholders: Wegbeheerders*

In de beheerfase wordt van de [=verkeerstrekens=] informatie bijgehouden over de kwaliteit: vervuiling, slijtage en bijbehorende maatregelen waarmee de verkeerstekens functioneel en zichtbaar blijven. Ook wil de beheerder generieke informatie gebruiken over de verkeersborden: wie de beherende partij is, wie het onderhoud uitvoert, wanneer welke onderhoudsmaatregel is uitgevoerd, en informatie uit de ontwerp- en bouwfase: locatie, paal waarop een bord bevestigd is, datum plaatsing, levensduur of garanties, enzovoorts. Met deze informatie kan de asset manager risico's, prestaties en kosten afwegen en de juiste maatregelen treffen: onderhoud of vervanging. 

Een wegbeheerder zal daarnaast moeten controleren of de volgens het verkeersbesluit geregistreerde *gewenste objecten* ook *fysiek* aanwezig zijn. Zowel na de bouw als tijdens het beheer zal regelmatige controle nodig zijn om te controleren of borden aanwezig zijn en markeringen niet te veel versleten. De informatie uit het verkeersbesluit kan daarbij helpen: een digitaal systeem krijgt hiermee de informatie waar een bord of markering aanwezig is en kan dit controleren op camerabeelden of in ingemeten puntenwolken uit een laserscanner. 

![Asset management proces volgens iAMPro](./hoofdstukken/media/Beheerfase.jpg "Asset management proces volgens iAMPro")

## Gebruiksfase

### SMART mobility

*Stakeholders: Weggebruikers* 

<dfn data-lt="Smart Mobility">Smart Mobility</dfn>
    <dd>Reis- en rijgedrag ondersteund door digitale systemen waaronder andere navigatiesystemen, rijtaakondersteunende systemen, zelfrijdende voertuigen, intelligente verkeersregelinstallaties en systemen waarmee reizigers hun reis online kunnen plannen, reserveren, betalen en onderweg op de hoogte te blijven </dd>

De verkeerstekens zijn in eerste instantie bedoeld om de menselijke weggebruikers te informeren over het gebruik van de weg. Weggebruikers kunnen daarbij ondersteund worden door digitale systemen die hen helpen de weg te vinden, of assisteren bij het besturen van het voertuig:
1. In navigatiesystemen wordt informatie gegeven over de maximum snelheid. Deze systemen zouden meer informatie kunnen geven op basis van het verkeersbesluit. De navigatiesystemen kunnen ook gebruik maken van de netwerkinformatie om een route te bepalen.  
2. Voertuigen worden steeds slimmer met geavanceerde rijtaakondersteunende systemen (Advanced Driver Assistance Systems ofwel ADAS).
3. Er worden in Nederland en in het buitenland verschillende experimenten gedaan met volledig zelfrijdende voertuigen.
4. Het verkeer kan steeds beter worden aangestuurd via centrales (intelligente Verkeersregelinstallaties ofwel iVRI's), een ontwikkeling die 'Connected Intelligent Transport Systems', ofwel C-ITS wordt genoemd. Denk daarbij aan het geleiden van hulpvoertuigen, waarbij via centrale aansturing van de verkeerslichten wordt gezorgd voor een veilige route waarin alle verkeerslichten 'mee zitten'.
5. Reizigers worden steeds beter geïnformeerd voor en tijdens hun reis, waarbij het steeds makkelijker wordt om online te plannen, reserveren, betalen en onderweg op de hoogte te blijven. Dit noemen wij ook wel Mobility as a Service (MaaS). Daarbinnen worden bestaande en nieuwe mobiliteitsdiensten (deelauto's, stepjes, openbaar vervoer, deeltaxi's, etc.) op een slimme manier gecombineerd. Als netwerkinformatie wordt gecombineerd met informatie over de bezetting van de netwerken kan worden gezorgd dat minder files ontstaan.

Vanuit Smart Mobility en verkeerskunde zien we de behoefte aan accurate en actuele informatie, waarin voor het wegennet de wettelijke maximum snelheid en ge- en verboden (bijvoorbeeld parkeerverbod, inhaalverbod, stopverbod) per voertuigcategorie en met de daarbij geldende uitzonderingen/nadere aanduidingen op het onderbord (tijden, alleen bij glad wegdek, etc.) gevuld zijn voor ieder individueel wegvak of zelfs nog nauwkeuriger, per rijstrook en richting. Zodat een rij-assistent of navigatie-assistent de weggebruiker op het juiste moment kan informeren over het juiste gebruik van de weg, of een autonoom rijdend voertuig deze informatie kan gebruiken. Daarbij geldt:

1. Het netwerk en de locaties van verkeerstekens ten opzichte van het netwerk moeten geometrisch vrij nauwkeurig overeen komen met de werkelijkheid: een systeem moet wel vóór de drempel de snelheid verlagen, niet erna; ook moet het duidelijk zijn voor het systeem op welke rijstrook het zich bevindt als op verschillende rijstroken verschillende regels gelden. 
2. Voor de gebruikers is het noodzakelijk dat de actuele verkeersregels, waarschuwingen en adviezen die op de weg gelden visueel kunnen worden getoond in de systemen. Bijvoorbeeld het tonen van het snelheidsbord in het navigatiesysteem. Hiertoe dient het Informatiemodel Verkeerstekens een grafische weergave te bevatten van de borden. 



 

### Handhaving

*Stakeholders: Toezichthouders* 

Bij handhaving in het verkeer is het beschikbaar hebben van digitale verkeerskundige informatie over de lokale vsituatie handig voor gebruik in applicaties om boetes te registreren. Daarbij is het **fysiek** aanwezig zijn van een bord of markering vanuit de wettelijke basis noodzakelijk om te kunnen handhaven. Controleren of het fysieke verkeersteken aanwezig is, is de verantwoordelijkheid van de wegbeheerder, zie bij de [use case beheren](./#beheren).


## Use cases Sloopfase

### Circulair hergebruik
Bij nieuwbouw of renovatie worden borden en markeringen weggehaald of verplaatst. Hierbij is informatie nodig uit de bouw- en beheerfase die wel wordt aangeduid als een "materialenpaspoort" om te kunnen bepalen of de borden kunnen worden hergebruikt, en of zij hiertoe moeten worden gerestaureerd. 

1. In het Informatiemodel Verkeerstekens moet een verkeersbesluit en daarmee de de bijbehorende borden en markeringen een begin- en eindtijd krijgen zodat duidelijk is of deze aanweizg zijn op een specifiek tijdstip of niet. 


## Data producenten
De producenten van de verkeersbesluiten zijn de wegbeheerders, ondersteund door wegontwerpers en bouwbedrijven. 

## Data gebruikers
De gebruikers van de verkeersbesluiten zijn de weggebruikers, beheerders en toezichthouders en hun systemen.

<aside class="note" title="Levels of Detail">
Verschillende <i>gebruikers</i> van de informatie over verkeersbesluiten hebben een verschillend Level of Detail nodig. Een Wegontwerper heeft aan één hartlijn van de weg voldoende, vooral als informatie uit het alignement is toegevoegd. Hiermee kan de wegligging gereconstrueerd worden. Voor SMART Mobility geldt dat het het netwerk gedetailleerder moet zijn met een polygoon per rijstrook. Daarnaast moet de nauwkeurigheid van de geometrie niet te veel afwijken van de werkelijkheid. Het bijbehorende verkeersbesluit is zo gedetailleerd als het netwerk toestaat. 

Zie voor toelichting op Levels of Detail bijvoorbeeld <a href="https://docs.3dbag.nl/en/schema/concepts">dit document</a> van TU Delft over de LOD's in de Basisregistratie Gebouwen (BAG).
</aside>







