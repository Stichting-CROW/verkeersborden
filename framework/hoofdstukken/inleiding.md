# Inleiding

Het Ministerie van Infrastructuur en Waterstaat heeft CROW gevraagd om een [=Informatiemodel Verkeerstekens=] op te stellen. Dit document beschrijft de uitgangspunten, use-case en architectuurframework voor het informatiemodel. Om de inhoud van het informatiemodel te verkennen is daarnaast een beschrijving opgesteld van de informatie die nodig is om de wettelijke maximum snelheid op de weg te kunnen herleiden. Zie daarvoor [dit document](https://docs.crow.nl/verkeersborden/maximalesnelheid/)

## Aanleiding

### Context

Het Ministerie van Infrastructuur en Waterstaat heeft in 2021 rondom [=verkeerskundige informatie=] meerdere digitaliseringstrajecten en samenwerkingsverbanden lopen: 

1. In het [=Programma Netwerkregistraties=] wordt samen met het [=NDW=] gewerkt aan het uitbreiden van het [=Nationaal Wegen Bestand=] voor het wegennetwerk en de bijgehorende verkeerskundige situatie 
2. In het [=Programma Netwerkregistraties=] wordt samen met [=KOOP=] gewerkt aan het uitbreiden van een [=verkeersbesluiten applicatie=] waarmee wegbeheerders hun [=verkeersbesluit=] kunnen publiceren als digitale [=verkeerskundige informatie=]
3. Samen met [=BIM loket=] wordt gewerkt aan het uitbreiden van NLCS met netwerkinformatie en verkeersborden om het verkeerskundige CAD-ontwerp beter te kunnen overdragen naar digitale [=verkeerskundige informatie=] voor invoer in het [=Nationaal Wegen Bestand=].
4. In het landelijke programma 'Digitalisering Overheden' werkt het Ministerie van Infrastructuur en Waterstaat met vijf landsdelen samen om er voor te zorgen dat in 2030 alle wegbeheerders 'digitaal capabel in mobiliteit' zijn. Hiervoor is een [=Data Top 15=] opgesteld, met onder andere maximumsnelheden, verkeersborden en andere datasets.

Alle trajecten lopen tegen de uitdaging aan dat er meerdere bestanden zijn voor verkeersborden en dat deze bestanden ook nog eens zijn opgesteld vanuit verschillende contexten. Om uiteindelijk richting een goede sectorregistratie van [=verkeerskundige informatie=] toe te kunnen werken is een [=Informatiemodel Verkeerstekens=] essentieel. 

Onderstaande afbeelding geeft aan wat het toekomstbeeld is voor het voorbeeld van maximumsnelheden. 

<figure>
<img src="./hoofdstukken/media/maximalesnelheid.PNG">
<figcaption>Maximale snelheid voor navigatiesystemen, van rechts naar links: Een wegbeheerder neemt een [=verkeersbesluit=]; het [=NDW=] registreert een nieuwe verkeerskundige situatie; in het [=NTM=] wordt de actuele verkeerskundige informatie gepubliceerd; [=SMART Mobility=] systemen kunnen de juiste verkeerskundige situatie afleiden uit de informatie en daarmee [=weggebruikers=] ondersteunen. </caption>
</figure>




### Informatiebehoefte

Het [=Informatiemodel Verkeerstekens=] is primair bedoeld om de informatiebehoefte vanuit [=SMART Mobility=] vast te leggen.  Vanuit [=Smart Mobility=] is behoefte aan accurate en actuele informatie, waarin voor het wegennet de wettelijke maximum snelheid en ge- en verboden (bijvoorbeeld parkeerverbod, inhaalverbod, stopverbod) per voertuigcategorie en met de daarbij geldende uitzonderingen/nadere aanduidingen op het onderbord (tijden, alleen bij glad wegdek, etc.) gevuld zijn voor ieder individueel wegvak of zelfs nog nauwkeuriger, per [=rijstrook=] en rijrichting. Zodat een rij-assistent of navigatie-assistent de [=weggebruiker=] op het juiste moment kan informeren over het juiste gebruik van de weg, of een autonoom rijdend voertuig deze informatie kan gebruiken. 

<dfn data-lt="verkeerskundige informatie">Verkeerskundige informatie</dfn>
<dd>Informatie over de op een weg geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de bijbehorende [=verkeerstekens=].</dd>

<dfn data-lt="weggebruiker|weggebruikers">Weggebruiker</dfn>
<dd>Voetgangers, fietsers, bromfietsers, bestuurders van een gehandicaptenvoertuig, van een motorvoertuig of van een tram, ruiters, geleiders van rij- of trekdieren of vee en bestuurders van een bespannen of onbespannen wagen. Definitie conform de [=RVV 1990=]</dd>

### Bronhouders

Vanuit verkeerskunde groeit de behoefte om de werkprocessen rondom netwerkberekeningen, het toekennen van vergunningen voor tijdelijke verkeerssituaties en het publiceren van [=verkeersbesluiten=] te digitaliseren. Het [=Informatiemodel Verkeerstekens=] kan door wegbeheerders gebruikt worden bij het publiceren van (veranderingen in) de actuele verkeerskundige situatie op de weg. 

Op dit moment wordt door verschillende (markt)partijen registraties gepubliceerd over verkeersborden. De behoefte is om dit centraal te organiseren in een landelijke registratie, beheerd door het [=NDW=].

Twee barrières voor data delen
Voor het delen van data in de mobiliteitssector bestaan op dit moment twee belangrijke barrières. Allereerst moeten organisaties steeds opnieuw bilaterale afspraken maken voordat ze kunnen starten met een data-integratie. Dat is tijdrovend en kost geld. Op projectniveau is dat niet altijd haalbaar waardoor het veelal niet komt tot data delen en schaalvoordelen blijven liggen.

Gebrek aan vertrouwen
Daarnaast zijn veel data-eigenaren terughoudend om data te delen. Er is gebrek aan vertrouwen dat ketenpartners zorgvuldig omgaan met hun data en men is bang voor aansprakelijkheden. Met het verstrekken van data denken ze de controle daarover kwijt te raken.

Een wegbeheerder stelt in drie contexten digitale [=verkeerskundige informatie=] op:

1. Het inmeten en vastleggen van de huidige verkeerskundige situatie om de digitale informatie betrouwbaar, compleet en actueel te maken. De informatie wordt vastgelegd in een landelike netwerkregistratie.
2. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor een verkeersbesluit gepubliceerd wordt. De informatie wordt gepubliceerd door KOOP. Vastlegging van de informatie wordt ondersteund in een verkeersbesluitenapplicatie.
3. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor geen verkeersbesluit gepubliceerd hoeft te worden.

### Registraties

In Nederland wordt digitale [=verkeerskundige informatie=] vastgelegd in verschillende (basis)registraties. Die registraties omvatten vooral de registratie van de fysieke infrastructuur ([=BGT=], [=BRT=]) en het wegennetwerk ([=NWB=], [=WKD=], [=WEGGEG=]). 

Er ontbreekt echter een categorie in de huidig beschikbare digitale informatie: de [=verkeerskundige informatie=]. De actuele digitale [=verkeerskundige informatie=] over de de weg moet makkelijk te wijzigen zijn door de wegbeheerder, eenduidig te interpreteren zijn voor de systemen van de weggebruiker en het liefst openbaar beschikbaar komen. Het [=Informatiemodel Verkeerstekens=] moet daarbij helpen.


<dfn data-lt="verkeersregel|verkeersregels">Verkeersregels</dfn>
<dd>De wettelijk geldende verkeersregels op een locatie volgens de [=RVV 1990=]. Hieronder vallen de wettelijke maximum snelheid en de ge- en verboden. </dd>

<dfn data-lt="waarschuwingen|waarschuwing">Waarschuwing</dfn>
<dd>De waarschuwingen op een locatie volgens de [=RVV 1990=]</dd>

<dfn data-lt="Adviessnelheden|Adviessnelheid">Adviessnelheid</dfn>
<dd>Een lokaal lagere snelheid dan standaard op die weg toegestaan is volgens de [=RVV 1990=]</dd>

<dfn data-lt="verkeerstekens|verkeersteken">Verkeersteken</dfn>
<dd>Een wettelijk vastgesteld teken ter regeling, waarschuwing, geleiding of informering van het verkeer. Onder de verkeerstekens vallen verkeersborden en [=wegmarkeringen=].</dd>



#### Verkeersbesluiten
<dfn data-lt="Verkeersbesluit|Verkeersbesluiten">Verkeersbesluit</dfn>
<dd> Wegbeheerders zijn per 01072021 wettelijk verplicht om nieuwe  en langdurende (>4 maanden) tijdelijke verkeerskundige situaties digitaal te publiceren in de decentrale bladen zoals het Gemeenteblad, Provinciaal Blad, Waterschapsblad of Staatscourant en deze officieel bekend te maken op www.overheid.nl, conform <a href="https://wetten.overheid.nl/BWBR0006622/2021-10-19/#HoofdstukII_Paragraaf2_Artikel15">Wegenverkeerswet 1994 artikel 15</a>.
</dd>

Daarbij publiceert de wegbeheerder zowel de tekst van het besluit, eventuele externe bijlagen met daarin de geschetste veranderingen van de verkeerssituatie als ook de metadata over dat besluit. In de huidige situatie is echter het formaat van verkeersbesluiten niet geschikt om deze op een eenvoudige wijze te verwerken tot digitale [=verkeerskundige informatie=].
 
Verkeersbesluiten zijn de bron voor (een deel van) de wijzigingen in de digitale [=verkeerskundige informatie=]. Een deel van de wijzigingen is niet verkeersbesluitplichtig, waaronder tijdelijke wijzigingen van minder dan 4 maanden en een deel van de verkeersborden. 


## Doel document

Dit document beschrijft de uitgangspunten en use case voor een nationaal [=Informatiemodel Verkeerstekens=].



## Leeswijzer

Dit document beschrijft de volgende zaken: 

**2. Scope** Beschrijft de inhoudelijke scope van de [=verkeerskundige informatie=] in het [=Informatiemodel Verkeerstekens=]

**3. Use case** De use case geeft een weergave van het verwachte gebruik van de digitale [=verkeerskundige informatie=] door een [=SMART Mobility=] systeem van een [=weggebruiker=]. Hieruit volgen eisen voor het [=Informatiemodel Verkeerstekens=].

**4. Stakeholderanalyse** De stakeholderanalyse verkent  welke partijen er 'gebruiker', 'leverancier' en 'afnemer' zijn van [=verkeerskundige informatie=], gemodelleerd met het [=Informatiemodel Verkeerstekens=]. Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. Door in de gehele keten te denken kan duidelijk worden welke aanvullende eisen er gelden voor het informatiemodel, om gebruik en beheer van de [=verkeerskundige informatie=] te faciliteren.

**5. Raakvlakanalyse** De raakvlakanalyse beschijft welke beheerorganisaties, partijen en samenwerkingsverbanden er zijn die te maken hebben met wetgeving, standaarden of informatiemodellen, databronnen en niet-commerciële applicaties met als inhoud: 

1. Het functionele wegennetwerk en de fysieke ligging van de wegen.
2. De digitale representatie van verkeersborden in andere use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.

**6. Technische Uitgangspunten** In Technische Uitgangspunten staan de normen en richtlijnen waaraan het [=Informatiemodel Verkeerstekens=] dient te voldoen, en de wijze waarop wordt aangesloten op andere informatiemodellen. 

**7. Beheer** In Beheer staat beschreven hoe het beheer van het informatiemodel en de samenwerking met andere partijen wordt ingericht, zowel partijen die standaarden beheren als degenen die openbare digitale informatie publiceren over verkeersborden .

**8. Technische uitwerking** De techische uitwqerking beschrijft de architectuur van applicaites en API's die gebruikt worden om het [=Informatiemodel Verkeerstekens=] te publiceren en beheren, en om de transacties uit de use case af te kunnen handelen.





