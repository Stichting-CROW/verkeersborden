# Inleiding



## Aanleiding

### Context

<dfn data-lt="Data Top 15">Data Top 15</dfn>
<dd>In het landelijke programma 'Digitalisering Overheden' werkt het Ministerie van Infrastructuur en Waterstaat met vijf landsdelen samen om er voor te zorgen dat in 2030 alle wegbeheerders 'digitaal capabel in mobiliteit' zijn. Hiervoor is een Data Top 15 opgesteld, met onder andere maximumsnelheden, verkeersborden en andere datasets. https://www.datapedia.nl/ </dd>

Het Ministerie van Infrastructuur en Waterstaat heeft in 2021 rondom verkeerskundige informatie twee digitaliseringstrajecten lopen: 

1. Samen met het [=NDW=] wordt gewerkt aan het uitbreiden van het [=Nationaal Wegen Bestand=] voor het wegennetwerk en de bijgehorende verkeerskundige situatie;
2. Samen met [=NDW=] wordt gewerkt aan het uitbreiden van een verkeersbesluiten database in het [=Programma Netwerkregistraties=] om wijzigingen in de verkeersregels uit nieuwe verkeersbesluiten beter digitaal te registreren.
3. Samen met [=KOOP=] wordt gewerkt aan een verkeersbesluiten-app waarmee wegbeheerders hun verkeersbesluit kunnen publiceren. 

Beide trajecten lopen tegen de uitdaging aan dat er meerdere bestanden zijn voor verkeersborden en wegmarkeringen en dat deze bestanden ook nog eens zijn opgesteld vanuit verschillende contexten. Om uiteindelijk richting een goede sectorregistratie van verkeerskundige informatie toe te kunnen werken is een Informatiemodel Verkeerstekens essentieel. 

Onderstaande afbeelding geeft aan wat het toekomstbeeld is voor het voorbeeld van maximumsnelheden. 


<figure>
<img src="./hoofdstukken/media/maximalesnelheid.PNG">
<figcaption>Maximale snelheid voor navigatiesystemen</caption>
</figure>


### Informatiebehoefte

Het Informatiemodel Verkeerstekens is primair bedoeld om de informatiebehoefte vanuit [=SMART Mobility=] vast te leggen. De actuele digitale [=verkeerskundige informatie=] over de de weg moet makkelijk te wijzigen zijn door de wegbeheerder en eenduidig te interpreteren zijn voor de systemen van de weggebruiker en het liefst openbaar beschikbaar komen. 


### Bronhouders

Vanuit verkeerskunde groeit de behoefte om de werkprocessen rondom netwerkberekeningen, het toekennen van vergunningen voor tijdelijke verkeerssituaties en het publiceren van verkeersbesluiten te digitaliseren. Het Informatiemodel Verkeerstekens kan door wegbeheerders gebruikt worden bij het publiceren van (veranderingen in) de actuele verkeerskundige situatie op de weg. 

Op dit moment wordt door verschillende (markt)partijen registraties gepubliceerd over verkeersborden en wegmarkeringen. De behoefte is om dit centraal te organiseren in een landelijke registratie, beheerd door het [=NDW=].

Twee barrières voor data delen
Voor het delen van data in de mobiliteitssector bestaan op dit moment twee belangrijke barrières. Allereerst moeten organisaties steeds opnieuw bilaterale afspraken maken voordat ze kunnen starten met een data-integratie. Dat is tijdrovend en kost geld. Op projectniveau is dat niet altijd haalbaar waardoor het veelal niet komt tot data delen en schaalvoordelen blijven liggen.

Gebrek aan vertrouwen
Daarnaast zijn veel data-eigenaren terughoudend om data te delen. Er is gebrek aan vertrouwen dat ketenpartners zorgvuldig omgaan met hun data en men is bang voor aansprakelijkheden. Met het verstrekken van data denken ze de controle daarover kwijt te raken.

### Registraties

In Nederland wordt digitale verkeerskundige informatie vastgelegd in verschillende (basis)registraties. Die registraties omvatten vooral de registratie van de fysieke infrastructuur ([=BGT=], [=BRT=]) en het wegennetwerk ([=NWB=], [=WKD=], [=WEGGEG=]). 

Er ontbreekt echter een categorie in de digitale informatie: 

<dfn data-lt="Verkeerskundige informatie">Verkeerskundige informatie</dfn>
<dd>Informatie over de op een weg geldende verkeersregels, waarschuwingen en adviessnelheden en de bijbehorende verkeerstekens.</dd>

