# Definities

## Toelichting
Dit document geeft de definities gebruikt in de **documentatie** van het informatiemodel verkeerstekens.

## Informatiemodel verkeerstekens
Een informatiemodel waarmee **verkeersregels, waarschuwingen, adviessnelheden en verkeerstekens** op eenduidige manier digitaal gepubliceerd kunnen worden in relatie tot het **verkeerskundige wegennetwerk**, **zodat deze informatie machine-verwerkbaar is**.

## Verkeerskundige informatie
Informatie over de op een weg geldende **verkeersregels, waarschuwingen** en **adviessnelheden** en de bijbehorende **verkeerstekens**.

## Verkeerskundig wegennetwerk
Een geometrische beschrijving van de wegen op basis van lijnen en knopen, waarmee de routes die gereden kunnen worden vastliggen. Deze beschrijving kan zich op verschillende abstratieniveau's bevinden: op wegniveau, op rijbaanniveau en op rijstrookniveau.

## Verkeersregel
De wettelijk geldende ge- en verboden op een locatie volgens de **RVV 1990**.

## Waarschuwing
De waarschuwingen aan het verkeer op een locatie volgens de [RVV 1990], Bijlage 1 Verkeersborden, Hoofdstuk J. Waarschuwing.

## Adviessnelheid
Een lokaal lagere snelheid dan standaard op die weg toegestaan is volgens de **RVV 1990**

## Verkeersteken
Een teken ter regeling, waarschuwing, geleiding of informering van het verkeer. Onder de verkeerstekens vallen verkeersborden en **wegmarkeringen**. Wettelijk vastgestelde verkeerstekens staan in de **RVV 1990**.

## Verkeersbord
Een bord ter regeling, waarschuwing, geleiding of informering van het verkeer. Wettelijk vastgestelde borden staan in de **RVV 1990**, Bijlage 1 Verkeersborden.

