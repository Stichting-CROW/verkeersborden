# Raakvlak: Standaarden


## Informatiemodellering
In deze paragraaf staan de modelleertechische normen en richtlijnen waaraan het Informatiemodel Verkeerstekens dient te voldoen, en de wijze waarop technisch wordt aangesloten op andere informatiemodellen.

### NEN2660-2:2022
De [[NEN_2660_2_2022]] bevat drie belangrijke (hoofd)onderdelen:
<ol><li>Een praktisch toplevelmodel waarin genoeg semantiek aangegeven wordt om het [=Informatiemodel Verkeerstekens=], net als [=IMBOR=], in uit te drukken.</li>
<li>Extensies hierop voor de meest gebruikt toepassingen in de gebouwde omgeving. </li>
<li>Een taalbinding (en daarmee de keuze voor) de LinkedData W3C standaarden: SKOS [skos-primer], RDFS [rdf-schema], OWL [owl2-primer] en SHACL [shacl]. Het [=Informatiemodel Verkeerstekens=], net als [=IMBOR=], kan gebruik maken van deze twee keuzes en hierop zo goed mogelijk aan te sluiten. In onderstaande figuur is ook te zien waar de NEN2660-2 zich op focust. Het [=Informatiemodel Verkeerstekens=] neemt, net als [=IMBOR=], plaats in de "M1: Informatie model" laag.</li></ol>

<figure>
<img src="../images/NEN2660-2_scope.png">
<figcaption>NEN2660-2 scope in grijs grijze vlakken (bron: TNO) </caption>
</figure>

Het NEN2660-2 topmodel focust op de gebouwde wereld. In deze specifieke use case is alleen het verkeersbord echt fysiek. Toch zorgt modellering op deze manier voor een mate van standaardisatie van het informatiemodel en de andere informatiemodellen in de gebouwde omgeving.

* Het informatiemodel MOET worden opgesteld conform de [[NEN_2660_2_2022]].
* Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt.
* Het informatiemodel MOET van alle concepten een definitie geven of verwijzen naar een definitie in wetten of andere informatiemodellen.


### NEN 3610

De [[NEN_3610]] is de standaard voor het uitwisselen van geo-informatie, gebruikt Unified Modeling Language (UML) als formele taal voor het vastleggen van semantiek en beveelt Geography Markup Language (GML) aan als technisch uitwisselingsformat. NEN 3610 is hiermee nog niet geschikt om semantiek, gegevensdeling en uitwisseling middels Linked Data te realiseren. De NEN3610 is in 2021 herzien (t.o.v. 2011) en vormt de basis van de Samenhangende objecten registratie (SOR) die binnen het DiSGeo programma wordt opgetuigd.  <a href="https://geonovum.github.io/NEN3610-Linkeddata/#inleiding">bron: Geonovum</a>  </dd>

Binnen de NEN2660-2 is reeds een relatie tussen de NEN2660-2 en de NEN3610 aangegeven. Het gaat hier alleen om een afstemming tussen de begrippenkaders. 

* Het informatiemodel MOET waar mogelijk aangesloten op de [[NEN_3610]] Bij tegenstrijdigheden geldt de [[NEN_2660_2_2022]].

### MIM
Het Metamodel Informatie Modellering (MIM) is een gemeenschappelijk vertrekpunt voor het maken van informatiemodellen. 

* Het informatiemodel MOET waar mogelijk aangesloten op de [=MIM=]. Bij tegenstrijdigheden geldt de [[NEN_2660_2_2022]].


### Ontology alignment
Voor het op elkaar afstemmen van informatiemodellen, "ontology alignment" is nog geen formele specificatie beschikbaar. Tot hier op nationaal of internationaal niveau overeenstemming over is gaan we uit van de uitgangspunten die hierover beschreven staan in het [[whitepaper_ontology_alignment]]. Dit geldt alleen voor modellen op basis van de NEN 2660; voor een niet in linked data opgesteld model zoals worden gewoon concepten en attributen hard-copy overgenomen in het informatiemodel. 


