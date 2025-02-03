# Informatiemodel Verkeerstekens en verkeersbesluiten

Het Ministerie van Infrastructuur en Waterstaat heeft CROW gevraagd om een Informatiemodel Verkeerstekens op te stellen, met als doel bij het weggennetwerk verkeersregels en -borden te kunnen publiceren ten behoeve van SMART mobility systemen. 

<figure>
<img src="./imagemapdocumentatie.png">
<figcaption>Beschikbare middelen bij het informatiemodel</caption>
</figure>

## Context
De context, doelen, use cases en uitgangspunten van het informatiemodel staan in het [Architectuur Framework](https://docs.crow.nl/verkeersborden/framework).


## Open beheer conform BOMOS
* De website komt beschikbaar bij definitieve publicatie.
* Het [Beheerplan](https://docs.crow.nl/verkeersborden/beheerplan) beschrijft het beheer van het informatiemodel als open standaard. Voor de beheerder van het Informatiemodel is er een [Beheerhandleiding](https://docs.crow.nl/verkeersborden/managementmanual).
* Met [GitHub issues](https://github.com/Stichting-CROW/verkeersborden/issues) kunnen gebruikers van het informatiemodel verzoeken om opheldering van de documentatie of om wijzigingen in het informatiemodel vragen.

## Standaard

* Het informatiemodel is online beschikbaar via een [SPARQL-endpoint](https://hub.laces.tech/crow/verkeersborden) waar het ook kan worden gedownload als turtle. Met standaard [query's]() kan het informatiemodel doorzocht worden. Voor mensen is er een [viewer concept 1.0]()
* De [Technische documentatie](https://docs.crow.nl/verkeersborden/technicaldocs) bevat de onderbouwing van de technische uitwerking van het informatiemodel. 
* Zie voor de [svg's van verkeersborden](https://github.com/Stichting-CROW/verkeersborden/edit/main/images), met doorverwijzing naar NDW en NLCS in de [ReadME](https://github.com/Stichting-CROW/verkeersborden/edit/main/images/ReadME).
* Een vertaling naar veel voorkomende standaard fysieke platen (fysieke verkeersborden met gekleurde achtergrondschilden, iconen van verkeersborden, onderborden en teksten) zoals men die buiten tegenkomt, en die in NLCS of IMBOR zijn opgenomen, is nog niet uitgewerkt voor de concept 1.0 versie.


### Gebruikersondersteuning 
De gebruikersondersteuning is geschreven met als aanname, dat de verkeerskundige informatie als linked data gepubliceerd wordt, op basis van het informatiemodel. Dit is toekomstmuziek, er zal nog een heel ontwikkeltraject van de landelijke registratie (en bij wegbeheerders) moeten plaatsvinden voordat het zover is. Daarom is deze documentatie nog heel summier, en gericht op gebruikers met technische kennis op het gebied van code lezen en schrijven, en voor softwareontwikkelaars.

#### Voor databeheerders
Databeheerders worden op weg geholpen met:

* De [Gids voor databeheer](https://docs.crow.nl/verkeersborden/howtodatamanagement) beschrijft het samenstellen en beheren van verkeerskundige informatie op basis van het informatiemodel. 
* [Leermaterialen voor assetdatabeheerders en wegbeheerders](https://docs.crow.nl/verkeersborden/datamanagementguide). In de leermaterialen wordt het samenstellen en beheren van verkeerskundige informatie op educatief verantwoorde wijze uitgelegd, met als leerdoel het begrijpen en kunnen uitleggen hoe je verkeerskundige informatie samenstelt. De gebruiker wordt ondersteund bij het leren door oefeningen. Doel is om een databeheerder met technische kennis op weg te helpen.
* Een voorbeeld-implementatie (dataset). De voorbeeld-implementatie bestaat uit een dataset waarin het informatiemodel is toegepast op een (fictief) verkeerskundig wegennetwerk, met bijbehorende kaartvisualisaties van de wegen, zones, routes en fysiek aanwezige verkeersborden. In de voorbeeld dataset zitten gebreken (niet actueel / betrouwbaar / compleet), die met de controlemeachnismes gevonden kunnen worden.
* Controlemechanismes (kwaliteitstoetsen dataset). De controlemechanismes voor de verkeerskundige informatie bestaan uit SPARQL queries waarmee onderzocht kan worden of de verkeerskundige informatie voldoet aan de regels van het informatiemodel. 

Daarnaast kunnen databeheerders bij de [helpdesk van CROW](https://www.crow.nl/ondersteuning/helpdesk) terecht voor vragen over het informatiemodel. 


### Voor datagebruikers
* [Gids voor datagebruik](https://docs.crow.nl/verkeersborden/howtousedata): toelichting op de logica van het informatiemodel en hoe de verkeerskundige informatie kan worden doorzocht met de beschikbare Zoekmechanismes ([SPARQL queries]())
* [Leermaterialen voor ontwikkelaars](datauserguide). In de leermaterialen wordt de gebruiker ondersteund bij het leren door oefeningen. 
