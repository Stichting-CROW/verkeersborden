# Inleiding



## Aanleiding

### Context
Het Ministerie van Infrastructuur en Waterstaat werkt samen met alle wegbeheerders aan het digitalisering van mobiliteit o.a. door het Organiseren van de Data Top 15 waar een aantal typen verkeersborden genoemd worden als data items.

Het Ministerie van Infrastructuur en Waterstaat heeft in 2021 rondom verkeerskundige informatie twee digitaliseringstrajecten lopen: 

1. Het neerzetten van een [=Nationaal Wegen Bestand+=] en
2. Het uitbreiden van een verkeersbesluiten database in het [=Programma Netwerkregistraties=]

Beide trajecten lopen tegen de uitdaging aan dat er meerdere bestanden zijn voor verkeersborden en markeringen en dat deze bestanden ook nog eens zijn opgesteld vanuit verschillende contexten. Om uiteindelijk richting een goede sectorregistratie van verkeerskundige informatie toe te kunnen werken is een Informatiemodel Verkeerstekens essentieel. 

Onderstaande afbeelding geeft aan wat het toekomstbeeld is voor het voorbeeld van maximumsnelheden. 

![Maximale snelheid voor navigatiesystemen](./hoofdstukken/media/maximalesnelheid.PNG "Maximale snelheid voor navigatiesystemen")


### Informatiebehoefte

#### Smart mobility
Vanuit [=Smart Mobility=] zien we de behoefte aan accurate en actuele informatie, waarin voor het wegennet de wettelijke maximum snelheid en ge- en verboden (bijvoorbeeld parkeerverbod, inhaalverbod, stopverbod) per voertuigcategorie en met de daarbij geldende uitzonderingen/nadere aanduidingen op het onderbord (tijden, alleen bij glad wegdek, etc.) gevuld zijn voor ieder individueel wegvak of zelfs nog nauwkeuriger. Zodat een rij-assistent of navigatie-assistent de weggebruiker op het juiste moment kan informeren over het juiste gebruik van de weg, of een autonoom rijdend voertuig deze informatie kan gebruiken.

#### Verkeerskunde
Vanuit verkeerskunde groeit de behoefte om de werkprocessen rondom netwerkberekeningen, het toekennen van vergunningen voor tijdelijke verkeerssituaties en het publiceren van verkeersbesluiten te digitaliseren. Ook daarbij is nauwkeurige digitale informatie nodig over de wegkenmerken en verkeersregels in de huidige situatie.

### Gegevensbronnen
Verkeerskundige kenmerken zijn af te leiden uit de infrastructuur, verkeersregels, wegmarkeringen en borden. In Nederland wordt digitale verkeerskundige informatie vastgelegd in verschillende (basis)registraties. Die registraties omvatten vooral de registratie van de fysieke infrastructuur ([=BGT=], [=BRT=]) en het wegennetwerk ([=NWB=], [=WKD=], [=WEGGEG=]). 

Er ontbreekt echter een categorie gegevens: de verkeerskundige kenmerken, die instructie geven aan de gebruiker van de weg. Dit zijn kenmerken die van belang zijn voor afnemers, zoals weggebruikers en partijen die werken aan betere doorstroming, leefbaarheid en (verkeers)veiligheid. Maar ook wegbeheerders zelf hebben er belang bij, dat deze verkeerskundige kenmerken makkelijk te wijzigen zijn, eenduidig te interpreteren en openbaar beschikbaar komen. Op deze wijze kunnen zij deze als uitgangspunt gebruiken bij het vaststellen van veranderingen in de verkeerssituatie, die uiteindelijk als een verkeersbesluit juridisch kan worden vastgesteld. Op dit moment wordt door verschillende (markt)partijen (impliciete) definities gemaakt en registraties gepubliceerd over verkeersborden en wegmarkeringen. De behoefte is om dit centraal te organiseren.

