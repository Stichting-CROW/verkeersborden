# Stakeholderanalyse


## Inleiding

De stakeholderanalyse verkent welke partijen er belanghebbende, 'leverancier' en 'afnemer' zouden kunnen worden van de informatie, gemodelleerd met het [=Informatiemodel Verkeerstekens=]. Dit naast de primaire belanghebbende uit de use case, de [=weggebruiker=] met een [=SMART Mobility=] systeem.

Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. 



## Ontwerpfase

De informatie die wordt gepubliceerd over *wijzigingen* in de verkeerskundige situatie op basis van het [=Informatiemodel Verkeerstekens=], wordt gemaakt tijdens de ontwerpfase. 

<figure>
<img src="./hoofdstukken/media/ontwerpfase.jpg">
<figcaption>Ontwerpfase</caption>
</figure>


### Aanvraag maatregel

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

Het ontwerpproces start met de aanvraag van een wijziging, bijvoorbeeld omdat er een (nieuw)bouwproject wordt uitgevoerd en de inrichting van de wegen wijzigen, of omdat een omwonende of bedrijf een melding doet van een onveilige situatie of onwenselijke parkeersituatie die vraagt om andere verkeersregels. Hoe dan ook, hierdoor ontstaat een aanvraag voor het wijzigen van de verkeerskundige situatie. Dit leidt tot een inhoudelijke behandeling van de aanvraag door een verkeerskundige en waar nodig tot uitwerking in een ontwerp van de nieuwe situatie. 

### Verkeersmodel

*Stakeholders: Verkeerskundigen* maken gebruik van het [=IMWV=] voor begrippen en definities

Verkeersmodellen worden gebruikt om de toekomstige doorstroming van het verkeer te kunnen voorspellen en zo een optimale inrichting van het netwerk te ontwerpen. Het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeersborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. Dit proces gebeurt vaak tegelijkertijd (iteratief en parallel aan) het ontwerpen van de weg(inrichting) waardoor onderzocht wordt of het gewenste netwerk ook ruimtelijk inpasbaar is.

#### Beïnvloedingsgebied

Voor de weggebruikers in de primaire use case voor het [=Informatiemodel Verkeerstekens=] is reeds beschreven dat zij de locatie van een een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] willen weten. Deze wordt voor hen gerelateerd aan (een gedeelte van) het [=NWB-wegvak=]. De wegbeheerder denkt eerst in termen van een  [=Beïnvloedingsgebied=], daarna aan de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] die van toepassing is; dan aan de te plaatsen verkeersborden. Pas bij het opstellen van digitale verkeerskundige informatie zal de beheerder ook de koppeling maken naar een specifiek [=NWB-wegvak=] of naar de [=werkingslengte=] binnen het [NWB-wegvak=]

<figure>
<img src="./hoofdstukken/media/vanbesluitviazonenaarwegvak.jpg">
<figcaption>De denkstappen van een wegbeheerder van het verkeersmodel naar [=verkeerskundige informatie=]. </caption>
</figure>


<dfn data-lt="Beïnvloedingsgebied">Beïnvloedingsgebied</dfn>
<dd>Een geografische locatie (punt, polygoon of vlak) waarvoor een [=verkeersregel=], [=waarschuwing=] en/of [=adviessnelheid=] geldt. Dit kan resulteren in een [=werkingslengte=], [rijstrook=]aanduiding, een [=route=], of een [=zone=]. </dd>

<dfn data-lt="Zone">Zone</dfn>
<dd>Een vlak waarvoor een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt, denk bijvoorbeeld aan een parkeerzone of een milieuzone.</dd>

<dfn data-lt="Route">Route</dfn>
<dd>Een verzameling met meerdere wegvakken waarvoor een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] geldt, denk bijvoorbeeld aan een route voor transport voor gevaarlijke stoffen, of een weg met meerdere kruispunten (en dus meerdere wegvakken) waarvoor een verlaagde snelheid geldt. </dd>

Een beïnvloedingsgebied kan voortkomen uit een specifieke situatie op een weg, bijvoorbeeld een verkeersdrempel. Ook kan een gedeelte van een wegvak een beperking in de snelheid kennen, bijvoorbeeld een snelheidsbeperking bij nadering van een kruising. Dit leidt tot het opnemen van een [=werkingslengte=], zoals al is beschreven bij de use case.

Een beïnvloedingsgebied kan ook gaan over een deel van de weg, bijvoorbeeld een busstrook: in dit geval leidt het tot het toevoegen van een [=rijstrook=]aanduiding, zoals al is beschreven bij de use case.

