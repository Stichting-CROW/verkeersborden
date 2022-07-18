# Raakvlak: Standaarden


## Informatiemodel
In deze paragraaf staan de modelleertechische normen en richtlijnen waaraan het Informatiemodel Verkeerstekens dient te voldoen, en de wijze waarop technisch wordt aangesloten op andere informatiemodellen.

### NEN2660-2:2022

<dfn data-lt="NEN2660-2:2022">NEN2660-2:2022</dfn>
<dd>NEN2660-2 is een praktische invulling van NEN2660_1. In deel 1 zijn meer theoretische/conceptuele en bouw- en taalonafhankelijke modelleerpatronen vastgelegd. Deze norm is vrij beschikbaar bij de NEN en is ontwikkeld in een samenwerking tussen overheden, adviesbureau's en kennisinstituten. Het heeft als doel de standaard te zijn voor de ontwikkeling van ontologieën in de gebouwde omgeving. Het bevat drie belangrijke (hoofd)onderdelen:
<ol><li>Een praktisch toplevelmodel waarin genoeg semantiek aangegeven wordt om het [=Informatiemodel Verkeerstekens=], net als [=IMBOR=], in uit te drukken.</li>
<li>Extensies hierop voor de meest gebruikt toepassingen in de gebouwde omgeving. </li>
<li>Een taalbinding (en daarmee de keuze voor) de LinkedData W3C standaarden: SKOS [skos-primer], RDFS [rdf-schema], OWL [owl2-primer] en SHACL [shacl]. Het [=Informatiemodel Verkeerstekens=], net als [=IMBOR=], kan gebruik maken van deze twee keuzes en hierop zo goed mogelijk aan te sluiten. In onderstaande figuur is ook te zien waar de NEN2660-2 zich op focust. Het [=Informatiemodel Verkeerstekens=] neemt, net als [=IMBOR=], plaats in de "M1: Informatie model" laag.</li></dd>

<figure>
<img src="./hoofdstukken/media/NEN2660-2_scope.PNG">
<figcaption>NEN2660-2 scope in grijs grijze vlakken (bron: TNO) </caption>
</figure>


* Het informatiemodel MOET worden opgesteld conform de [=NEN2660-2:2022=].
* Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt.
* Het informatiemodel MOET van alle concepten een definitie geven of verwijzen naar een definitie in wetten of andere informatiemodellen.

### NEN 3610
<dfn data-lt="NEN3610">NEN3610</dfn>
<dd>NEN 3610 is de standaard voor het uitwisselen van geo-informatie, gebruikt Unified Modeling Language (UML) als formele taal voor het vastleggen van semantiek en beveelt Geography Markup Language (GML) aan als technisch uitwisselingsformat. NEN 3610 is hiermee nog niet geschikt om semantiek, gegevensdeling en uitwisseling middels Linked Data te realiseren. De NEN3610 is in 2021 herzien (t.o.v. 2011) en vormt de basis van de Samenhangende objecten registratie (SOR) die binnen het DiSGeo programma wordt opgetuigd.  <a href="https://geonovum.github.io/NEN3610-Linkeddata/#inleiding">bron: Geonovum</a>  </dd>

Binnen de NEN2660-2 is reeds een relatie tussen de NEN2660-2 en de NEN3610 aangegeven. Het gaat hier alleen om een afstemming tussen de begrippenkaders. 

* Het informatiemodel MOET waar mogelijk aangesloten op de [=NEN3610=]. Bij tegenstrijdigheden geldt de [=NEN2660-2:2022=].

### MIM

<dfn data-lt="MIM">MIM</dfn>
<dd>Het Metamodel Informatie Modellering (MIM) is een gemeenschappelijk vertrekpunt voor het maken van informatiemodellen. Het model bevat duidelijke afspraken over het vastleggen van gegevensspecificaties en biedt tegelijkertijd ruimte aan de verschillende niveaus van modellering. Het MIM is in 2020 uitgekomen en vormt een belangrijke leidraad voor het informatiemodel.  ondanks enkele tegenstrijdigheden met de [=NEN2660-2:2022=]. Het MIM gaat uit van:
<ol><li>Het scheiden van soort informatiemodellen in niveaus.</li>
<li>De inhoudelijke modellering van modelconcepten en de metagegevens ervan. Door een informatiemodel uit te drukken in het MIM is een standaard manier van vastleggen en uitleg geborgd.</li>
Het MIM gaat uit van een begrippenkader en een explicietere modellering van een informatiemodel.</dd>

