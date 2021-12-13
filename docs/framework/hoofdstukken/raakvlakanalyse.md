# Raakvlakanalyse


De raakvlakanalyse verkent welke informatiemodellen en informatiebronnen er zijn voor:

1. Het functionele wegennetwerk en de fysieke ligging van de wegen.
2. De "digitale representatie" van verkeersborden en wegmarkeringen in andere use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.


## Ontwerpfase

### KPVV

Onder de vlag van CROW wordt het Kennisprogramma Verkeer en Vervoer (KpVV) uitgevoerd. Doel van dit programma is om door middel van kennis bij te dragen aan de kennisbehoefte van de decentrale overheden op het gebied van mobiliteit. De projecten zijn gericht op het ontwikkelen van nieuwe kennisproducten of op kennisontwikkeling en – uitwisseling (bv communities). De kennisproducten en – diensten worden gebruikt door:

* gemeenten, provincies, stadsregio’s, waterschappen en hun koepels;
* belangenorganisaties, kennisinstituten, vervoerbedrijven en onderwijsinstellingen.

De hoofddoelgroepen zijn de beleidsambtenaren, managers en bestuurders die lokaal en regionaal verkeers- en vervoersbeleid ontwikkelen en realiseren. Deze groepen gebruiken verkeersmodellen om te toetsen of het ontwerp voldoent aan de mobiliteitsdoelstellingen, en zijn verantwoordelijk voor de publicatie van verkeersbesluiten. 

1. Deze groep dient geinformeerd te worden over de toepassing van het Informatiemodel Verkeerstekens en Verkeersbesluiten bij de publicatie van verkeersbesluiten.

