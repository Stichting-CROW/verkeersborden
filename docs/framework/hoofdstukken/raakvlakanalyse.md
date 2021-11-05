# Raakvlakanalyse


## Raakvlakken

De use case "Registreren van verkeersbesluiten" heeft betrekking op de planfase **of ook de ontwerpfase?** [Issue 10](https://github.com/Stichting-CROW/verkeersborden/issues/10). Daarmee heeft de use case raakvlakken met andere use cases in de levenscyclus van een verkeersbord: ontwerp; bouw; beheer; gebruik; en sloop / circulair hergebruik. 


### Wegennetwerken
Vanuit Smart Mobility/verkeerskunde zien we de behoefte aan accurate en actuele informatie, waarin voor het wegennet (NWB) de attributen voor wettelijk maximum snelheid en ge- en verboden (bijvoorbeeld parkeerverbod, inhaalverbod, stopverbod) per voertuigcategorie en met de daarbij geldende uitzonderingen/nadere aanduidingen op het onderbord (tijden, alleen bij glad wegdek, etc.) gevuld zijn voor ieder individueel wegvak of zelfs nog nauwkeuriger. 
Verkeerskundig gezien is het de vraag of wegvakniveau het juist niveau van aggregatie is. Het komt regelmatig voor dat binnen een wegvak er meerdere snelheidsregimes van kracht zijn (vb: een kombord halverwege een wegvak). [Issue 11](https://github.com/Stichting-CROW/verkeersborden/issues/11)

Een verkeersbord geldt voor een of meerdere rijstroken: wat is de relatie met andere modellen / moet dit worden vastgelegd in het informatiemodel? [Issue 11](https://github.com/Stichting-CROW/verkeersborden/issues/11)

Wat is het doel van het informatiemodel: voor welke levensfase van een verkeersbord? [Issue 10](https://github.com/Stichting-CROW/verkeersborden/issues/10)

Verkeersborden of ook markeringen? [Issue 16](https://github.com/Stichting-CROW/verkeersborden/issues/16)



### Planfase
* **Opstellen verkeersmodellen**: het ontwerpen van varianten waarmee verkeersstromen in de toekomst kunnen worden afgewikkeld. Hieruit volgen in elk geval een deel van de benodigde (te ontwerpen) verkeerborden. Een deel van de ontwerp-verkeersborden met specifieke invulling ("snelheidsbeperking; 60 km/h") is hiermee bekend of zou dit kunnen zijn. ([Issue 3](https://github.com/Stichting-CROW/verkeersborden/issues/3))


### Ontwerpfase
* **Ontwerp van wegen met markering en bebording**: Op basis van een verkeersmodel wordt de geometrische ligging van de wegen ontworpen, waarbij de ontwerplocatie van verkeersborden wordt bepaald. Ook kunnen extra verkeersborden uit het ontwerp worden afgeleid, bijvoorbeeld daar waar zich extra gevaren voordoen. ([Issue 6](https://github.com/Stichting-CROW/verkeersborden/issues/6))


### Bouwfase
* **Bestellen van verkeersborden**; de publieke opdrachtgever of bouw- en onderhoudsaannemer moet de juiste borden kunnen bestellen bij een leverancier. Bij het bestellen worden specificaties toegevoegd. ([Issue 7](https://github.com/Stichting-CROW/verkeersborden/issues/7))
* **Produceren van verkeersborden**: de producent van verkeersborden werkt op basis van specificaties aan de verkeersborden; en voegt informatie toe over het productieproces en over onderhoudsspecificaties.
* **Contracteren plaatsing verkeersborden**: De publieke opdrachtgever besteed de plaatsing van verkeersborden conform het verkeersbesluit aan (als onderdeel van een groter project). Hierbij worden specificaties toegevoegd aan het ontworpen verkeersbord.
* **Plaatsing verkeersborden**: De bouwaannemer plaatst de verkeersborden op basis van het ontwerp en geeft de actuele geometrie door van het geplaatste verkeersbord.


### Beheerfase
* **Beheer verkeersborden**:


### Gebruiksfase
* **Rijden met incar-informatie**:
* **Handhaving**:


### Sloopfase
* **Circulair hergebruik**



