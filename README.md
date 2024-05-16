# Informatiemodel Verkeerstekens en verkeersbesluiten

Het Ministerie van Infrastructuur en Waterstaat heeft CROW gevraagd om een Informatiemodel Verkeerstekens op te stellen, met als doel bij het weggennetwerk verkeersregels en -borden te kunnen publiceren ten behoeve van SMART mobility systemen.

## Context
Voor de context van het informatiemodel wordt verwezen naar het [Architectuur Framework](https://docs.crow.nl/verkeersborden/framework) waarin de doelstellingen van het informatiemodel, de use cases en alle mogelijke raakvlakken met wetten, standaarden, datasets, applicaties en bijbehorende organisaties beschreven zijn.
* Levend document: [Architectuur Framework](https://docs.crow.nl/verkeersborden/framework)
* [Reviewversie met mogelijkheid tot commentaar via Hypothes.is](https://docs.crow.nl/verkeersborden/framework/IR-verkeersborden_framework-20220811.html)
* [Baseline 2022](https://docs.crow.nl/verkeersborden/framework/DEF-verkeersborden_framework-20240513.html)


In het architectuur framework zijn in 2022 uitgangspunten opgesteld voor een Informatiemodel Verkeerstekens. Deze uitgangspunten zijn vervolgens gebruikt om te onderzoeken hoe dit zou werken voor de [wettelijke maximale snelheid](https://docs.crow.nl/verkeersborden/maximalesnelheid/). 


## Uitwerking

De volgende onderdelen zijn in 2024 in de maak:


### Beheerplan

* Het [Beheerplan](https://docs.crow.nl/verkeersborden/beheerplan) beschrijft het strategische beheer en de beheerorganisatie, met verdere uitwerking naar tactische en operationele invulling van het beheer
* Met [GitHub issues](https://github.com/Stichting-CROW/verkeersborden/issues) kunnen gebruikers van het informatiemodel verzoeken om opheldering van de documentatie of om wijzigingen in het informatiemodel vragen. Bij de concept-release van de documentatie wordt de mogelijkheid geboden om deze online te reviewen met annotaties in de kantlijn.


### Gebruikersondersteuning
Gebruikers worden op weg geholpen met:

* [Gids voor databeheer](https://docs.crow.nl/verkeersborden/howtodatamanagement): voor wegbeheerders. In de gids voor databeheer wordt het samenstellen en beheren van verkeerskundige informatie stapsgewijs beschreven, met als doel de toepassing te ondersteunen voor beginnende gebruikers. Om op eenvoudige wijze verkeerskundige informatie te kunnen samenstellen en beheren, is een applicatie nodig die het geheel beter visueel ondersteunt. Dat is buiten de scope van het informatiemodel. Daarom is deze gids geschikt voor databeheerders met technische kennis op het gebied van code lezen en schrijven, en voor softwareontwikkelaars.
* [Leermaterialen voor assetdatabeheerders en wegbeheerders](datamanagementguide). In de leermaterialen wordt het samenstellen en beheren van verkeerskundige informatie op educatief verantwoorde wijze uitgelegd, met als leerdoel het begrijpen en kunnen uitleggen hoe je verkeerskundige informatie samenstelt. De gebruiker wordt ondersteund bij het leren door oefeningen. Doel is om een databeheerder met technische kennis op weg te helpen.
* [Gids voor datagebruik](https://docs.crow.nl/verkeersborden/howtousedata): voor ontwikkelaars. In de gids voor datagebruik wordt het gebruiken van verkeerskundige informatie in SMART Mobility stapsgewijs beschreven, met als doel het gebruik te ondersteunen. De focus ligt op het resultaat en het oplossen van specifieke problemen in het gebruiken van verkeerskundige informatie.
* [Leermaterialen voor ontwikkelaars](datauserguide). In de leermaterialen wordt het gebruiken van verkeerskundige informatie op educatief verantwoorde wijze uitgelegd, met als leerdoel het begrijpen en kunnen uitleggen hoe je verkeerskundige informatie gebruikt. De gebruiker wordt ondersteund bij het leren door oefeningen. Doel is om een een softwareontwikkelaar op weg te helpen.
* Een viewer van het informatiemodel
* Een voorbeeld-implementatie (dataset). De voorbeeld-implementatie bestaat uit een dataset waarin het informatiemodel is toegepast op een (fictief) verkeerskundig wegennetwerk, met bijbehorende kaartvisualisaties van de wegen, zones, routes en fysiek aanwezige verkeersborden. In de voorbeeld dataset zitten gebreken (niet actueel / betrouwbaar / compleet), die met de controlemeachnismes gevonden kunnen worden.
* Controlemechanismes (kwaliteitstoetsen dataset). De controlemechanismes voor de verkeerskundige informatie bestaan uit SPARQL queries waarmee onderzocht kan worden of de verkeerskundige informatie voldoet aan de regels van het informatiemodel. 
* Zoekmechanismes (verkeerskundige informatie zoeken bij een wegvak). De zoekmechanismes bestaan uit SPARQL queries waarmee in verkeerskundige informatie gezocht kan worden naar de op een wegvak van toepassing zijnde verkeersregels. De geleverde code kan gebruikt worden bij het inrichten van SMART Mobility systemen. De code werkt rechtstreeks indien de verkeerskundige informatie beschikbaar is als linked data, en zal moeten worden aangepast als de data in een andere vorm beschikbaar is.

Daarnaast kunnen gebruikers bij de [helpdesk van CROW](https://www.crow.nl/ondersteuning/helpdesk) terecht voor vragen over het informatiemodel. 


### Technische documentatie
De [Technische documentatie](https://docs.crow.nl/verkeersborden/technicaldocs) bevat de uitleg van het informatiemodel op het gebied van de modelopbouw; de hiërarchie in de begrippen; modelleringsconstructies; distributievormen; gebruikte referentiemodellen / standaarden; toepassing van de MIM; relatie met geometrische objectrepresentaties, waaronder de NWB-wegvakken en NWB-juncties en licenties. De technische documentatie geeft de context weer; geeft alternatieven weer en onderbouwingen van keuzes. 
[br]
[br]
Daarnaast wordt de mapping 


### Code documentatie
De [Code Documentatie](https://docs.crow.nl/verkeersborden/codedocs) zorgt ervoor dat de codes van het informatiemodel, datasets en queries begrepen kan worden. Dit wordt gedaan door toelichtingen op te schrijven in dezelfde structuur als de code. Dit moet consistent zijn en beschrijvend, een letterlijke uitleg van wat een deel van de code bewerkstelligt. 


<!-- Image Map Generated by http://www.image-map.net/ -->
<img src="https://github.com/Stichting-CROW/verkeersborden/blob/main/imagemapdocumentatie.png" usemap="#image-map">

<map name="image-map">
    <area target="_blank" alt="Website" title="Website" href="www.crow.nl" coords="160,1779,1019,2035" shape="rect">
    <area target="_blank" alt="Gebruikerswens indienen" title="Gebruikerswens indienen" href="https://github.com/Stichting-CROW/verkeersborden/issues" coords="164,2090,1023,2293" shape="rect">
    <area target="_blank" alt="Beheerplan" title="Beheerplan" href="https://docs.crow.nl/verkeersborden/beheerplan" coords="164,2357,974,2589" shape="rect">
    <area target="_blank" alt="Samenwerking" title="Samenwerking" href="https://docs.crow.nl/verkeersborden/samenwerking" coords="160,2632,1019,2856" shape="rect">
    <area target="_blank" alt="LinkedData Platform" title="LinkedData Platform" href="link to Hub? To overview versions?" coords="1239,1805,2143,2008" shape="rect">
    <area target="_blank" alt="Technische documentatie" title="Technische documentatie" href="https://docs.crow.nl/verkeersborden/technicaldocs" coords="1255,2068,2122,2312" shape="rect">
    <area target="_blank" alt="Code documentatie" title="Code documentatie" href="https://docs.crow.nl/verkeersborden/codedocs" coords="1251,2342,2106,2586" shape="rect">
    <area target="_blank" alt="Relatie tot NLCS" title="Relatie tot NLCS" href="https://docs.crow.nl/verkeersborden/mappingnlcs" coords="1251,2634,2159,2874" shape="rect">
    <area target="_blank" alt="Afbeeldingen" title="Afbeeldingen" href="https://github.com/Stichting-CROW/verkeersborden/tree/main/images" coords="1247,2905,2057,3141" shape="rect">
    <area target="_blank" alt="Gids Databeheer" title="Gids Databeheer" href="https://docs.crow.nl/verkeersborden/datamanagementguide" coords="2366,1791,3274,2019" shape="rect">
    <area target="_blank" alt="Leermaterialen Databeheer" title="Leermaterialen Databeheer" href="https://docs.crow.nl/verkeersborden/howtodatamanagement" coords="2334,2082,3274,2301" shape="rect">
    <area target="_blank" alt="Voorbeeld datasets" title="Voorbeeld datasets" href="https://github.com/Stichting-CROW/verkeersborden/tree/main/exampledatasets" coords="2342,2353,3233,2585" shape="rect">
    <area target="_blank" alt="Datacontrolemechanismes" title="Datacontrolemechanismes" href="https://github.com/Stichting-CROW/verkeersborden/tree/main/datachecks" coords="2342,2650,3282,2923" shape="rect">
    <area target="_blank" alt="Viewer" title="Viewer" href="https://docs.crow.nl/verkeersborden/viewer" coords="2358,2974,3217,3145" shape="rect">
    <area target="_blank" alt="Gids Datagebruik" title="Gids Datagebruik" href="https://docs.crow.nl/verkeersborden/datauserguide" coords="3457,1805,4410,1988" shape="rect">
    <area target="_blank" alt="Leermaterialen Datagebruik" title="Leermaterialen Datagebruik" href="https://docs.crow.nl/verkeersborden/howtousedata" coords="3453,2086,4385,2281" shape="rect">
    <area target="_blank" alt="Datazoekmechanismes" title="Datazoekmechanismes" href="https://github.com/Stichting-CROW/verkeersborden/tree/main/dataquerys" coords="3457,2356,4357,2616" shape="rect">
</map>