## Domeinstandaarden
Er bestaan verschillende andere domeinstandaarden of informatiemodellen die wegkenmerken of verkeersborden beschrijven. Dat zijn raakvlakken of juist ijkingsbronnen om het [=Informatiemodel Verkeerstekens=] beter vorm te geven.

## Ontwerpfase

### NLCS
Met [=De Nederlandse CAD Standaard=] (NLCS) worden de objecten op een tekening herkend door alle partijen. Het doel van NLCS is het vermijden van dubbel werk, misverstanden en extra kosten met eenduidige tekeningen. Dit vergroot de efficiency, de kwaliteit, geeft een completer en eenduidig beeld en versnelt de tijdigheid waarmee wijzigingen worden gecommuniceerd. 

Circa 30% van de ontwerptekeningen bij verkeersbesluiten komen uit CAD-systemen. Tijdens het ontwerpproces wordt veel onderliggende digitale informatie gemaakt, maar deze informatie wordt niet optimaal ontsloten voor bijvoorbeeld publicatie van de [=verkeerskundige informatie=] in de gebruiksfase. NLCS kan verbeterd worden zodat de informatie uit het ontwerp handiger kan worden overgenomen naar de volgende fase, bijvoorbeeld voor het publiceren van de actuele verkeerskundige situatie op een weg.

* Het [=Informatiemodel Verkeerstekens=] MOET een definitie bevatten van elke [=Fysieke Plaat=] in de [=NLCS=], om een zo eenvoudig mogelijke alignment te kunnen maken tussen beide standaarden.

**Raakvlaktype: Gebruik informatiemodel**

[=DigiGO=] wil op verzoek van het Ministerie van Infrastructuur en Waterstaat de verkeersborden opnemen in de NLCS standaard zodra deze gepubliceerd worden in het [=Informatiemodel Verkeerstekens=]. Het betreft dan de kijkrichting, positie en het type verkeersbord met onderbord. Vervolgens wil DigiGO nadere afspraken maken met de leveranciers van CAD-systemen om digitale informatie over de verkeersborden beschikbaar te kunnen maken voor andere systemen, waaronder potentieel de [=verkeersbesluiten applicatie=] van [=KOOP=].

Bij NLCS wordt een ontology alignment gepubliceerd naar het [=Informatiemodel Verkeerstekens=].

### ASVV

[=CROW=] publiceert de [=ASVV=], de Aanbevelingen voor Verkeersvoorzieningen Binnen de Bebouwde Kom. De kennis uit de ASVV wordt gebruikt door verkeerskundig ontwerpers, adviseurs, wegbeheerders, beleidsmedewerkers en juristen. 

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
De [[NEN3381_2020]] "Wegmeubilair - Eisen voor permanente en tijdelijke verkeersborden" richt zich specifiek op de functionele en visuele eigenschappen van verkeersborden in Nederland.


De [[NEN3381_2020]] wordt beheerd door de [=normcommissie Verkeerstekens=]. 

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de norm zodat duidelijk is op welk type [=verkeersborden=] de eisen in deze norm betrekking hebben. 


### NEN_EN_12899_1_2007
De [[NEN_EN_12899_1_2007]] "Fixed, vertical road traffic signs - Part 1: Fixed signs" is een norm gericht op het bieden van algemene richtlijnen voor de constructie en prestatie van verkeersborden in diverse Europese landen.

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de norm zodat duidelijk is op welk type [=verkeersborden=] de eisen in deze norm betrekking hebben. 


### DIN_67520_2013_10
De [[DIN_67520_2013_10]] wordt beheerd door het Deutsches Institut für Normung e.V. (DIN), wat de Duitse nationale organisatie voor normalisatie is. Deze norm betreft de retroreflecterende eigenschappen van materialen die worden gebruikt in verkeerssignalisatie, zoals verkeersborden en wegmarkeringen. Deze norm specificeert de prestatie-eisen voor retroreflectie, wat essentieel is voor de zichtbaarheid van verkeersborden en -markeringen in het donker.

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de norm zodat duidelijk is op welk type [=verkeersborden=] de eisen in deze norm betrekking hebben. 

