# Stakeholderanalyse


## Inleiding

De stakeholderanalyse verkent welke partijen er belanghebbende, 'leverancier' en 'afnemer' zouden kunnen worden van de informatie, gemodelleerd met het [=Informatiemodel Verkeerstekens=].

Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. 



## Ontwerpfase

De informatie die wordt gepubliceerd over *wijzigingen* in de verkeerskundige situatie op basis van het [=Informatiemodel Verkeerstekens=], wordt gemaakt tijdens de ontwerpfase. 

<figure>
<img src="./hoofdstukken/media/ontwerpfase.jpg">
<figcaption>Ontwerpfase</caption>
</figure>


### Aanvraag maatregel

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

Het ontwerpproces start met de aanvraag van een verkeersbesluit. Dit kan gebeuren omdat er een (nieuw)bouwproject wordt uitgevoerd en de inrichting van de wegen wijzigen, of bijvoorbeeld omdat een omwonende of bedrijf een melding doet van een onveilige situatie of onwenselijke parkeersituatie die vraagt om andere verkeersregels. Hoe dan ook, hierdoor ontstaat een aanvraag voor het nemen van een verkeersbesluit. Dit leidt tot een inhoudelijke behandeling van de aanvraag door een verkeerskundige en waar nodig tot uitwerking in een ontwerp van de nieuwe situatie. 

### Verkeersmodel

*Stakeholders: Verkeerskundigen*

Verkeersmodellen worden gebruikt om de toekomstige doorstroming van het verkeer te kunnen voorspellen en zo een optimale inrichting van het netwerk te ontwerpen. Het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeersborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. Dit proces gebeurt vaak tegelijkertijd (iteratief en paralel aan) het ontwerpen van de weg(inrichting) waardoor onderzocht wordt of het gewenste netwerk ook ruimtelijk inpasbaar is.

### Wegontwerp

*Stakeholders: Ontwerpers*

Wegontwerp is ontwerp van wegen, afhankelijk van het detailniveau van het ontwerp inclusief markeringen en bebording. Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden en markeringen wordt bepaald. Ook kunnen extra verkeersborden en markeringen uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen zoals bij kruispunten. Tijdens het wegontwerp wordt niet het netwerk ontworpen, maar de fysieke ligging van de weg, met een alignement ("hartlijn") met bogen, overgangsbogen en rechtstanden en daarnaast de [=rijstrook=]breedte die breder wordt bij hogere snelheden of krappe bochten. Dit alignement wordt vaak gevisualiseerd in een CAD-tekening volgens de open BIM standaard NLCS , met op tekening de markering van rijstroken of kanten van de stoepbanden, en de verkeersborden. Hierbij wordt de BIM standaard NLCS gebruikt. Ook kan het wegontwerp onderdeel zijn van een BIM model.

1. Om met een wegontwerp aan te sluiten op een landelijke netwerkregistratie van wegen zouden afspraken gemaakt moeten worden om ook het ontworpen netwerk in termen van juncties en wegvakken op te nemen in ontwerptekeningen of BIM modellen, naast de verkeersborden. Zo kan makkelijker de vertaling worden gemaakt tussen wegontwerp en netwerkregistratie. Deze afspraak zou goed passen bij de BIM standaard NLCS. 

2. Om het geregistreerde netwerk en de verkeersbesluiten te kunnen gebruiken als input voor een nieuw wegontwerp is het bijhouden van de alignementskenmerken van de weg aan te raden. Als het netwerk een hoger detailniveau krijgt om per [=rijstrook=] [=verkeerskundige informatie=] te kunnen vastleggen, is een standaard nodig waarmee het alignement wordt vastgelegd, omdat het alignement wordt ontworpen per gehele weg of per [=rijbaan=], niet per [=rijstrook=].

3. In het wegontwerp worden zaken onderzocht die niet altijd op een ontwerptekening staan. In een BIM model kunnen bijvoorbeeld zichtlijnen zijn onderzocht; bij een beperkt zicht mag niet worden ingehaald. Dit resulteert niet altijd in een verkeersbord. De menselijke weggebruiker kan dit op zicht inschatten. In de digitale [=verkeerskundige informatie=] kan wel een [=adviessnelheid=] worden toegevoegd zonder verkeersbord. Een systeem kan daarmee de informatie die een mens visueel kan inschatten ook goed interpreteren.

