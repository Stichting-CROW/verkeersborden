# Inleiding


## Aanleiding

In Nederland wordt data over wegen vastgelegd in verschillende (basis)registraties. Die registraties omvatten vooral de registratie van de fysieke infrastructuur (BGT, BRT) en het wegennetwerk (NWB, WKD). Het voordeel van de basisregistratie: er is betere dienstverlening mogelijk; er zijn efficiency voordelen; burgers en bedrijven hoeven gegevens maar één keer aan te leveren; de overheid hoeft de gegevens maar één keer te verwerken.

Er ontbreekt echter een categorie gegevens: de verkeerskundige kenmerken, die instructie geven aan de gebruiker van de weg. Dit zijn kenmerken die van belang zijn voor afnemers, zoals weggebruikers en partijen die werken aan betere doorstroming, leefbaarheid en (verkeers)veiligheid. Maar ook wegbeheerders zelf hebben er belang bij, dat deze verkeerskundige kenmerken openbaar beschikbaar komen. Op deze wijze kunnen zij deze als uitgangspunt gebruiken bij het vaststellen van veranderingen in de verkeerssituatie, die uiteindelijk als een verkeersbesluit juridisch kan worden vastgesteld. 

Verkeerskundige kenmerken zijn af te leiden uit de infrastructuur, verkeersregels, wegmarkeringen en borden. Verkeersbesluiten zijn daar een representatie van. Wegbeheerders zijn wettelijk verplicht om verkeersbesluiten digitaal te publiceren in de Staatscourant en deze officieel bekend te maken op [www.overheid.nl](www.overheid.nl). Daarbij publiceert de wegbeheerder zowel de tekst van het besluit, eventuele externe bijlagen met daarin de geschetste veranderingen van de verkeerssituatie als ook de metadata over dat besluit. In de huidige situatie is echter het huidig formaat van verkeersbesluiten niet optimaal geschikt om deze op een eenvoudige wijze in een machine-leesbare vorm te kunnen verwerken van besluiten tot kenmerken die gebruikt kunnen worden voor de digitalisering van werkprocessen van wegbeheerders en service providers en om de weggebruiker of rij-assistent digitaal te informeren. Op dit moment wordt door verschillende (markt)partijen definities gemaakt over verkeersborden en wegmarkeringen.

Het ministerie I&W heeft in 2021 rondom verkeer en verkeersbesluiten twee digitaliseringstrajecten lopen: 

