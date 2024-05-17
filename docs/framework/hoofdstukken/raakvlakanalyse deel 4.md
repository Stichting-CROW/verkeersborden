# Raakvlak: Databronnen

## NWB(+)

### NWB Wegennetwerk


Het NWB wordt actueel gehouden met ingewonnen data en (in mindere mate) door aanlevering van gegevens door wegbeheerders en geeft de gebruikstoestand weer van wegen.

**Raakvlaktype: Gebruik informatiemodel**
Het NWB gebruikt op dit moment een eigen informatiemodel, wat aansluit op de eigen database. Om het [=Informatiemodel Verkeerstekens=] toe te kunnen passen moet onderzocht worden hoe dit aansluit op de historische gegevens en wat er nodig is om de informatie in het NWB zoekbaar en vindbaar te maken op basis van het datamodel. Op dit moment wordt het NWB door [=SMART Mobility=] systemen niet live bevraagd, maar wordt een kopie verwerkt in de systemen.

<figure>
<img src="./hoofdstukken/media/nwb.png">
<figcaption>Het [=Verkeerskundig wegennetwerk=]: visualisatie van de informatie in het [=NWB+=].</caption>
</figure>


Daarbij gelden momenteel de volgende regels:
* Wanneer een weg uit één [=rijbaan=] bestaat, ook als die in beide richtingen bereden kan worden, is deze in het NWB opgenomen als één [=NWB-Wegvak=]. 
* Wanneer een weg meerdere [=rijbanen=] heeft, wat vooral het geval is bij Rijkswegen, worden deze rijbanan als aparte [=NWB-Wegvakken=] in het bestand verwerkt. 
* Het Nationaal Wegen Bestand is og niet tot op het niveau van een [=rijstrook=] gedifferentieerd; een rijbaan met meerdere rijstroken is als één wegvak opgenomen in het NWB. Op het hoofdwegennet wordt wel het aantal rijstroken gedefinieerd als attribuut van het wegvak.


## Verkeersbordendata


Het NDW publiceert de verkeersborden in Nederland in de [=verkeersbordendata=]. Het bestand is op twee bronnen gebaseerd: 

1. Start-bestand met de op basis van camera's ingewonnen verkeersborden.
2. Mutaties die door de wegbeheerder worden ingevoerd. 

De verkeersborden hebben, waar betrouwbaar mogelijk, een toewijzing aan een [=NWB-wegvak] en ze hebben allemaal een locatie (x,y).</dd>

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel.

Dit betreft een representatie van de verkeersborden in een andere levensfase, namelijk de in beheer/gebruik zijnde verkeersborden. In het ideale geval wordt vanuit deze data een link gelegd met het type verkeersbord dat wordt gedefinieerd in het [=Informatiemodel Verkeerstekens=].



## Data Top 15


De Data Top 15, met onder andere maximumsnelheden, verkeersborden en andere datasets, verwijst weer door naar andere programma's waarbinnen deze data wordt gepubliceerd, en naar data.overheid.nl waar individuele beheerorganisaties waaronder Rijkswaterstaat eigen data publiceren. In deze bronnen zitten dubbelingen met de gegevens die in de landelijke netwerkregistratie zullen worden opgenomen.</dd>

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel.


## DMI-ecosysteem

<Het Dutch Metropolitan Innovations [=DMI-ecosysteem=] voorziet de domeinen van mobiliteit, openbare ruimte en woningbouw van nieuwe instrumenten vanuit de digitale wereld. 

**Raakvlaktype: Buiten scope** Potentieel gebruik informatiemodel.


## Basisregistraties

### BGT
Verkeersborden in de [=BGT=] zijn opgenomen als 2D punt van het type "bord", op basis van het informatiemodel [=IMGeo=].</dd>

**Raakvlaktype: Buiten scope** Potententieel raakvlak via informatiemodellen


### WKD

De [=WKD=] bevat de gegevens over wegkenmerken op het nederlandse wegennet. Daar waar wegkenmerken op het rijkswegennet bekend zijn ([=WEGGEG=]) komen ze ook terug in WKD.

**Raakvlaktype: Buiten scope** Potententieel raakvlak via informatiemodellen

### WEGGEG

De [=WEGGEG=] bevat gegevens over wegkenmerken op het Nederlandse hoofdwegennet. 

**Raakvlaktype: Buiten scope** Potententieel raakvlak via informatiemodellen


### SOR
De [=Samenhangende Objecten Registratie=] is een ontwikkeling binnen het [=DisGeo=] programma: een nog te ontwikkelen uniforme registratie met basisgegevens over objecten in de fysieke werkelijkheid. 

**Raakvlaktype: Buiten scope** Potententieel raakvlak van de informatiemodellen

De ontwikkeling van de samenhangende objectenregistratie is een samenwerkingsverband van onder meer gemeenten, provincies, waterschappen, Rijkswaterstaat, Kadaster en de Waarderingskamer. Het traject maakt onderdeel uit van het regieprogramma Doorontwikkeling in Samenhang van de Geo-basisregistraties (DiS Geo) van het ministerie van BZK en heeft een relatie met het programma Centrale netwerkregistratie van het ministerie van I&W. Kennispartners zijn onder meer het Gemeentelijk Geo-Beraad (GGB), Geonovum en CROW.


### [=Zweedse netwerkregistratie=]
Zweedse variant van [=NWB+=].

**Raakvlaktype: Buiten scope** Potententieel raakvlak van de informatiemodellen bij internationale standaardisatie.


