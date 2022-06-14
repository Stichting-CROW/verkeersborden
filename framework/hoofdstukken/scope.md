# Scope

## Doel informatiemodel

Korte termijn doel van het [=Informatiemodel Verkeerstekens=] is:

> zorgen dat **verkeersregels, waarschuwingen, snelheidsadviezen en verkeersborden** op eenduidige manier gepubliceerd kunnen worden in relatie tot het wegennetwerk, **zodat deze informatie machine-verwerkbaar is**. 

In de toekomst, na 2023, wordt de horizon verbreeed naar smart mobility, met als doel dat auto en automobilist veilig en zuinig kunnen rijden, waarbij de auto haar snelheid en rijrichting automatisch aanpast aan de daar geldende, digitaal beschikbare, verkeersregels. Alle na 2022 gefabriceerde auto's voor de Europese markt moeten over techniek beschikken om dit te ondersteunen. [EU persbericht Veilig Verkeer](https://www.consilium.europa.eu/nl/press/press-releases/2019/11/08/safer-cars-in-the-eu/).

Als tweede doel moet het in de toekomst mogelijk zijn om voor het werkproces van het maken van verkeersmodellen en wegontwerpen de actuele [=verkeerskundige informatie=] te kunnen gebruiken als basis voor het ontwerp van een nieuwe verkeerskundige situatie.

<aside class="note" title="Representatie">
Voor een juiste interpretatie van het doel van een informatiemodel is het begrip van 'representatie' van belang. Een manier om dit toe te lichten is de 'Betekenisdriehoek', zoals gedefinieerd in de NEN 2660-1 (2020). Hier staat: 'De betekenisdriehoek visualiseert de relatie tussen 'dingen', 'concepten' en 'symbolen'. De rechterbenedenhoek vertegenwoordigt 'iets dat waarneembaar of voorstelbaar is in de werkelijkheid'. De bovenhoek staat 'de gedachte aan iets uit de werkelijkheid', kortweg 'concept'. De concepten worden gedefinieerd in een informatiemodel. De linkerbenedenhoek staat voor het symbool dat de gedachte symboliseert en het 'iets' representeert.  


<figure>
<img src="./hoofdstukken/media/representatie.png">
<figcaption>De betekenisdriehoek conform NEN 2660-1 (2020)</caption>
</figure>


Wanneer in de context van het [=Informatiemodel Verkeerstekens=] toegepast krijgen we de volgende tabel:

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

De scope van het [=Informatiemodel Verkeerstekens=] is de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de locatie van bijbehorende verkeersborden in een systeem voor [SMART Mobility] dat een weggebruiker ondersteunt tijdens deelname aan het verkeer." 

De gebruikers die in deze use case centraal staan zijn de Weggebruikers, die tijdens het rijdens willen weten welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] gelden voor de weg waar ze op rijden. De weggebruikers willen visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. 

## Toepassing
De wegbeheerder past het [=Informatiemodel Verkeerstekens=] toe bij het beheren en publiceren van digitale [=verkeerskundige informatie=] in drie contexten:

1. Het inmeten en vastleggen van de huidige verkeerskundige situatie om de digitale informatie betrouwbaar, compleet en actueel te maken.
2. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor een [=verkeersbesluit=] gepubliceerd wordt. 
3. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor geen [=verkeersbesluit=] gepubliceerd hoeft te worden.


## Binnen Scope

### Verkeersregels+ 
Verkeersregels, waarschuwingen en snelheidsadviezen die horen bij alle verkeersborden uit [=RVV 1990=] zijn binnen scope; aangevuld met een lijst verkeersregels die op de nominatie staan om bij een volgende wetswijziging te worden opgenomen. Hierbij worden zaken vastgelegd die voor de weggebruiker van belang zijn: plaatsingsdatum, beoogde locatie, type, informatie in het onderbord, en overige kenmerken van het [=verkeerstekens=] die aanduiden wat de verkeersregel is. 