<dfn data-lt="Verkeersregels">Verkeersregels</dfn>
<dd>De wettelijk geldende verkeersregels op een locatie volgens de [=RVV 1990=]. Hieronder vallen de wettelijke maximum snelheid en de ge- en verboden. </dd>

<dfn data-lt="Waarschuwingen">Waarschuwingen</dfn>
<dd>De waarschuwingen op een locatie volgens de [=RVV 1990=]</dd>

<dfn data-lt="Adviessnelheden">Adviessnelheden</dfn>
<dd>Een lokaal lagere snelheid dan standaard op die weg toegestaan is volgens de [=RVV 1990=]</dd>

<dfn data-lt="Verkeerstekens">Verkeerstekens</dfn>
<dd>Een verkeersteken is een wettelijk vastgesteld teken ter regeling, waarschuwing, geleiding of informering van het verkeer. Onder de verkeerstekens vallen verkeersborden en wegmarkeringen.</dd>

<div class="issue" data-number="134"></div>


#### Verkeersbesluiten
Wegbeheerders zijn per 01072021 wettelijk verplicht om verkeersbesluiten digitaal te publiceren in de decentrale bladen zoals het Gemeenteblad, Provinciaal Blad, Waterschapsblad of Staatscourant en deze officieel bekend te maken op www.overheid.nl, conform <a href="https://wetten.overheid.nl/BWBR0006622/2021-10-19/#HoofdstukII_Paragraaf2_Artikel15">Wegenverkeerswet 1994 artikel 15</a>. Daarbij publiceert de wegbeheerder zowel de tekst van het besluit, eventuele externe bijlagen met daarin de geschetste veranderingen van de verkeerssituatie als ook de metadata over dat besluit. In de huidige situatie is echter het formaat van verkeersbesluiten niet geschikt om deze op een eenvoudige wijze te verwerken tot digitale verkeerskundige informatie.
 
Verkeersbesluiten zijn de bron voor (een deel van) de wijzigingen in de digitale verkeerskundige informatie. Een deel van de wijzigingen is niet verkeersbesluitplichtig, waaronder tijdelijke wijzigingen van minder dan 4 maanden en een deel van de verkeersborden. 


## Doel document

Dit document beschrijft de uitgangspunten en use case voor een nationaal Informatiemodel Verkeerstekens.


## Doel informatiemodel

Korte termijn doel van het Informatiemodel Verkeerstekens is:

> zorgen dat **verkeersregels, waarschuwingen, snelheidsadviezen en verkeersborden** op eenduidige manier gepubliceerd kunnen worden in relatie tot het wegennetwerk, **zodat deze informatie machine-verwerkbaar is**. 

In de toekomst, na 2023, wordt de horizon verbreeed naar smart mobility, met als doel dat auto en automobilist veilig en zuinig kunnen rijden, waarbij de auto haar snelheid en rijrichting automatisch aanpast aan de daar geldende, digitaal beschikbare, verkeersregels. Alle na 2022 gefabriceerde auto's voor de Europese markt moeten over techniek beschikken om dit te ondersteunen. [EU persbericht Veilig Verkeer](https://www.consilium.europa.eu/nl/press/press-releases/2019/11/08/safer-cars-in-the-eu/).

Als tweede doel moet het in de toekomst mogelijk zijn om voor het werkproces van het maken van verkeersmodellen en wegontwerpen de actuele verkeerskundige informatie te kunnen gebruiken als basis voor het ontwerp van een nieuwe verkeerskundige situatie.

<aside class="note" title="Representatie">
Voor een juiste interpretatie van het doel van een informatiemodel is het begrip van 'representatie' van belang. Een manier om dit toe te lichten is de 'Betekenisdriehoek', zoals gedefinieerd in de NEN 2660-1 (2020). Hier staat: 'De betekenisdriehoek visualiseert de relatie tussen 'dingen', 'concepten' en 'symbolen'. De rechterbenedenhoek vertegenwoordigt 'iets dat waarneembaar of voorstelbaar is in de werkelijkheid'. De bovenhoek staat 'de gedachte aan iets uit de werkelijkheid', kortweg 'concept'. De concepten worden gedefinieerd in een informatiemodel. De linkerbenedenhoek staat voor het symbool dat de gedachte symboliseert en het 'iets' representeert.  


<figure>
<img src="./hoofdstukken/media/representatie.png">
<figcaption>De betekenisdriehoek conform NEN 2660-1 (2020)</caption>
</figure>