Om het opstellen en beheren van [=verkeerskundige informatie=] te ondersteunen worden [=zone=] en [=route=] opgenomen in het informatiemodel. Een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] kan dan een relatie met de [=zone=] of [=route=] krijgen. Omdat de verkeersborden en de wegvakken al gerelateerd zijn aan een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=], is het niet nodig om deze ook te koppelen aan een [=zone=] of [=route=]. Door te zoeken op welke [=NWB-wegvakken=] of verkeersborden de [=verkeersregel=] van toepassing is, kun je de bijbehorende wegvakken of verkeersborden bij de [=zone=] of [=route=] vinden. De [=zone=] of [=route=] kan daarnaast worden verbonden met een geometrische representatie (een vlak of polygoon). Het systeem van de weggebruiker heeft het vlak niet nodig om de verkeersregel te kunnen afleiden

* Het informatiemodel MOET de mogelijkheid bieden, maar niet verplichten, om een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] van toepassing te laten zijn op een [=zone=] of een [=route=].
* Het informatiemodel MOET de mogelijkheid bieden, maar niet verplichten, om met een link te verwijzen van een [=zone=] of een [=route=] naar een een geometrische representatie (vlak of polygoon).

<aside class="note" title="Automatisering van zone naar netwerk">
<p> Een zone die ingetekend is op een een GIS-kaart kan niet door een machine automatisch vertaald worden naar de juiste [=werkingslengte=] en [NWB-wegvakken=]. Dit komt onder andere, omdat in GIS de mate van in- en uitzoomen de breedte van de zonegrens bepaalt. Er kunnen dan grensfouten optreden die bij een machine tot verwerkingsfouten leidt. De werkingslengte van de zone is daarom met alleen een vlak in GIS niet nauwkeurig vast te stellen voor een systeem. Daarnaast komt het voor, dat een weg binnen een zone uitgezonderd is, bijvoorbeeld een doorgaande weg door het gebied, terwijl er maar één zone is getekend op de kaart. Voor de menselijke lezer goed te begrijpen, voor de machine niet. </p></aside>  


#### Selecteren verkeersbord
Om het opstellen van [=verkeerskundige informatie=] te ondersteunen is het handig als het systeem waarin de verkeerskundige werkt, een voorselectie kan maken van het type verkeersbord en vervolgens het type onderbord dat mogelijk geplaatst moet worden als eenmaal is vastgesteld wat de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] is. 

* Het informatiemodel MOET de relaties bevatten tussen de types verkeersborden en de bijbehorende types [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=] die kunnen voorkomen. 
* Het informatiemodel MOET bij een type [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] aanduiden, welke verkeersborden hier bij toegepast kunnen worden.
* Het informatiemodel MOET de relaties bevatten tussen de types verkeersborden en de bijbehorende types onderborden.

Daarnaast is het voor een wegbeheerder handig om bij het wijzigen van een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] te kunnen controleren welke verkeersborden daar op dit moment bij horen:

* Het informatiemodel MOET de mogelijkheid bieden om aan een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] een of meerdere verkeersborden te verbinden.

### Wegontwerp

*Stakeholders: Ontwerpers* maken gebruik van het [=IMWV=] voor begrippen en definities en van het [=Handboek Wegontwerp=]/de [=ASVV=]/[=Wegontwerp RWS=].

Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van het wegennetwerk en de verkeersborden wordt bepaald. Ook kunnen extra verkeersborden en markeringen uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen zoals bij kruispunten. Tijdens het wegontwerp wordt niet het netwerk ontworpen, maar de fysieke ligging van de weg, met een alignement ("hartlijn") met bogen, overgangsbogen en rechtstanden en daarnaast de [=rijstrook=]breedte die breder wordt bij hogere snelheden of krappe bochten. Dit alignement wordt vaak gevisualiseerd in een CAD-tekening, met op tekening de markering van rijstroken of kanten van de stoepbanden, en de verkeersborden. Hierbij wordt de BIM standaard [=NLCS=] gebruikt. Ook kan het wegontwerp onderdeel zijn van een BIM model.

#### Wegalignement

Een wegontwerp beschrijft een weg in termen van een alignement, een aaneenschakeling van bogen, overgangsboden en rechte lijnen. Op basis van de maximale snelheid kan vervolgens onderzocht worden, of de weg comfortabel en veilig te berijden valt. Dit staat beschreven in het [=Handboek Wegontwerp=] en [=Wegontwerp RWS=].

