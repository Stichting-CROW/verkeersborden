# Raakvlak: Standaarden


## Informatiemodellering
In deze paragraaf staan de modelleertechische normen en richtlijnen waaraan het Informatiemodel Verkeerstekens dient te voldoen, en de wijze waarop technisch wordt aangesloten op andere informatiemodellen.

### NEN2660-2:2022
De [=NEN2660-2:2022=] bevat drie belangrijke (hoofd)onderdelen:
<ol><li>Een praktisch toplevelmodel waarin genoeg semantiek aangegeven wordt om het [=Informatiemodel Verkeerstekens=], net als [=IMBOR=], in uit te drukken.</li>
<li>Extensies hierop voor de meest gebruikt toepassingen in de gebouwde omgeving. </li>
<li>Een taalbinding (en daarmee de keuze voor) de LinkedData W3C standaarden: SKOS [skos-primer], RDFS [rdf-schema], OWL [owl2-primer] en SHACL [shacl]. Het [=Informatiemodel Verkeerstekens=], net als [=IMBOR=], kan gebruik maken van deze twee keuzes en hierop zo goed mogelijk aan te sluiten. In onderstaande figuur is ook te zien waar de NEN2660-2 zich op focust. Het [=Informatiemodel Verkeerstekens=] neemt, net als [=IMBOR=], plaats in de "M1: Informatie model" laag.</li>

<figure>
<img src="./hoofdstukken/media/NEN2660-2_scope.png">
<figcaption>NEN2660-2 scope in grijs grijze vlakken (bron: TNO) </caption>
</figure>

Het NEN2660-2 topmodel focust op de gebouwde wereld. In deze specifieke use case is alleen het verkeersbord echt fysiek. Toch zorgt modellering op deze manier voor een mate van standaardisatie van het informatiemodel en de andere informatiemodellen in de gebouwde omgeving.


* Het informatiemodel MOET worden opgesteld conform de [[NEN2660-2:2022]].
* Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt.
* Het informatiemodel MOET van alle concepten een definitie geven of verwijzen naar een definitie in wetten of andere informatiemodellen.

### NEN 3610
[[NEN_3610]] is de standaard voor het uitwisselen van geo-informatie, gebruikt Unified Modeling Language (UML) als formele taal voor het vastleggen van semantiek en beveelt Geography Markup Language (GML) aan als technisch uitwisselingsformat. NEN 3610 is hiermee nog niet geschikt om semantiek, gegevensdeling en uitwisseling middels Linked Data te realiseren. De NEN3610 is in 2021 herzien (t.o.v. 2011) en vormt de basis van de Samenhangende objecten registratie (SOR) die binnen het DiSGeo programma wordt opgetuigd.  <a href="https://geonovum.github.io/NEN3610-Linkeddata/#inleiding">bron: Geonovum</a>  </dd>

Binnen de NEN2660-2 is reeds een relatie tussen de NEN2660-2 en de NEN3610 aangegeven. Het gaat hier alleen om een afstemming tussen de begrippenkaders. 