Wanneer in de context van het Informatiemodel Verkeerstekens toegepast krijgen we de volgende tabel:

<table class="wikitable">
<tr>
<th> 
</th>
<th> 
</th>
<th> 
</th></tr>
<tr>
<td> Individueel concept </td>
<td> Objecttype </td>
<td> 'Wegvak'
</td></tr>
<tr>
<td> Individueel ding </td>
<td> Object </td>
<td> 'Maasdamstraat'
</td></tr>
 <tr>
<td> Individueel symbool </td>
<td> Geometrische representatie </td>
<td> 'Geometrie van Maasdamstraat in de netwerkregistratie'
</td></tr>
</table>

<p> De gegevens van een object zitten zodoende in de rechterbenedenhoek. Van de 'Maasdamstraat' wordt vast gelegd van welke objecttype ('Weg') hij is. Hierdoor is duidelijke welke gegevens er vastgelegd moeten worden (bijvoorbeeld wat zijn naam is, wat het bouwjaar is, welke constructie het is, etc.). Er kunnen dan ook een of meerdere representaties vastgelegd worden. Het object kan gerepresenteerd worden in een GIS bestand, op een CAD tekening, maar ook in een 3D model en zelfs alleen in een spreadsheet. Er zijn dus meerdere representaties (of 'symbolen') mogelijk van een individueel object.</p>

<p> Dit is nodig om te weten, omdat vanuit de GIS gedachte de geometrie leidend is. Er wordt een feature (polygoon bijvoorbeeld) gemaakt, deze krijgt allerlei attributen en daar worden de waarden ingevuld. Dit werkt prima, totdat men vraagt om een 3D model of CAD tekening erbij. Dan zullen veel van de gegevens herhaald moeten worden en het 3D model kan niet gelinkt worden aan de geo-feature. </p> 

<p> Het is toekomstvaster om te redeneren vanuit het object. Het object heeft een uniek ID en heeft allemaal attributen (in bijvoorbeeld in spreadsheet). De representaties van het object hebben alleen de gegevens benodigd voor die representatie (de geometrie) en het zelfde unieke ID. Zo is het makkelijk te matchen. </p>

</aside>

## Use case

De scope van het Informatiemodel Verkeerstekens is de use case "Gebruiken van digitale verkeerskundige informatie over de ter plaatse geldende verkeersregels, waarschuwingen en adviessnelheden en de locatie van bijbehorende verkeersborden in een systeem dat een weggebruiker ondersteunt tijdens deelname aan het verkeer." 


## Toepassing
De wegbeheerder past het informatiemodel toe bij het beheren en publiceren van digitale verkeerskundige informatie in drie contexten:

1. Het inmeten en vastleggen van de huidige verkeerskundige situatie om de digitale informatie betrouwbaar, compleet en actueel te maken.
2. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor een verkeersbesluit gepubliceerd wordt. 
3. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor geen verkeersbesluit gepubliceerd hoeft te worden.


## Binnen Scope

### Verkeersregels+ 
Verkeersregels, waarschuwingen en snelheidsadviezen die horen bij alle verkeersborden uit [=RVV 1990=] zijn binnen scope; aangevuld met een lijst verkeersregels die op de nominatie staan om bij een volgende wetswijziging te worden opgenomen. Hierbij worden zaken vastgelegd die voor de weggebruiker van belang zijn: plaatsingsdatum, beoogde locatie, type, informatie in het onderbord, en overige kenmerken van het verkeersteken die aanduiden wat de verkeersregel is. 

### Adviessnelheid+
De wegbeheerder heeft de mogelijkheid een snelheidsadvies te geven met een A4 verkeersbord.
Daarnaast zijn er veel waarschuwingsborden die indirect advies geven over het matigen van de snelheid. Bijvoorbeeld gewenste lage snelheid bij donker en schemering om aanrijdingen met wild te beperken, of bij een drempel, school, inrit of zebrapad. Deze waarschuwingen zijn voor de mens een duidelijk, maar niet voor een machine. Daarom geeft het informatiemodel geeft de mogelijkheid een adviessnelheid toe te voegen, zonder plaatsing van een bijbehorend A4 verkeersbord. Over de gehele lengte van een [=NWB-wegvak=] kan een lagere adviessnelheid worden opgegevens, los van de individuele waarschuwingen bij de gevaarlijke punten.


### Verkeersborden