* Het informatiemodel MOET waar mogelijk aangesloten op de [=MIM=]. Bij tegenstrijdigheden geldt de [=NEN2660-2:2022=].

### CB-NL

<dfn data-lt="CB-NL|Conceptenbibliotheek Nederland">CB-NL</dfn>
<dd>De Nederlandse Conceptenbibliotheek voor de gebouwde omgeving, een digitale, semantische bibliotheek beheerd door BIM loket. Deze bevat uniformerende definities en legt via beschrijvingen verbindingen tussen standaarden, normen, objecten en producten van bestaande bibliotheken. CB-NL is bedoeld om ontologien zoals het [=Informatiemodel Verkeerstekens=] of objecttypenbibliotheken van asset managers en bouwbedrijven met elkaar te kunnen verbinden. Een goedwerkende CB-NL kan informatie uitwisselen en delen tussen bouwdisciplines en -partijen aanzienlijk versnellen. CB-NL is gratis toegankelijk via internet. Zie ook <a href="https://www.bimloket.nl/p/98/CB-NL">deze website</a> </dd>


**Raakvlaktype: Gezamenlijk beheer**

CB-NL is de logsiche plek om relaties tussen het [=Informatiemodel Verkeerstekens=] en andere standaarden zoals NLCS te publiceren, waarbij een afspraak moet worden gemaakt over het beheer van de relatie tussen beide standaarden. Voorwaarde is wel dat een standaard gepubliceerd is als ontologie in linked data.


## Inhoudelijk
Er bestaan verschillende andere informatiemodellen die wegkenmerken of verkeersborden beschrijven. Dat zijn raakvlakken of juist ijkingsbronnen om het [=Informatiemodel Verkeerstekens=] beter vorm te geven.

## Ontwerpfase

### NLCS


<dfn data-lt="NLCS|De Nederlandse CAD Standaard">NLCS</dfn>
<dd> BIM loket beheert de Nederlandse CAD Standaard, de Nederlandse CAD standaard voor uitwisseling van informatie in 2D CAD-ontwerptekeningen. CAD betekent Computer-aided design: het ontwerpen van onder meer constructies en apparaten met behulp van computerprogramma's. De NLCS bevat basisafspraken over het omgaan met metadata, digitaal tekenen, het uiterlijk van de tekening en – vooral – de bestandsopbouw van 2D-tekenwerk. Deze afspraken zijn onafhankelijk van de CAD-platforms die geleverd worden door softwareleveranciers.  Zie ook <a href="https://www.bimloket.nl/p/365/NLCS">deze website</a>  </dd>

 
Met NLCS worden de objecten op een tekening herkend door alle partijen. Het doel van NLCS is het vermijden van dubbel werk, misverstanden en extra kosten met eenduidige tekeningen. Dit vergroot de efficiency, de kwaliteit, geeft een completer en eenduidig beeld en versnelt de tijdigheid waarmee wijzigingen worden gecommuniceerd. 

Circa 30% van de ontwerptekeningen bij verkeersbesluiten komen uit CAD-systemen. Tijdens het ontwerpproces wordt veel onderliggende digitale informatie gemaakt, maar deze informatie wordt niet optimaal ontsloten voor bijvoorbeeld publicatie van de [=verkeerskundige informatie=] in de gebruiksfase. NLCS kan verbeterd worden zodat de informatie uit het ontwerp handiger kan worden overgenomen naar de volgende fase, bijvoorbeeld voor het publiceren van de actuele verkeerskundige situatie op een weg.

**Raakvlaktype: Gebruik informatiemodel**

 BIM loket wil op verzoek van het Ministerie van Infrastructuur en Waterstaat de verkeersborden opnemen in de NLCS standaard zodra deze gepubliceerd worden in het [=Informatiemodel Verkeerstekens=]. Het betreft dan de kijkrichting, positie en het type verkeersbord met onderbord. Vervolgens wil het BIM-loket nadere afspraken maken met de leveranciers van CAD-systemen om digitale informatie over de verkeersborden beschikbaar te kunnen maken voor andere systemen, waaronder potentieel de [verkeersbesluiten applicatie] van [=KOOP=]. 