* Het informatiemodel MOET waar mogelijk aangesloten op de [[NEN_3610] Bij tegenstrijdigheden geldt de [[NEN2660-2:2022]].

### MIM
Het Metamodel Informatie Modellering (MIM) is een gemeenschappelijk vertrekpunt voor het maken van informatiemodellen. 

* Het informatiemodel MOET waar mogelijk aangesloten op de [=MIM=]. Bij tegenstrijdigheden geldt de [=NEN2660-2:2022=].



## Domeinstandaarden
Er bestaan verschillende andere domeinstandaarden of informatiemodellen die wegkenmerken of verkeersborden beschrijven. Dat zijn raakvlakken of juist ijkingsbronnen om het [=Informatiemodel Verkeerstekens=] beter vorm te geven.

## Ontwerpfase

### NLCS
Met [=De Nederlandse CAD Standaard=] (NLCS) worden de objecten op een tekening herkend door alle partijen. Het doel van NLCS is het vermijden van dubbel werk, misverstanden en extra kosten met eenduidige tekeningen. Dit vergroot de efficiency, de kwaliteit, geeft een completer en eenduidig beeld en versnelt de tijdigheid waarmee wijzigingen worden gecommuniceerd. 

Circa 30% van de ontwerptekeningen bij verkeersbesluiten komen uit CAD-systemen. Tijdens het ontwerpproces wordt veel onderliggende digitale informatie gemaakt, maar deze informatie wordt niet optimaal ontsloten voor bijvoorbeeld publicatie van de [=verkeerskundige informatie=] in de gebruiksfase. NLCS kan verbeterd worden zodat de informatie uit het ontwerp handiger kan worden overgenomen naar de volgende fase, bijvoorbeeld voor het publiceren van de actuele verkeerskundige situatie op een weg.

**Raakvlaktype: Gebruik informatiemodel**

 BIM loket wil op verzoek van het Ministerie van Infrastructuur en Waterstaat de verkeersborden opnemen in de NLCS standaard zodra deze gepubliceerd worden in het [=Informatiemodel Verkeerstekens=]. Het betreft dan de kijkrichting, positie en het type verkeersbord met onderbord. Vervolgens wil het BIM-loket nadere afspraken maken met de leveranciers van CAD-systemen om digitale informatie over de verkeersborden beschikbaar te kunnen maken voor andere systemen, waaronder potentieel de [=verkeersbesluiten applicatie=] van [=KOOP=]. 

### ASVV

<dfn data-lt="ASVV|Aanbevelingen voor Verkeersvoorzieningen Binnen de Bebouwde Kom">ASVV</dfn>
<dd> [=CROW=] publiceert de ASVV, de Aanbevelingen voor Verkeersvoorzieningen Binnen de Bebouwde Kom. De kennis uit de ASVV wordt gebruikt door verkeerskundig ontwerpers, adviseurs, wegbeheerders, beleidsmedewerkers en juristen. De ASVV is op dit moment geen open standaard, er moet een abonnement voor worden afgesloten. Zie ook <a href="https://www.crow.nl/publicaties/asvv-2021">deze website</a> </dd>

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de ASVV zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeersborden worden verwezen. 


### Handboek Wegontwerp

CROW publiceert het [=Handboek Wegontwerp=]. Dit is een bundeling kennis, richtlijnen en praktijkvoorbeelden rond het ontwerp van wegen buiten de bebouwde kom (Bubeko). Het Handboek Wegontwerp is geen open standaard maar kennis waarvoor een abonnement moet worden afgesloten. 

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen het Handboek Wegontwerp zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeersborden worden verwezen. 

<aside class="note" title="Vanuit [=Informatiemodel Verkeerstekens=] verwijzen naar Handboek Wegontwerp en ASVV">
Om een betere, samenhangende digitale informatievoorziening te creëren zou het een goede aanvulling kunnen zijn, om vanuit het [=Informatiemodel Verkeerstekens=] en Verkeersbesluiten te kunnen verwijzen (met links) naar het Handboek Wegontwerp en de ASVV voor instructies (eisen) over het nemen van verkeersbesluiten, het afwegingskader voor een specifiek type besluit enzovoorts. Wegbeheerders worden door deze links geholpen met het vinden van de juiste informatie of kunnen bij een verkeersbesluit vastleggen of en hoe ze zich aan deze instructies hebben gehouden (verificatie van de eisen, vastleggen van de afwegingen bij het verkeersbesluit). Dit verrijkt de [=verkeerskundige wegennetwerk=]informatie met gegevens over de reden waarom deze verkeersbesluiten genomen worden, op een gestructureerde manier. In combinatie met andere gegevens, bijvoorbeeld over files of ongelukken, kan dit leiden tot steeds betere inzichten, eisen en afwegingskaders.<br>
<br>
Dit vraagt wel om open publicatie van het Handboek Wegontwerp en de ASVV, zodat de informatie achter de links gevonden kan worden. Wat vraagt om een andere, structurele financiering van het beheer van Handboek Wegontwerp. Ook moet onderzocht worden of de systemen van gebruikers klaar zijn om gelinkte informatie goed weer te geven en wat de gebruikers nodig hebben.
</aside>


### Wegontwerp RWS

Rijkswaterstaat publiceert eigen handleidingen en richtlijnen voor [=Wegontwerp RWS=].  </dd>


**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de richtlijnen van Rijkswaterstaat zodat op alle locaties voor mensen herkenbare termen ontstaan. Met links kunnen gebruikers van het handboek naar de website met definites en afbeeldingen van verkeersborden worden verwezen. 

## Bouwfase

### NEN3381:2020
De [[NEN3381:2020]] "Wegmeubilair - Eisen voor permanente en tijdelijke verkeersborden" geeft de eisen, classificatie en beproevingsmethoden voor verkeersborden inclusief de ondersteuningsconstructie. Het gaat daarbij om de fysieke productie, plaatsing en beheer van de verkeersborden. 

De [[NEN3381:2020]] wordt beheerd door de [=normcommissie Verkeerstekens=]. 

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de NEN3381:2020 zodat duidelijk is op welk type [=verkeersteken=] de eisen in deze NEN-norm betrekking hebben. 

## Beheerfase

### IMGeo
[=IMGeo=] definieert een verkeersbord, als punt op de kaart. Welk type verkeersbord op de BGT kaart staat kan niet worden geregistreerd.
Wegbeheerders leveren actuele wegen aan voor de kaarten van de BGT op basis van het informatiemodel IMGEO. Aanvullend hierop voegen zij in hun areaalbeheerpakketten extra informatie toe aan deze wegvlakken, ten behoeve van beheer van de wegen. 

**Raakvlaktype: Buiten scope** Potententieel op elkaar aansluitende informatiemodellen

### IMBOR
<aside class="note" title="Informatiemodel, data en applicaties"><ol><li><b>Informatiemodel</b>: IMBOR is alleen een informatiemodel, géén bron van gegevens over bijvoorbeeld de locatie van in beheer zijnde verkeersborden. </li>
<li><b>Data</b>: IMBOR wordt gebruikt om informatie over de fysiek buiten geplaatste verkeersborden te kunnen opslaan. Elke wegbeheerder kan dit zelf organiseren in een eigen database of een database van een opdrachtnemer of softwareleverancier (publicatie bij de bron). Of men kan een landelijke afspraak maken om de in beheer zijnde verkeersborden ergens te publiceren, zoals via het [=NWB=] (centrale publicatie). Op dit moment zijn hiervoor geen afspraken. </li>
<li><b>Applicaties</b>: De met IMBOR gemodelleerde data over bijvoorbeeld wegvakken en verkeersborden kan worden gebruikt in applicaties. IMBOR is specifiek opgesteld voor de informatiebehoefte in areaalbeheerpakketten. Deze pakketten zijn gericht op het tactische en operationele beheer van de buitenruimte. Als een beheerder de verkeersborden in zijn/haar areaalbeheerapplicatie wil zien, kan de applicatie de bron waar de informatie wordt opgeslagen raadplegen.</li></ol>
</aside>

In [=IMBOR=] zijn 1331 soorten verkeerstekens opgenomen in de categorien [=bebakening=] en [=bewegwijzering=] en daarnaast ook [=wegmarkeringen=]. Bij al deze objecten zijn attributen opgenomen opgenomen en waardelijsten. Het gaat dan om de gegevens van borden die in de beheerfase nodig zijn, zoals bijvoorbeeld datum plaatsing, beheerder of gewenst kwaliteitsniveau van het object. De soorten verkeerstekens zijn bepaald met gebruikers, op basis van hun bestaande areaalgegevens. 

* Het Informatiemodel Verkeerstekens MOET aansluiten op IMBOR zodat wegbeheerders geen tegenstrijdigheden ervaren bij het gebruiken van de informatiemodellen.

**Raakvlaktype: Gezamenlijk beheer**

Het [=Informatiemodel Verkeerstekens=] moet aansluiten op IMBOR, maar geen dubbele definities kennen. Daarvoor is een besluit nodig waar welke informatie komt te staan. Voorstel:

1. In het [=Informatiemodel Verkeerstekens=] staan de definities van wettelijk erkende of daarvoor genomineerde verkeersborden. Deze definities staan dan niet meer in IMBOR. De verkeersborden zijn wel opgenomen in IMBOR als beheerobject, waarbij IMBOR de attributen definieert die nodig zijn voor het beheren van de verkeersborden. 
2. In IMBOR worden de verkeersborden gedefinieerd die buiten de scope van het [=Informatiemodel Verkeerstekens=] vallen. 
3. In het [=Informatiemodel Verkeerstekens=] komen verkeerskundige attributen te staan die bij het verkeersbord "-als-instantie-van-verkeerskundig ontwerp" (gewenst/gepland verkeersbord) informatie geven over datum van ingang van het besluit, en de geldigheidsperiode van het verkeersbord.
4. In IMBOR komen voor beheer relevante attributen te staan die die bij het verkeersbord "-als-instantie-van-een-beheerobject" (fysiek / bestaand / geplaatst verkeersbord) informatie geven over de datum van aanleg, beheerder en overige informatie die gegenereerd wordt tijdens bouwen en beheren van de verkeersborden.
5. Of bovenstaande ordening overeind blijft staan moet blijken bi jde praktische toepassing; Als tweede mogelijkheid bestaat variant waarin het [=Informatiemodel Verkeerstekens=] op zichzelf kan functioneren en de concepten en attributen volledig zijn afgestemd op IMBOR.

<aside class="note" title="Besluitvorming door IMBOR beheerorganisatie">
Dit voorstel wordt samen met architectuur framework voor het [=Informatiemodel Verkeerstekens=] geagendeerd in de Stuurgroep IMBOR voor besluitvorming of dit informatiemodel in beheer wordt genomen binnen de beheerorganisatie IMBOR en of men inhoudelijk akkoord is met deze aansluiting.
</aside>

#### IMWV
[=IMWV=] staat voor Informatie Model Wegen en Verkeer. 

<figure>
<img src="./hoofdstukken/media/IMWV.jpg">
<figcaption>Visualisatie alle objecttypen die tot het IMWV behoren.</caption>
</figure>



<figure>
<img src="./hoofdstukken/media/domeinmodellen.png">
<figcaption>Domeinmodellen voor geografische informatie; IMGeo is gebaseerd op de [=NEN3610=].</caption>
</figure>


### Dataspecs INSPIRE 

De dataspecificaties van [=INSPIRE=], infrastructuur voor ruimtelijke informatie in Europa, zijn openbaar beschreven op [deze pagina](https://inspire.ec.europa.eu/Themes/115/2892) met UML-diagrammen en uitgebreide technische documentatie.

Voorbeelden van relevante specificaties:
* Het Wegennetwerk, uit het thema Transportnetwerken
* De FeatureType supertype _TransportProperty_ is relevant voor bijna alle wegkenmerken.
* Het [Linear reference system](https://inspire.ec.europa.eu/glossary/LinearReferenceSystem): "Reference system that identifies a location by reference to a segment of a linear spatial object and distance along that segment from a given point [ISO 19116 - modified]". 

**Raakvlaktype: Bron voor informatiemodel** Bron voor de definitie van wegkenmerken die vanuit verkeerskundig perspectief moeten worden opgenomen in het informatiemodel.

* Het Informatiemodel Verkeerstekens MOET waar relevant gebruik maken van de concepten en definities uit INSPIRE

### Data.vlaanderen.be

De Vlaamse overheid heeft binnen het [=OSLO=]-programma (Open standaarden voor linkende organisaties) en het project Lokale Besluiten als Gelinkte Open Data (LBLOD) verschillende vocabulaira en applicatieprofielen ontwikkeld die (deels) overlappen met de doelen van het [=Informatiemodel Verkeerstekens=].

Er wordt gebruik gemaakt van vocabularia die de herbruikbare concepten beschrijven. 
De applicatieprofielen stellen dan vereisten aan eigenschappen van en relaties tussen die concepten:

* [Infrastructuur](https://data.vlaanderen.be/ns/openbaardomein/infrastructuur)
* [Mobiliteit](https://data.vlaanderen.be/ns/mobiliteit)
* [Besluit](https://data.vlaanderen.be/ns/besluit)

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
De [=Vlaamse wegen OTL=], een uitwerking van [=OSLO=], is de objecttypenbibliotheek van alle weginfrastructuurobjecten van het Agentschap wegen en verkeer. 

### Datex II

[=DATEX II=] is de Europese standaard voor het vastleggen en uitwisselen van verkeersgegevens tussen verkeerscentrales, verkeersinformatiecentra en dienstverleners, op basis van XML schema's</dd>

https://www.datex2.eu/, Gepubliceerd als CEN 16157, deel 1 t/m 9. 
Deze norm is niet openbeschikbaar. Voor Nederlands is er door [=NDW=] een [Nederlands profiel](https://docs.ndw.nu/datex2/) opgesteld. Mogelijke relevante aspecten:

* Beborde omleiding
* Snelheidsbeperkingen (`SpeedManagement`)
* Milieuzones

**Raakvlaktype: Bron voor informatiemodel** De focus bij Datex ligt eerder op incidenten, [=dynamische verkeersborden=] en de huidige situatie, niet op de besluitvorming en [=statische verkeersborden=]. Toch moet worden gecontroleerd of onderdelen van het informatiemodel al beschreven zijn in deze norm, zodat hier op kan worden aangesloten.

* Het Informatiemodel Verkeerstekens MOET waar relevant gebruik maken van de concepten en definities uit DATEX II