<dfn data-lt="rijbaan|rijbanen">Rijbaan</dfn>
<dd>Elk voor rijdende voertuigen bestemd weggedeelte met uitzondering van de fietspaden en de fiets/bromfietspaden. Definitie conform de [=RVV 1990=]. </dd>
<dd>Een rijbaan is een aaneengesloten verhard deel van de totale weg dat bestemd is voor rijdend verkeer en dat begrensd wordt door twee opeenvolgende begrenzingen in de vorm van kantstreep, overgang verharding of overgang verhard/onverhard. <a href="https://data.crow.nl/thesaurus/term/B4CA5CA6-8CEA-455D-9467-6FAA36A12E4E">Bron: CROW thesaurus</a> Als er tussen twee gedeeltes van een weg een fysieke barriere is die het verkeer hindert om van baan te wisselen, worden deze twee gedeeltes elk als aparte rijbaan beschouwd door verkeerskundigen.  </dd>



<dfn data-lt="rijstrook|rijstroken">Rijstrook</dfn>
<dd>Door doorgetrokken of onderbroken strepen gemarkeerd gedeelte van de [=rijbaan=] van zodanige breedte dat bestuurders van motorvoertuigen op meer dan twee wielen daarvan gebruik kunnen maken. Definitie conform de [=RVV 1990=]</dd>
<dd>De rijstrook is het begrensde gedeelte van de rijbaan dat voldoende breed is voor een rij van het voor dat gedeelte bestemde verkeer. <a href="https://data.crow.nl/thesaurus/term/66A00E27-6E73-4385-A4AB-EC20413581D9">Bron: CROW thesaurus</a></dd>


### Omgevingsmanagement

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

Van overheden wordt verwacht dat zij actief aan de slag gaan met burgerparticipatie en ander omgevingsmanagement tijdens het ontwerpproces. Dit moet er toe leiden dat een verkeersbesluit dat ter visie wordt gelegd al bekend is bij de stakeholders. Toch kan het voorkomen dat dit leidt tot bezwaarprocedures. De ontwerpen die tijdens het ter inzageproces worden gedeeld met omwonenden zijn buiten scope van het informatiemodel, dit is onderdeel van de juridische informatie.

### Registratie

*Stakeholders: Wegbeheerders*

Het [=verkeersbesluit=] geeft de *wettelijke kaders* voor het gedrag van het verkeer. Bij de registratie hoort het publiceren van het verkeersbesluit, en het publiceren van de bijbehorende data op basis van het [=Informatiemodel Verkeerstekens=] in een landelijke registratie.

## Bouwfase

<figure>
<img src="./hoofdstukken/media/bouwfase.jpg">
<figcaption>Bouwfase</caption>
</figure>

In de bouwfase wordt de gewenste weginrichting en verkeersborden besteld, gemaakt en geplaatst op basis van het verkeerskundige model en het bijbehorende wegontwerp. 

### Bestellen 

*Stakeholders: Publieke opdrachtgevers, bouwaannemers, producenten, toeleveranciers*

De publieke opdrachtgever of bouw- en onderhoudsaannemer moet de verkeersborden kunnen bestellen bij een producent of toeleverancier. Bij het bestellen worden specificaties toegevoegd over het soort, de levensduur, garanties, gewenste materialen of duurzaamheidsklassen. 

### Produceren

*Stakeholders: Producenten en toeleveranciers*

De producent van verkeersborden werkt op basis van specificaties aan de verkeersborden en markeringsmiddelen; en voegt informatie toe over het productieproces en over onderhoudsspecificaties.

### Contracteren

*Stakeholders: Contractmanagers*

Contracteren wegaanleg en plaatsing verkeersborden. De publieke opdrachtgever besteed de plaatsing van verkeersborden conform het verkeersbesluit aan (als onderdeel van een groter project). Hierbij worden specificaties toegevoegd aan de gewenste verkeersborden.

### Bouwen

*Stakeholders: Bouwbedrijven*

De bouwaannemer bouwt de weg op basis van het ontwerp en het verkeersbesluit en geeft de actuele geometrie door van de gebouwde weg.
De bouwaannemer plaatst de verkeersborden op basis van het ontwerp en het verkeersbesluit en geeft de actuele geometrie door van het geplaatste verkeersbord.
De bouwaannemer brengt de markeringen op basis van het ontwerp en het verkeersbesluit aan en geeft de actuele geometrie door van de markering.

De *gewenste ligging* volgens het ontwerp en het verkeersbesluit komt niet per sé overeen met de *werkelijke ligging* van de weg en de verkeersborden. Dit zijn twee verschillende "representaties" van de objecten, die beide waarde hebben. 

### Tijdelijke verkeerssituaties

*Stakeholders: Bouwbedrijven*

Tijdens bouw en beheren kan een bouwbedrijf tijdelijk de verkeerssituatie aanpassen of verkeersborden plaatsen. Bij een situatie langer dan vier maanden is een tijdelijke situatie ook verkeersbesluitplichting. In de ideale wereld worden alle tijdelijke situaties als digitale [=Verkeerskundige informatie=] gepubliceerd, zodat het netwerk, de [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=] en verkeersborden altijd overeen komen met de fysieke situatie. Als dit niet het geval is worden digitale systemen van weggebruikers niet altijd van de juiste informatie voorzien.


