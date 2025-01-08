# Doel en scope 

## Doel informatiemodel

Korte termijn doel is:

* Het  [=Informatiemodel Verkeerstekens=] MOET zorgen dat **[=verkeersmaatregelen=], [=waarschuwingen=] en [=verkeersborden=]** op eenduidige manier gepubliceerd kunnen worden in relatie tot het [=verkeerskundige wegennetwerk=], **zodat deze informatie machine-verwerkbaar is**. 

In de toekomst, na 2023, wordt de horizon verbreed naar [=SMART mobility=], met als doel dat auto en automobilist veilig en zuinig kunnen rijden, waarbij de auto haar snelheid en rijrichting automatisch aanpast aan de daar geldende, digitaal beschikbare, [=verkeersmaatregelen=]. Alle na 2022 gefabriceerde auto's voor de Europese markt moeten over techniek beschikken om dit te ondersteunen. [EU persbericht Veilig Verkeer](https://www.consilium.europa.eu/nl/press/press-releases/2019/11/08/safer-cars-in-the-eu/).

Het secundaire doel is:
* Het  [=Informatiemodel Verkeerstekens=] MOET het *opstellen en beheren* van de [=verkeerskundige informatie=] ondersteunen: de wegbeheerder moet daarvoor herkenbare informatievelden invullen en de informatie kunnen beheren als aanvulling op, en passend bij, de asset informatie voor beheer en voor andere landelijke registraties.

In de toekomst moet het ook mogelijk zijn om voor het werkproces van het maken van verkeersmodellen en wegontwerpen de actuele [=verkeerskundige informatie=] te kunnen gebruiken als basis voor het ontwerp van een nieuwe verkeerskundige situatie.

## Beoogde architectuur


### Wegbeheerder als bronhouder

De stip op de horizon is het federatief data delen, waarbij de wegbeheerders de bronhouder zijn van verkeerskundige informatie, en het NDW een toegangspoort vormt tot die data. Onderstaande afbeelding geeft dat principe weer. Het informatiemodel wordt gepubliceerd door CROW; de wegbeheerder is de bronhouder voor [=verkeerskundige informatie=] op basis van het informatiemodel en deelt deze federatief met het [=NDW=], daarnaast deelt de wegbeheerder federatief data over verkeersbesluiten bij het KOOP (hiervoor is een ander informatiemodel nodig); de SMART Mobility systemen kunnen via het NDW de informatie van alle wegbeheerders vinden.

<figure>
<img src="../images/beoogdearchitectuur.jpg" width=100%>
<figcaption>De beoogde architectuur</caption>
</figure>


### Informatieketen

Het [=Informatiemodel Verkeerstekens=] kan door wegbeheerders gebruikt worden bij het registreren en publiceren van de actuele verkeerskundige situatie op de weg. Een wegbeheerder stelt in drie contexten digitale [=verkeerskundige informatie=] op:

1. Het inmeten en vastleggen van de huidige verkeerskundige situatie om de digitale informatie betrouwbaar, compleet en actueel te maken. De informatie wordt vastgelegd in een landelike netwerkregistratie.
2. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor een verkeersbesluit gepubliceerd wordt. De informatie wordt gepubliceerd door KOOP. Vastlegging van de informatie wordt ondersteund in een verkeersbesluitenapplicatie.
3. Het doorgeven van tijdelijke en permanente wijzigingen in de verkeerskundige situatie waarvoor geen verkeersbesluit gepubliceerd hoeft te worden.

De wegbeheerder moet daarvoor informatie kunnen delen met opdrachtnemers zoals ingenieursbureaus die de verkeerskundige situatie ontwerpen en uitvoeren. De beoogde informatieketen wordt weergegeven in onderstaande afbeelding. Het informatiemodel wordt gepubliceerd door CROW. Deze is gerelateerd aan de verkeersborden in [=NLCS=]. Een opdrachtnemer kan de gewenste nieuwe situatie ontwerpen in een ontwerpapplicatie en na uitvoering gegevens leveren aan de wegbeheerder, die zijn brondata kan beheren. 