* **Binnen scope** zijn alle verkeersborden uit RVV 1990 en (informatie in) onderborden; aangevuld met een lijst verkeersborden die op de nominatie staan om bij een volgende wetswijziging te worden opgenomen.

<p class="note" title=" Maximum snelheid">
Als voorbeeld voor verdere uitwerking van het informatiemodel is de wettelijke maximumsnelheid in meer detail beschreven. Lees daarover <a href="https://docs.crow.nl/verkeersborden/maximalesnelheid/">in dit document</a> meer.</p>

### Wegsoorten

Het Informatiemodel Verkeerstekens heeft als scope: nationale, regionale en lokale wegen, inclusief fiets- en voetpaden, binnen en buiten de bebouwde kom. 

## Buiten scope

### Markeringen

**Buiten scope** zijn <dfn><dt>Wegmarkeringen</dt>  <dd>Wegmarkering is het geheel aan tekens die op het wegdek staan aangegeven en het verkeer door middel van de visuele informatie geleiden. Wegmarkering omvat onder meer pijlen, strepen, doorgetrokken en onderbroken lijnen, haaientanden.</dd> </dfn>
Wegmarkeringen ondersteunen het rijden en geven een visuele herhaling van de informatie die via de verkeersborden (en straks via digitale verkeerskundige informatie) al bekend zijn gemaakt. Ze worden niet gepubliceerd bij de verkeersbesluiten.


### Bewegwijzering

**Buiten scope** is de <dfn><dt>Bewegwijzering</dt><dd>de instructies aan het verkeer over de te nemen route.</dd></dfn>

### Verkeerslichten

Verkeerslichten zijn buiten scope. 


### Weginrichting

In het wegontwerp worden zaken onderzocht die niet altijd op een ontwerptekening staan. In een BIM model kunnen bijvoorbeeld zichtlijnen zijn onderzocht. Bij een beperkt zicht mag niet worden ingehaald. Dit resulteert niet altijd in een verkeersbord of wegmarkering. De menselijke weggebruiker kan dit op zicht inschatten, een systeem wellicht niet. 

<div class="issue" data-number="136"></div>

Een ander voorbeeld hiervan is een visuele of echte wegvernauwing, met die bij een menselijke chauffeur leidt tot snelheidsmindering. In dit geval kan een adviessnelheid zonder verkeersbord worden opgenomen in het informatiemodel.

### Juridisch

**Buiten scope** zijn de metadata over de juridische procedure van het verkeersbesluit bij de verkeersregel.

### Datalevering

**Buiten scope** zijn de metadata over de transactie bij registratie en validatie van verkeersbesluiten of niet verkeersbesluitplichtige informatie.

### Wegsoorten

Vaarwegen, spoorwegen, metrolijnen zijn buiten scope. Tramlijnen zijn binnen scope indien deze gecombineerd zijn met ander verkeer.




## Leeswijzer

Dit document beschrijft de volgende zaken: 

**3. Stakeholderanalyse** De stakeholderanalyse verkent  welke partijen er belanghebbende, 'leverancier' en 'afnemer' zouden kunnen worden van de informatie, gemodelleerd met het Informatiemodel Verkeerstekens. Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.

**4. Raakvlakanalyse** De raakvlakanalyse verkent welke informatiemodellen en informatiebronnen er al zijn voor:
1. Het functionele wegennetwerk en de fysieke ligging van de wegen.
2. De "digitale representatie" van verkeersborden en wegmarkeringen in andere use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.

**5. Use case** De use case geeft een weergave van het verwachte gebruik van de digitale verkleerskundige informatie door een systeem van een weggebruiker.

**6. Toepassing** Het hoofdstuk over toepassing van het informatiemodel geeft een inzicht in het potentiele gebruik van het informatiemodel bij het genereren van digitale verkeerskundige informatie.

**7. Technische Uitgangspunten** In Technische Uitganngspunten staan de normen en richtlijnen waaraan het Informatiemodel Verkeerstekens dient te voldoen, en de wijze waarop wordt aangesloten op andere informatiemodellen. 

**8. Beheer** In Beheer staat beschreven hoe het beheer van het informatiemodel en de samenwerking met andere partijen wordt ingericht, zowel partijen die standaarden beheren als degenen die openbare digitale informatie publiceren over verkeersborden en wegmarkeringen.

**9. Technische uitwerking** De techische uitwqerking beschrijft de architectuur van applicaites en API's die gebruikt worden om het Informatiemodel Verkeerstekens te publiceren en beheren, en om de transacties uit de use case af te kunnen handelen.





