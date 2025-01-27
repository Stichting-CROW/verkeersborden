# Raakvlak: Databronnen

### NWB Wegennetwerk


Het NWB wordt actueel gehouden met ingewonnen data en (in mindere mate) door aanlevering van gegevens door wegbeheerders en geeft de gebruikstoestand weer van wegen.

**Raakvlaktype: Aansluitend informatiemodel**
Het NWB gebruikt een eigen informatiemodel, wat aansluit op de eigen database. Om het [=Informatiemodel Verkeerstekens=] heeft als aanname dat informatie wordt toegevoegd aan de [NWB-wegvakken] met referentie aan het wegvak-id, de richting van het wegvak en relatieve posities in de lengre van het wegvak. De wegvakken zelf worden niet opgenomen in het Informatiemodel Verkeerstekens. 

<figure>
<img src="../images/nwb.png">
<figcaption>Het [=Verkeerskundig wegennetwerk=]: visualisatie van de informatie in het [=NWB=].</caption>
</figure>


Daarbij gelden momenteel de volgende regels:
* Wanneer een weg uit één [=rijbaan=] bestaat, ook als die in beide richtingen bereden kan worden, is deze in het NWB opgenomen als één [=NWB-Wegvak=]. 
* Wanneer een weg meerdere [=rijbanen=] heeft, wat vooral het geval is bij Rijkswegen, worden deze rijbanen als aparte [=NWB-Wegvakken=] in het bestand verwerkt. 
* Het Nationaal Wegen Bestand is nog niet tot op het niveau van een [=rijstrook=] gedifferentieerd; een rijbaan met meerdere rijstroken is als één wegvak opgenomen in het NWB. Op het rijkswegennet is het aantal rijstroken wel bekend.


## Verkeersbordendata


Het NDW publiceert de verkeersborden in Nederland in de [=verkeersbordendata=]. Het bestand is op twee bronnen gebaseerd: 

1. Start-bestand met de op basis van camera's ingewonnen verkeersborden.
2. Mutaties die door de wegbeheerder worden ingevoerd. 

De verkeersborden hebben, waar betrouwbaar mogelijk, een toewijzing aan een [=NWB-wegvak] en ze hebben allemaal een locatie (x,y).</dd>

**Raakvlaktype: Potentieel gebruik informatiemodel**

De in beheer/gebruik zijnde verkeersborden zouden in de toekomst kunnen worden uitgedrukt in termen van het informatiemodel. Dit vraagt om een ontwikkeltraject samen met de wegbeheerders, die bronhouders zijn voor deze informatie.


## Data Top 15


De Data Top 15, met onder andere maximumsnelheden, verkeersborden en andere datasets, verwijst weer door naar andere programma's waarbinnen deze data wordt gepubliceerd, en naar data.overheid.nl waar individuele beheerorganisaties waaronder Rijkswaterstaat eigen data publiceren. In deze bronnen zitten dubbelingen met de gegevens die in de landelijke netwerkregistratie zullen worden opgenomen.</dd>

**Raakvlaktype: Potentieel gebruik informatiemodel**



## Basisregistraties

### BGT
Verkeersborden in de [=BGT=] zijn opgenomen als 2D punt van het type "bord", op basis van het informatiemodel [=IMGeo=].</dd>

**Raakvlaktype: Aansluitend informatiemodel**


### WKD

De [=WKD=] bevat de gegevens over wegkenmerken op het nederlandse wegennet.

**Raakvlaktype: Potentieel gebruik informatiemodel**

### WEGGEG

De [=WEGGEG=] bevat gegevens over wegkenmerken op het Nederlandse rijkswegennet. 

**Raakvlaktype: Potentieel gebruik informatiemodel**



### [=Zweedse netwerkregistratie=]
Zweedse variant van [=NWB=].

**Raakvlaktype: Buiten scope** Potententieel raakvlak van de informatiemodellen bij internationale standaardisatie.