<figure>
<img src="../images/informatieketen.jpg" width=100%>
<figcaption>De informatieketen bij wijzigingen in de verkeerskundige situatie.  </caption>
</figure>

### Relatie met beheer- en inkoopgegevens
De wegbeheerder houdt administratieve gegevens bij over de verkeersborden in zijn areaal met als doel het kunnen bijhouden en uitvoeren van beheermaatregelen zoals reiniging.
Daarnaast moet het bord kunnen worden vervangen als het kwijt is. En moet een burger of inspecteur het bord kunnen "aanwijzen" op een kaart, als het kwijt is.

De "linking pin" met de landelijke registratie is daarbij de fysieke plaat die buiten aangetroffen wordt. Onderstaande afbeelding laat dit zien.

<figure>
<img src="../images/wegbeheerder-inkoop.jpg" width=100%>
<figcaption>De relatie tussen de landelijke registratie, de beheerinformatie van de wegbeheerder, een melding dat een bord kwijt is en de inkoop van een verkeersbord voor vervanging.  </caption>
</figure>


## Use case

De scope van het [=Informatiemodel Verkeerstekens=] is de use case "Gebruiken van digitale [=verkeerskundige informatie=] over de ter plaatse geldende [=verkeersmaatregelen=], [=waarschuwingen=]  en de locatie van bijbehorende verkeersborden in een systeem voor [SMART Mobility] dat een [=weggebruiker=] ondersteunt tijdens deelname aan het verkeer." 

De gebruikers die in deze use case centraal staan zijn de [=weggebruikers=], die tijdens het rijdens willen weten welke [=verkeersmaatregelen=] en [=waarschuwingen=] gelden voor de weg waar ze op rijden. De [=weggebruikers=] willen visueel ondersteund worden met de afbeeldingen van bijbehorende verkeersborden om deze informatie tijdens het rijden zo eenvoudig mogelijk te kunnen opnemen. 


##  Inhoudelijke Scope 

### Levensfase assets
* Het informatiemodel MOET het **gebruik** van de weg ondersteunen met digitale [=verkeerskundige informatie=]. 

* Het informatiemodel MOET rekening houden met aansluiting op asset informatie van de wegbeheerder en daarmee het **opstellen** en **beheren** van de digitale [=verkeerskundige informatie=] door de wegbeheerder ondersteunen.

Dit leidt ertoe dat de scope is beperkt tot de twee onderste lagen in onderstaande afbeelding: de fysieke laag voor de locatie van de verkeersborden en de netwerklaag, waarin het wegennetwerk en de daarbij geldende [=verkeersmaatregelen=] en [=waarschuwingen=]. 

<figure>
<img src="../images/scope.jpg" width=50%>
<figcaption>De lagen waarop verkeerskundige informatie kan worden vastgelgd: onderin de fysieke laag, met verhardingen en verkeersborden; de tweede laag is het netwerk en de geldende verkeersmaatregelen; de derde laag is die van tijdelijke situaties bij verbouwingen aan de weg; de vierde laag is die van actueel gebruik van het netwerk, verkeersgegevens, files en dergelijke; de vijfde laag is de besturing van de mobiliteit.  </caption>
</figure>

**Buiten scope** zijn:
* Informatie die nodig is tijdens het ontwerp, zoals het alignement of de ontwerpsnelheid, is buiten scope.
* Informatie die nodig is tijdens het bouwen, zoals inkoopeisen en garantiebepalingen van verkeersborden, is buiten scope.
* Informatie die nodig is tijdens het beheer, zoals de onderhoudstoestand van verkeersborden, is buiten scope.
* Informatie die nodig is tijdens de sloop, zoals materialenpaspoorten van verkeersborden, is buiten scope.

### Wegsoorten

Het [=Informatiemodel Verkeerstekens=] heeft als scope: [=verkeerskundige informatie=] bij het [=verkeerskundige wegennetwerk=] bestaande uit nationale, regionale en lokale wegen, inclusief fiets- en voetpaden, binnen en buiten de bebouwde kom. Het informatiemodel maakt het mogelijk verkeerskundige informatie toe te voegen aan het [=verkeerskundige wegennetwerk=] zoals dat gepubliceerd wordt bij het [=NWB=] met [=NWB-wegvakken=] en [=NWB-juncties=]. 