Om het geregistreerde netwerk te kunnen gebruiken als input voor een nieuw wegontwerp is het bijhouden van de alignementskenmerken van de weg aan te raden. Als het netwerk een hoger detailniveau krijgt om per [=rijstrook=] [=verkeerskundige informatie=] te kunnen vastleggen, is een standaard nodig waarmee het alignement wordt vastgelegd, omdat het alignement wordt ontworpen per gehele weg of per [=rijbaan=], niet per [=rijstrook=]. Het alignement valt buiten de scope van het voorliggende informatiemodel.

<dfn data-lt="rijbaan|rijbanen">Rijbaan</dfn>
<dd>Elk voor rijdende voertuigen bestemd weggedeelte met uitzondering van de fietspaden en de fiets/bromfietspaden. Definitie conform de [=RVV 1990=]. </dd>
<dd>Een rijbaan is een aaneengesloten verhard deel van de totale weg dat bestemd is voor rijdend verkeer en dat begrensd wordt door twee opeenvolgende begrenzingen in de vorm van kantstreep, overgang verharding of overgang verhard/onverhard. <a href="https://data.crow.nl/thesaurus/term/B4CA5CA6-8CEA-455D-9467-6FAA36A12E4E">Bron: CROW thesaurus</a> Als er tussen twee gedeeltes van een weg een fysieke barriere is die het verkeer hindert om van baan te wisselen, worden deze twee gedeeltes elk als aparte rijbaan beschouwd door verkeerskundigen.  </dd>


#### Wegennetwerk
Als het wegennetwerk wijzigt, moet de wegbeheerder zorgen dat de nieuwe situatie wordt geregistreerd en gepubliceerd in het [=NWB=]. Omdat het netwerk buiten de scope van het [=Informatiemodel Verkeerstekens=] valt, komen hier geen eisen uit voort. Er wordt in het [=Informatiemodel Verkeerstekens=] uitgegaan van een sluitend netwerk op een specifiek tijdstip, waarmee de wegbeheerder vervolgens [=verkeerskundige informatie=] kan opstellen die verwijst naar de [=NWB-wegvakken=] en [NWB-juncties=] in het netwerk. 

Om met een wegontwerp aan te sluiten op een landelijke netwerkregistratie van wegen zouden afspraken gemaakt moeten worden om ook het ontworpen netwerk in termen van juncties en wegvakken op te nemen in ontwerptekeningen of BIM modellen, naast de verkeersborden. Zo kan makkelijker de vertaling worden gemaakt tussen wegontwerp en netwerkregistratie. Deze afspraak zou goed passen bij de BIM standaard [=NLCS=]. 

<aside class="note" title="Automatisering van CAD ontwerp naar netwerk">
<p> Door wegbeheerders wordt een nieuw netwerk vaak ontwikkeld op basis van een 2D CAD-ontwerp, waar de nieuwe wegligging en locatie van verkeersborden op geplot worden; Als een ontwerp rechtstreeks door een 'Systeem' moeten worden ingelezen en verwerkt tot verkeersdata, gerelateerd aan een wegennetwerk, moeten door het systeem veel complexe puzzels worden gemaakt. Wegen zijn in een CAD-ontwerp vaak aangeduid met lijnen die de stroken en de kant van de verharding aangeven. Om van hieruit een wegennetwerk te kunnen afleiden met wegvakken ('hartlijn van een weg') en juncties ('knopen'), is niet goed programmeerbaar. Ook rekenfouten in het aansluiten op het bestaande netwerk worden door een computer niet begrepen - bijvoorbeeld de juncties verschillen 0.00001 mm van elkaar en het systeem loopt vast, waar een mens ze zo over elkaar plaatst wetend dat de afwijking minimaal is.</p><br>
<p>Ook van een verkeersbord kent het systeem de reikweidte niet, al kan het ernaar raden: een waarschuwingsbord voor een drempel geldt voor maximaal 50 meter lengte, een verkeersbord "kijk uit herten" heeft een onderbord wat vertelt hoeveel meter deze waarschuwing geldt. Al met al zit er een verschil in de mens, die de kaart met wegen en verkeersborden 'in een oogopslag' begrijpt, en een systeem waarvoor dit te complex en tegenstrijdig is. Daarom moet aan een CAD ontwerp informatie worden toegevoegd om alle informatie, zoals de werkingslengte, van een verkeersbord te kunnen digitaliseren. </p><br>
</aside>  


