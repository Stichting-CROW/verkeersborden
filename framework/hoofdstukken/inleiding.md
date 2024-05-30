# Inleiding

Het Ministerie van Infrastructuur en Waterstaat heeft CROW gevraagd om een [=Informatiemodel Verkeerstekens=] op te stellen. Dit document beschrijft de uitgangspunten, use-case en architectuurframework voor het informatiemodel. Om de inhoud van het informatiemodel te verkennen is daarnaast een beschrijving opgesteld van de informatie die nodig is om de wettelijke maximum snelheid op de weg te kunnen herleiden. Zie daarvoor [dit document](https://docs.crow.nl/verkeersborden/maximalesnelheid/)

### Context

Het Ministerie van Infrastructuur en Waterstaat heeft in 2021 rondom [=verkeerskundige informatie=] meerdere digitaliseringstrajecten en samenwerkingsverbanden lopen: 

1. In het [=Programma Netwerkregistraties=] wordt samen met het [=NDW=] gewerkt aan het uitbreiden van het [=Nationaal Wegen Bestand=] voor het [=verkeerskundig wegennetwerk=] en de bijgehorende verkeerskundige situatie, het [=NWB+=]
2. In het [=Programma Netwerkregistraties=] wordt samen met [=KOOP=] gewerkt aan het uitbreiden van een [=verkeersbesluiten applicatie=] waarmee wegbeheerders hun [=verkeersbesluit=] kunnen publiceren als digitale [=verkeerskundige informatie=]
3. Samen met [=DigiGO=] wordt gewerkt aan het uitbreiden van [=NLCS=] met verkeersborden om het verkeerskundige CAD-ontwerp beter te kunnen overdragen naar digitale [=verkeerskundige informatie=] voor invoer in het [=Nationaal Wegen Bestand=].
4. In het landelijke [=Programma Digitalisering Overheden=]] werkt het Ministerie van Infrastructuur en Waterstaat met vijf landsdelen samen om er voor te zorgen dat in 2023 alle wegbeheerders 'digitaal capabel in mobiliteit' zijn. Hiervoor is een [=Data Top 15=] opgesteld, met onder andere maximumsnelheden, verkeersborden en andere datasets.

Alle trajecten lopen tegen de uitdaging aan dat er meerdere bestanden zijn voor verkeersborden en dat deze bestanden ook nog eens zijn opgesteld vanuit verschillende contexten. Om uiteindelijk richting een goede sectorregistratie van [=verkeerskundige informatie=] toe te kunnen werken is een [=Informatiemodel Verkeerstekens=] essentieel. Het ministerie heeft [=CROW=] gevraagd om hiervoor dit framework op te stellen.

## Probleemstelling

Vanuit [=weggebruikers=] die ondersteund worden door [=Smart Mobility=] systemen is behoefte aan accurate en actuele informatie, waarin voor het wegennet de wettelijke maximum snelheid en ge- en verboden (bijvoorbeeld parkeerverbod, inhaalverbod, stopverbod) per voertuigcategorie en met de daarbij geldende uitzonderingen/nadere aanduidingen op het onderbord (tijden, alleen bij glad wegdek, etc.) gevuld zijn voor ieder individueel wegvak of zelfs nog nauwkeuriger, per [=rijstrook=] en rijrichting. 
<br>
<br>
Op dit moment wordt door verschillende (markt)partijen registraties gepubliceerd over verkeersborden. De digitale [=verkeerskundige informatie=] van de wegen in Nederland is incompleet, vaak niet actueel en niet accuraat, en zijn opgeslagen in meerdere bronnen die niet altijd vindbaar en combineerbaar zijn. Hierdoor moeten gebruikers van deze informatie allerlei dure en tijdrovende “work-arounds” en provisorische oplossingen vinden om hun échte werk goed te kunnen doen.  De behoefte is om dit centraal te organiseren in een landelijke registratie, beheerd door het [=NDW=].
<br>
<br>
<b>Barrières voor data delen</b>
<br>
<br>
Voor het delen van data in de mobiliteitssector bestaan op dit moment twee belangrijke barrières. Allereerst moeten organisaties steeds opnieuw bilaterale afspraken maken voordat ze kunnen starten met een data-integratie. Dat is tijdrovend en kost geld. Op projectniveau is dat niet altijd haalbaar waardoor het veelal niet komt tot data delen en schaalvoordelen blijven liggen.
<br>
<br>
Daarnaast zijn veel data-eigenaren terughoudend om data te delen. Er is gebrek aan vertrouwen dat ketenpartners zorgvuldig omgaan met hun data en men is bang voor aansprakelijkheden. Met het verstrekken van data denken ze de controle daarover kwijt te raken.
<br>
<br>