### ASVV

<dfn data-lt="ASVV|Aanbevelingen voor Verkeersvoorzieningen Binnen de Bebouwde Kom">ASVV</dfn>
<dd> [=CROW=] publiceert de ASVV, de Aanbevelingen voor Verkeersvoorzieningen Binnen de Bebouwde Kom. De kennis uit de ASVV wordt gebruikt door verkeerskundig ontwerpers, adviseurs, wegbeheerders, beleidsmedewerkers en juristen. De ASVV is op dit moment geen open standaard, er moet een abonnement voor worden afgesloten. Zie ook <a href="https://www.crow.nl/publicaties/asvv-2021">deze website</a> </dd>

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de ASVV zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeersborden worden verwezen. 


### Handboek Wegontwerp

<dt><dfn data-lt="Handboek Wegontwerp">Handboek Wegontwerp</dfn>
<dd>[=CROW=] publiceert het Handboek Wegontwerp. Dit is een bundeling kennis, richtlijnen en praktijkvoorbeelden rond het ontwerp van wegen buiten de bebouwde kom (Bubeko). Het Handboek Wegontwerp is geen open standaard maar kennis waarvoor een abonnement moet worden afgesloten. Zie ook <a href="https://www.crow.nl/productpakketten/handboek-wegontwerp-2013-serie-papier-onlin">deze website</a>     </dd>

CROW publiceert het Handboek Wegontwerp. Dit is een bundeling kennis, richtlijnen en praktijkvoorbeelden rond het ontwerp van wegen buiten de bebouwde kom (Bubeko). Het Handboek Wegontwerp is geen open standaard maar kennis waarvoor een abonnement moet worden afgesloten. 

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen het Handboek Wegontwerp zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeersborden worden verwezen. 

<aside class="note" title="Vanuit [=Informatiemodel Verkeerstekens=] verwijzen naar Handboek Wegontwerp en ASVV">
Om een betere, samenhangende digitale informatievoorziening te creëren zou het een goede aanvulling kunnen zijn, om vanuit het [=Informatiemodel Verkeerstekens=] en Verkeersbesluiten te kunnen verwijzen (met links) naar het Handboek Wegontwerp en de ASVV voor instructies (eisen) over het nemen van verkeersbesluiten, het afwegingskader voor een specifiek type besluit enzovoorts. Wegbeheerders worden door deze links geholpen met het vinden van de juiste informatie of kunnen bij een verkeersbesluit vastleggen of en hoe ze zich aan deze instructies hebben gehouden (verificatie van de eisen, vastleggen van de afwegingen bij het verkeersbesluit). Dit verrijkt de netwerkdata met gegevens over de reden waarom deze verkeersbesluiten genomen worden, op een gestructureerde manier. In combinatie met andere gegevens, bijvoorbeeld over files of ongelukken, kan dit leiden tot steeds betere inzichten, eisen en afwegingskaders.<br>
<br>
Dit vraagt wel om open publicatie van het Handboek Wegontwerp en de ASVV, zodat de informatie achter de links gevonden kan worden. Wat vraagt om een andere, structurele financiering van het beheer van Handboek Wegontwerp. Ook moet onderzocht worden of de systemen van gebruikers klaar zijn om gelinkte informatie goed weer te geven en wat de gebruikers nodig hebben.
</aside>


### Wegontwerp RWS

<dt><dfn data-lt="Wegontwerp RWS">Wegontwerp RWS</dfn>
<dd>Rijkswaterstaat publiceert op <a href="https://www.rijkswaterstaat.nl/zakelijk/werken-aan-infrastructuur/bouwrichtlijnen-infrastructuur/autosnelwegen">deze website</a> eigen handleidingen en richtlijnen voor wegontwerp.  </dd>


**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de richtlijnen van Rijkswaterstaat zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeersborden worden verwezen. 

## Bouwfase

