# Inleiding


## Aanleiding

### Informatiebehoefte
Vanuit Smart Mobility en verkeerskunde zien we de behoefte aan accurate en actuele informatie, waarin voor het wegennet de wettelijke maximum snelheid en ge- en verboden (bijvoorbeeld parkeerverbod, inhaalverbod, stopverbod) per voertuigcategorie en met de daarbij geldende uitzonderingen/nadere aanduidingen op het onderbord (tijden, alleen bij glad wegdek, etc.) gevuld zijn voor ieder individueel wegvak of zelfs nog nauwkeuriger. Zodat een rij-assistent of navigatie-assistent de weggebruiker op het juiste moment kan informeren over het juiste gebruik van de weg, of een autonoom rijdend voertuig deze informatie kan gebruiken.

In Nederland wordt data over wegen vastgelegd in verschillende (basis)registraties. Die registraties omvatten vooral de registratie van de fysieke infrastructuur (BGT, BRT) en het wegennetwerk (NWB, WKD). 

Er ontbreekt echter een categorie gegevens: de verkeerskundige kenmerken, die instructie geven aan de gebruiker van de weg. Dit zijn kenmerken die van belang zijn voor afnemers, zoals weggebruikers en partijen die werken aan betere doorstroming, leefbaarheid en (verkeers)veiligheid. Maar ook wegbeheerders zelf hebben er belang bij, dat deze verkeerskundige kenmerken openbaar beschikbaar komen. Op deze wijze kunnen zij deze als uitgangspunt gebruiken bij het vaststellen van veranderingen in de verkeerssituatie, die uiteindelijk als een verkeersbesluit juridisch kan worden vastgesteld. 

### Gebreken
Verkeerskundige kenmerken zijn af te leiden uit de infrastructuur, verkeersregels, wegmarkeringen en borden. Verkeersbesluiten zijn daar een representatie van. Wegbeheerders zijn wettelijk verplicht om verkeersbesluiten digitaal te publiceren in de Staatscourant en deze officieel bekend te maken op [www.overheid.nl](www.overheid.nl). Daarbij publiceert de wegbeheerder zowel de tekst van het besluit, eventuele externe bijlagen met daarin de geschetste veranderingen van de verkeerssituatie als ook de metadata over dat besluit. In de huidige situatie is echter het huidig formaat van verkeersbesluiten niet optimaal geschikt om deze op een eenvoudige wijze in een machine-leesbare vorm te kunnen verwerken van besluiten tot kenmerken die gebruikt kunnen worden voor de digitalisering van werkprocessen van wegbeheerders en service providers en om de weggebruiker of rij-assistent digitaal te informeren. Op dit moment wordt door verschillende (markt)partijen definities gemaakt over verkeersborden en wegmarkeringen.

### Context
Het Ministerie van Infrastructuur en Waterstaat werkt samen met alle wegbeheerders aan het digitalisering van mobiliteit o.a. door het Organiseren van de Data Top 15 waar verkeersborden een van de data item is.

Het Ministerie van Infrastructuur en Waterstaat heeft in 2021 rondom verkeer en verkeersbesluiten twee digitaliseringstrajecten lopen: 