<b>Tekortkoming bestaande Registraties</b>

In Nederland wordt digitale informatie over wegen vastgelegd in verschillende (basis)registraties. Die registraties omvatten vooral de registratie van de fysieke infrastructuur (o.a. [=BGT=]) en het [=verkeerskundige wegennetwerk=] ([=NWB=], [=WKD=], [=WEGGEG=]). In de huidig beschikbare digitale informatie wordt nog niet de volledige [=verkeerskundige informatie=] ontsloten, wel sommige onderdelen waaronder maximum snelheid en de toegestande rijrichting. 

## Hoog over doel 

Het [=Informatiemodel Verkeerstekens=] is primair bedoeld om de informatiebehoefte vanuit [=SMART Mobility=] vast te leggen, zodat een systeem zoals een rij-assistent of navigatie-assistent de [=weggebruiker=] op het juiste moment kan informeren over het juiste gebruik van de weg, of een autonoom rijdend voertuig deze informatie kan gebruiken. 
<br>
<br>
De actuele digitale [=verkeerskundige informatie=] over de weg moet makkelijk te wijzigen zijn door de wegbeheerder, eenduidig te interpreteren zijn voor de systemen van de weggebruiker en het liefst openbaar beschikbaar komen. Het [=Informatiemodel Verkeerstekens=] moet daarbij helpen.


## Doel document

Dit document beschrijft de context, raakvlakken, use case, inhoudelijke en technische uitgangspunten voor een nationaal [=Informatiemodel Verkeerstekens=].



## Leeswijzer

Dit document beschrijft de volgende zaken: 

**2. Doel en scope** Beschrijft het doel en de inhoudelijke scope van de [=verkeerskundige informatie=] in het [=Informatiemodel Verkeerstekens=]

**3. Use case** De use case geeft een weergave van het verwachte gebruik van de digitale [=verkeerskundige informatie=] door een [=SMART Mobility=] systeem van een [=weggebruiker=]. Hieruit volgen eisen voor het [=Informatiemodel Verkeerstekens=].

**4. Stakeholderanalyse** De stakeholderanalyse verkent  welke partijen er 'gebruiker', 'leverancier' en 'afnemer' zijn van [=verkeerskundige informatie=], gemodelleerd met het [=Informatiemodel Verkeerstekens=]. Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop. Door in de gehele keten te denken kan duidelijk worden welke aanvullende eisen er gelden voor het informatiemodel, om gebruik en beheer van de [=verkeerskundige informatie=] te faciliteren.

**5-10. Raakvlakanalyse** De raakvlakanalyse beschijft welke beheerorganisaties, partijen en samenwerkingsverbanden er zijn die te maken hebben met wetgeving, digitale stelsels, standaarden of informatiemodellen, databronnen en niet-commerciële applicaties met als inhoud: 

1. Regels voor informatiemodellen
2. Het [=verkeerskundig wegennetwerk=] en de fysieke ligging van de wegen.
3. De digitale representatie van verkeersborden in andere use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.


**11. Beheer** In Beheer staat beschreven aan welke eisen het beheer van het informatiemodel moet voldoen.

**12. Samenstelling** In Samenstelling staat een overzicht van de onderdelen waaruit het informatiemodel bestaat, inclusief documentatie en implementatieondersteuning. 

**13. Vervolg** In Vervolg staat hoe verder gewerkt kan worden aan de ontwikeling en het in beheer nemen van het informatiemodel.