1. Het neerzetten van een Nationaal Wegen Bestand+ ([nieuwsbericht NWB](https://nationaalwegenbestand.nl/nieuws/ndw-wil-van-nwb-het-wegenbestand-voor-overheidsinformatie-maken)) en
2. Het bouwen van een verkeersbesluiten database ([Programma Netwerkregistraties](https://dutchmobilityinnovations.com/spaces/1270/programma-netwerkregistratie/landing))

Beide trajecten lopen tegen de uitdaging aan dat er meerdere bestanden zijn voor verkeersborden en markeringen en dat deze bestanden ook nog eens zijn opgesteld vanuit verschillende contexten. Om uiteindelijk richting een goede centrale database toe te kunnen werken is een Informatiemodel verkeerstekens en verkeersbesluiten essentieel. 


## Doel document
Dit document beschrijft de uitgangspunten, use case en het architectuur framework voor een Informatiemodel Verkeerstekens en Verkeersbesluiten.


## Doel informatiemodel
Doel van het Informatiemodel Verkeerstekens en Verkeersbesluiten is zorgen dat **verkeersborden en markeringen** op eenduidige manier gepubliceerd kunnen worden in relatie tot het wegennetwerk, **zodat deze informatie machine-verwerkbaar is**. In de toekomst, na 2023, is het doel:

> Auto en automobilist kunnen veilig en zuinig rijden, waarbij de auto haar snelheid en rijrichting automatisch aanpast aan de daar geldende verkeersregels, onder meer gepubliceerd conform het Informatiemodel Verkeersbesluiten. Alle na 2022 gefabriceerde autos voor de Europese markt moeten over techniek beschikken om dit te ondersteunen. [EU persbericht Veilig Verkeer](https://www.consilium.europa.eu/nl/press/press-releases/2019/11/08/safer-cars-in-the-eu/)


## Scope informatiemodel

De scope van het Informatiemodel verkeerstekens en verkeersbesluiten is de use case "registratie van verkeersbesluiten". Waarmee bedoeld wordt: aanbieden van en publiceren van het verkeersbesluit in een landelijke registratie van het wegennetwerk met het doel:

> "Het publiceren van de verkeerskundige wegendata; dit zijn de data die gaan over wélke beperkingen op welke wegen gelden en wélk verkeer op welke wegen is toegestaan (ge- en verboden)." (Quote: [Programma Netwerkregistraties](https://dutchmobilityinnovations.com/spaces/1270/programma-netwerkregistratie/landing))

Het publiceren van de wijziging voor juridische doeleinden zoals bedoeld in de wet verkeersbesluiten (bijvoorbeeld door bekendmaking op een website van een overheid) is buiten scope > is dat zo? [issue 32](https://github.com/Stichting-CROW/verkeersborden/issues/32).

Het publiceren van "niet wettelijk bindende" verkeersinstructies, zoals een advies om langzamer te rijden in een bocht, is *binnen scope* > is dat zo? [Issue 39](https://github.com/Stichting-CROW/verkeersborden/issues/39)


### Voorbeeld

> [!TIP]
> Een **wegbeheerder** die een drempel wil aanleggen, kan daarmee twee verschillende doelen hebben:
>    1. Zorgen dat het verkeer *snelheid mindert ten opzichte van de maximum snelheid*, zodat een gevaarlijke situatie voorkomen wordt (een kruising, een school, een uitrit....)
>    2. Zorgen dat het verkeer zijn *snelheid beperkt tot de maximum snelheid*, zodat over de gehele lengte van de weg niet te hard gereden wordt.
>    Door op een kaart aan te geven dat er een Waarschuwingsbord komt voor een drempel, en de drempel op de kaart te zetten, is de bedoeling voor een verkeerskundige duidelijk, maar wordt het onderscheid tussen het eerste en tweede doel niet meer af te leiden. Door het ontwerp van de drempel kan een maximale snelheid worden "afgedwongen" omdat het niet comfortabel is om er harder overheen te rijden.
>    
>    Een **Menselijke chauffeur** die het verkeersbord visueel waarneemt, neemt (meestal) ook gelijktijdig de drempel visueel waar. Als de drempel er hoog uitziet ten opzichte van de snelheid, mindert de chauffeur tot minder dan de maximum snelheid. Als de drempel er laag uitziet ten opzichte van de maximum snelheid, beperkt de chauffeur zich tot de maximum snelheid. Voor een menselijke chauffeur voldoet het bord. Vooral omdat een deel van de chauffeurs de route kent, en na een keer te hard over de drempel te zijn gereden de tweede keer de snelheid iets mindert.
>    
>    Een **Automatische pilot** of een **Rij-assistent** kan ook via beeldherkenning het bord en de drempel waarnemen. De menselijke afweging hoe snel comfortabel over de drempel gereden kan worden, is voor een machine echter moeilijk te maken. De machine weet niet goed welke snelheid het voertuig zou moeten hebben bij de drempel. 
>    
>    Een "Automatische pilot" of een "Rijondersteuning" in een auto krijgt in het ideale geval via de netwerkregistratie door, dat er een drempel ligt. Of eigenlijk: dat tussen punt x en punt y op zijn route (over de lengte van de drempel) snelheid geminderd moet worden tot x. Indien de drempel de maximum snelheid afdwingt, is de waarschuwing eigenlijk niet nodig; tenzij de menselijke chauffeur die zelf rijdt gewaarschuwd moet worden om hier toch maar even snelheid te minderen (bijvoorbeeld door het bord ook op de boordcomputer te tonen). Indien de drempel een lagere snelheid afdwingt, kan de machine de informatie goed interpreteren. Zowel het bord, als de lengte waarover de waarschuwing geldt, als de *consequentie*, langzamer rijden, zal opgenomen moeten worden in de landelijke registratie, om het hierboven beschreven doel te halen.



## Leeswijzer

Dit document beschrijft de uitgangspunten, use case en het architectuur framework voor een Informatiemodel Verkeerstekens en Verkeersbesluiten.


Dit document bevat: 

* **Uitgangspunten**
Bij de uitgangspunten wordt onderscheid gemaakt in:
* Technische uitganngspunten;
* Organisatorische uitgangspunten waaronder het beheer van het informatiemodel en de samenwerking met andere partijen die standaarden beheren of digitale informatie publiceren over verkeersborden en wegmarkeringen.

* **Use case**
De use case bevat de volgende processtappen voor de gebruiker:
1. Het aanbieden van een wijziging in de wegligging en/of de verkeersregels;
2. Het valideren van de aangeboden wijziging;
3. Het publiceren van de wijziging in de landelijke netwerkregistratie.

* **Raakvlakanalyse**
In de raakvlakanalyse worden de raakvlakken van de verkeersborden en wegmarkeringen in het Informatiemodel Verkeerstekens en Verkeersbesluiten verkend ten opzichte van andere objecten (met name het functionele wegennetwerk en de fysieke ligging van de wegen), en ten opzichte van de "digitale representatie" van dezelfde verkeersborden en wegmarkeringen in andere use cases. 

* **Stakeholderanalyse**
Allereerst is het belangrijk om in kaart te brengen welke bouwstenen er al zijn en welke partijen er belanghebbende, “leverancier” en “afnemer” zouden kunnen worden van dit informatiemodel. Hiervoor voeren wij een krachtenveld analyse uit waarbij de relevante spelers in kaart brengen.

* **Architectuur Framework**
Het architectuur framework beschrijft.....



