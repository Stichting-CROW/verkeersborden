# Samenstelling informatiemodel

## Inleiding
In dit hoofdstuk staan de onderdelen beschreven waaruit het informatiemodel zal bestaan. 

<figure>
<img src="./hoofdstukken/media/SamenstellingInformatiemodel.jpg">
<figcaption>De samenstelling van het informatiemodel</caption>
</figure>



## Beheer

<figure>
<img src="./hoofdstukken/media/beheerinformatiemodel.PNG">
<figcaption>Het beheer van het informatiemodel</caption>
</figure>


### Beheerplatform

Het Beheerplatform is nodig om het informatiemodel te kunnen beheren, op zodanige wijze dat verschillen tussen versies goed beheerst en gepubliceerd kunnen worden. In de ontwikkelingsfase moet een beheerplatform hiertoe worden ingericht. Dit zorgt ervoor dat een inhoudelijk deskundige op het gebied van verkeerskunde de inhoudelijke uitwerking van het informatiemodel kan opstellen en beheren. 


### Wijzigingsbeheer

Een omgeving voor wijzigingsbeheer moet worden in gericht om feedback te kunnen ophalen van gebruikers en deze beheerst te verwerken tot wijzigingen. Dat moet ervoor zorgen dat afwegingen in het beheer van het informatiemodel transparant zijn en dat de reden voor wijzigingen achterhaald kan worden in wijzigingsdocumentatie. 
Gebruikers kunnen op de [Github_Verkeersborden](https://github.com/Stichting-CROW/verkeersborden) Issues aandragen voor bug/features/aanbevelingen op het informatiemodel en de documentatie.
Bij de concept-release van documentatie in ReSpec wordt de mogelijkheid geboden om deze te reviewen met annotaties in de kantlijn. 


### Technische documentatie

De technische documentatie (net zoals voorliggend document geschreven in ReSpec) bevat de uitleg (["Explanation"](https://documentation.divio.com/explanation/)) van het informatiemodel op het gebied van:

* De modelopbouw;
* De hiërarchie in de begrippen;
* Modelleringsconstructies;
* Distributievormen;
* Gebruikte referentiemodellen / standaarden;
* Toepassing van de MIM;
* Relatie met [geometrische objectrepresentaties], waaronder de [=NWB-wegvakken=] en [=NWB-juncties=]
* Licenties.

De technische documentatie geeft de context weer; geeft alternatieven weer en onderbouwingen van keuzes. Er zitten geen gebruikersinstructies bij, dat is een ander soort documentatie.

Per verkeersregel wordt het informatiemodel gedocumenteerd op de wijze van [voorbeeld: Maximale snelheid](https://docs.crow.nl/verkeersborden/maximalesnelheid/), met daaraan toegevoegd:
* Een voorbeeld-implementatie (dataset)
* Controlemechanismes (kwaliteitstoetsen dataset)
* Zoekmechanismes (verkeerskundige informatie zoeken bij een wegvak)

### Code documentatie

De Code Documentatie zorgt ervoor dat de codes van het informatiemodel, datasets en queries begrepen kan worden (["Reference guides"](https://documentation.divio.com/reference/)). Dit wordt gedaan door toelichtingen op te schrijven in dezelfdestructuur als de code. 
Dit moet consistent zijn en beschrijvend, een letterlijke uitleg van wat een deel van de code bewerkstelligt. 
Dit vraagt een eigen beheeromgeving / documentatietechniek. 

## Samenwerking

<figure>
<img src="./hoofdstukken/media/samenwerking informatiemodel.PNG">
<figcaption>De samenwerking rondom het informatiemodel</caption>
</figure>


### Beheerplan

Het strategische beheer en de beoogde beheerorganisatie zijn beschreven in [Hoofdstuk 11](https://docs.crow.nl/verkeersborden/framework/#uitgangspunten-beheer). Voor het onderdeel samenwerking wordt een beheerplan opgesteld (net zoals voorliggend document geschreven in ReSpec) en uitgevoerd dat BOMOS verder uitwerkt op strategisch, tactisch en operationeel gebied.


### (Inter)nationale samenwerking

De samenwerking en internationale aansluiting zijn beschreven in [Hoofdstuk 11](https://docs.crow.nl/verkeersborden/framework/#uitgangspunten-beheer). 


## Publicatie

<figure>
<img src="./hoofdstukken/media/publicatieinformatiemodel.PNG">
<figcaption>De publicatie van het informatiemodel</caption>
</figure>

### Website

Om toegankelijk te zijn voor niet-technische gebruikers, samenwerkpartners en stakeholders daaromheen, wordt een webpagina ingericht met informatie over het doel en de samenwerkingsverbanden rondom het informatiemodel.

### Publicatieplatform ontologie


#### Sparql-endpoint

Voor rechtstreeks vanuit systemen of het internet zoeken in het informatiemodel wordt deze gepubliceerd op een SPARQL-endpoint. 

<dfn>SPARQL</dfn>
<dd> SPARQL (S PARQL P rotocol A nd R DF Q uery L anguage) is een RDF-zoektaal ( querytaal) die gebruikt wordt om RDF-gebaseerde data te bevragen door middel van zoekopdrachten (queries). Met deze zoektaal is het mogelijk om informatie op te vragen voor applicaties op het semantisch web. (<aheref="https://nl.wikipedia.org/wiki/SPARQL">Bron:Wikipedia</a>))</dd>


#### Downloads
Voor het verkennen van het informatiemodel en sommige toepassingen kan het handig zijn om de code rechtstreeks te kunnen inzien en downloaden, daarom wordt het informatiemodel samen met de andere code op de Github_Verkeersborden omgeving geplaatst in het Turtle formaat:

> "Terse RDF Triple Language", een bestandsformaat (Informatie technologie) ([Bron:Wikipedia](https://nl.wikipedia.org/wiki/Turtle_(syntaxis))). Turtle is een serialisatieformaat voor het Resource Description Framework (RDF), een universele taal ("Linked Data") voor het weergeven van informatie op het Web.


### Viewer
Voor eindgebruikers wordt een eenvoudige viewer omgeving ingericht waarin door de concepten en relaties in het informatiemodel heengebladerd kan worden, naar voorbeeld van de [IMBOR viewer](https://docs.crow.nl/onto-verkenner/imbor/#/view).


### Publicatieplatform verkeersborden

De visualisaties van de verkeersborden en - onderborden worden dereferencable ("te vinden met een link") en downloadbaar gepubliceerd.


### Github

Voor technische gebruikers van het informatiemodel wordt Github ingericht als bron voor alle code en documentatie. Dit is ook de plek waar feedback kan worden geleverd in issues. 

## Gebruikersondersteuning databeheerders

<figure>
<img src="./hoofdstukken/media/gebruikersondersteuningdatabeheer.PNG">
<figcaption>De ondersteuning van het gebruik van het informatiemodel voor beheerders van [=verkeerskundige informatie=].</caption>
</figure>


### Gids databeheer
In de gids voor databeheer wordt het samenstellen en beheren van [=verkeerskundige informatie=] stapsgewijs beschreven, met als doel de toepassing te ondersteunen (["How-to guides"](https://documentation.divio.com/how-to-guides/)). De focus ligt op het resultaat en het oplossen van sepcifieke problemen in de kwaliteit van de [=verkeerskundige informatie=]. Concepten worden niet toegelicht, dit staat al in de technische documentatie. Deze documentatie is beschreven voor beginners.

Om op eenvoudige wijze [=verkeerskundige informatie=] te kunnen samenstellen en beheren, is een applicatie nodig die het geheel beter visueel ondersteunt. Dat is buiten de scolpe van het informatiemodel. Daarom is deze gids geschikt voor databeheerders met technische kennis op het gebied van code lezen en schrijven, en voor softwareontwikkelaars. 

### Leermaterialen
In de leermaterialen wordt het samenstellen en beheren van [=verkeerskundige informatie=] op educatief verantwoorde wijze uitgelegd, met als leerdoel het begrijpen en kunnen uitleggen hoe je [=verkeerskundige informatie=] samenstelt (["Tutorials"](https://documentation.divio.com/tutorials/)). De gebruiker wordt ondersteund bij het leren door oefeningen. Doel is om een databeheerder met technische kennis, of een softwareontwikkelaar, op weg te helpen. 


### Voorbeeld-implementatie
De voorbeeld-implementatie bestaat uit een dataset waarin het informatiemodel is toegepast op een (fictief) wegennetwerk, met bijbehorende kaartvisualisaties van de wegen, zones, routes en fysiek aanwezige verkeersborden. 

In de voorbeeld dataset zitten gebreken (niet actueel / betrouwbaar / compleet), die met de controlemeachnismes gevonden kunnen worden. 

### Controlemechanismes
De controlemechanismes voor de verkeerskundige informatie bestaan uit [=SPARQL=] queries waarmee onderzocht kan worden of de [=verkeerskundige informatie=] actueel, betrouwbaar en compleet is. Dit gaat om het eruit filteren van fouten, die door een systeem op logische wijze eruit gefilterd kunnen worden. Dit neemt niet weg, dat altijd een menselijke controle moet worden gedaan omdat een fout, zoals het volledig niet opnemen van een verkeersregel, niet ontdekt kan worden door een systeem, maar wel door de wegbeheerder die een gebied kent. Voorbeelden van fouten die er wel uitgehaald kunnen worden:

* Een eindpunt is gegeven, dat niet binnen een wegvak valt;
* Een wegvak waaraan wordt gerefereerd heeft geen "RVV 1990-wegtype" gekregen (autosnelweg/autoweg/binnen de kom / buiten de kom);
* Een route is niet aaneensluitend gedefinieerd (er mist een wegvak)
* Bij een verkeersregel is geen fysiek bord aangegeven, terwijl dat wettelijk gezien wel aanwezig moet zijn. 

Om de controlemechanismes eenvoudig te kunnen gebruiken als wegbeheerder is een applicatie nodig, die visueel ondersteunt bij het controleren van de [=verkeerskundige informatie=]. Dit is buiten scope van het informatiemodel. De geleverde code kan wel gebruikt worden bij het inrichten van een dergelijke applicatie.

### Helpdesk
Voor eindgebruikers van het informatiemodel (databeheerders en gebruikers) wordt een helpdesk ingericht bij CROW. Omdat wegebeheerders ook via [=KOOP=] en het [=NWB=] ondersteund worden bij publicatie van de verkeerskundige informatie is de verwachte omvang van het aantal hulpvragen beperkt.




















## Gebruikersondersteuning datagebruikers

<figure>
<img src="./hoofdstukken/media/gebruikersondersteuningdatagebruik.PNG">
<figcaption>De ondersteuning van het gebruik van het informatiemodel voor gebruikers van [=verkeerskundige informatie=], de SMART Mobility fabrikanten.</caption>
</figure>


### Gids datagebruik
In de gids voor datagebruyik wordt het gebruiken van [=verkeerskundige informatie=] in SMART Mobility stapsgewijs beschreven, met als doel het gebruik te ondersteunen (["How-to guides"](https://documentation.divio.com/how-to-guides/)). De focus ligt op het resultaat en het oplossen van specifieke problemen in het gebruiken van [=verkeerskundige informatie=]. Concepten worden niet toegelicht, dit staat al in de technische documentatie. Deze documentatie is beschreven voor beginners.

Om [=verkeerskundige informatie=] te kunnen gebruiken tijdens het rijden, is een SMART Mobility applicatie nodig. Dat is buiten de scolpe van het informatiemodel. Daarom is deze gids geschikt voor softwareontwikkelaars van SMART Mobility systemen.


### Leermaterialen
In de leermaterialen wordt het gebruiken van [=verkeerskundige informatie=] op educatief verantwoorde wijze uitgelegd, met als leerdoel het begrijpen en kunnen uitleggen hoe je [=verkeerskundige informatie=] gebruikt (["Tutorials"](https://documentation.divio.com/tutorials/)). De gebruiker wordt ondersteund bij het leren door oefeningen. Doel is om een een softwareontwikkelaar op weg te helpen. 

### Zoekmechanismes
De zoekmechanismes bestaan uit [=SPARQL=] queries waarmee in [=verkeerskundige informatie=] gezocht kan worden naar de op een wegvak van toepassing zijnde verkeersregels. De geleverde code kan gebruikt worden bij het inrichten van SMART Mobility systemen.


## Sluit de feedback loop

Het informatiemodel en de overige onderdelen worden pas volwassen door toepassing, waardoor de toepasbaarheid verbeterd wordt en er een werkend ecosysteem ontstaat van informatiemodel, informatie en applicaties. 