### NDW
Het NDW krijgt een rol in de realisatie van de netwerkregistratie. .....
[Issue 14](https://github.com/Stichting-CROW/verkeersborden/issues/14)


### CB-NL

BIM loket publiceert [CB-NL](https://www.bimloket.nl/p/98/CB-NL), de Concepten bibliotheek Nederland (CB-NL), als verbindende taal voor de gehele bouwsector. CB-NL is bedoeld om ontologien zoals het Informatiemodel Verkeerstekens en Verkeersbesluiten of objecttypenbibliotheken van asset managers en bouwbedrijven met elkaar te kunnen verbinden. 

CB-NL zou de logsiche plek zijn om relaties tussen het Informatiemodel Verkeerstekens en Verkeersbesluiten en andere standaarden zoals NLCS te publiceren. Voorwaarde is wel dat deze standaarden gepubliceerd zijn als ontologie.

### NLCS

BIM loket publiceert [NLCS](https://www.bimloket.nl/p/365/NLCS), de Nederlandse CAD standaard voor uitwisseling van informatie in 2D CAD-ontwerptekeningen. CAD betekent Computer-aided design: het ontwerpen van onder meer constructies en apparaten met behulp van computerprogramma's. De NLCS bevat basisafspraken over het omgaan met metadata, digitaal tekenen, het uiterlijk van de tekening en – vooral – de bestandsopbouw van 2D-tekenwerk. Deze afspraken zijn onafhankelijk van de CAD-platforms die geleverd worden door softwareleveranciers. 
Met NLCS worden de objecten op een tekening herkend door alle partijen. Het doel van NLCS is het vermijden van dubbel werk, misverstanden en extra kosten met eenduidige tekeningen. Dit vergroot de efficiency, de kwaliteit, geeft een completer en eenduidig beeld en versneld de tijdigheid waarmee wijzigingen worden gecommuniceerd. 

Circa 30% van de verkeersbesluiten ontwerptekeningen bevatten tekeningen die afkomstig zijn uit CAD-systemen. Tijdens het proces om tot deze verkeersbesluiten te komen wordt veel onderliggende data gemaakt, maar deze data wordt niet optimaal gepubliceerd en gebruikt tijdens en na de publicatie van verkeersbesluiten. Om het gebruik van data uit het wegontwerp bij het verkeersbesluit te verbeteren en tot een completere en eenduidigere uitwisseling van data te komen is de intentie van BIM loket om de verkeersborden op te nemen in de NLCS standaard zodra deze gepubliceerd worden in het Informatiemodel verkeersteken en verkeersbesluiten. Hierdoor hoeven gegevens niet telkens handmatig worden overgenomen maar kan deze data automatisch worden ingelezen voor processen in de bouw-, beheer-, gebruik- en hergebruiksfase. Vervolgens worden door het BIM-loket met de leveranciers van CAD-systemen nadere afspraken gemaakt over het kunnen exporteren van de verkeersborden zodat deze als data beschikbaar komen voor andere systemen. 

[Issue 15](https://github.com/Stichting-CROW/verkeersborden/issues/15)

### ASVV

CROW publiceert de ASVV. Dit is een bundeling kennis voor verkeersvoorzieningen binnen de bebouwde kom. De kennis uit de uitgave wordt gebruikt door verkeerskundig ontwerpers, adviseurs, wegbeheerders, beleidsmedewerkers en juristen. De ASVV is geen open standaard maar kennis waarvoor een abonnement moet worden afgesloten. 

### Handboek Wegontwerp

CROW publiceert het Handboek Wegontwerp. Dit is een bundeling kennis, richtlijnen en praktijkvoorbeelden rond het ontwerp van wegen buiten de bebouwde kom (Bubeko). Het Handboek Wegontwerp is geen open standaard maar kennis waarvoor een abonnement moet worden afgesloten. 

### Wegontwerp RWS
Rijkswaterstaat publiceert [op deze locatie](https://www.rijkswaterstaat.nl/zakelijk/werken-aan-infrastructuur/bouwrichtlijnen-infrastructuur/autosnelwegen) eigen handleidingen en richtlijnen voor wegontwerp. 

###

## Bouwfase

### ETIM
Ketenstandaard Bouw en Techniek publiceert [ETIM](https://ketenstandaard.nl/standaard/etim/). Dit is een catalogus waarmee onderdelen kunnen worden besteld bij fabrikanten. Verkeerslichten kunnen worden besteld met behulp van ETIM, analoge borden en markeringen staan niet in ETIM.




## Beheerfase

### IMBOR
CROW publiceert het informatiemodel beheer openbare ruimte [IMBOR](https://www.crow.nl/thema-s/management-openbare-ruimte/imbor). In IMBOR zijn borden en markeringen opgenomen met daarbij de vaste objectgegevens die in de beheerfase nodig zijn. Dit model wordt gebruikt om informatie over de fysiek buiten geplaatste verkeersborden en markeringen te kunnen opslaan en gebruiken in areaalbeheerpakketten (asset management pakketten gericht op het tactische en operationele beheer).

Het Informatiemodel Verkeerstekens en verkeersbesluiten moet aansluiten op IMBOR, maar geen dubbelingen kennen. Daarvoor is een besluit nodig waar welke informatie komt te staan. Voorstel:

1. In het Informatiemodel Verkeersbesluiten en Verkeerstekens staan de definities van verkeersborden en markeringen.
2. In IMBOR staan eventueel bordne en markeringen die buiten de scope van het Infoprmatiemodel Verkeerstekens en Verkeersbelsuiten vallen. 
3. In het Informatiemodel Verkeersbesluiten en Verkeerstekens komen attributen te staan die bij het bord / de markering "-als-instantie-van-verkeersbesluit" (gewenst/gepland bord) informatie geven over datum en herkomst van het besluit, en de geldigheidsperiode van het besluit.
4. In IMBOR attributen opnemen die bij het bord / de markering "-als-instantie-van-een-beheerobject" (fysiek / bestaand / geplaatst bord) informatie geven over de datum van aanleg, beheerder en overige informatie die gegenereerd wordt tijdens bouwen en beheren van de borden en markeringen.

### NWB
In het nationaal wegen bestand (NWB) ligt het wegennetwerk vast als netwerk van juncties en wegvakken. Het informatiemodel moet hierop aansluiten. 


## Gebruiksfase

### Smart mobility

#### Nauwkeurigheid
Geometrische nauwkeurigheid / kloppende lengtematen nodig voor smart mobility?


### NWB

### Programma Netwerkregistratie

### BGT en SOR
De Samenhangende Objectenregistraties....