#### Verkeersbesluiten
 Verkeersbesluiten zijn de bron voor (een deel van) de wijzigingen in de digitale verkeerskundige informatie. Een deel van de wijzigingen is niet verkeersbesluitplichtig, waaronder tijdelijke wijzigingen van minder dan 4 maanden en een deel van de borden. Wegbeheerders zijn wettelijk verplicht om verkeersbesluiten digitaal te publiceren in de Staatscourant en deze officieel bekend te maken op www.overheid.nl. Daarbij publiceert de wegbeheerder zowel de tekst van het besluit, eventuele externe bijlagen met daarin de geschetste veranderingen van de verkeerssituatie als ook de metadata over dat besluit. In de huidige situatie is echter het huidig formaat van verkeersbesluiten niet optimaal geschikt om deze op een eenvoudige wijze te verwerken tot digitale verkeerskundige informatie.


## Doel document

Dit document beschrijft de uitgangspunten en use case voor een nationaal Informatiemodel Verkeerstekens.


## Doel informatiemodel

Korte termijn doel van het Informatiemodel Verkeerstekens is:

> zorgen dat **verkeersborden en markeringen** op eenduidige manier gepubliceerd kunnen worden in relatie tot het wegennetwerk, **zodat deze informatie machine-verwerkbaar is**. 