### NEN3381:2020
<dfn data-lt="NEN3381:2020">NEN3381:2020</dfn>
<dd>De NEN3381:2020 "Wegmeubilair - Eisen voor permanente en tijdelijke verkeersborden" geeft de eisen, classificatie en beproevingsmethoden voor verkeersborden inclusief de ondersteuningsconstructie. Het gaat daarbij om de fysieke productie, plaatsing en beheer van de verkeersborden. Zie ook <a href="https://www.nen.nl/nen-3381-2020-nl-267378">deze website</a></dd>

De NEN3381:2020 wordt beheerd door de [=normcommissie Verkeerstekens=]. 

**Raakvlaktype: Bron voor informatiemodel** Bron voor de [=statische verkeersborden=] die genomineerd zijn om in de wet te worden opgenomen

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de NEN3381:2020 zodat duidelijk is op welk type [=verkeersteken=] de eisen in deze NEN-norm betrekking hebben. 

## Beheerfase

### IMGeo

<dfn data-lt="IMGeo|Informatiemodel Geografie">IMGeo</dfn>
<dd> Het Informatiemodel ontwikkeld voor objectgerichte geografische informatie in de [=BGT=]. Wegen zijn hierin opgenomen als 2D vlakobject. Verkeersborden zijn hierin opgenomen als 2D punt van het type "bord".</dd>

Welk type verkeersbord op de BGT kaart staat kan niet worden geregistreerd.
Wegbeheerders leveren actuele wegen aan voor de kaarten van de BGT op basis van het informatiemodel IMGEO. Aanvullend hierop voegen zij in hun areaalbeheerpakketten extra informatie toe aan deze wegvlakken, ten behoeve van beheer van de wegen. 

**Raakvlaktype: Buiten scope** Potententieel op elkaar aansluitende informatiemodellen

### IMBOR
<dfn data-lt="Informatiemodel Beheer Openbare Ruimte|IMBOR">IMBOR</dfn>
<dd> Het Informatiemodel Beheer Openbare Ruimte (IMBOR) bevat de afspraken over de benamingen en definities van alle type objecten in de openbare ruimte en de beheergegevens die per type object vastgelegd kunnen worden. De objecttypen uit de Basisregistratie Grootschalige Topografie ([=BGT=]) vormen de de geometrische representatie van de objecten in IMBOR. Zie ook <a href="https://www.crow.nl/thema-s/management-openbare-ruimte/imbor">deze website</a> en <a href="https://docs.crow.nl/onto-verkenner/imbor/#/view">deze viewer</a>  </dd>

<aside class="note" title="Informatiemodel, data en applicaties"><ol><li><b>Informatiemodel</b>: IMBOR is alleen een informatiemodel, géén bron van gegevens over bijvoorbeeld de locatie van in beheer zijnde verkeersborden. </li>
<li><b>Data</b>: IMBOR wordt gebruikt om informatie over de fysiek buiten geplaatste verkeersborden te kunnen opslaan. Elke wegbeheerder kan dit zelf organiseren in een eigen database of een database van een opdrachtnemer of softwareleverancier (publicatie bij de bron). Of men kan een landelijke afspraak maken om de in beheer zijnde verkeersborden ergens te publiceren, zoals via het [=NWB=] (centrale publicatie). Op dit moment zijn hiervoor geen afspraken. </li>
<li><b>Applicaties</b>: De met IMBOR gemodelleerde data over bijvoorbeeld wegvakken en verkeersborden kan worden gebruikt in applicaties. IMBOR is specifiek opgesteld voor de informatiebehoefte in areaalbeheerpakketten. Deze pakketten zijn gericht op het tactische en operationele beheer van de buitenruimte. Als een beheerder de verkeersborden in zijn/haar areaalbeheerapplicatie wil zien, kan de applicatie de bron waar de informatie wordt opgeslagen raadplegen.</li></ol>
</aside>

In IMBOR zijn 1331 soorten verkeersborden opgenomen in de categorien [=bebakening=] en [=bewegwijzering=] en daarnaast ook [=wegmarkeringen=]. Bij al deze objecten zijn attributen opgenomen opgenomen en waardelijsten. Het gaat dan om de gegevens van boren  die in de beheerfase nodig zijn, zoals bijvoorbeeld datum plaatsing, beheerder of gewenst kwaliteitsniveau van het object.  