### CROW_96a_en_96b
De [[CROW_96a_en_96b]] Werk in Uitvoering geeft normen voor het ontwerpen en inrichten van tijdelijke verkeersmaatregelen op wegen binnen en buiten de bebouwde kom; autosnelwegen en niet autosnelwegen. Hiermee kun je het veiligheidsniveau acceptabel houden met passende verkeersmaatregelen en tijdelijke bewegwijzering.

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de norm zodat duidelijk is op welk type [=verkeersborden=] de eisen in deze norm betrekking hebben. 

## Beheer- en gebruiksfase

### CROW_279
De [[CROW_279]] bevat de basisgegevens voor voertuigen. Ook de menselijke kant is meegenomen, omdat voertuigen niet over de weg rijden zonder invloed van de mens als bestuurder.

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel

In het ideale geval worden de concepten en definites uit het [=Informatiemodel Verkeerstekens=] toegepast binnen de norm zodat duidelijk is op welk type [=verkeersborden=] de eisen in deze norm betrekking hebben. 


### IMGeo
[=IMGeo=] definieert een verkeersbord, als punt op de kaart. Welk type verkeersbord op de BGT kaart staat kan niet worden geregistreerd.
Wegbeheerders leveren actuele wegen aan voor de kaarten van de BGT op basis van het informatiemodel IMGEO. Aanvullend hierop voegen zij in hun areaalbeheerpakketten extra informatie toe aan deze wegvlakken, ten behoeve van beheer van de wegen. 

**Raakvlaktype: Buiten scope** Potententieel op elkaar aansluitende informatiemodellen



<figure>
<img src="../images/domeinmodellen.png">
<figcaption>Domeinmodellen voor geografische informatie; IMGeo is gebaseerd op de [[NEN_3610]].</caption>
</figure>

### IMBOR
<aside class="note" title="Informatiemodel, data en applicaties"><ol><li><b>Informatiemodel</b>: IMBOR is alleen een informatiemodel, géén bron van gegevens over bijvoorbeeld de locatie van in beheer zijnde verkeersborden. </li>
<li><b>Data</b>: IMBOR wordt gebruikt om informatie over de fysiek buiten geplaatste verkeersborden te kunnen opslaan. Elke wegbeheerder kan dit zelf organiseren in een eigen database of een database van een opdrachtnemer of softwareleverancier (publicatie bij de bron). Of men kan een landelijke afspraak maken om de in beheer zijnde verkeersborden ergens te publiceren, zoals via het [=NWB=] (centrale publicatie). Op dit moment zijn hiervoor geen afspraken. </li>
<li><b>Applicaties</b>: De met IMBOR gemodelleerde data over bijvoorbeeld wegvakken en verkeersborden kan worden gebruikt in applicaties. IMBOR is specifiek opgesteld voor de informatiebehoefte in areaalbeheerpakketten. Deze pakketten zijn gericht op het tactische en operationele beheer van de buitenruimte. Als een beheerder de verkeersborden in zijn/haar areaalbeheerapplicatie wil zien, kan de applicatie de bron waar de informatie wordt opgeslagen raadplegen.</li></ol>
</aside>

In [=IMBOR=] zijn 1331 soorten verkeerstekens opgenomen in de categorien [=bebakening=] en [=bewegwijzering=] en daarnaast ook [=wegmarkeringen=]. Bij al deze objecten zijn attributen opgenomen opgenomen en waardelijsten. Het gaat dan om de gegevens van borden die in de beheerfase nodig zijn, zoals bijvoorbeeld datum plaatsing, beheerder of gewenst kwaliteitsniveau van het object. De soorten verkeerstekens zijn bepaald met gebruikers, op basis van hun bestaande areaalgegevens. 

