# Scope

## Doel informatiemodel

Korte termijn doel van het [=Informatiemodel Verkeerstekens=] is:

> Zorgen dat **verkeersregels, waarschuwingen, snelheidsadviezen en verkeersborden** op eenduidige manier gepubliceerd kunnen worden in relatie tot het wegennetwerk, **zodat deze informatie machine-verwerkbaar is**. 

In de toekomst, na 2023, wordt de horizon verbreed naar [=SMART mobility=], met als doel dat auto en automobilist veilig en zuinig kunnen rijden, waarbij de auto haar snelheid en rijrichting automatisch aanpast aan de daar geldende, digitaal beschikbare, verkeersregels. Alle na 2022 gefabriceerde auto's voor de Europese markt moeten over techniek beschikken om dit te ondersteunen. [EU persbericht Veilig Verkeer](https://www.consilium.europa.eu/nl/press/press-releases/2019/11/08/safer-cars-in-the-eu/).

> Als tweede doel moet het informatiemodel het *opstellen en beheren* van de [=verkeerskundige informatie=] ondersteunen.

> Als derde doel moet het in de toekomst mogelijk zijn om voor het werkproces van het maken van verkeersmodellen en wegontwerpen de actuele [=verkeerskundige informatie=] te kunnen gebruiken als basis voor het ontwerp van een nieuwe verkeerskundige situatie.

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

De scope van het [=Informatiemodel Verkeerstekens=] is de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de locatie van bijbehorende verkeersborden in een systeem voor [SMART Mobility] dat een [=weggebruiker=] ondersteunt tijdens deelname aan het verkeer." 

De gebruikers die in deze use case centraal staan zijn de [=weggebruikers=], die tijdens het rijdens willen weten welke [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] gelden voor de weg waar ze op rijden. De [=weggebruikers=] willen visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. 


## Binnen Scope

### Fase
Het informatiemodel is primair bedoeld om het gebruik van de weg te ondersteunen met digitale [=verkeerskundige informatie=]. 

In het informatiemodel wordt secundair rekening gehouden met het opstellen en beheren van de digitale [=verkeerskundige informatie=] door de wegbeheerder.

### Wegsoorten

Het [=Informatiemodel Verkeerstekens=] heeft als scope: [=verkeerskundige informatie=] bij het wegennetwerk bestaande uit nationale, regionale en lokale wegen, inclusief fiets- en voetpaden, binnen en buiten de bebouwde kom. Het informatiemodel maakt het mogelijk verkeerskundige informatie toe te voegen aan het wegennetwerk zoals dat gepubliceerd wordt bij het [=NWB=] met [=NWB-wegvakken=] en [=NWB-juncties=]. Het informatiemodel van het wegennetwerk zelf is wel buiten scope. 