**Buiten scope** zijn vaarwegen, spoorwegen, metrolijnen zijn buiten scope. Tramlijnen zijn binnen scope indien deze gecombineerd zijn met ander verkeer.
Het informatiemodel van het [=verkeerskundige wegennetwerk=] is buiten scope, dit hoort bij de geo-registratie van het netwerk waar het [=Informatiemodel Verkeerstekens=] de verkeersmaatregelen en dergelijke beschrijft ten opzichte van het netwerk.


### Verkeersmaatregelen
[=verkeersmaatregelen=] en [=waarschuwingen=] uit [=RVV 1990=] zijn binnen scope, met de bijbehorende [=verkeersborden=]. Ge- en verboden die volgen uit de weginrichting, bijvoorbeeld niet mogen inhalen bij een doorgetrokken streep, zijn binnen scope. 
Daarnaast is een lijst [=verkeersmaatregelen=], [=waarschuwingen=] en [=verkeersborden=] binnen scope die op de nominatie staan om bij een volgende wetswijziging te worden opgenomen. 
Bij het verkeersbord worden zaken vastgelegd die voor de [=weggebruiker=] van belang zijn: plaatsingsdatum, beoogde locatie, type, informatie in het onderbord, en overige kenmerken van het verkeersbord die aanduiden wat de [=verkeersmaatregel=] is. 

* Het informatiemodel MOET de types en definities van de [=verkeersmaatregelen=], [=waarschuwingen=] bevatten die in de [=RVV 1990=] staan. 
* Het informatiemodel MOET de types en definities van de [=verkeersmaatregelen=], [=waarschuwingen=] bevatten die genomineerd zijn om in de wet te worden opgenomen. 
* Het informatiemodel MOET duidelijk aangeven welke [=verkeersmaatregelen=] of [=waarschuwingen=] al opgenomen zijn in wetgeving, en welke nog niet.
* Het informatiemodel MOET mogelijk maken om niet-wettelijke borden, die wel buiten aanwezig zijn of die slechts genomineerd zijn om opgenomen te worden, te registreren. 