### Adviessnelheid+
De wegbeheerder heeft de mogelijkheid een [=adviessnelheid] te geven met een A4 verkeersbord.
Daarnaast zijn er veel waarschuwingsborden die indirect advies geven over het matigen van de snelheid. Bijvoorbeeld gewenste lage snelheid bij donker en schemering om aanrijdingen met wild te beperken, of bij een drempel, school, inrit of zebrapad. Deze waarschuwingen zijn voor de mens een duidelijk, maar niet voor een machine. Daarom geeft het informatiemodel geeft de mogelijkheid een adviessnelheid toe te voegen, zonder plaatsing van een bijbehorend A4 verkeersbord. Over de gehele lengte van een [=NWB-wegvak=] kan een lagere adviessnelheid worden opgegevens, los van de individuele waarschuwingen bij de gevaarlijke punten.


### Verkeersborden

* **Binnen scope** zijn alle verkeersborden uit RVV 1990 en (informatie in) onderborden; aangevuld met een lijst verkeersborden die op de nominatie staan om bij een volgende wetswijziging te worden opgenomen.

<p class="note" title=" Maximum snelheid">
Als voorbeeld voor verdere uitwerking van het informatiemodel is de wettelijke maximumsnelheid in meer detail beschreven. Lees daarover <a href="https://docs.crow.nl/verkeersborden/maximalesnelheid/">in dit document</a> meer.</p>

### Wegsoorten

Het [=Informatiemodel Verkeerstekens=] heeft als scope: nationale, regionale en lokale wegen, inclusief fiets- en voetpaden, binnen en buiten de bebouwde kom. 

## Buiten scope

### Markeringen

**Buiten scope** zijn <dfn><dt></dt>  <dd>Wegmarkering is het geheel aan tekens die op het wegdek staan aangegeven en het verkeer door middel van de visuele informatie geleiden. Wegmarkering omvat onder meer pijlen, strepen, doorgetrokken en onderbroken lijnen, haaientanden.</dd> </dfn>
Wegmarkeringen ondersteunen het rijden en geven een visuele herhaling van de informatie die via de verkeersborden (en straks via digitale [=verkeerskundige informatie=]) al bekend zijn gemaakt. Ze worden niet gepubliceerd bij de [=verkeersbesluiten=].


### Bewegwijzering

**Buiten scope** is de <dfn><dt>Bewegwijzering</dt><dd>de instructies aan het verkeer over de te nemen route.</dd></dfn>

### Verkeerslichten

Verkeerslichten zijn buiten scope. 


### Weginrichting

In het wegontwerp worden zaken onderzocht die niet altijd op een ontwerptekening staan. In een BIM model kunnen bijvoorbeeld zichtlijnen zijn onderzocht. Bij een beperkt zicht mag niet worden ingehaald. Dit resulteert niet altijd in een verkeersbord of wegmarkering. De menselijke weggebruiker kan dit op zicht inschatten, een systeem wellicht niet. 

<div class="issue" data-number="136"></div>

Een ander voorbeeld hiervan is een visuele of echte wegvernauwing, met die bij een menselijke chauffeur leidt tot snelheidsmindering. In dit geval kan een adviessnelheid zonder verkeersbord worden opgenomen in het informatiemodel.

### Juridisch

**Buiten scope** zijn de metadata over de juridische procedure van het [=verkeersbesluit=] bij de verkeersregel.

### Datalevering

**Buiten scope** zijn:
* De metadata over de transactie bij registratie en validatie van [=verkeerskundige informatie=] uit [=verkeersbesluiten=] of niet verkeersbesluitplichtige wijzigingen. 
* De eisen aan de te leveren dataset of de kwaliteitstoets bij de dataset

<aside class="note" title="Transactie bij een datalevering">
Een hapy flow van een transactie is bijvoorbeeld als volgt:
<ul>

<li>De wegbeheerder biedt de wijziging aan en vraagt om deze te publiceren.</li> 
<li>De beheerder van de landelijke registratie belooft dit te zullen doen na validatie.</li> 
<li>Het Systeem controleert of aan alle leveringsvoorwaarden is voldaan en of de aangeboden wijziging aansluit op de ongewijzigde netwerkdelen.</li> 
<li>De beheerder van de landelijke registratie geeft aan dat de dataset voldoet aan alle voorwaarden en toont welke wijzigingen worden doorgevoerd.</li> 
<li>De wegbeheerder accepteert de wijzigingsvoorstellen van de beheerder van de landelijke registratie.</li> </ul> 
</aside> 


### Wegsoorten

Vaarwegen, spoorwegen, metrolijnen zijn buiten scope. Tramlijnen zijn binnen scope indien deze gecombineerd zijn met ander verkeer.






