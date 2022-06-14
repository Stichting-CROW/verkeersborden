# Inleiding

Het Ministerie van Infrastructuur en Waterstaat heeft CROW gevraagd om een [=Informatiemodel Verkeerstekens=] op te stellen. Dit document beschrijft de uitgangspunten, use-case en architectuurframework voor het informatiemodel. Om de inhoud van het informatiemodel te verkennen is daarnaast een beschrijving opgesteld van de informatie die nodig is om de wettelijke maximum snelheid op de weg te kunnen herleiden. Zie daarvoor [dit document](https://docs.crow.nl/verkeersborden/maximalesnelheid/)

## Aanleiding

### Context

<dfn data-lt="Data Top 15">Data Top 15</dfn>
<dd>In het landelijke programma 'Digitalisering Overheden' werkt het Ministerie van Infrastructuur en Waterstaat met vijf landsdelen samen om er voor te zorgen dat in 2030 alle wegbeheerders 'digitaal capabel in mobiliteit' zijn. Hiervoor is een Data Top 15 opgesteld, met onder andere maximumsnelheden, verkeersborden en andere datasets. https://www.datapedia.nl/ </dd>

Het Ministerie van Infrastructuur en Waterstaat heeft in 2021 rondom [=verkeerskundige informatie=] meeerdere digitaliseringstrajecten lopen: 

1. In het [=Programma Netwerkregistraties=] wordt samen met het [=NDW=] gewerkt aan het uitbreiden van het [=Nationaal Wegen Bestand=] voor het wegennetwerk en de bijgehorende verkeerskundige situatie 
2. In het [=Programma Netwerkregistraties=] wordt samen met [=KOOP=] gewerkt aan het uitbreiden van een [=verkeersbesluiten applicatie=] waarmee wegbeheerders hun [=verkeersbesluit=] kunnen publiceren als digitale [=verkeerskundige informatie=]
3. Samen met [=BIM loket=] wordt gewerkt aan het uitbreiden van NLCS met netwerkinformatie en verkeersborden om het verkeerskundige CAD-ontwerp beter te kunnen overdragen naar digitale [=verkeerskundige informatie=] voor invoer in het [=Nationaal Wegen Bestand=].

Alle trajecten lopen tegen de uitdaging aan dat er meerdere bestanden zijn voor verkeersborden en dat deze bestanden ook nog eens zijn opgesteld vanuit verschillende contexten. Om uiteindelijk richting een goede sectorregistratie van [=verkeerskundige informatie=] toe te kunnen werken is een [=Informatiemodel Verkeerstekens=] essentieel. 

Onderstaande afbeelding geeft aan wat het toekomstbeeld is voor het voorbeeld van maximumsnelheden. 

<figure>
<img src="./hoofdstukken/media/maximalesnelheid.PNG">
<figcaption>Maximale snelheid voor navigatiesystemen, van rechts naar links: Een wegbeheerder neemt een [=verkeersbesluit=]; het [=NDW=] registreert een nieuwe verkeerskundige situatie; in het [=NTM=] wordt de actuele verkeerskundige informatie gepubliceerd; [=SMART Mobility=] systemen kunnen de juiste verkeerskundige situatie afleiden uit de informatie en daarmee weggebruikers ondersteunen. </caption>
</figure>




### Informatiebehoefte

Het [=Informatiemodel Verkeerstekens=] is primair bedoeld om de informatiebehoefte vanuit [=SMART Mobility=] vast te leggen. De actuele digitale [=verkeerskundige informatie=] over de de weg moet makkelijk te wijzigen zijn door de wegbeheerder, eenduidig te interpreteren zijn voor de systemen van de weggebruiker en het liefst openbaar beschikbaar komen. 

<dfn data-lt="verkeerskundige informatie">verkeerskundige informatie</dfn>
<dd>Informatie over de op een weg geldende [=verkeersregels=], [=waarschuwingen=] en [=adviessnelheden=] en de bijbehorende [=verkeerstekens=].</dd>


### Bronhouders

Vanuit verkeerskunde groeit de behoefte om de werkprocessen rondom netwerkberekeningen, het toekennen van vergunningen voor tijdelijke verkeerssituaties en het publiceren van [=verkeersbesluiten=] te digitaliseren. Het [=Informatiemodel Verkeerstekens=] kan door wegbeheerders gebruikt worden bij het publiceren van (veranderingen in) de actuele verkeerskundige situatie op de weg. 

Op dit moment wordt door verschillende (markt)partijen registraties gepubliceerd over verkeersborden. De behoefte is om dit centraal te organiseren in een landelijke registratie, beheerd door het [=NDW=].

Twee barrières voor data delen
Voor het delen van data in de mobiliteitssector bestaan op dit moment twee belangrijke barrières. Allereerst moeten organisaties steeds opnieuw bilaterale afspraken maken voordat ze kunnen starten met een data-integratie. Dat is tijdrovend en kost geld. Op projectniveau is dat niet altijd haalbaar waardoor het veelal niet komt tot data delen en schaalvoordelen blijven liggen.

Gebrek aan vertrouwen
Daarnaast zijn veel data-eigenaren terughoudend om data te delen. Er is gebrek aan vertrouwen dat ketenpartners zorgvuldig omgaan met hun data en men is bang voor aansprakelijkheden. Met het verstrekken van data denken ze de controle daarover kwijt te raken.

### Registraties

In Nederland wordt digitale [=verkeerskundige informatie=] vastgelegd in verschillende (basis)registraties. Die registraties omvatten vooral de registratie van de fysieke infrastructuur ([=BGT=], [=BRT=]) en het wegennetwerk ([=NWB=], [=WKD=], [=WEGGEG=]). 

Er ontbreekt echter een categorie in de huidig beschikbare digitale informatie: 


<dfn data-lt="verkeersregel|verkeersregels">Verkeersregels</dfn>
<dd>De wettelijk geldende verkeersregels op een locatie volgens de [=RVV 1990=]. Hieronder vallen de wettelijke maximum snelheid en de ge- en verboden. </dd>

<dfn data-lt="waarschuwingen|waarschuwing">Waarschuwing</dfn>
<dd>De waarschuwingen op een locatie volgens de [=RVV 1990=]</dd>

<dfn data-lt="Adviessnelheden|Adviessnelheid">Adviessnelheid</dfn>
<dd>Een lokaal lagere snelheid dan standaard op die weg toegestaan is volgens de [=RVV 1990=]</dd>

<dfn data-lt="verkeerstekens|verkeersteken">Verkeersteken</dfn>
<dd>Een wettelijk vastgesteld teken ter regeling, waarschuwing, geleiding of informering van het verkeer. Onder de verkeerstekens vallen verkeersborden en wegmarkeringen.</dd>

<div class="issue" data-number="134"></div>


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

**3. Stakeholderanalyse** De stakeholderanalyse verkent  welke partijen er belanghebbende, 'leverancier' en 'afnemer' zouden kunnen worden van de informatie, gemodelleerd met het [=Informatiemodel Verkeerstekens=]. Dit gebeurt door een verkenning van de use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.

**4. Raakvlakanalyse** De raakvlakanalyse verkent welke informatiemodellen en informatiebronnen er al zijn voor:
1. Het functionele wegennetwerk en de fysieke ligging van de wegen.
2. De "digitale representatie" van verkeersborden en wegmarkeringen in andere use cases in de fases van de levenscyclus: Ontwerp, Bouw, Beheer, Gebruik, Sloop.

**5. Use case** De use case geeft een weergave van het verwachte gebruik van de digitale verkleerskundige informatie door een systeem van een weggebruiker.

**6. Toepassing** Het hoofdstuk over toepassing van het informatiemodel geeft een inzicht in het potentiele gebruik van het informatiemodel bij het genereren van digitale [=verkeerskundige informatie=].

**7. Technische Uitgangspunten** In Technische Uitganngspunten staan de normen en richtlijnen waaraan het [=Informatiemodel Verkeerstekens=] dient te voldoen, en de wijze waarop wordt aangesloten op andere informatiemodellen. 

**8. Beheer** In Beheer staat beschreven hoe het beheer van het informatiemodel en de samenwerking met andere partijen wordt ingericht, zowel partijen die standaarden beheren als degenen die openbare digitale informatie publiceren over verkeersborden en wegmarkeringen.

**9. Technische uitwerking** De techische uitwqerking beschrijft de architectuur van applicaites en API's die gebruikt worden om het [=Informatiemodel Verkeerstekens=] te publiceren en beheren, en om de transacties uit de use case af te kunnen handelen.