**Buiten scope** zijn verkeersregels en voorwaarden voor verkeersregels. Indien deze voorwaarden niet worden aangeduid met een verkeersbord, zijn deze buiten scope. Om duidelijk te maken wat we hier bedoelen werken we hieronder het voorbeeld van "zicht" uit.
<br>
<b>Zicht</b><br>
[RVV 1990 art 19](https://wetten.overheid.nl/jci1.3:c:BWBR0004825&hoofdstuk=II&paragraaf=8&artikel=19&z=2021-07-01&g=2021-07-01) geeft aan: De bestuurder moet in staat zijn zijn voertuig tot stilstand te brengen binnen de afstand waarover hij de weg kan overzien en waarover deze vrij is.

Deze inschatting verschilt per voertuig en is daarom *buiten scope* van het informatiemodel, ook al kan een rechter, in het geval van een ongeluk, concluderen dat een bestuurder sneller heeft gereden dan wettelijk is toegestaan volgens deze regel.


### Statische verkeersborden

* **Binnen scope** zijn alle [=statische verkeersborden=] uit RVV 1990 en (informatie in) onderborden; aangevuld met een lijst verkeersborden die op de nominatie staan om bij een volgende wetswijziging te worden opgenomen.


* Het informatiemodel MOET de types en definities van de [=statische verkeersborden=] bevatten die in de [=RVV 1990=] staan. 
* Het informatiemodel MOET de types en definities van de [=statische verkeersborden=] bevatten die genomineerd zijn om in de wet te worden opgenomen. 
* Het informatiemodel MOET duidelijk aangeven welke [=statische verkeersborden=] al opgenomen zijn in wetgeving, en welke nog niet.
* Het informatiemodel MOET de meest voorkomende onderborden opnemen en de mogelijkheid om eigen gemaakte teksten op onderborden te publiceren. 

**Buiten scope**  zijn de [=dynamische verkeersborden=]. 


### Overige fysieke assets: buiten scope

* **Buiten scope** zijn de [=wegmarkeringen=], deze ondersteunen het rijden en geven een visuele herhaling van de informatie die via de verkeersborden (en straks via digitale [=verkeerskundige informatie=]) al bekend zijn gemaakt. 

* **Buiten scope** is de [=bewegwijzering=].

* **Buiten scope** is de [=bebakening=], de voorwerpen die ter geleiding, waarschuwing, regeling en beveiliging van het verkeer dienen.

* **Buiten scope** zijn verkeerslichten

## Processen: buiten scope

### Procedure verkeersbesluit: buiten scope

**Buiten scope** zijn:
* De metadata over de juridische procedure van het [=verkeersbesluit=] bij de [=verkeersmaatregel=].
* De inhoud van de juiridische procedure.

### Informatieleveringsspecificatie: buiten scope
Als steeds de actuele verkeerskundige informatie gepubliceerd wordt, moeten wijzigingen door de wegbeheerder aan het publicatieplatform worden aangeboden. De wegbeheerder heeft voor het aanleveren van een wijziging in de [=verkeerskundige informatie=] een "Informatieleveringsspecificatie" nodig en moet kunnen aantonen dat de aangeboden data hieraan voldoet. 

**buiten scope** zijn:
* De informatieleveringsspecificatie voor een te leveren dataset met wijzigingen.
* Een validatierapport of de kwaliteitstoets bij de dataset.

<aside class="note" title="Informatieleveringsspecificatie">
In een Informatieleveringsspecificatie staat:<ul>
<li>Welke informatie minimaal verplicht is uit het [=Informatiemodel Verkeerstekens=] of het model van het [=verkeerskundige wegennetwerk=]. </li>
<li>Welke informatie mag worden toegevoegd uit het [=Informatiemodel Verkeerstekens=] of het model van het [=verkeerskundige wegennetwerk=] </li>
<li>In welk formaat of welke taal de wijziging kan worden aangeleverd</li>
<li>Of informatie mag worden toegevoegd uit een eigen informatiemodel</li> </ul> 
</aside> 


### Transacties met landelijke registratie: buiten scope
Als de actuele verkeerskundige informatie gepubliceerd wordt bij een landelijke registratie, moet het systeem van de wegbeheerder (of het systeem dat verkeersbesluiten officiëel publiceert) een wijzigingstransactie kunnen aangaan met de landelijke registratie.

De metadata over de transactie bij registratie en validatie van wijzigingen in de [=verkeerskundige informatie=] zijn **buiten scope**, het informatiemodel beschrijft dus niet transactie-informatie zoals organisaties, rollen, personen en communicatieflows met berichten.

<aside class="note" title="Transactie bij een datalevering">
Een hapy flow van een transactie is bijvoorbeeld als onderstaand, de meeste stappen zijn volledig geautomatiseerd.
<ol>
<li>Het systeem van de wegbeheerder levert de wijziging aan de landelijke registratie en vraagt om deze te publiceren.</li> 
<li>De landelijke registratie bevestigt het verzoek te hebben ontvangen.</li> 
<li>De landelijke registratie controleert of aan alle leveringsvoorwaarden is voldaan. </li> 
<li>De landelijke registratie accepteert de dataset.</li> </ol>
Daarnaast is voor een transactie een "Aanleverinstructie" nodig waarin staat hoe een wijziging kan worden aangeleverd
<ul><li> Via welke API (Application Programming Interface) het systeem van de wegbeheerder kan communiceren met de landelijke registratie</li>
<li>Welke informatie geleverd moet worden (zowel van de verkeerskundige informatie als de transactie-informatie) </li>
<li>In welk uitwisselformaat de informatie geleverd moet worden</li>
<li>Of eerst de wijziging in het [=verkeerskundige wegennetwerk=] en dan de wijziging in de [=verkeersmaatregelen=] en [=verkeersborden=] moet worden geleverd of dat dit gelijktijdig kan. </li></ul>
</aside> 