**Raakvlaktype: Gezamenlijk beheer**

Het [=Informatiemodel Verkeerstekens=] moet aansluiten op IMBOR, maar geen dubbele definities kennen. Daarvoor is een besluit nodig waar welke informatie komt te staan. Voorstel:

1. In het [=Informatiemodel Verkeerstekens=] staan de definities van wettelijk erkende of daarvoor genomineerde verkeersborden. Deze staan dan niet meer in IMBOR
2. In IMBOR staan de verkeersborden, bewegwijzeringen  die buiten de scope van het [=Informatiemodel Verkeerstekens=] vallen. 
3. In het [=Informatiemodel Verkeerstekens=] komen verkeerskundige attributen te staan die bij het verkeersbord "-als-instantie-van-verkeerskundig ontwerp" (gewenst/gepland verkeersbord) informatie geven over datum van ingang van het besluit, en de geldigheidsperiode van het verkeersbord.
4. In IMBOR komen voor beheer relevante attributen te staan die die bij het verkeersbord "-als-instantie-van-een-beheerobject" (fysiek / bestaand / geplaatst verkeersbord) informatie geven over de datum van aanleg, beheerder en overige informatie die gegenereerd wordt tijdens bouwen en beheren van de verkeersborden.

<aside class="note" title="Besluitvorming door IMBOR beheerorganisatie">
Dit voorstel wordt samen met architectuur framework voor het [=Informatiemodel Verkeerstekens=] geagendeerd in de Stuurgroep IMBOR voor besluitvorming of dit informatiemodel in beheer wordt genomen binnen de beheerorganisatie IMBOR en of men inhoudelijk akkoord is met deze aansluiting.
</aside>

#### _IMWV_
IMWV staat voor Informatie Model Wegen en Verkeer. 

<dfn data-lt="IMWV|Informatie Model Wegen en Verkeer">IMWV</dfn>
<dd> Het InformatieModel Wegen en Verkeer (IMWV) beschrijft de benamingen van verkeerskundige objecten en van verkeersgegevens, met de bijbehorende kenmerken en waarden. Het IMWV versie 2018 is de eerste publicatie van het IMWV en bevat een beschrijving van de fysieke objecten en statische gegevens die aan fysieke objecten gekoppeld kunnen worden. Het is gebaseerd op de gegevensbehoefte van drie verkeerskundige vraagstukken: verkeersveiligheid, wegontwerp/verkeerstechnisch ontwerp en verkeersmodellen. Het IMWV is sinds 2020 opgenomen in het [=IMBOR=] als de IMBOR Vakdiscipline Verkeer. </dd>

<figure>
<img src="./hoofdstukken/media/IMWV.jpg">
<figcaption>Visualisatie alle objecttypen die tot het IMWV behoren.</caption>
</figure>




<figure>
<img src="./hoofdstukken/media/domeinmodellen.png">
<figcaption>Domeinmodellen voor geografische informatie; IMGeo is gebaseerd op de [=NEN3610=].</caption>
</figure>


### CityGML

<dt><dfn data-lt="CityGML">CityGML</dfn>
<dd>Een conceptueel model en uitwisselformaat voor de representatie, opslag en uitwisseling van virtuele 3D modellen van steden, inclusief de wegen. CityGML wordt beheerd door Open Geospatial Consortium. Zie ook <a href="https://www.ogc.org/standards/citygml">deze website</a></dd>

**Raakvlaktype: Buiten scope.** Potentiële geometrische representatievorm van de verkeersborden


### Dataspecs INSPIRE 