## Gebruiksfase


<figure>
<img src="./hoofdstukken/media/beheerfase.jpg">
<figcaption>Beheer- en gebruiksfase</caption>
</figure>

### Beheren

*Stakeholders: Wegbeheerders*

In de beheerfase wordt informatie bijgehouden over de kwaliteit van de verkeersborden: vervuiling, slijtage en bijbehorende maatregelen waarmee de verkeersborden functioneel en zichtbaar blijven. Ook wil de beheerder generieke informatie gebruiken over de verkeersborden: wie de beherende partij is, wie het onderhoud uitvoert, wanneer welke onderhoudsmaatregel is uitgevoerd, en informatie uit de ontwerp- en bouwfase: locatie, paal waarop een verkeersbord bevestigd is, datum plaatsing, levensduur of garanties, enzovoorts. Met deze informatie kan de asset manager risico's, prestaties en kosten afwegen en de juiste maatregelen treffen: onderhoud of vervanging. 


<figure>
<img src="./hoofdstukken/media/Beheerfase.jpg">
<figcaption>Asset management proces volgens iAMPro</caption>
</figure>

Een wegbeheerder zal daarnaast moeten controleren of de volgens het verkeersbesluit geregistreerde *gewenste objecten* ook *fysiek* aanwezig zijn. Zowel na de bouw als tijdens het beheer zal regelmatige controle nodig zijn om te controleren of verkeersborden aanwezig zijn en markeringen niet te veel versleten. De [verkeerskundige informatie] kan daarbij helpen: een digitaal systeem krijgt hiermee de informatie waar een verkeersbord of markering aanwezig is en kan dit controleren op camerabeelden of in ingemeten puntenwolken uit een laserscanner. 




## Gebruiksfase

### Weggebruik

*Stakeholders: [=Weggebruikers=]* 

De verkeersborden zijn in eerste instantie bedoeld om de menselijke [=weggebruikers=] te informeren over het gebruik van de weg. [=weggebruikers=] kunnen daarbij ondersteund worden door digitale systemen die hen helpen de weg te vinden, of assisteren bij het besturen van het voertuig. Zie ook de uitgewerkte use case voor meer details.


### Handhaving

*Stakeholders: Toezichthouders* 

Bij handhaving in het verkeer is het beschikbaar hebben van digitale [=Verkeerskundige informatie=] over de lokale vsituatie handig voor gebruik in applicaties om boetes te registreren. Daarbij is het **fysiek** aanwezig zijn van een verkeersbord of markering vanuit de wettelijke basis noodzakelijk om te kunnen handhaven. Controleren of het fysieke verkeersteken aanwezig is, is de verantwoordelijkheid van de wegbeheerder, zie bij de [use case beheren](./#beheren).


## Use cases Sloopfase


### Circulair hergebruik
Bij nieuwbouw of renovatie worden verkeersborden en markeringen weggehaald of verplaatst. Hierbij is informatie nodig uit de bouw- en beheerfase die wel wordt aangeduid als een "materialenpaspoort" om te kunnen bepalen of de verkeersborden kunnen worden hergebruikt, en of zij hiertoe moeten worden gerestaureerd. 

1. In het [=Informatiemodel Verkeerstekens=] moet een verkeersbesluit en daarmee de de bijbehorende verkeersborden en markeringen een begin- en eindtijd krijgen zodat duidelijk is of deze aanweizg zijn op een specifiek tijdstip of niet. 


## Data producenten
De producenten van de verkeersbesluiten zijn de wegbeheerders, ondersteund door wegontwerpers en bouwbedrijven. 

## Data gebruikers
De gebruikers van de verkeersbesluiten zijn de [=weggebruikers=], beheerders en toezichthouders en hun systemen.

<aside class="note" title="Levels of Detail">
Verschillende <i>gebruikers</i> van de informatie over verkeersbesluiten hebben een verschillend Level of Detail nodig. Een Wegontwerper heeft aan één hartlijn van de weg voldoende, vooral als informatie uit het alignement is toegevoegd. Hiermee kan de wegligging gereconstrueerd worden. Voor SMART Mobility geldt dat het het netwerk gedetailleerder moet zijn met een polygoon per [=rijstrook=]. Daarnaast moet de nauwkeurigheid van de geometrie niet te veel afwijken van de werkelijkheid. Het bijbehorende verkeersbesluit is zo gedetailleerd als het netwerk toestaat. 

Zie voor toelichting op Levels of Detail bijvoorbeeld <a href="https://docs.3dbag.nl/en/schema/concepts">dit document</a> van TU Delft over de LOD's in de Basisregistratie Gebouwen (BAG).
</aside>







