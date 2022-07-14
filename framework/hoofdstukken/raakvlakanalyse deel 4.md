# Raakvlak: Databronnen

## NWB(+)

<dfn data-lt="Nationaal Wegen Bestand|NWB">NWB</dfn>
<dd> Nationaal Wegen Bestand. Een open geografisch databestand van een wegennetwerk bestaande uit lijnen ([=NWB-wegvakken=]) en knopen ([=NWB-juncties=]) met alle wegen in Nederland die in beheer zijn bij het Rijk, provincies, gemeenten en waterschappen of beheerorganisaties zoals zoals Schiphol en Havenbedrijf Rotterdam. Ook losliggende voet- en fietspaden en onverharde wegen zijn in het NWB-Wegen opgenomen. Het NWB is gedeeld eigendom van alle wegbeheerders en gebruikers van wegendata in Nederland. Het Nationaal Wegenbestand wordt op vrijwillige basis bijgehouden door wegbeheerders, gemeenten en provincies. Zie ook <a href="https://nationaalwegenbestand.nl/wat-het-nwb">deze website</a></dd>

<dt><dfn data-lt="NWB+|Nationaal Wegen Bestand+">NWB+</dfn>
<dd>Een verbeterde versie van het nationaal wegen bestand, zie ook <a href="https://nationaalwegenbestand.nl/wat-het-nwb">deze website</a></dd>

Het NWB wordt actueel gehouden met ingewonnen data en (in mindere mate) door aanlevering van gegevens door wegbeheerders en geeft de gebruikstoestand weer van wegen.

**Raakvlaktype: Gebruik informatiemodel**
Het NWB gebruikt op dit moment een eigen informatiemodel, wat aansluit op de eigen database. Om het [=Informatiemodel Verkeerstekens=] toe te kunnen passen moet onderzocht worden hoe dit aansluit op de historische gegevens en wat er nodig is om de informatie in het NWB zoekbaar en vindbaar te maken op basis van het datamodel. Op dit moment wordt het NWB door [=SMART Mobility=] systemen niet live bevraagd, maar wordt een kopie verwerkt in de systemen.

<figure>
<img src="./hoofdstukken/media/nwb.png">
<figcaption>Het Wegennetwerk: visualisatie van de informatie in het NWB+.</caption>
</figure>


### NWB-Wegvak

<dfn data-lt="NWB-Wegvak|NWB-wegvakken">NWB-Wegvak</dfn>
<dd>Een wegvak in het Nationaal Wegen Bestand (NWB) is een deel van een weg, dat zich tussen twee punten (juncties) bevindt. Road element conform de Europese standaard voor wegeninformatie (Geografic Data Files). Een wegvak in het NWB is een lijn met x- en y coördinaten. Elk wegvak loopt van een begin- naar een eindjunctie en kent een positieve en een negatieve richting. Welke van beide juncties als beginjunctie van het wegvak wordt benoemd, is volstrekt willekeurig. Verandering van een eigenschap van een wegvak resulteert in splitsing in twee of meerdere wegvakken. Juncties dus splitsingen van wegvakken komt voor bij gemeentegrenzen, provinciegrenzen, beheergrenzen en bij bepaalde specifieke kenmerkwijzigingen. </dd>

Daarbij gelden momenteel de volgende regels:
* Wanneer een weg uit één [=rijbaan=] bestaat, ook als die in beide richtingen bereden kan worden, is deze in het NWB opgenomen als één wegvak. 
* Wanneer een weg meerdere [=rijbanen=] heeft, wat vooral het geval is bij Rijkswegen, worden deze rijbanan als aparte wegvakken in het bestand verwerkt. 
* Het Nationaal Wegen Bestand is mog niet tot op het niveau van een [=rijstrook=] gedifferentieerd; een rijbaan met meerdere rijstroken is als één wegvak opgenomen in het NWB. Op het hoofdwegennet wordt wel het aantal rijstroken gedefinieerd als attribuut van het wegvak.

### NWB-Junctie

<dfn data-lt="NWB-Junctie|NWB-juncties">NWB-Junctie</dfn>
<dd>het begin- of eindpunt van één of meer wegvakken in het Nationaal Wegen Bestand (NWB). In het NWB hebben juncties aan de hand van X- en Y-coördinaten een locatie in het digitale netwerk gekregen.</dd>




## Verkeersbordendata

<dfn data-lt="Verkeersbordendata">Verkeersbordendata</dfn>
<dd>Het NDW publiceert de <a href="https://docs.ndw.nu/api/trafficsigns/nl/index.html">actueel waargenomen verkeersborden</a> in Nederland. Het bestand is op twee bronnen gebaseerd: 

1. Mutaties die door de jaarlijkse schouwronde met auto's/camera's worden gesignaleerd. Leverancier: [=HR-Groep=]
2. Mutaties die door de wegbeheerder worden ingevoerd. Deze bron is vanzelf actueler, maar wordt minder toegepast. 

De verkeersborden hebben, waar betrouwbaar mogelijk, een toewijzing aan een [=NWB-wegvak] en ze hebben allemaal een locatie (x,y).</dd>

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel.

Dit betreft een representatie van de verkeersborden in een andere levensfase, namelijk de in beheer/gebruik zijnde verkeersborden. In het ideale geval wordt vanuit deze data een link gelegd met het type verkeersbord dat wordt gedefinieerd in het [=Informatiemodel Verkeerstekens=].



## Data Top 15