#### Weginrichting

In het wegontwerp worden zaken onderzocht die niet altijd op een ontwerptekening staan. In een BIM model kunnen bijvoorbeeld zichtlijnen zijn onderzocht. Bij een beperkt zicht mag niet worden ingehaald. Dit resulteert niet altijd in een verkeersbord, soms wel in een [=wegmarkering=] zoals een doorgetrokken streep op het midden van de [=rijbaan=]. De menselijke [=weggebruiker=] kan dit op zicht inschatten, een systeem wellicht niet. De [=wegmarkering=] is buiten scope van het informatiemodel, het advies of gebod om niet in te halen zonder bijbehorend verkeersbord ook.

<div class="issue" data-number="135"></div>

In de digitale [=verkeerskundige informatie=] kan wel een [=adviessnelheid=] worden toegevoegd zonder verkeersbord. Een systeem kan daarmee de informatie die een mens visueel kan inschatten ook goed interpreteren.


### Omgevingsmanagement

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

Van overheden wordt verwacht dat zij actief aan de slag gaan met burgerparticipatie en ander omgevingsmanagement tijdens het ontwerpproces. Dit moet er toe leiden dat een verkeersbesluit dat ter visie wordt gelegd al bekend is bij de stakeholders. Toch kan het voorkomen dat dit leidt tot bezwaarprocedures. De ontwerpen die tijdens het ter inzageproces worden gedeeld met omwonenden zijn buiten scope van het informatiemodel, dit is onderdeel van de juridische informatie.

### Juridische procedure

*Stakeholders: Wegbeheerder, omwonenden, bedrijven*

De wegbeheerder volgt een juridische procedure vanaf de aanvraag van een maatregel tot het nemen van een [=verkeersbesluit=]. De informatie over deze procedure valt buiten de scope van het informatiemodel.

### Registratie verkeersbesluit

*Stakeholders: Wegbeheerders*

<dfn data-lt="Verkeersbesluit|Verkeersbesluiten">Verkeersbesluit</dfn>
<dd> Wegbeheerders zijn per 01072021 wettelijk verplicht om verkeersbesluiten over nieuwe en langdurende (>4 maanden) tijdelijke verkeerskundige situaties digitaal te publiceren in de decentrale bladen zoals het Gemeenteblad, Provinciaal Blad, Waterschapsblad of Staatscourant en deze officieel bekend te maken op www.overheid.nl, conform <a href="https://wetten.overheid.nl/BWBR0006622/2021-10-19/#HoofdstukII_Paragraaf2_Artikel15">Wegenverkeerswet 1994 artikel 15</a>.
</dd>

Daarbij publiceert de wegbeheerder zowel de tekst van het besluit, eventuele externe bijlagen met daarin de geschetste veranderingen van de verkeerssituatie als ook de metadata over dat besluit. In de huidige situatie is echter het formaat van verkeersbesluiten niet geschikt om deze op een eenvoudige wijze te verwerken tot digitale [=verkeerskundige informatie=].
 
Verkeersbesluiten zijn de bron voor (een deel van) de wijzigingen in de digitale [=verkeerskundige informatie=]. Een deel van de wijzigingen is niet verkeersbesluitplichtig, waaronder tijdelijke wijzigingen van minder dan 4 maanden en een deel van de verkeersborden. 

 De officiële publicatie van het verkeersbesluit geeft een verkeersbord de wettelijke status waarmee gehandhaaft kan worden op overtreding van de [=verkeersregel=]. 
 
 De juridische informatie in het verkeersbesluit valt buiten de scope van het informatiemodel. Om het opstellen en beheren van verkeerskundige informatie te ondersteunen wordt de relatie met het verkeersbesluit wel opgenomen in het informatiemodel. 

* Het informatiemodel MOET de mogelijkheid bieden om een link te leggen van een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=] naar het [=verkeersbesluit=] waarin deze is gepubliceerd.


#### Ingangsdatum
Voor de primaire use case is het niet nodig om historische gegevens te kunnen vinden - alle actuele verkeerskundige gegevens zijn voldoende.

Voor gebruik van de digitale [=Verkeerskundige informatie=] in verkeersberekeningen en wegontwerpen is het wel noodzakelijk om te kunnen bepalen welke verkeersregels gelden, en welke verkeersborden aanwezig zijn op een bepaald tijdstip.