1. Het neerzetten van een Nationaal Wegen Bestand+ ([nieuwsbericht NWB](https://nationaalwegenbestand.nl/nieuws/ndw-wil-van-nwb-het-wegenbestand-voor-overheidsinformatie-maken)) en
2. Het bouwen van een verkeersbesluiten database ([Programma Netwerkregistraties](https://dutchmobilityinnovations.com/spaces/1270/programma-netwerkregistratie/landing))

Beide trajecten lopen tegen de uitdaging aan dat er meerdere bestanden zijn voor verkeersborden en markeringen en dat deze bestanden ook nog eens zijn opgesteld vanuit verschillende contexten. Om uiteindelijk richting een goede centrale database toe te kunnen werken is een Informatiemodel verkeerstekens en verkeersbesluiten essentieel. 


## Doel document

Dit document beschrijft de uitgangspunten en use case voor een Informatiemodel Verkeerstekens en Verkeersbesluiten.


## Doel informatiemodel

Doel van het Informatiemodel Verkeerstekens en Verkeersbesluiten is zorgen dat **verkeersborden en markeringen** op eenduidige manier gepubliceerd kunnen worden in relatie tot het wegennetwerk, **zodat deze informatie machine-verwerkbaar is**. In de toekomst, na 2023, is het doel:

> Auto en automobilist kunnen veilig en zuinig rijden, waarbij de auto haar snelheid en rijrichting automatisch aanpast aan de daar geldende verkeersregels, onder meer gepubliceerd conform het Informatiemodel Verkeersbesluiten. Alle na 2022 gefabriceerde autos voor de Europese markt moeten over techniek beschikken om dit te ondersteunen. [EU persbericht Veilig Verkeer](https://www.consilium.europa.eu/nl/press/press-releases/2019/11/08/safer-cars-in-the-eu/)


<aside class="note" title="Voorbeeld: drempels">
<p> Een **wegbeheerder** die een drempel wil aanleggen, kan daarmee twee verschillende doelen hebben: </p>
<ol><li> Zorgen dat het verkeer *snelheid mindert ten opzichte van de maximum snelheid*, zodat een gevaarlijke situatie voorkomen wordt (een kruising, een school, een uitrit....) </li>
<li> Zorgen dat het verkeer zijn *snelheid beperkt tot de maximum snelheid*, zodat over de gehele lengte van de weg niet te hard gereden wordt.</li></ol>
<p> Door op een kaart aan te geven dat er een Waarschuwingsbord komt voor een drempel, en de drempel op de kaart te zetten, is de bedoeling voor een verkeerskundige duidelijk, maar wordt het onderscheid tussen het eerste en tweede doel niet meer af te leiden. Door het ontwerp van de drempel kan een maximale snelheid worden "afgedwongen" omdat het niet comfortabel is om er harder overheen te rijden.</p>
<p> Een **Menselijke chauffeur** die het verkeersbord visueel waarneemt, neemt (meestal) ook gelijktijdig de drempel visueel waar. Als de drempel er hoog uitziet ten opzichte van de snelheid, mindert de chauffeur tot minder dan de maximum snelheid. Als de drempel er laag uitziet ten opzichte van de maximum snelheid, beperkt de chauffeur zich tot de maximum snelheid. Voor een menselijke chauffeur voldoet het bord. Vooral omdat een deel van de chauffeurs de route kent, en na een keer te hard over de drempel te zijn gereden de tweede keer de snelheid iets mindert. </p>
<p> Een **Automatische pilot** of een **Rij-assistent** kan ook via beeldherkenning het bord en de drempel waarnemen. De menselijke afweging hoe snel comfortabel over de drempel gereden kan worden, is voor een machine echter moeilijk te maken. De machine weet niet goed welke snelheid het voertuig zou moeten hebben bij de drempel. </p>
<p> Een **Automatische pilot** of een **Rij-assistent** krijgt in het ideale geval via de netwerkregistratie door, dat er een drempel ligt. Of eigenlijk: dat tussen punt x en punt y op zijn route (over de lengte van de drempel) snelheid geminderd moet worden tot x. Indien de drempel de maximum snelheid afdwingt, is de waarschuwing eigenlijk niet nodig; tenzij de menselijke chauffeur die zelf rijdt gewaarschuwd moet worden om hier toch maar even snelheid te minderen (bijvoorbeeld door het bord ook op de boordcomputer te tonen). Indien de drempel een lagere snelheid afdwingt, kan de machine de informatie goed interpreteren. Zowel het bord, als de lengte waarover de waarschuwing geldt, als de *consequentie*, langzamer rijden, zal opgenomen moeten worden in de landelijke registratie, om het hierboven beschreven doel te halen. </p>
  
</aside>

 
## Scope informatiemodel


### Wegsoorten

Het Informatiemodel Verkeerstekens en Verkeersbesluiten heeft als scope: nationale, regionale en lokale wegen, inclusief fiets- en voetpaden, binnen- en buiten de bebouwde kom.
Vaarwegen, spoorwegen, metrolijnen zijn buiten scope. Tramlijnen zijn binnen scope indien deze gecombineerd zijn met ander verkeer.

### Verkeersbesluiten

De scope van het Informatiemodel verkeerstekens en verkeersbesluiten is de use case "registratie van verkeersbesluiten". Waarmee bedoeld wordt: aanbieden van en publiceren van het verkeersbesluit in een landelijke registratie van het wegennetwerk met het doel:

*Het publiceren van zowel voor mensen leesbare als machine-verwerkbare verkeerskundige informatie die aangeeft wélke beperkingen op welke wegen gelden en wélk verkeer op welke wegen is toegestaan (ge- en verboden).*

Wegbeheerders zijn wettelijk verplicht om verkeersbesluiten digitaal te publiceren in de Staatscourant en deze officieel bekend te maken op www.overheid.nl. Daarbij publiceert de wegbeheerder zowel de tekst van het besluit, eventuele externe bijlagen met daarin de geschetste veranderingen van de verkeerssituatie als ook de metadata over dat besluit. In de huidige situatie is echter het huidig formaat van verkeersbesluiten niet optimaal geschikt om deze op een eenvoudige wijze in een machine-leesbare vorm te kunnen verwerken van besluiten tot kenmerken die gebruikt kunnen worden voor de digitalisering van werkprocessen van wegbeheerders en service providers en om de weggebruiker of rij-assistent digitaal te informeren. Het Informatiemodel verkeerstekens en verkeersbesluiten heeft als doel om verkeersbesluiten naast voor de mens bruikbaar ook machine-leesbaar vast te leggen. 


### Verkeersadviezen

Het publiceren van "niet wettelijk bindende" verkeersinstructies, zoals een advies om langzamer te rijden in een bocht, is *binnen scope* 
> is dat zo? [Issue 39](https://github.com/Stichting-CROW/verkeersborden/issues/39)

Het geven van instructies over algemene verkeersregels conform [Artikel 5a Wegenverkeerswet 1994](https://wetten.overheid.nl/jci1.3:c:BWBR0006622&hoofdstuk=II&paragraaf=1&artikel=5a&z=2021-10-19&g=2021-10-19) is buiten scope. 

### Verkeersborden

Alle verkeersborden zijn binnen scope, zowel de wettelijk toegestane borden uit [RVV 1990](https://wetten.overheid.nl/BWBR0004825/2021-07-01) als eigen aanvullingen door locale wegbeheerders.

### Markeringen

Die markeringen zijn binnen scope, die een specifieke gedragsinstructie geven over het gebruik van de weg. Markeringen die slechts de ligging van de rijstrook visueel aanduiden zijn buiten scope.
> is dat zo? [Issue 56](https://github.com/Stichting-CROW/verkeersborden/issues/56)

### Weginrichting

Uit de weginrichting volgen instructies over het gebruik van de weg. Deze zijn binnen scope.

> Is dat zo? [Issue 57](https://github.com/Stichting-CROW/verkeersborden/issues/57)
> Wat voor zaken kan de weggebruiker afleiden uit de "weginrichting" (niet zijnde borden en markeringen) waardoor informatie nodig is in het informatiemodel
>
> Zijn zichtlijnen een voorbeeld > een weggebruiker mag niet inhalen als het zicht slecht is?

## Leeswijzer

Dit document beschrijft de volgende zaken: 

* **3. Use case**

De use case beschrijft de interactie tussen de actoren: wegbeheerder, beheerder landelijke registratie, en de systemen die zij gebruiken bij het publiceren van verkeersbesluiten. De use case geeft een weergave van het verwachte gebruik van het informatiemodel in een specifiek, door een systeem ondersteund werkproces. 

* **4. Stakeholderanalyse**

De stakeholderanalyse verkent  welke partijen er belanghebbende, “leverancier” en “afnemer” zouden kunnen worden van de informatie, gemodelleerd met het Informatiemodel Verkeerstekens en Verkeersbesluiten. 

Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.



* **5. Raakvlakanalyse**

De raakvlakanalyse verkent welke informatiemodellen en informatiebronnen er al zijn voor:

1. Het functionele wegennetwerk en de fysieke ligging van de wegen.
2. De "digitale representatie" van verkeersborden en wegmarkeringen in andere use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.

* **6. Technische Uitgangspunten**

In Technische Uitganngspunten staan de normen en richtlijnen waaraan het Informatiemodel Verkeerstekens en Verkeersbesluiten dient te voldoen, en de wijze waarop wordt aangesloten op andere informatiemodellen. 

* **7. Beheer**
In Beheer staat beschreven hoe het beheer van het informatiemodel en de samenwerking met andere partijen wordt ingericht, zowel partijen die standaarden beheren als degenen die openbare digitale informatie publiceren over verkeersborden en wegmarkeringen.


* **8. Technische uitwerking**
De techische uitwqerking beschrijft de architectuur van applicaites en API's die gebruikt worden om het Informatiemodel Verkeerstekens en Verkeersbesluiten te publiceren en beheren, en om de transacties uit de use case af te kunnen handelen.