* Het Informatiemodel Verkeerstekens MOET aansluiten op IMBOR zodat wegbeheerders geen tegenstrijdigheden ervaren bij het gebruiken van de informatiemodellen.

**Raakvlaktype: Gezamenlijk beheer**

Het [=Informatiemodel Verkeerstekens=] MOET waar mogelijk samenhangen met IMBOR, en waar nodig een alignment krijgen met IMBOR, conform de architectuurprincipes voor samenhangende standaarden die ontwikkeld worden in het [=Programma CORE-BORius=]. Daarvoor is een besluit nodig waar welke informatie komt te staan. 




### Datex II

[=DATEX II=] is de Europese standaard voor het vastleggen en uitwisselen van verkeersgegevens tussen verkeerscentrales, verkeersinformatiecentra en dienstverleners, op basis van XML schema's</dd>

https://www.datex2.eu/ is inmiddels open gepubliceerd. Voor Nederlands is er door [=NDW=] een [Nederlands profiel](https://docs.ndw.nu/datex2/) opgesteld. 


* **Raakvlaktype: Bron voor informatiemodel**  Het Informatiemodel Verkeerstekens MOET gebruik maken van de concepten en definities uit DATEX II. Daarbij geldt wel de nuance, dat het model heel anders in elkaar zit dan een semantisch model, en er instabiliteit in de namespaces zit. Daarom worden namen van attributen waar mogelijk wel overgenomen, maar wordt nog niet gepoogd om een echte alignment te maken of om alles op elkaar af te stemmen. 


### ISO 14823-1
NEN-EN-ISO 14823-1 specificeert een grafisch gegevenswoordenboek (GDD), een systeem van gestandaardiseerde codes voor bestaande verkeersborden en pictogrammen die worden gebruikt om verkeers- en reizigersinformatie (TTI) te verstrekken. Het coderingssysteem kan worden toegepast bij het opstellen van berichten binnen intelligente transportsystemen (ITS).
Het coderingssysteem komt neer op een cijfercode waarmee de betekenis van het bord wordt aangeduid, een soort vertaaltabel waarmee soorten verkeersborden worden gecodeerd, voorbeeld: 
* Nummer: 148
* Naam: Warning of roundabout (Clockwise)
* Definitie: Warning of a clockwise roundabout ahead.



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


### Verkeersbordenoverzicht.nl
Het https://verkeersbordenoverzicht.nl/ is een de facto standaard in Nederland, waarbij een individuele wegbeheerder de meest voorkomende [=fysieke platen=] publiceert en daarbij, soms foutief, de bestelcodes van de verkeersbordenfabrikanten weergeeft. Veel wegbeheerders kijken op deze site om snel een code op te zoeken. 



### Bordenboekje VNVF
De [=VNVF=] publiceerde tot nu toe een bordenboekje met bestelcodes van verkeersborden. VNVF is bezig met het maken van een nieuwe, logische bestelcodering voor het samenstellen van de informatie die op een [=fysieke plaat=] komt. 

**Raakvlaktype: Samenhang met informatiemodel** De bestelcodering zou logisch moeten kunnen worden opgesteld uit odnerdelen van het informatiemodel. 

### ISO 14832-1

De [[NEN_EN_ISO_14823_1]] norm beschrijft een grafisch gegevenswoordenboek (GDD) met gestandaardiseerde codes voor verkeersborden en pictogrammen die gebruikt worden om verkeers- en reizigersinformatie (TTI) te communiceren. Het systeem zorgt ervoor dat deze beelden consistent en begrijpelijk zijn voor weggebruikers wereldwijd.

De afbeeldingen worden gecodeerd en kunnen worden gebruikt in intelligente transportsystemen (ITS), zoals digitale verkeersborden of apps, om real-time informatie te verstrekken. De codering maakt het mogelijk om verkeersborden en pictogrammen eenvoudig te integreren in verschillende digitale systemen en zorgt voor uniforme communicatie van verkeersinformatie.