Ook voor publicatie van een verkeersbesluit is het handig, om een datum in de toekomst te kunnen vastleggen, waarop de verkeersregel van toepassing wordt. Daarmee kan gezorgd worden dat de data actueel en beschikbaar is op het moment van ingaan van het verkeersbesluit. 

* Het informatiemodel MOET de mogelijkheid bieden om een begin- en einddatum en -tijdstip aan te duiden voor een [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=]
* Het informatiemodel MOET de mogelijkheid bieden om een begin- en einddatum en -tijdstip aan te duiden voor plaatsing en weghalen van een verkeersbord. 

<div class="issue" data-number="150"></div>


### Registratie verkeerskundige informatie

*Stakeholders: Wegbeheerders*

Als laatste stap registreert de wegbeheerder de [=verkeerskundige informatie=] in een landelijke registratie. De metadata over de transactie bij registratie en validatie van wijzigingen in de [=verkeerskundige informatie=] zijn buiten scope.




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
<img src="./hoofdstukken/media/Beheerfase.jpg">
<figcaption>Beheer- en gebruiksfase</caption>
</figure>


### Weggebruik

*Stakeholders: [=Weggebruikers=]* 

Zie voor beschrijving van de informatiebehoefte van de weggebruikers het hoofdstuk over de [use case](https://docs.crow.nl/verkeersborden/framework/#use-case-0).

<dfn data-lt="weggebruiker|weggebruikers">Weggebruiker</dfn>
<dd>Voetgangers, fietsers, bromfietsers, bestuurders van een gehandicaptenvoertuig, van een motorvoertuig of van een tram, ruiters, geleiders van rij- of trekdieren of vee en bestuurders van een bespannen of onbespannen wagen. Definitie conform de [=RVV 1990=]</dd>

### Beheren

*Stakeholders: Wegbeheerders*

In de beheerfase wordt informatie bijgehouden over de kwaliteit van de verkeersborden: vervuiling, slijtage en bijbehorende maatregelen waarmee de verkeersborden functioneel en zichtbaar blijven. Ook wil de beheerder generieke informatie gebruiken over de verkeersborden: wie de beherende partij is, wie het onderhoud uitvoert, wanneer welke onderhoudsmaatregel is uitgevoerd, en informatie uit de ontwerp- en bouwfase: locatie, paal waarop een verkeersbord bevestigd is, datum plaatsing, levensduur of garanties, enzovoorts. Met deze informatie kan de asset manager risico's, prestaties en kosten afwegen en de juiste maatregelen treffen: onderhoud of vervanging. 


<figure>
<img src="./hoofdstukken/media/Beheerfase.jpg">
<figcaption>Asset management proces volgens iAMPro</caption>
</figure>

Een wegbeheerder zal daarnaast moeten controleren of de volgens het verkeersbesluit geregistreerde *gewenste objecten* ook *fysiek* aanwezig zijn. Zowel na de bouw als tijdens het beheer zal regelmatige controle nodig zijn om te controleren of verkeersborden aanwezig zijn en markeringen niet te veel versleten. De [verkeerskundige informatie] kan daarbij helpen: een digitaal systeem krijgt hiermee de informatie waar een verkeersbord of markering aanwezig is en kan dit controleren op camerabeelden of in ingemeten puntenwolken uit een laserscanner. 


### Handhaving

*Stakeholders: Toezichthouders* 

Bij handhaving in het verkeer is het beschikbaar hebben van digitale [=Verkeerskundige informatie=] over de lokale vsituatie handig voor gebruik in applicaties om boetes te registreren. Daarbij is het **fysiek** aanwezig zijn van een verkeersbord of markering vanuit de wettelijke basis noodzakelijk om te kunnen handhaven. Controleren of het fysieke verkeersteken aanwezig is, is de verantwoordelijkheid van de wegbeheerder, zie bij de [use case beheren](./#beheren).


## Use cases Sloopfase


### Circulair hergebruik
Bij nieuwbouw of renovatie worden verkeersborden en markeringen weggehaald of verplaatst. Hierbij is informatie nodig uit de bouw- en beheerfase die wel wordt aangeduid als een "materialenpaspoort" om te kunnen bepalen of de verkeersborden kunnen worden hergebruikt, en of zij hiertoe moeten worden gerestaureerd. 

1. In het [=Informatiemodel Verkeerstekens=] moet een verkeersbesluit en daarmee de de bijbehorende verkeersborden en markeringen een begin- en eindtijd krijgen zodat duidelijk is of deze aanweizg zijn op een specifiek tijdstip of niet. 







