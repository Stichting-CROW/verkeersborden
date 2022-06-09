# Raakvlakanalyse

De raakvlakanalyse beschrijft de partijen die standaarden of informatiebronnen beheren en de bijbehorende standaarden en databronnen die een raakvlak hebben met het Informatiemodel Verkeerstekens.

De raakvlakanalyse verkent welke standaarden en informatiebronnen er zijn voor:

1. Het functionele wegennetwerk en de fysieke ligging van de wegen.
2. De "digitale representatie" van verkeersborden en wegmarkeringen in andere use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.


## Beheerorganisaties

### DSGO en BIM loket

<dfn data-lt="DSGO">DSGO</dfn>
<dd>Het programma Digitaal Stelsel Gebouwde Omgeving (DSGO) maakt een set van uniforme afspraken die zorgt voor veilige, betrouwbare en gecontroleerde toegang tot data in de gebouwde omgeving. Met deze uniforme afspraken maken alle ketenpartners die actief zijn in de verschillende fases van de levenscyclus van een bouwwerk makkelijk en veilig gebruik van reeds beschikbare data. Waardoor zij in staat zijn om hun onderlinge – digitale - samenwerking te verbeteren, en efficiënter en duurzamer te werken. Zie voor meer informatie de [website van DSGO](https://www.digigo.nu/default.aspx) </dd>

Het BIM loket beheert nationale standaarden voor de bouwsector, waaronder in dit kader relevante standaarden:

* [=NLCS=]
* [CB-NL=]

**Raakvlaktype: Gezamenlijk beheer**

Wegbeheerders hebben te maken met een hele keten aan samenwerkingspartners en toeleveranciers, die informatie moeten uitwisselen. Daarom zal het informatiemodel moeten passen in een groter stelsel van informatiemodellen, die onderdeel zijn van het Digitaal Stelsel Gebouwde Omgeving (DSGO). 


### CROW
<dfn data-lt="CROW">CROW</dfn>
<dd>Kennisinstelling voor de openbare ruimte en infrastructuur </dd>

CROW beheert (naast het Informatiemodel Verkeerstekens) de volgende relevante standaarden:
* [=IMBOR=]
* [=Handboek Wegontwerp=]
* [=ASVV=]


#### KPVV

<dfn data-lt="KpVV|Kennisprogramma Verkeer en Vervoer">KpVV</dfn>
<dd>Onder de vlag van CROW wordt het Kennisprogramma Verkeer en Vervoer uitgevoerd. Doel van dit programma is om door middel van kennis bij te dragen aan de kennisbehoefte van de decentrale overheden op het gebied van mobiliteit. De projecten zijn gericht op het ontwikkelen van nieuwe kennisproducten of op kennisontwikkeling en – uitwisseling (bv communities).  Zie ook <a href="https://www.kpvv.nl/">deze website</a>  </dd>

De kennisproducten en – diensten worden gebruikt door:

* gemeenten, provincies, stadsregio’s, waterschappen en hun koepels;
* belangenorganisaties, kennisinstituten, vervoerbedrijven en onderwijsinstellingen.

De hoofddoelgroepen zijn de beleidsambtenaren, managers en bestuurders die lokaal en regionaal verkeers- en vervoersbeleid ontwikkelen en realiseren. Deze groepen gebruiken verkeersmodellen om te toetsen of het ontwerp voldoent aan de mobiliteitsdoelstellingen, en zijn verantwoordelijk voor de publicatie van verkeersbesluiten. 

**Raakvlaktype: Te informeren groep**

Deze groep MOET geinformeerd worden over de toepassing van het Informatiemodel Verkeerstekens bij de publicatie van verkeersbesluiten.


## Ontwerpfase

### RVV 1990
Het Reglement verkeersregels en verkeerstekens 1990 [(RVV 1990)](https://wetten.overheid.nl/BWBR0004825/2021-07-01) (Reglement verkeersregels en verkeerstekens 1990) is een uitvoeringsbesluit bij de Wegenverkeerswet 1994. In het RVV zijn de verkeersregels en verkeerstekens te vinden die in Nederland van toepassing zijn. 

**Raakvlaktype: Bron voor informatiemodel**
Het RVV 1990 is de primaire bron voor verkeersregels, verkeersadviezen en bijbehorende verkeerstekens die worden opgenomen in het Informatiemodel Verkeerstekens.



### CB-NL

BIM loket publiceert de Nederlandse Conceptenbibliotheek voor de gebouwde omgeving ([=CB-NL=]), een digitale, semantische bibliotheek beheerd door BIM loket. Deze bevat uniformerende definities en legt via beschrijvingen verbindingen tussen standaarden, normen, objecten en producten van bestaande bibliotheken. Een goedwerkende CB-NL zal BIM-processen tussen bouwdisciplines en -partijen aanzienlijk versnellen. CB-NL is gratis toegankelijk via internet. CB-NL is bedoeld om ontologien zoals het Informatiemodel Verkeerstekens of objecttypenbibliotheken van asset managers en bouwbedrijven met elkaar te kunnen verbinden. 

**Raakvlaktype: Gezamenlijk beheer**
CB-NL is de logsiche plek om relaties tussen het Informatiemodel Verkeerstekens en andere standaarden zoals NLCS te publiceren, waarbij een afspraak moet worden gemaakt over het beheer van de relatie tussen beide standaarden. Voorwaarde is wel dat een standaard gepubliceerd is als ontologie in linked data.


### NLCS

BIM loket beheert de Nederlandse CAD Standaard [=NLCS=]), de Nederlandse CAD standaard voor uitwisseling van informatie in 2D CAD-ontwerptekeningen. CAD betekent Computer-aided design: het ontwerpen van onder meer constructies en apparaten met behulp van computerprogramma's. De NLCS bevat basisafspraken over het omgaan met metadata, digitaal tekenen, het uiterlijk van de tekening en – vooral – de bestandsopbouw van 2D-tekenwerk. Deze afspraken zijn onafhankelijk van de CAD-platforms die geleverd worden door softwareleveranciers. 
Met NLCS worden de objecten op een tekening herkend door alle partijen. Het doel van NLCS is het vermijden van dubbel werk, misverstanden en extra kosten met eenduidige tekeningen. Dit vergroot de efficiency, de kwaliteit, geeft een completer en eenduidig beeld en versneld de tijdigheid waarmee wijzigingen worden gecommuniceerd. 

Circa 30% van de ontwerptekeningen bij verkeersbesluiten komen uit CAD-systemen. Tijdens het ontwerpproces wordt veel onderliggende data gemaakt, maar deze data wordt niet optimaal ontsloten na de publicatie van verkeersbesluiten. 

NLCS kan verbeterd worden zodat de informatie voor het verkeersbesluit handiger kan worden overgenomen naar de volgende fase. BIM loket wil op verzoek van het Ministerie van Infrastructuur en Waterstaat de verkeersborden opnemen in de NLCS standaard zodra deze gepubliceerd worden in het Informatiemodel Verkeerstekens. Het betreft dan de kijkrichting, positie en het type bord met onderbord. Vervolgens wil het BIM-loket nadere afspraken maken met de leveranciers van CAD-systemen om digitale informatie over de verkeersborden als data beschikbaar te kunnen maken voor andere systemen. 


**Raakvlaktype: Gebruik informatiemodel**


### ASVV

<dfn data-lt="ASVV|">ASVV</dfn>
<dd> CROW publiceert de ASVV. Dit is een bundeling kennis voor verkeersvoorzieningen binnen de bebouwde kom. De kennis uit de uitgave wordt gebruikt door verkeerskundig ontwerpers, adviseurs, wegbeheerders, beleidsmedewerkers en juristen. De ASVV is geen open standaard maar kennis waarvoor een abonnement moet worden afgesloten. Zie ook <a href="https://www.crow.nl/publicaties/asvv-2021">deze website</a> </dd>

**Raakvlaktype: Gebruik informatiemodel**

In het ideale geval worden de concepten en definites uit het Informatiemodel Verkeerstekens toegepast binnen de ASVV zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeerstekens worden verwezen. 


### Handboek Wegontwerp

<dt><dfn data-lt="Handboek Wegontwerp">Handboek Wegontwerp</dfn>
<dd>CROW publiceert het Handboek Wegontwerp. Dit is een bundeling kennis, richtlijnen en praktijkvoorbeelden rond het ontwerp van wegen buiten de bebouwde kom (Bubeko). Het Handboek Wegontwerp is geen open standaard maar kennis waarvoor een abonnement moet worden afgesloten. Zie ook <a href="https://www.crow.nl/productpakketten/handboek-wegontwerp-2013-serie-papier-onlin">deze website</a>     </dd>

CROW publiceert het Handboek Wegontwerp. Dit is een bundeling kennis, richtlijnen en praktijkvoorbeelden rond het ontwerp van wegen buiten de bebouwde kom (Bubeko). Het Handboek Wegontwerp is geen open standaard maar kennis waarvoor een abonnement moet worden afgesloten. 

**Raakvlaktype: Gebruik informatiemodel**

In het ideale geval worden de concepten en definites uit het Informatiemodel Verkeerstekens toegepast binnen het Handboek Wegontwerp zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeerstekens worden verwezen. 

<aside class="note" title="Vanuit Informatiemodel Verkeerstekens verwijzen naar Handboek Wegontwerp en ASVV">
Om een betere, samenhangende digitale informatievoorziening te creëren zou het een goede aanvulling zijn, om vanuit het Informatiemodel Verkeerstekens en Verkeersbesluiten te kunnen verwijzen (met links) naar het Handboek Wegontwerp en de ASVV voor instructies (eisen) over het nemen van verkeersbesluiten, het afwegingskader voor een specifiek type besluit enzovoorts. Wegbeheerders worden door deze links geholpen met het vinden van de juiste informatie of kunnen bij een verkeersbesluit vastleggen of en hoe ze zich aan deze instructies hebben gehouden (verificatie van de eisen, vastleggen van de afwegingen bij het verkeersbesluit). Dit verrijkt de netwerkdata met gegevens over de reden waarom deze verkeersbesluiten genomen worden, op een gestructureerde manier. In combinatie met andere gegevens, bijvoorbeeld over files of ongelukken, kan dit leiden tot steeds betere inzichten, eisen en afwegingskaders.<br>
<br>
Dit vraagt wel om open publicatie van het Handboek Wegontwerp en de ASVV, zodat de informatie achter de links gevonden kan worden. Wat vraagt om een andere, structurele financiering van het beheer van Handboek Wegontwerp.
</aside>


### Wegontwerp RWS
Rijkswaterstaat publiceert [op deze locatie](https://www.rijkswaterstaat.nl/zakelijk/werken-aan-infrastructuur/bouwrichtlijnen-infrastructuur/autosnelwegen) eigen handleidingen en richtlijnen voor wegontwerp. 

**Raakvlaktype: Gebruik informatiemodel**
In het ideale geval worden de concepten en definites uit het Informatiemodel Verkeerstekens toegepast binnen de richtlijnen van Rijkswaterstaat zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeerstekens worden verwezen. 


## Bouwfase



### PIANOO
De publieke opdrachtgevers in de [=Buyer Group verkeersborden=] en bewegwijzering werken samen aan het verduurzamen van verkeersborden en bewegwijzering. In maandelijkse sessies delen de opdrachtgevers kennis en ervaringen en werken zij samen aan één duurzame marktvisie en -strategie. Deze strategie passen deelnemers toe in hun eigen projecten.

**Raakvlaktype: Gebruik informatiemodel**
In het ideale geval worden de concepten en definites uit het Informatiemodel Verkeerstekens toegepast binnen producten van de Buyer Group Verkeersborden / PIANOO zodat duidelijk is over welke verkeerstekens het gaat en op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van de eisen naar de website met definites en afbeeldingen van verkeerstekens worden verwezen. 

<div class="issue" data-number="74"></div>

### BABW
Uitvoeringsvoorschriften BABW inzake verkeerstekens [=BABW=] is onderdeel van de nationale wetgeving en bevat regels over de plaatsing en uitvoering van verkeersborden. Deze uitvoeringsvoorschriften verwijzen naar de NEN 3381 voor visualisaties. 

**Raakvlaktype: Bron voor informatiemodel**
<div class="issue" data-number="76"></div>

### NEN3381:2020
De [=normcommissie Verkeerstekens=] houdt zich bezig met de normalisatie op het gebied van verkeerstekens. De Europese en nationale normalisatie is gericht op uniformering van het programma van eisen van de constructies van verkeerstekens binnen Nederland en Europa. De normcommissie is actief betrokken bij het opstellen en herzien van Europese normen. Ook houdt de commissie zich bezig met ontwerpen, het vaststellen van nieuwe en onderhouden van bestaande niet-RVV borden, naar aanleiding van vragen uit de markt. Het Ministerie van Infrastructuur en Milieu wordt voorzien van advies en voorstellen omtrent nieuwe RVV borden.

De [=NEN3381:2020=] "Wegmeubilair - Eisen voor permanente en tijdelijke verkeersborden" geeft de eisen, classificatie en beproevingsmethoden voor verkeersborden inclusief de ondersteuningsconstructie. Het gaat daarbij om de fysieke productie, plaatsing en beheer van de verkeersborden. 

**Raakvlaktype: Gebruik informatiemodel**
In het ideale geval worden de concepten en definites uit het Informatiemodel Verkeerstekens toegepast binnen de NEN3381:2020 zodat duidelijk is op welk type verkeersteken de eisen in deze NEN-norm betrekking hebben. 

**Raakvlaktype: Bron voor informatiemodel**
<div class="issue" data-number="78"></div>

## Beheerfase

### IMBOR
CROW publiceert het informatiemodel beheer openbare ruimte ([=IMBOR=]). IMBOR bevat de afspraken over de benamingen en definities van alle type objecten in de openbare ruimte en de beheergegevens die per type object vastgelegd kunnen worden. De objecttypen uit de Basisregistratie Grootschalige Topografie ([=BGT=]) en het Informatiemodel geografie ([=IMGeo=]) vormen de basis.


In IMBOR zijn 1331 soorten verkeersborden opgenomen in de categorien bebakening en bewegwijzering en daarnaast ook markeringen. Bij al deze objecten zijn attributen opgenomen opgenomen en waardelijsten. Het gaat dan om de gegevens van boren en markeringen die in de beheerfase nodig zijn, zoals bijvoorbeeld datum plaatsing, beheerder of gewenst kwaliteitsniveau van het object.  

<p class="note" title="Informatiemodel, data en applicaties"><ol><li><b>Informatiemodel</b>: IMBOR is alleen een informatiemodel, géén bron van gegevens over bijvoorbeeld de locatie van in beheer zijnde borden. </li>
  <li><b>Data</b>: IMBOR wordt gebruikt om informatie over de fysiek buiten geplaatste verkeersborden en markeringen te kunnen opslaan. Elke wegbeheerder kan dit zelf organiseren in een eigen database of een database van een opdrachtnemer of softwareleverancier (publicatie bij de bron). Of men kan een landelijke afspraak maken om de in beheer zijnde borden ergens te publiceren, zoals via het NWB (centrale publicatie). Op dit moment zijn hiervoor geen afspraken. </li>
    <li><b>Applicaties</b>: De met IMBOR gemoddelleerde data over bijvoorbeeld wegvakken, borden en markeringen kan worden gebruikt in applicaties. IMBOR is specifiek opgesteld voor de informatiebehoefte in areaalbeheerpakketten. Deze pakketten zijn gericht op het tactische en operationele beheer van de buitenruimte. Als een beheerder de borden in zijn/haar areaalbeheerapplicatie wil zien, kan de applicatie de bron waar de informatie wordt opgeslagen raadplegen.</li></ol></p>

Het Informatiemodel Verkeerstekens moet aansluiten op IMBOR, maar geen dubbelingen kennen. Daarvoor is een besluit nodig waar welke informatie komt te staan. Voorstel:

1. In het Informatiemodel Verkeerstekens staan de definities van verkeersborden en markeringen.
2. In IMBOR staan de borden, bewegwijzeringen en markeringen die buiten de scope van het Infoprmatiemodel Verkeerstekens en Verkeersbesluiten vallen. 
3. In het Informatiemodel Verkeerstekens komen attributen te staan die bij het bord / de markering "-als-instantie-van-verkeersbesluit" (gewenst/gepland bord) informatie geven over datum en herkomst van het besluit, en de geldigheidsperiode van het besluit.
4. In IMBOR attributen opnemen die bij het bord / de markering "-als-instantie-van-een-beheerobject" (fysiek / bestaand / geplaatst bord) informatie geven over de datum van aanleg, beheerder en overige informatie die gegenereerd wordt tijdens bouwen en beheren van de borden en markeringen.

<div class="issue" data-number="52"></div>


## Gebruiksfase

### NDW

<dt><dfn data-lt="NDW|Nationaal Dataportaal Wegverkeer">NDW</dfn>
<dd>Het Nationaal Dataportaal Wegverkeer. Onder vlag van het NDW werken Nederlandse overheden samen aan het inwinnen, combineren, opslaan en distribueren van mobiliteitsdata. Deze gegevens zijn essentieel voor het managen van het verkeer, ze voeden talloze verkeersinformatiediensten en vormen een stevige basis onder het mobiliteitsbeleid in ons land. NDW is de gezamenlijke organisatie die de inwinning van de gegevens organiseert, toeziet op de kwaliteit, data verrijkt, opslaat en publiceert. Zie ook <a href="https://www.ndw.nu/">hun website</a>   </dd>


Onder de vlag van het Nationaal Dataportaal Wegverkeer ([=NDW=]) werken Nederlandse overheden samen aan het inwinnen, combineren, opslaan en distribueren van mobiliteitsdata. Deze gegevens zijn essentieel voor het managen van het verkeer, ze voeden talloze verkeersinformatiediensten en vormen een stevige basis onder het mobiliteitsbeleid in ons land. NDW is de gezamenlijke organisatie die de inwinning van de gegevens organiseert, toeziet op de kwaliteit, data verrijkt, opslaat en publiceert.

<div class="issue" data-number="14"></div>


### NWB
<<dfn data-lt="NWB|Nationaal Wegen Bestand|NWB-Wegen">NWB</dfn>
<dd> Een open geografisch databestand met alle openbare wegen in Nederland die een straatnaam of wegnummer hebben en in beheer zijn bij het Rijk, provincies, gemeenten en waterschappen. Ook losliggende voet- en fietspaden en onverharde wegen zijn, indien voorzien van een straatnaam, in het NWB-Wegen opgenomen. Vrijliggende fietspaden die geen officiële straatnaam hebben ook. Wanneer een weg gescheiden rijbanen heeft, wat vooral het geval is bij Rijkswegen, worden deze als aparte wegvakken in het bestand verwerkt.Het NWB is gedeeld eigendom van alle wegbeheerders en gebruikers van wegendata in Nederland. Het Nationaal Wegenbestand wordt op vrijwillige basis bijgehouden door wegbeheerders, gemeenten en provincies. Zie ook <a href="https://nationaalwegenbestand.nl/wat-het-nwb">deze website</a></dd>
<dt><dfn data-lt="NWB+|Nationaal Wegen Bestand+">Nationaal Wegen Bestand+</dfn>
<dd>Een verbeterde versie van het nationaal wegen bestand, zie ook <a href="https://nationaalwegenbestand.nl/wat-het-nwb">deze website</a>    </dd>



<dfn data-lt="Wegvak|NWB-wegvak|Road element|Wegvakken">Wegvak</dfn>
<dd>Een wegvak in het Nationaal Wegen Bestand (NWB) is een deel van een weg, dat zich tussen twee punten (juncties) bevindt. Road element conform de Europese standaard voor wegeninformatie (Geografic Data Files). Een wegvak in het NWB is een lijn met x- en y coördinaten. Elk wegvak loopt van een begin- naar een eindjunctie en kent een positieve en een negatieve richting. Welke van beide juncties als beginjunctie van het wegvak wordt benoemd, is volstrekt willekeurig. Verandering van een eigenschap van een wegvak resulteert in splitsing in twee of meerdere wegvakken. Juncties dus splitsingen van wegvakken komt voor bij gemeentegrenzen, provinciegrenzen, beheergrenzen en bij bepaalde specifieke kenmerkwijzigingen. </dd>

<dfn data-lt="Junctie|Juncties">Junctie</dfn>
<dd>het begin- of eindpunt van één of meer wegvakken in het Nationaal Wegen Bestand (NWB). In het NWB hebben juncties aan de hand van X- en Y-coördinaten een locatie in het digitale netwerk gekregen.</dd>


**Raakvlaktype: Gezamenlijk beheer**
Het NWB bevat een informatiemodel voor het wegennetwerk vast als netwerk van [=Juncties=] en [=Wegvakken=]. Het Informatiemodel Verkeerstekens moet hierop aansluiten om te zorgen dat verkeerskundige informatie gekoppeld kan worden aan het juiste wegvak en de juiste richting in het wegvak.


### Verkeersbordendata
Het NDW publiceert de [actueel waargenomen verkeersborden](https://docs.ndw.nu/api/trafficsigns/nl/index.html) in Nederland. Het bestand is op twee bronnen gebaseerd: 1. Mutaties die door de wegbeheerder worden ingevoerd 2. Mutaties die door de jaarlijkse schouwronde met auto's/camera's wroden gesignaleerd. De eerste bron is vanzelf actueler, maar wordt minder toegepast dan de tweede bron. De verkeersborden hebben, waar betrouwbaar mogelijk, een toewijzing aan een NWB wegvak en ze hebben allemaal een locatie (x,y).

**Raakvlaktype: Gebruik informatiemodel**
Dit betreft een representatie van de verkeersborden in een andere levensfase, namelijk de in beheer/gebruik zijnde borden. In het ideale geval wordt vanuit deze data een link gelegd met het type verkeersbord dat wordt gedefinieerd in het Informatiemodel Verkeerstekens.

### T3D
In het [=Totaal 3Dimensionaal=] Programma wordt gewerkt aan verbetering van het inwinnen, registratie en het gebruik van 3 dimensionale geo-informatie.
Hierbij wordt [=CityGML=] gezien als een handig formaat om in te publiceren. 

**Raakvlaktype: Gebruik informatiemodel**
Dit betreft een representatie van de verkeersborden in een andere levensfase, namelijk de in beheer/gebruik zijnde borden. In het ideale geval wordt vanuit deze data een link gelegd met het type verkeersbord dat wordt gedefinieerd in het Informatiemodel Verkeerstekens.

### CityGML
Open Geospatial Consortium beheert [=CityGML=]. CityGML is een conceptueel model en uitwisselformaat voor de representatie, opslag en uitwisseling van virtuele 3D modellen van steden, inclusief de wegen. 

**Raakvlaktype: Bron voor informatiemodel**

### Data Top 15
De [=Data Top 15=] In het landelijke programma 'Digitalisering Overheden' werken 5 landsdelen samen om er voor te zorgen dat in 2030 alle wegbeheerders 'digitaal capabil in mobiliteit' te zijn. Hiervoor is een Data Top 15 opgesteld, met onder andere maximumsnelheden, borden en andere datasets.
De DataTop15 verwijst weer door naar andere programma's waarbinnen deze data wordt gepubliceerd, en naar data.overheid.nl waar individuele beheerorganisaties waaronder Rijkswaterstaat eigen data publiceren. In deze bronnen zitten dubbelingen met de gegevens die in de landelijke netwerkregistratie zullen worden opgenomen.

**Raakvlaktype: Gebruik informatiemodel**

### NWB


### Programma Netwerkregistratie
Het Programma Netwerkregistratie werkt aan het op orde brengen van de verkeerskundige wegendata; dit zijn de data die gaan over wélke beperkingen op welke wegen gelden en wélk verkeer op welke wegen is toegestaan (ge- en verboden). De verkeerskundige wegendata zijn essentieel voor wegbeheerders en serviceproviders om het verkeer sneller, veiliger en groener te maken.

**Raakvlaktype: Gebruik informatiemodel**

#### KOOP

<dfn data-lt="Kennis- en Exploitatiecentrum voor Officiële Overheidspublicaties|KOOP">KOOP</dfn>
<dd>Kennis- en Exploitatiecentrum voor Officiële Overheidspublicaties. De primaire taak van KOOP is het rechtsgeldig bekendmaken en beschikbaar stellen van wet- en regelgeving van alle overheden van Nederland.  </dd>

Verkeersbesluiten zijn dit zijn officiële overheidspublicaties. KOOP publiceert verkeersbelsuiten. 

**Raakvlaktype: Gebruik informatiemodel**

#### Verkeersbesluiten DEMO
Proof of Concept van KOOP samen met minisrerie van IenW. Een prototype bordenplan KaartModule, die op dit moment met een aantal stakeholders wordt geëvalueerd. Het is publiek toegankelijk en het geeft een inkijk in de mogelijke toekomstige functionaliteiten en potentiële raakvlakken met het informatiemodel. Het is [hier](https://verkeersbesluiten-demo.overheid.nl/) te zien.

In de huidige situatie van een verkeersbesluit wordt er alleen voor het hele verkeersbesluit gegeocodeerd. Niet per verkeersbord. En er is ook geen mogelijkheid tot het kiezen van een wegvak. 

[Voorbeeld huidige situatie](https://zoek.officielebekendmakingen.nl/stcrt-2021-3722.html)

Zij hebben dan informeel in een plaatje het volgende aangegeven:
 
![Huidige situatie verkeersbesluit](hoofdstukken/media/verkeersbesluitnu.png)

Maar in de metadata (https://zoek.officielebekendmakingen.nl/stcrt-2021-3722) is slechts 1 coördinaat aangegeven. Dat is wat we dus willen verbeteren met de nieuwe KaartModule. 

[Voorbeeld gewenste situatie](https://verkeersbesluiten-demo.overheid.nl/demo.html) en bordenplan bijlage, die kan je dus laden:
 
![Gewenste situatie verkeersbesluit](hoofdstukken/media/verkeersbesluitendemo.png)



### IMGeo

### BGT en SOR
De Samenhangende Objectenregistraties....