## Onderbord
Een bord onder het verkeersbord met een van de volgende inhouden:
1. een nadere uitleg van het verkeersbord;
2. ingeval op een onderbord uitsluitend symbolen voorkomen: het verkeersbord geldt slechts voor de aldus aangeduide weggebruikers of het aldus aangeduide verkeersgedrag;
3. ingeval op een onderbord het woord "uitgezonderd" in combinatie met symbolen voorkomt: het verkeersbord geldt niet voor de aldus aangeduide weggebruikers of het aldus aangeduide verkeersgedrag. [Bron: RVV 1990, Artikel 67](https://wetten.overheid.nl/jci1.3:c:BWBR0004825&hoofdstuk=III&paragraaf=2&artikel=67&z=2021-07-01&g=2021-07-01)

## Rijstrooknummer
De geldigheid van het verkeersbord voor deze rijstrook, met oplopende nummering vanaf één vanuit het midden van de weg naar de zijkant, in één rijrichting. Dit is alleen nodig als het NWB-Wegvak nog niet is gesplitst in rijstroken maar het bord niet geldt voor alle rijstroken.

## Wettelijk verkeersbord
Verkeersbord met een wettelijke basis in het Reglement verkeersregels en verkeerstekens 1990 (RVV 1990) of daarop aanvullende wetten.

## Niet-wettelijk verkeersbord
Verkeersbord waarvoor geen wettelijke basis is in het Reglement verkeersregels en verkeerstekens 1990 (RVV 1990) of daarop aanvullende wetten.

## Geometrische objectrepresentatie
De weergave van een object, zoals een verkeersbord of een weg, in een GIS of CAD model. Dit kan een punt, vlak of lijn zijn, maar ook een 3D vorm. Een object zoals een verkeersbord kan meerdere representaties hebben.

### Smart Mobility
Reis- en rijgedrag ondersteund door digitale systemen waaronder andere navigatiesystemen, rijtaakondersteunende systemen, zelfrijdende voertuigen, intelligente verkeersregelinstallaties en systemen waarmee reizigers hun reis online kunnen plannen, reserveren, betalen en onderweg op de hoogte te blijven.

### Rijstrook
Door doorgetrokken of onderbroken strepen gemarkeerd gedeelte van de rijbaan van zodanige breedte dat bestuurders van motorvoertuigen op meer dan twee wielen daarvan gebruik kunnen maken. Definitie conform de RVV 1990. De rijstrook is het begrensde gedeelte van de rijbaan dat voldoende breed is voor een rij van het voor dat gedeelte bestemde verkeer.

### Werkingslengte
Het gedeelte van het NWB-wegvak waarvoor een verkeersregel, waarschuwing of adviessnelheden met bijbehorend verkeersbord geldt.

### Wettelijke maximumsnelheid
De wettelijke maximumsnelheid is de hoogste snelheid die op een (gedeelte van een) weg is toegestaan voor een voertuigtype.

### Standaard wettelijke maximumsnelheid
De standaard wettelijke maximumsnelheid is de hoogste snelheid die op een wegvak is toegestaan of op een bepaald gedeelte van een wegvak is toegestaan op basis van de RVV 1990 § 8. Maximumsnelheid. De standaard wettelijke maximumsnelheid is afhankelijk van het wegtype, het rijbaantype en het voertuigtype.


### RVV1990-Voertuigtype
Per wegtype staat in RVV 1990 § 8. Maximumsnelheid de maximale snelheid beschreven voor elk RVV1990-VoertuigType. De volgende RVV1990-VoertuigTypen worden benoemd: Motorvoertuig, Bromfiets, Gehandicaptenvoertuig met een motor, Snorfiets, Kampeerwagen, Vrachtauto, Autobus (niet zijnde T100 bus), T100 bus, Brommobiel, Personenauto, bestelauto, motorfiets, driewielig motorvoertuig en T100-bus die een aanhangwagen voortbewegen, Overig motorvoertuig met aanhangwagen, Landbouwtrekker, Bosbouwtrekker, Motorrijtuig met beperkte snelheid, Mobiele machine.

### Lokale wettelijke maximumsnelheid
De verkeersborden Verkeersbord A1 en Verkeersbord A2 geven aanvullende snelheidsbeperkingen aan, en het einde van de aanvullende snelheidsbeperking. Dit leidt tot een lokaal afwijkende maximumsnelheid ten opzichte van de standaard wettelijke maximumsnelheid uit de RVV 1990, de lokale wettelijke maximumsnelheid.

# Informatiemodel

## Inleiding
In het informatiemodel staat alle benodigde informatie om digitaal te kunnen achterhalen wat de wettelijke maximumsnelheid is, met de voorwaarde dat de informatie over een wegvak volgens dit informatiemodel is opgesteld en beschikbaar is voor een SMART Mobility systeem. Dit systeem moet weten waar de weggebruiker zich bevindt: in welk wegvak, op welke plek in de lengterichting van het wegvak, eventueel welke rijstrook en in welke richting.

## Verkeersregel
De focus ligt op de wettelijke maximumsnelheid, die uiteenvalt in de standaard wettelijke maximumsnelheid (afgeleid uit typeringen van het NWB-wegvak) en de lokale wettelijke maximumsnelheid. Er worden drie opties overwogen voor het opslaan van informatie waarmee de wettelijke maximumsnelheid kan worden bepaald, met verschillende voor- en nadelen voor datagebruikers (SMART Mobility fabrikanten) en dataopstellers (verkeerskundigen/NDW).

## Enum Maximumsnelheden
Een beperkte lijst met toegestane waardes voor de maximumsnelheid wordt voorgesteld om te zorgen dat de waardes overeenkomen met wat wettelijk is toegestaan en verwarring of fouten te voorkomen.

## Typering wegvak
Het model maakt gebruik van enumeraties voor RVV1990-WegType en RVV1990-RijbaanType om een wegvak te typeren, wat essentieel is voor het bepalen van de toepasselijke wettelijke maximumsnelheid.

## Kruispunt
Een NWB-junctie kan worden aangeduid als "kruispunt", en het model moet dit kunnen onderscheiden om relevante verkeersregels toe te passen.

## Enum RVV1990-ZoneType
Verschillende zonetypes worden gedefinieerd om aan te geven in welke zones bepaalde verkeersregels of snelheidsbeperkingen gelden.

## Enum RVV1990-Verkeersborden
Een lijst met RVV1990-Verkeersborden die relevant zijn voor het bepalen van de maximale toegestane snelheid, inclusief verkeersborden voor zones, wegtypen, en weginrichtingen.

## Visualisatie bord en Onderbord
Het model overweegt hoe verkeersborden en onderborden moeten worden weergegeven en welke onderborden toegestaan zijn in combinatie met snelheidsaanduidingen, om zo de juiste informatie te bieden voor zowel handhaving als informatieverstrekking aan weggebruikers via SMART Mobility systemen.