In de toekomst, na 2023, wordt de horizon verbreeed naar smart mobility, met als doel dat auto en automobilist veilig en zuinig kunnen rijden, waarbij de auto haar snelheid en rijrichting automatisch aanpast aan de daar geldende, digitaal beschikbare, verkeersregels. Alle na 2022 gefabriceerde autos voor de Europese markt moeten over techniek beschikken om dit te ondersteunen. [EU persbericht Veilig Verkeer](https://www.consilium.europa.eu/nl/press/press-releases/2019/11/08/safer-cars-in-the-eu/)


## Scope informatiemodel

### Verkeersbesluiten+ 

1. Verkeersregels en adviezen die horen bij alle borden uit [=RVV 1990=] zijn binnen scope. Hierbij worden zaken vastgelegd die voor de weggebruiker van belang zijn: plaatsingsdatum, beoogde locatie, type en overige kenmerken van het verkeersteken die aanduiden wat de verkeersregel is.

2. Het publiceren van "niet wettelijk bindende" verkeersinstructies, zoals een advies om langzamer te rijden in een bocht, is *binnen scope* 
<div class="issue" data-number="39"></div>

3. Buiten scope zijn markeringen en belijningen, bijvoorbeeld haaietanden en zebrapaden: deze ondersteunen het rijden en geven een visuele herhaling van de informatie die via de borden (en straks via digitale verkeerskundige informatie) al bekend zijn gemaakt.

4. Buiten scope zijn metadata over de juridische procedure van het verkeersbesluit, de registratie en validatie van de verkeerskundige gegevens

### Wegsoorten

Het Informatiemodel Verkeerstekens en Verkeersbesluiten heeft als scope: nationale, regionale en lokale wegen, inclusief fiets- en voetpaden, binnen- en buiten de bebouwde kom.
Vaarwegen, spoorwegen, metrolijnen zijn buiten scope. Tramlijnen zijn binnen scope indien deze gecombineerd zijn met ander verkeer.

### Use case

De scope van het Informatiemodel verkeerstekens en verkeersbesluiten is de use case "Vastleggen van digitale verkeerskundige informatie waarmee de wegbeheerder aangeeft welke verkeersregels gelden en waar de bijbehorende verkeerstekens gepland zijn." De wegbeheerder wil dit doen in drie contexten:

1. Het inmeten en vastleggen van de huidige verkeerskundige situatie om de digitale verkeerskundige informatie betrouwbaar, compleet en actueel te maken.
2. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor een verkeersbesluit gepubliceerd wordt.
3. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor geen verkeersbesluit gepubliceerd hoeft te worden.



*Het publiceren van zowel voor mensen leesbare als machine-verwerkbare verkeerskundige informatie die aangeeft wélke beperkingen op welke wegen gelden en wélk verkeer op welke wegen is toegestaan (ge- en verboden).*

![Ontwerpfase](./hoofdstukken/media/ontwerpfase.jpg "Ontwerpfase")

De use case bevat de volgende onderdelen:

1. Het samenstellen van een dataset met een nieuwe netwerkinrichting.
2. De communicatie over de nieuwe weginrichting van wegbeheerder naar de landelijke registratie (transactie)
3. Het samenstellen van een dataset met functionele verkeersinstructies en verkeerstekens met daarin de wijziging in de verkeersregels
4. De communicatie over de toe te passen verkeersregels van wegbeheerder naar de landelijke registratie (transactie)
5. Het valideren van de aangeboden wijziging;
6. Het publiceren van de wijziging in de landelijke netwerkregistratie. 
7. Het publiceren van de wijziging op [www.overheid.nl](www.overheid.nl) 

<aside class="note" title="Verkeersbesluiten en de wet">
<p> Wegbeheerders zijn per 01072021 wettelijk verplicht om verkeersbesluiten digitaal te publiceren in de decentrale bladen zoals het Gemeenteblad, Provinciaal Blad, Waterschapsblad of Staatscourant en deze officieel bekend te maken op www.overheid.nl. Daarbij publiceert de wegbeheerder zowel de tekst van het besluit, eventuele externe bijlagen met daarin de geschetste veranderingen van de verkeerssituatie als ook de metadata over dat besluit. In de huidige situatie is echter het huidig formaat van verkeersbesluiten niet optimaal geschikt om deze op een eenvoudige wijze in een machine-leesbare vorm te kunnen verwerken van besluiten tot kenmerken die gebruikt kunnen worden voor de digitalisering van werkprocessen van wegbeheerders en service providers en om de weggebruiker of rij-assistent digitaal te informeren. Het Informatiemodel verkeerstekens en verkeersbesluiten heeft als doel om verkeersbesluiten naast voor de mens bruikbaar ook machine-leesbaar vast te leggen. </p> 
  </aside>


### Verkeersborden

Alle verkeersborden zijn binnen scope, zowel de wettelijk toegestane borden uit [=RVV 1990=] als eigen aanvullingen door locale wegbeheerders.

<div class="issue" data-number="66"></div>

<div class="issue" data-number="72"></div>


### Bewegwijzering
Bewegwijzering zijn de instructies aan het verkeer over de te nemen route. Deze zijn buiten scope. 

### Verkeerslichten

<div class="issue" data-number="64"></div>

### Markeringen

<div class="issue" data-number="56"></div>

<div class="issue" data-number="75"></div>

### Weginrichting

<div class="issue" data-number="65"></div>

## Leeswijzer

Dit document beschrijft de volgende zaken: 

**3. Stakeholderanalyse** De stakeholderanalyse verkent  welke partijen er belanghebbende, “leverancier” en “afnemer” zouden kunnen worden van de informatie, gemodelleerd met het Informatiemodel Verkeerstekens en Verkeersbesluiten. Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.

**4. Raakvlakanalyse** De raakvlakanalyse verkent welke informatiemodellen en informatiebronnen er al zijn voor:
1. Het functionele wegennetwerk en de fysieke ligging van de wegen.
2. De "digitale representatie" van verkeersborden en wegmarkeringen in andere use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.

**5. Use case** De use case beschrijft de interactie tussen de actoren: wegbeheerder, beheerder landelijke registratie, en de systemen die zij gebruiken bij het publiceren van verkeersbesluiten. De use case geeft een weergave van het verwachte gebruik van het informatiemodel in een specifiek, door een systeem ondersteund werkproces. 

**6. Technische Uitgangspunten** In Technische Uitganngspunten staan de normen en richtlijnen waaraan het Informatiemodel Verkeerstekens en Verkeersbesluiten dient te voldoen, en de wijze waarop wordt aangesloten op andere informatiemodellen. 

**7. Beheer** In Beheer staat beschreven hoe het beheer van het informatiemodel en de samenwerking met andere partijen wordt ingericht, zowel partijen die standaarden beheren als degenen die openbare digitale informatie publiceren over verkeersborden en wegmarkeringen.

**8. Technische uitwerking** De techische uitwqerking beschrijft de architectuur van applicaites en API's die gebruikt worden om het Informatiemodel Verkeerstekens en Verkeersbesluiten te publiceren en beheren, en om de transacties uit de use case af te kunnen handelen.

<p class="note" title=" Maximum snelheid">
Als voorbeeld voor verdere uitwerking van het informatiemodel is de wettelijke maximumsnelheid in meer detail beshcreven. Lees daarover <a href="https://docs.crow.nl/verkeersborden/maximalesnelheid/">in dit document</a> meer.</p>





