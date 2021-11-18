# Technische Uitgangspunten


## Informatiemodellering

* Het informatiemodel wordt opgesteld conform de regels voor semantisch modelleren en met de relaties en concepten in de NEN 2660:2021.
* Waar mogelijk wordt aangesloten op de NEN 3610 en de MIM. Bij tegenstrijdigheden geldt de NEN 2660.
* Het architectuur framework moet generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt. 
* In het informatiemodel worden definities opgenomen van concepten of wordt verwezen naar definities in wetten of andere informatiemodellen.


## Verkeersinstructies RVV 1990
1. Het informatiemodel geeft functionele verkeersinstructies voor de weggebruiker op basis van het [RVV 1990](https://wetten.overheid.nl/BWBR0004825/2021-07-01) (Reglement verkeersregels en verkeerstekens 1990). Aanwijzingen door verkeersregelaars zijn buiten scope van het informatiemodel. 
2. Het informatiemodel gebruikt de definities uit het [RVV 1990](https://wetten.overheid.nl/BWBR0004825/2021-07-01)


## Adviessnelheid
Naast de wettelijk geldende verkeersinstructie over bijvoorbeeld de maximum snelheid zijn er veel waarschuwingsborden die indirect (voor de mens goed te interpreteren) advies geven over het matigen van de snelheid. Bijvoorbeeld gewenste lage snelheid bij donker en schemering om aanrijdingen met wild te beperken, of bij een drempel, inrit of zebrapad. Het informatiemodel geeft de mogelijkheid een adviessnelheid toe te voegen, naast de maximumsnelheid. Afhankelijk van de verkeerssituatie kan dit leiden tot een lagere snelheid langs meerdere gevaarlijke punten (bijvoorbeeld, een zebra (met bord) een inrit (zonder bord) en daarna wordt een kruispunt genaderd: over de gehele lengte kan een lagere snelheid gelden, los van de individuele waarschuwingen bij de gevaarlijke punten.

## Verkeersborden
1. Het informatiemodel geeft naast de functionele verkeersinstructies ook de mogelijkheid om de fysieke verschijningsvorm van een bord met een of meerdere onderborden vast te leggen. 
2. Het informatiemodel geeft de fysieke verschijningsvorm van het bord weer conform - [issue 24](https://github.com/Stichting-CROW/verkeersborden/issues/24) Is er een bestand met afbeeldingen van wettelijk toegestane borden? Of zijn deze alleen beschreven in de wet? 
3. Bij elk bord geeft het informatiemodel een link naar de afbeelding van het bord in het [Reglement verkeersregels en verkeerstekens 1990]. 
4. Een wegbeheerder mag eigen borden toevoegen, hiervan dient een definitie en afbeelding opgesteld te zijn en als linked open data gepubliceerd op de wijze van het informatiemodel.
5. Het informatiemodel geeft naast vaste borden ook de mogelijkheid om de locatie van dynamische borden weer te geven, zodat we weggebruiker kan worden geattendeerd om hierop te letten. 


## Verkeersnetwerk

### Wegvak

De in het NWB-Wegen opgenomen geografische basisobjecten zijn ‘wegvak’ en ‘junctie’, aan de hand waarvan het complete Nederlandse wegennetwerk kan worden geïdentificeerd. Elk wegvak loopt van een begin- naar een eindjunctie en kent een positieve en een negatieve richting. Het Nationaal Wegen Bestand is mog niet tot op het niveau van een "rijstrook" gedifferentieerd; afhankelijk van de wegindeling kan een wegvak gaan over een weg met twee rijrichtingen; of over een rijbaan met meerdere rijstroken in één richting van de weg, waarbij de rijstroken niet zijn opgesplitst in afzonderlijke wegvakken. 

Het informatiemodel geeft verkeersinstructies voor de weggebruiker weer ten opzichte van een "Wegvak" in het Nationaal Wegenbestand. Daarbij worden de volgende regels gebruikt:

### Rijrichting

Het informatiemodel geeft verkeersinstructies voor de weggebruiker default weer voor beide rijrichtingen indien deze in het wegvak zijn inbegrepen. Indien de instructie slechts geldt voor één richting of een deel van het wegvak, moet deze worden opgesplitst per richting.


### Rijstrook
Het informatiemodel maakt het mogelijk om de verkeersinstructie te laten gelden voor één van de rijstroken, die worden genummerd vanuit het midden van de weg. 


### Beginpunt

Het informatiemodel geeft verkeersinstructies voor de weggebruiker default weer over de gehele lengte van het wegvak; dus van junctie tot junctie. De verkeersinstructie kan worden beperkt door het aangeven van een specifiek beginpunt; default loopt de instructie door tot de junctie, tenzij ook een eindpunt is aangegeven. 

### Eindpunt

Het informatiemodel maakt het mogelijk om de verkeersinstructie te laten gelden vanaf een specifiek beginpunt; default loopt de instructie door tot de junctie, tenzij ook een eindpunt is aangegeven. 


### Bord / markeringspunt
Het informatiemodel maakt het mogelijk om aan te duiden waar het fysieke verkeersbord / de markering zou moeten staan ten opzichte van de lengterichting van het Wegvak; default is dit op het beginpunt van de verkeersinstructie. 


### Bordlocatie
Het informatiemodel maakt het mogelijk om aan te duiden of het fysieke verkeersbord boven het Wegvak / de rijbaan / de rijstrook is gesitueerd, of naast de weg.


# Organisatorische uitgangspunten

Het Informatiemodel Verkeerstekens en verkeersbesluiten zal in beheer genomen moet worden om up to date te blijven. 

## Strategie
De beheerstrategie is open en transparant beheer conform het Beheermodel voor Open Standaarden [BOMOS](https://www.forumstandaardisatie.nl/sites/bfs/files/proceedings/FS22-10-04%204b%20BOMOS.pdf).

Beheer volgens BOMOS heeft de volgende voordelen:
* Belangen van stakeholders worden evenwichtig afgewogen bij ontwikkeling en beheer van de standaard.
* De standaard wordt samen met gebruikers actueel gehouden, iedereen kan ideeën aandragen.
* Het beheer gebeurt transparant.
* Informatie is voor iedereen toegankelijk met heldere voorwaarden voor gebruik.

![Activiteitendiagram van BOMOS van Forum voor standaardisatie](./media/bomos.PNG "Activiteitendiagram van Beheermodel voor Open Standaarden (BOMOS) van Forum voor standaardisatie")


### Governance
Het beheer van het Informatiemodel Verkeerstekens en verkeersbesluiten moet worden belegd bij een uitvoerende organisatie die een transparante besluitvorming en open inspraak organiseert en tactische en operationele beheertaken uitvoert.
Wordt dat CROW, NWB, ??? > en wie heeft het meest geschikte profiel als beheerder van de standaard? Of invoegen in bestaande standaard met eigen product manager?

Wordt het Informatiemodel een onderdeel van IMBOR (waar de governance al is beschreven) of partnerstandaard van IMBOR > of wordt alleen gezorgd voor afstemming en gelijktijdige publicatie van nieuwe versies?

Welke overheidspartijen of partnerstandaarden moeten deelnemen in een sturend orgaan dat verantwoordelijk is voor besluitvorming en evenwichtige afweging van de belangen van de stakeholders?

Een stuurgroep, gebruikersgroep, expertgroep, werkgroep dient een onafhankelijke voorzitter te hebben. De rol van de voorzitter is van cruciaal belang, en heeft veel invloed op het eindresultaat. 

Relevante typen stakeholders moeten een plek kunnen krijgen ergens in de gekozen structuur van de beheerorganisatie, en niet principieel worden buitengesloten. Dat wil niet zeggen dat elk type stakeholder per definitie dezelfde rechten en plichten heeft. Zorg
daarnaast ervoor dat binnen die groepen vooral organisaties aangesloten zijn die zich committeren aan de standaard

Welke overheidspartijen of partnerstandaarden moeten deelnemen in een gebruikerscommissie?

Welke (soorten) marktpartijen moeten betrokken worden?

Betrokkenheid van belangenorganisaties is van cruciaal belang vanwege het feit dat ze vaak optimaal hun achterban kunnen bereiken en vertegenwoordigen. Alle relevante belangenorganisaties moeten dan ook betrokken zijn, en waar mogelijk moeten partnerschappen worden gesloten op het gebied van communicatie.

Voor iedereen moet helder zijn op welke manier, binnen welk tijdskader en door wie beslissingen worden genomen. Dit geldt zowel voor de meer strategische besluiten als voor de operationele afstemming over een standaard. Voor elk type orgaan moet worden beschreven hoe de besluitvorming is ingericht. Daarbij is alleen meerderheid of consensus besluitvorming toegestaan. Waarbij aangegeven kan worden of er meerdere stemmingsronden mogelijk zijn.

Beschreven moet zijn wie in welke groep kan participeren en hoe men zich er voor kan aanmelden en hoe over uiteindelijke deelname wordt besloten.

Het sturende orgaan moet over zijn eigen benoemingen kunnen besluiten. Daarnaast moeten benoemingen in de tijd gelimiteerd zijn. 

### Visie


### Financiën
Er moet een structureel financieringsmodel beschreven zijn dat realistische garanties geeft dat er jaarlijks structureel voldoende budget is om op zijn minst de standaard te onderhouden. Een eenmalige subsidie voldoet dus zeker niet hieraan.

## Tactiek


### Community
De beheerder van een standaard dient zich actief op te stellen naar haar omgeving. De beheerder van de standaard participeert in werkgroepen van standaarden waarmee een afhankelijke relatie bestaat


### Adoptie en erkenning



### Rechtenbeleid
Als onderdeel van het rechtenbeleid dient minimaal de licentie op de standaard, en in het bijzonder het specificatiedocument beschreven te zijn. Op zijn minst een creative commons licentie, en bij voorkeur creative commons zero (voor meer informatie:
http://creativecommons.nl/licenties/uitleg/). Partijen die bijdragen aan de ontwikkeling van de standaard garanderen
hun intellectueel eigendomsrecht onherroepelijk royalty-free voor eenieder beschikbaar te stellen. 


### Architectuur
Alle afhankelijkheden met andere standaarden moeten expliciet benoemd zijn. De functionele afbakening dient expliciet beschreven te zijn. Daarnaast kunnen andere standaarden hergebruikt worden, of verder ingevuld worden, bijvoorbeeld voor lokalisatie


### Kwaliteitsbeleid benchmarking

Voordat een standaard uitgebracht wordt, moet de uitvoering van een kwaliteitscheck onderdeel van de procedure zijn. 

Methodiek informatiemodel: NEN 2660-2021

NTB model voor de rest van de use case, vooral uitwisselformaat / API's

De gebruikte methodiek dient expliciet beschreven te zijn, of een verwijzing naar een bestaande methodiek dient opgenomen te zijn.
Het toepassen van een methodiek voor standaardisatie zal leiden tot een hogere kwaliteit. 

## Operationeel


### Wensen en eisen

Beschreven moet worden hoe wijzigingen ingediend kunnen worden en hoe het verdere verloop van de procedure eruit ziet.
Het wijzigingsprotocol geeft inzicht in het behandel- en besluitproces dat ten grondslag ligt aan het versiebeheer en daarmee in de aangeboden wijzigingsvoorstellen leiden tot zicht op de stabiliteit van de standaard en de continuïteit van de standaard.


### Versiebeleid
Versiebeleid met onderscheid tussen major (functionaliteit aanpassing), minor (kleine verbeteringen) en bug fixes is noodzakelijk.

Oudere versies moeten uitgefaseerd worden, zodat de hoeveelheid operationele en ondersteunde versies ook gemaximaliseerd is op 2. Hiervoor moet een generieke procedure beschikbaar zijn.

### Uitvoering


### Documentatie
Alle documentatie wordt op github gepltaatst:
- Beheerplan
- Agenda's en verslagen van commissies
- Implementatiehandleidingen


## Communicatie
Communicatie naar alle stakeholders zal worden ingericht door de uitvoerende beheerorganisatie.

### Promotie
Promotie zal worden ingericht door de uitvoerende beheerorganisatie.


### Publicatie
De specificatie van het informatiemodel, afbeeldingen, codes, query's et cetera worden allemaal op Github gepubliceerd. Het Informatiemodel Verkeerstekens en verkeersbesluiten wordt gepubliceerd als linked open data.


### Klachtenafhandeling
Iedere belanghebbende kan formeel bezwaar aantekenen tegen de gevolgde procedure. Daarnaast kan informeel een klacht ingediend worden over de gevolgde procedure. Denk bij een bezwaar- en klachtenprocedure ook vooral aan de onafhankelijkheid van de beoordelaar en mogelijke escalatie als de case niet opgelost kan worden. 

