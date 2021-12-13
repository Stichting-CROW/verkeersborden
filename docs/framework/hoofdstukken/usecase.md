# Use case


## Inleiding

De scope van het Informatiemodel Verkeerstekens en Verkeersbesluiten is de use case "Publiceren van verkeersbesluiten" in een landelijke netwerkregistratie.

De use case bevat de volgende onderdelen:

1. Het samenstellen van een dataset met een nieuwe netwerkinrichting.
2. De communicatie over de nieuwe weginrichting van wegbeheerder naar de landelijke registratie (transactie)
3. Het samenstellen van een dataset met functionele verkeersinstructies en verkeerstekens met daarin de wijziging in de verkeersregels
4. De communicatie over de toe te passen verkeersregels van wegbeheerder naar de landelijke registratie (transactie)
5. Het valideren van de aangeboden wijziging;
6. Het publiceren van de wijziging in de landelijke netwerkregistratie. 
7. Het publiceren van de wijziging op [www.overheid.nl](www.overheid.nl) 

<aside class="note" title="Definitie use case">
Een usecase beschrijft een systeem vanuit het gebruikersperspectief. Het beschrijft de actor, de initiator van de interactie, en het systeem zelf als een opeenvolging van eenvoudige stappen. Actoren kunnen iets of iemand zijn, die bestaat buiten het te bestuderen systeem, en die deelneemt in de opeenvolgende activiteiten in een dialoog met het systeem om een bepaald doel te bereiken. Actoren kunnen eindgebruikers, andere systemen of hardware (apparatuur) zijn. Elke usecase is een complete serie van zogenaamde "events", beschreven vanuit het standpunt van de actor. [Bron: Wikipedia](https://nl.wikipedia.org/wiki/Usecase)
 </aside>

### Centrale registratie

De use case gaat uit van het centraal publiceren van verkeersbesluiten. Omdat het netwerk moet routeren over gemeente- en provincie- en rijksweggrenzen heen, moet er een controle zijn op de samenhang. Daarom is een landelijke registratie op korte termijn het makkelijkst te organiseren, en je kun je de wegbeheerder die werkt met kaarten beter faciliteren. 

<aside class="note" title="Publicatie bij de bron">
Op langere termijn is publicatie 'bij de bron' wellicht een betere optie. In het Digitaal Stelsel Gebouwde Omgeving wordt ervan uitgegeaan, dat degene die een asset ontwerpt, bouwt of beheert ook degene is die de informatie daarover publiceert (publicatie bij de bron). Dit vraagt een hoog digitaal en procesmatig volwassenheidsniveau van de wegbeheerders die bij wijzigingen in de verkeerssituatie zullen moeten valideren dat het gezamenlijke netwerk nog steeds "wiskundig sluitend" is. De huidige status is dat de meerderheid van de wegbeheerders nog niet in staat zijn om informatiemanagement uit te voeren op dit niveau.
<aside>


## Samenstellen netwerkdata

Dit onderdeel van de usecase beschrijft de use case waarmee een wegbeheerder of een wegontwerper namens de wegbeheerder een correcte dataset kan samenstellen met wijzigingen in het verkeersnetwerk. Het is nog niet uitgewerkt of het systeem uit dit onderdeel van de use case een systeem van de wegbeheerder is, of een systeem van de landelijke registratie.

* De Wegbeheerder markeert het gebied waarbinnen de wijziging valt en geeft aan op welke datum de wijziging ingaat.
* Het Systeem geeft geeft een preselectie van de de wegvakken en juncties die op dat tijdstip actueel zijn in dit gebied (online of als dataset).
* De Wegbeheerder selecteert alle wegvakken en juncties die wijzigen.
* Het Systeem geeft (1) de selectie weer in een overzicht of (2) exporteert een dataset met de geselecteerde wegvakken en juncties.
* De Wegbeheerder geeft (1) in het systeem of (2) in een dataset aan welke wegvakken en juncties vervallen en voegt nieuwe wegvakken en juncties toe. 
* Het Systeem controleert of het nieuwe netwerk sluitend is en (1) toont een validatieoverzicht met eventuele foutmeldingen of (2) exporteert een validatierapport.

De zo samengestelde netwerkdata kan eventueel worden gebruikt in simulaties of om varianten te onderzoeken, daarom is dit een separate stap ten opzichte van de formele transactie van de netwerkdata van de wegbeheerder naar de beheerder van de landelijke registratie.

Omdat het netwerk buiten de scope van het Informatiemodel Verkeerstekens en Verkeersbesluiten valt, volgen uit deze use case géén eisen aan het informatiemodel.
 
 

## Transactie netwerkdata 
Happy flow 
* De wegbeheerder biedt de wijziging aan en vraagt om deze te publiceren. 
* De beheerder van de landelijke registratie belooft dit te zullen doen na validatie.
* Het Systeem controleert of aan alle leveringsvoorwaarden is voldaan en of de aangeboden wijziging aansluit op de ongewijzigde netwerkdelen.
* De beheerder van de landelijke registratie geeft aan dat de dataset voldoet aan alle voorwaarden en toont welke wijzigingen worden doorgevoerd.
* De wegbeheerder accepteert de wijzigingsvoorstellen van de beheerder van de landelijke registratie.

Omdat het netwerk buiten de scope van het Informatiemodel Verkeerstekens en Verkeersbesluiten valt, volgen uit deze use case géén eisen aan het informatiemodel.

## Samenstellen verkeersbesluit
Dit onderdeel van de usecase beschrijft wat er nodig is zodat een wegbeheerder een correcte dataset kan samenstellen met een verkeersbesluit.

* De Wegbeheerder selecteert het wegvak (in de netwerkdata) waar hij een verkeersbesluit aan wil toevoegen.\
* Het Systeem controleert of het wegvak uit twee richtingen bestaat. Indien dit zo is, krijgt de wegbeheerder de vraag: welke junctie is het startpunt? 
* De wegbeheerder geeft antwoord
* Het Systeem vraagt welke verkeersregel of waarschuwing van toepasssing is en presenteert een lijst waar de gebruiker uit kan kiezen (1)
* De wegbeheerder geeft antwoord
* Het Systeem vraagt op welke lengte langs het wegvak het verkeersbesluit begint en eindigt.
* De wegbeheerder geeft antwoord
* Het Systeem geeft een lijst met borden en markeringen die bij deze verkeersregel passen en vraagt aan te geven op welke lengterichting deze staan, en (bij een bord) of dit naast de weg of boven de rijbaan bevestigd is
* De wegbeheerder geeft antwoord (2)
*  Het systeem geeft een lijst met onderborden passend bij de gekozen borden en vraagt de gebruiker of deze worden toegevoegd en eventueel om variabele waarden in te vullen
* De wegbeheerder geeft antwoord


(1) Indien uitbreiding van verkeersregels en borden mogelijk wordt gemaakt moet de wegbeheerder deze aanvullingen eerst publiceren, dan het systeem wijzen op de uitbreiding. 
(2) De borden en markeringen kunnen eventueel ook via een NLCS tekening worden aangeleverd, indien hier zodanige regels voor zijn ontwikkeld dat dit redelijkerwijs zonder foutmeldingen kan. In dat geval moet de gebruiker nog steeds selecteren, welke borden betrekking hebben op de verkeersregel die wordt ingevoerd

## Transactie verkeersbesluit
Dit onderdeel van de use case bevast de transactie tussen de **wegbeheerder** en de **Landelijke registratie** waarbij de wegbeheerder een wijziging in de wegligging en/of de verkeersregels aanbiedt aan de landelijke registratie. 

De wegbeheerder heeft daarvoor "Aanleverinstructies" nodig waarin staat:
- Hoe de wijziging kan worden aangeleverd: via VISI, een website, via een API


## Valideren verkeersbesluit


## Publiceren netwerkdata
 geschikt om deze op een eenvoudige wijze in een machine-leesbare vorm te kunnen verwerken van besluiten tot kenmerken die gebruikt kunnen worden voor de digitalisering van werkprocessen van wegbeheerders en service providers en om de weggebruiker of rij-assistent digitaal te informeren.

## Publiceren verkeersbesluit
Het publiceren van de wijziging op [www.overheid.nl](www.overheid.nl) 