De dataspecificaties van [=INSPIRE=], infrastructuur voor ruimtelijke informatie in Europa, zijn openbaar beschreven op 
[deze pagina](https://inspire.ec.europa.eu/Themes/115/2892) met UML-diagrammen en uitgebreide technische documentatie.

Alleen het Wegennetwerk, uit het thema Transportnetwerken is hierbij relevant.
De FeatureType supertype _TransportProperty_ is relevant voor bijna alle wegkenmerken.

**Raakvlaktype: Bron voor informatiemodel** Bron voor de definitie van wegkenmerken die vanuit verkeerskundig perspectief moeten worden opgenomen in het informatiemodel.

### Data.vlaanderen.be

De Vlaamse overheid heeft binnen het [=OSLO=]-programma (Open standaarden voor linkende organisaties) en het project Lokale Besluiten als Gelinkte Open Data (LBLOD) verschillende vocabulaira en applicatieprofielen ontwikkeld die (deels) overlappen met de doelen van het [=Informatiemodel Verkeerstekens=].

Er wordt gebruik gemaakt van vocabularia die de herbruikbare concepten beschrijven. 
De applicatieprofielen stellen dan vereisten aan eigenschappen van en relaties tussen die concepten:

- [Infrastructuur](https://data.vlaanderen.be/ns/openbaardomein/infrastructuur)
- [Mobiliteit](https://data.vlaanderen.be/ns/mobiliteit)
- [Besluit](https://data.vlaanderen.be/ns/besluit)

**Raakvlaktype: Potentiële internationale aansluiting** Indien de Vlaamse en Nederlandse situatie gelijkenissen vertonen kan gezocht worden naar een gemeenschappelijk vocabulair dat kan leiden tot internationale aansluiting van informatiemodellen en toegankelijker gebruik van informatiemodellen.

#### Besluiten Mobiliteit

Zie [deze pagina](https://data.vlaanderen.be/doc/applicatieprofiel/besluit-mobiliteit/)

> Dit applicatieprofiel definieert een specificatie voor de publicatie van inname- en signalisatievergunningen en aanvullende reglementen van een bestuursorgaan .

#### Wegenregister

Zie [deze pagina](https://data.vlaanderen.be/doc/applicatieprofiel/wegenregister/)

> De applicatie waarop dit profiel betrekking heeft is het Wegenregister. Het Wegenregister is het middenschalig referentiebestand van de wegen in Vlaanderen die beheerd zijn door het gewest, de provincies, de gemeenten of andere instanties en die openbaar toegankelijk zijn. Het moet alle (openbaar toegankelijke) wegen van Vlaanderen bevatten, met bijbehorende attribuutgegevens. Het bestand heeft een middenschalige precisie.

####  Verkeersborden

Zie [deze pagina](https://data.vlaanderen.be/doc/applicatieprofiel/verkeersborden/)

> Dit applicatieprofiel definieert een specificatie voor de uitwisseling van [statische, verticale] verkeersbordinformatie die geplaatst zijn of worden op het openbaar domein.

> Doorheen de verschillende werkgroepen is gekomen tot een model dat bruikbaar is in de toepassingscontexten van zowel de regelgeving als technisch onderhoud.

#### Vlaamse Wegen OTL 
<dfn data-lt="AWV OTL">AWV OTL</dfn>
<dd>Een uitwerking van [=OSLO=] is de objecttypenbibliotheek van alle weginfrastructuurobjecten van het Agentschap wegen en verkeer, zoals beschreven in de verschillende standaardbestekken. Elk objecttype heeft daarin een eenduidige definitie, een aantal vastgelegde eigenschappen en mogelijke relaties met andere objecttypes. Zie ook <a href="https://wegenenverkeer.be/zakelijk/bim">deze website</a> en meer specifiek <a href="https://wegenenverkeer.be/zakelijk/bim/otl">de startpagina over de OTL.</a></dd>


### Datex II

https://www.datex2.eu/, Gepubliceerd als CEN 16157, deel 1 t/m 9. 
Deze norm is niet openbeschikbaar. Voor Nederlands is er door NDW een Nederlands profiel opgesteld. Mogelijke relevante aspecten:

* beborde omleiding
* snelheidsbeperkingen (`SpeedManagement`)

**Raakvlaktype: Bron voor informatiemodel** De focus bij Datex ligt eerder op incidenten, [=dynamische verkeersborden=] en de huidige situatie, niet op de besluitvorming en [=statische verkeersborden=]. Toch moet worden gecontroleerd of onderdelen van het informatiemodel al beschreven zijn in deze norm, zodat hier op kan worden aangesloten.