### RVV 1990+ 
[=Verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] uit [=RVV 1990=] zijn binnen scope, met de bijbehorende [=verkeersborden=]. Ge- en verboden die volgen uit de weginrichting, bijvoorbeeld niet mogen inhalen bij een doorgetrokken streep, zijn binnen scope. 
Daarnaast is een lijst [=Verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en [=verkeersborden=] binnen scope die op de nominatie staan om bij een volgende wetswijziging te worden opgenomen. 
Bij het verkeersbord worden zaken vastgelegd die voor de [=weggebruiker=] van belang zijn: plaatsingsdatum, beoogde locatie, type, informatie in het onderbord, en overige kenmerken van het verkeersbord die aanduiden wat de verkeersregel is. 

* Het informatiemodel MOET de types en definities van de [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=] bevatten die in de [=RVV 1990=] (Reglement verkeersregels en verkeerstekens 1990) staan. 
* Het informatiemodel MOET de types en definities van de [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=] bevatten die genomineerd zijn om in de wet te worden opgenomen. 
* Het informatiemodel MOET duidelijk aangeven welke [=verkeersregels=], [=waarschuwingen=], [=adviessnelheden=] al opgenomen zijn in wetgeving, en welke nog niet.

<div class="issue" data-number="159"></div>


### Statische verkeersborden

* **Binnen scope** zijn alle statische verkeersborden uit RVV 1990 en (informatie in) onderborden; aangevuld met een lijst verkeersborden die op de nominatie staan om bij een volgende wetswijziging te worden opgenomen.

<dfn data-lt="statische verkeersborden|statisch verkeersbord">Statisch verkeersbord</dfn>
<dd>Een verkeersbord waarop altijd dezelfde afbeelding dan wel tekst te zien is</dd></dfn>

* Het informatiemodel MOET de types en definities van de [=statische verkeersborden=] bevatten die in de [=RVV 1990=] (Reglement verkeersregels en verkeerstekens 1990) staan. 
* Het informatiemodel MOET de types en definities van de [=statische verkeersborden=] bevatten die genomineerd zijn om in de wet te worden opgenomen. 
* Het informatiemodel MOET duidelijk aangeven welke [=statische verkeersborden=] al opgenomen zijn in wetgeving, en welke nog niet.
* Het informatiemodel MOET de types en definities van onderborden definiëren die volgen uit de [=RVV 1990=].


## Buiten scope

### Fasen

**Buiten scope** zijn:
* Informatie die nodig is tijdens het ontwerp, zoals het alignement of de ontwerpsnelheid, is buiten scope.
* Informatie die nodig is tijdens het bouwen, zoals inkoopeisen en garantiebepalingen van verkeersborden, is buiten scope.
* Informatie die nodig is tijdens het beheer, zoals de onderhoudstoestand van verkeersborden, is buiten scope.
* Informatie die nodig is tijdens de sloop, zoals materialenpaspoorten van verkeersborden, is buiten scope.

### Wegsoorten

Vaarwegen, spoorwegen, metrolijnen zijn buiten scope. Tramlijnen zijn binnen scope indien deze gecombineerd zijn met ander verkeer.


### Dynamische verkeersborden
Buiten scope zijn de dynamische verkeersborden.

<dfn data-lt="dynamische verkeersborden|dynamisch verkeersbord">Dynamisch verkeersbord</dfn>
<dd>Een verkeersbord weergegeven op een electronisch signaleringsbord, waarmee telkens wisselende afbeedlingen dan we teksten getoond kunnen worden.</dd></dfn>


### Wegmarkeringen

**Buiten scope** zijn de wegmarkeringen.

<dfn data-lt="wegmarkering|wegmarkeringen">Wegmarkering</dfn>
<dd> Op of in het oppervlak van de verharding aangebrachte tekens ter geleiding, waarschuwing, regeling of informatie van het verkeer <a href="https://data.crow.nl/thesaurus/term/735B2275-9052-4DD2-9F86-9EC796BDC483">Bron: CROW thesaurus</a>. Wegmarkering omvat onder meer pijlen, strepen, doorgetrokken en onderbroken lijnen en haaientanden.</dd> </dfn>

Wegmarkeringen ondersteunen het rijden en geven een visuele herhaling van de informatie die via de verkeersborden (en straks via digitale [=verkeerskundige informatie=]) al bekend zijn gemaakt. 


### Bewegwijzering

**Buiten scope** is de bewegwijzering.

<dfn data-lt="Bewegwijzering">Bewegwijzering</dfn>
<dd>Bewegwijzering is het geheel van visuele middelen dat op, langs of boven de weg is aangebracht om de weggebruiker in staat te stellen zijn route te bepalen. <a href="https://data.crow.nl/thesaurus/term/5883952B-E8D8-4EF6-B1A9-EB340C30006D">Bron: CROW thesaurus</a></dd>


### Bebakening

**Buiten scope** zijn de voorwerpen die ter geleiding, waarschuwing, regeling en beveiliging van het verkeer dienen.

<dfn data-lt="Bebakening">Bebakening</dfn>
<dd>Bebakening is het samenstel van op, in en naast de verharding aangebrachte verkeerstekens en voorwerpen die ter geleiding, waarschuwing, regeling en beveiliging van het verkeer dienen. <a href="https://data.crow.nl/thesaurus/term/DA24A2CE-114B-4226-B8FB-94DD79D94B7F">Bron: CROW thesaurus</a></dd>


### Verkeerslichten

Verkeerslichten zijn buiten scope. 

### Zicht
[RVV 1990 art 19](https://wetten.overheid.nl/jci1.3:c:BWBR0004825&hoofdstuk=II&paragraaf=8&artikel=19&z=2021-07-01&g=2021-07-01) geeft aan: De bestuurder moet in staat zijn zijn voertuig tot stilstand te brengen binnen de afstand waarover hij de weg kan overzien en waarover deze vrij is.

Deze inschatting verschilt per voertuig en is daarom *buiten scope* van het informatiemodel, ook al kan een rechter, in het geval van een ongeluk, concluderen dat een bestuurder sneller heeft gereden dan wettelijk is toegestaan volgens deze regel.


### Procedure verkeersbesluit

**Buiten scope** zijn:
* De metadata over de juridische procedure van het [=verkeersbesluit=] bij de verkeersregel.
* De inhoud van de juiridische procedure.

### Informatieleveringsspecificatie
Als steeds de actuele verkeerskundige informatie gepubliceerd wordt, moeten wijzigingen door de wegbeheerder aan het publicatieplatform worden aangeboden. De wegbeheerder heeft voor het aanleveren van een wijziging in de [=verkeerskundige informatie=] een "Informatieleveringsspecificatie" nodig en moet kunnen aantonen dat de aangeboden data hieraan voldoet. 

**buiten scope** zijn:
* De informatieleveringsspecificatie voor een te leveren dataset met wijzigingen.
* Een validatierapport of de kwaliteitstoets bij de dataset.

<aside class="note" title="Informatieleveringsspecificatie">
In een Informatieleveringsspecificatie staat:<ul>
<li>Welke informatie minimaal verplicht is uit het [=Informatiemodel Verkeerstekens=] of het model van het verkeersnetwerk. </li>
<li>Welke informatie mag worden toegevoegd uit het [=Informatiemodel Verkeerstekens=] of het model van het verkeersnetwerk. </li>
<li>In welk formaat of welke taal de wijziging kan worden aangeleverd</li>
<li>Of informatie mag worden toegevoegd uit een eigen informatiemodel</li> </ul> 
</aside> 


### Transactie
Als steeds de actuele verkeerskundige informatie gepubliceerd wordt, moeten wijzigingen door de wegbeheerder aan het publicatieplatform worden aangeboden. De wegbeheerder moet hiervoor een wijzigingstransactie starten.

De metadata over de transactie bij registratie en validatie van wijzigingen in de [=verkeerskundige informatie=] zijn **buiten scope**

<aside class="note" title="Transactie bij een datalevering">
Een hapy flow van een transactie is bijvoorbeeld als volgt:
<ul>
<li>De wegbeheerder biedt de wijziging aan en vraagt om deze te publiceren.</li> 
<li>De beheerder van de landelijke registratie belooft dit te zullen doen na validatie.</li> 
<li>Het Systeem controleert of aan alle leveringsvoorwaarden is voldaan en of de aangeboden wijziging aansluit op de ongewijzigde netwerkdelen.</li> 
<li>De beheerder van de landelijke registratie geeft aan dat de dataset voldoet aan alle voorwaarden en toont welke wijzigingen worden doorgevoerd.</li> 
<li>De wegbeheerder accepteert de wijzigingsvoorstellen van de beheerder van de landelijke registratie.</li> </ul> 

Daarnaast is voor een transactie een "Aanleverinstructie" nodig waarin staat:
- Hoe een wijziging kan worden aangeleverd: via VISI, een website, via een API, met adressering van de afnemer en het te volgen transactieprotocol
</aside> 







