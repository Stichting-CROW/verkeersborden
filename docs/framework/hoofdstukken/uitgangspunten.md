# Technische Uitgangspunten

## Inleiding
In dit hoofdstuk staan de normen en richtlijnen waaraan het [=Informatiemodel Verkeerstekens=] dient te voldoen, en de wijze waarop wordt aangesloten op andere informatiemodellen. 

## NEN2660-2:2022

<dfn data-lt="NEN2660-2:2022">NEN2660-2:2022</dfn>
<dd>NEN2660-2 is een praktische invulling van NEN2660_1. In deel 1 zijn meer theoretische/conceptuele en bouw- en taalonafhankelijke modelleerpatronen vastgelegd. Deze norm is vrij beschikbaar bij de NEN en is ontwikkeld in een samenwerking tussen overheden, adviesbureau's en kennisinstituten. Het heeft als doel de standaard te zijn voor de ontwikkeling van ontologieën in de gebouwde omgeving. Het bevat drie belangrijke (hoofd)onderdelen:
<ol><li>Een praktisch toplevelmodel waarin genoeg semantiek aangegeven wordt om IMBOR in uit te drukken.</li>
<li>Extensies hierop voor de meest gebruikt toepassingen in de gebouwde omgeving. </li>
<li>Taalbinding naar (en daarmee de keuze voor) de semantisch web W3C talen: SKOS [skos-primer], RDFS [rdf-schema], OWL [owl2-primer] en SHACL [shacl]</li></dd>

* Het informatiemodel MOET worden opgesteld conform de [=NEN2660-2:2022=].
* Het informatiemodel MOET generiek en schaalbaar zijn, zodat de relatie met andere use cases in de toekomst goed te leggen valt.
* Het informatiemodel MOET van alle concepten een definitie geven of verwijzen naar een definitie in wetten of andere informatiemodellen.

## NEN 3610
<dfn data-lt="NEN3610">NEN3610</dfn>
<dd>NEN 3610 is de standaard voor het uitwisselen van geo-informatie, gebruikt Unified Modeling Language (UML) als formele taal voor het vastleggen van semantiek en beveelt Geography Markup Language (GML) aan als technisch uitwisselingsformat. NEN 3610 is hiermee nog niet geschikt om semantiek, gegevensdeling en uitwisseling middels Linked Data te realiseren. <a href="https://geonovum.github.io/NEN3610-Linkeddata/#inleiding">bron: Geonovum</a>  </dd>

* Het informatiemodel MOET waar mogelijk aangesloten op de [=NEN3610=]. Bij tegenstrijdigheden geldt de [=NEN2660-2:2022=].

## MIM

<dfn data-lt="MIM">MIM</dfn>
<dd>Het Metamodel Informatie Modellering (MIM) is een gemeenschappelijk vertrekpunt voor het maken van informatiemodellen. Het model bevat duidelijke afspraken over het vastleggen van gegevensspecificaties en biedt tegelijkertijd ruimte aan de verschillende niveaus van modellering. Het MIM is in 2020 uitgekomen en vormt een belangrijke leidraad voor het informatiemodel.  ondanks enkele tegenstrijdigheden met de [=NEN2660-2:2022=]. Het MIM gaat uit van:
<ol><li>Het scheiden van soort informatiemodellen in niveaus.</li>
<li>De inhoudelijke modellering van modelconcepten en de metagegevens ervan. Door een informatiemodel uit te drukken in het MIM is een standaard manier van vastleggen en uitleg geborgd.</li>
Het MIM gaat uit van een begrippenkader en een explicietere modellering van een informatiemodel.</dd>

* Het informatiemodel MOET waar mogelijk aangesloten op de [=MIM=]. Bij tegenstrijdigheden geldt de [=NEN2660-2:2022=].





### CB-NL
* De begrippen en definities uit het [=Informatiemodel Verkeerstekens=] en Verkeersbesluiten MOETEN worden gelinked aan concepten in CB-NL.



## Ingangsdatum
Voor de primaire use case is het niet nodig om historische gegevens te kunnen vinden - alle actuele verkeerskundige gegevens zijn voldoende.

Voor gebruik van de digitale [=Verkeerskundige informatie=] in verkeersberekeningen en wegontwerpen is het wel noodzakelijk om te kunnen bepalen welke verkeersregels gelden, en welke verkeersborden aanwezig zijn op een bepaald tijdstip.

Ook voor publicatie van een verkeersbesluit is het handig, om een datum in de toekomst te kunnen vastleggen, waarop de verkeersregel van toepassing wordt. Daarmee kan gezorgd worden dat de data actueel en beschikbaar is op het moment van ingaan van het verkeersbesluit. 

* Het informatiemodel MOET de mogelijkheid bieden om een begin- en einddatum en -tijdstip aan te duiden voor het ingaan van de [=verkeersregel=], [=waarschuwing=] of [=adviessnelheid=], en voor de (geplande) plaatsing en weghalen van het bijbehorende verkeersbord. 