<dfn data-lt="Data Top 15">Data Top 15</dfn>
<dd>In het landelijke programma 'Digitalisering Overheden' werkt het Ministerie van Infrastructuur en Waterstaat met vijf landsdelen samen om er voor te zorgen dat in 2023 alle wegbeheerders 'digitaal capabel in mobiliteit' zijn. Hiervoor is een Data Top 15 opgesteld, met onder andere maximumsnelheden, verkeersborden en andere datasets. https://www.datapedia.nl/ </dd>

De Data Top 15 verwijst weer door naar andere programma's waarbinnen deze data wordt gepubliceerd, en naar data.overheid.nl waar individuele beheerorganisaties waaronder Rijkswaterstaat eigen data publiceren. In deze bronnen zitten dubbelingen met de gegevens die in de landelijke netwerkregistratie zullen worden opgenomen.</dd>

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel.


## NTM
<dt><dfn data-lt="Nationaal Toegangspunt Mobiliteitsdata|NTM">NTM</dfn>
<dd>Toekomstbeeld waarbij er één centraal loket is waar alle mobiliteitsdata vindbaar en uitwisselbaar is, waar je terecht kunt met vragen over mobiliteitsdata en waar je je als gebruiker van deze data geen zorgen hoeft te maken over de kwaliteit. Dat is het Nationaal Toegangspunt Mobiliteitsdata. Het NTM wordt opgezet door het Nationaal Dataportaal Wegverkeer (NDW), in samenwerking met o.a. het samenwerkingsverband van decentrale ov-autoriteiten (DOVA), CBS en de RDW (de organisatie die de registratie van gemotoriseerde voertuigen en rijbewijzen in Nederland verzorgt).</dd>

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel.


## Basisregistraties

### BGT
<dfn data-lt="BGT|Basisregistratie Grootschalige Topografie">BGT</dfn>
<dd>Een digitale kaart van Nederland waarop gebouwen, wegen, waterlopen, terreinen en spoorlijnen eenduidig zijn vastgelegd. De kaart is op 20 centimeter nauwkeurig. De informatie wordt aangeleverd door de beheerders van de objecten. Wegen zijn hierin opgenomen als 2D vlakobject. Verkeersborden zijn hierin opgenomen als 2D punt van het type "bord", op basis van het informatiemodel [=IMGeo=].</dd>

**Raakvlaktype: Buiten scope** Potententieel raakvlak via informatiemodellen

### BRT

<dfn data-lt="BRT|Basisregistratie Topografie">BRT</dfn>
<dd>Digitale topografische bestanden op verschillende schaalniveaus op basis van inmetingen uitgevoerd door het Kadaster. Zowel de opgemaakte kaarten als de  objectgerichte bestanden zijn beschikbaar als open data.  </dd>

**Raakvlaktype: Buiten scope** Potententieel raakvlak via informatiemodellen

### BAG

<dfn data-lt="BAG|Basisregistratie Adressen en Gebouwen">BAG</dfn>
<dd>Landelijke registratie met gemeentelijke basisgegevens van alle adressen en gebouwen in een gemeente </dd>

**Raakvlaktype: Buiten scope** Potententieel raakvlak via informatiemodellen

### WKD

<dfn data-lt="WKD|Wegkenmerken Database">WKD</dfn>
<dd>De gegevens over wegkenmerken op het nederlandse wegennet. De bestanden zijn beschikbaar als een landelijke webservices via het open data portaal van Rijkswaterstaat. Daar waar de wegkenmerken op het rijkswegennet bekend zijn ([=WEGGEG=]) komen ze ook terug in WKD.
WKD is volop in ontwikkeling en kent medio 2022 de volgende wegkenmerken: maximumsnelheid, wegcategorie, komgrenzen, wegbreedte en breedtebeperkingen, verkeerstype, aanwezigheid inritten en parkeerpunten op 80 km/h wegen aanwezigheid parkeervlakken langs overige wegen alsmede diverse informatie mbt begroeiing en bomen langs de 80km/h wegen.</dd>


**Raakvlaktype: Buiten scope** Potententieel raakvlak via informatiemodellen

### WEGGEG

<dfn data-lt="WEGGEG|Weggegevens">WEGGEG</dfn>
<dd>De gegevens over wegkenmerken op het Nederlandse hoofdwegennet. De bestanden zijn beschikbaar als een landelijke webservices via het open data portaal van Rijkswaterstaat. </dd>

**Raakvlaktype: Buiten scope** Potententieel raakvlak via informatiemodellen


### SOR
<dfn data-lt="Samenhangende Objectenregistratie|SOR">SOR</dfn>
<dd>Een programma gecoördineerd door de [=Vereniging Nederlandse Gemeenten=] waarbinnen gewerkt wordt aan een Samenhangende Objecten Registratie: een nog te ontwikkelen uniforme registratie met basisgegevens over objecten in de fysieke werkelijkheid. Daaronder worden verstaan objecten die in het terrein zichtbaar zijn, zoals spoorlijnen, wegen, water, gebouwen en bomen. Ook worden basisgegevens over niet-zichtbare objecten opgenomen, zoals bestuurlijke gebieden, woonplaatsen en openbare ruimten. </dd>

**Raakvlaktype: Buiten scope** Potententieel raakvlak van de informatiemodellen

De ontwikkeling van de samenhangende objectenregistratie is een samenwerkingsverband van onder meer gemeenten, provincies, waterschappen, Rijkswaterstaat, Kadaster en de Waarderingskamer. Het traject maakt onderdeel uit van het regieprogramma Doorontwikkeling in Samenhang van de Geo-basisregistraties (DiS Geo) van het ministerie van BZK en heeft een relatie met het programma Centrale netwerkregistratie van het ministerie van I&W. Kennispartners zijn onder meer het Gemeentelijk Geo-Beraad (GGB), Geonovum en CROW.




