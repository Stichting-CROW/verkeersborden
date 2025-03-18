### For English, see below!

Deze folder is bedoeld voor scripts en andere tools waarmee de beheerder van het informatiemodel controles kan doen op de publicatie, of publicaties kan genereren uit het informatiemodel. 

# HTML Tabelgenerator uit CSV (csv_to_html.py)

## Overzicht
Dit script leest een CSV-bestand, verwerkt de gegevens en genereert een HTML-tabel. De gegenereerde HTML bevat een reeks `<figure>`-elementen, die elk een afbeelding (`<img>`) en een bijschrift (`<figcaption>`) bevatten, welke afkomstig zijn uit specifieke kolommen in de CSV. Het script sorteert de gegevens op een opgegeven kolom en slaat de resultaten op in een HTML-bestand.

## Vereisten
- Python 3.x
- Pandas bibliotheek voor het verwerken van CSV-gegevens en het genereren van de HTML-tabel

## Afhankelijkheden
Je hebt de volgende Python-bibliotheek nodig:
- **pandas**: Installeer met `pip install pandas`

## Bestanden
- **Invoer CSV-bestand** (`tableDownload.csv`): Om dit invoer-CSV-bestand te verkrijgen, voer je de opgeslagen query (Retrieve Standaard Platen) uit in de [IVM Standard Signs-publicatie op het Laces Data Platform](https://hub.laces.tech/crow/verkeersborden/test/imv-standard-signs/versions/v1_0_1). Dit bestand moet in dezelfde map als het script worden geplaatst (of geef het volledige pad op). Het moet de volgende kolommen bevatten:
  - `fysiekePlaatNameNL`: De naam van het item die wordt weergegeven in het `<figcaption>`.
  - `fysiekePlaatDefinition`: De beschrijving die als alt-tekst voor de afbeelding wordt gebruikt.
  - `svg`: De URL of het pad naar de afbeelding.

- **Uitvoer HTML-bestand** (`output.html`): Dit is het bestand dat door het script wordt gegenereerd. Het bevat de HTML-tabel met de tags `<figure>`, `<img>`, en `<figcaption>` op basis van de gegevens uit het CSV-bestand. Dit wordt gesorteerd op `fysiekePlaatNameNL`.

## Gebruik

1. **Bereid je invoer CSV-bestand voor**:
   - Zorg ervoor dat het CSV-bestand (`tableDownload.csv`) is gestructureerd als volgt:
     ```
     fysiekePlaatNameNL,fysiekePlaatDefinition,svg
     "Item 1","Beschrijving van item 1","path_to_image1.svg"
     "Item 2","Beschrijving van item 2","path_to_image2.svg"
     ```

2. **Configureer het script**:
   - Het script verwacht dat het CSV-bestand zich in dezelfde map als het script bevindt. Als je CSV-bestand zich op een andere locatie bevindt, kun je het volledige pad opgeven in de variabele `csv_file_name`.
   - De variabele `output_file` bepaalt de naam van het gegenereerde HTML-uitvoerbestand (standaard is dit `output.html`).

3. **Voer het script uit**:
   - Voer het Python-script uit. Het script leest de CSV, sorteert de gegevens op de kolom `fysiekePlaatNameNL`, en genereert een HTML-tabel.

4. **Resultaat**:
   - Na het uitvoeren van het script, wordt er een HTML-bestand (`output.html`) gegenereerd in dezelfde map, met een tabelstructuur die de afbeeldingen en bijschriften bevat op basis van de CSV-gegevens.

## Voorbeelduitvoer

De gegenereerde HTML bevat een tabel met een rij van `<figure>`-elementen, waarin elk figuur bestaat uit:
- Een afbeelding met het `src`-attribuut dat naar het SVG-bestand wijst.
- Een bijschrift met de naam (`fysiekePlaatNameNL`) onder de afbeelding.

Voorbeeld van de HTML-uitvoer:
```html
<table>
  <tr>
    <td><figure>
      <img src="path_to_image1.svg" alt="Beschrijving van item 1">
      <figcaption>Item 1</figcaption>
    </figure></td>
    <td><figure>
      <img src="path_to_image2.svg" alt="Beschrijving van item 2">
      <figcaption>Item 2</figcaption>
    </figure></td>
  </tr>
</table>
```

## Opmerkingen:
- Zorg ervoor dat je CSV-bestand geen ontbrekende waarden bevat in de kolommen `fysiekePlaatNameNL`, `fysiekePlaatDefinition`, of `svg`, omdat het script mogelijk niet goed omgaat met lege velden.
- De gegenereerde HTML-tabel is eenvoudig en kan verdere opmaak vereisen, die handmatig of via CSS kan worden toegevoegd.

## Probleemoplossing:
- **CSV-bestand ontbreekt**: Als het invoer-CSV-bestand niet wordt gevonden, zal het script een `FileNotFoundError` genereren. Zorg ervoor dat het bestand bestaat en het pad correct is opgegeven.
- **Lege of ongeldige gegevens**: Zorg ervoor dat er geen ontbrekende waarden zijn in essentiële kolommen (`fysiekePlaatNameNL`, `fysiekePlaatDefinition` en `svg`). Lege gegevens worden vervangen door lege strings in de HTML-uitvoer.

----------------------------------------------------------------------------------------------------

This folder is intended for scripts and other tools that allow the administrator of the information model to perform checks on the publication or generate publications from the information model.

# HTML Table Generator from CSV (csv_to_html.py)

## Overview
This script reads a CSV file, processes the data, and generates an HTML table. The generated HTML contains a set of `<figure>` elements, each consisting of an image (`<img>`) and a caption (`<figcaption>`), which are sourced from specific columns in the CSV. The script sorts the data by a specified column and outputs the results to an HTML file. 

## Requirements
- Python 3.x
- Pandas library for handling CSV data and generating the HTML table

## Dependencies
You will need the following Python libraries:
- **pandas**: Install using `pip install pandas`

## Files
- **Input CSV file** (`tableDownload.csv`): To obtain this input csv, run the saved query (Retrieve Standaard Platen) in the [IVM Standard Signs publication on Laces Data Platform](https://hub.laces.tech/crow/verkeersborden/test/imv-standard-signs/versions/v1_0_1). This file should be placed in the same directory as the script (or provide the full path). It must contain the following columns:
  - `fysiekePlaatNameNL`: The name of the item to be displayed in the `<figcaption>`.
  - `fysiekePlaatDefinition`: The description to be used as the alt text for the image.
  - `svg`: The URL or path of the image.

- **Output HTML file** (`output.html`): This is the file that will be generated by the script. It contains the HTML table with `<figure>`, `<img>`, and `<figcaption>` tags based on the data from the CSV file. This is sorted by `fysiekePlaatNameNL`.

## How to Use

1. **Prepare your input CSV file**:
   - Ensure the CSV file (`tableDownload.csv`) is structured as follows:
     ```
     fysiekePlaatNameNL,fysiekePlaatDefinition,svg
     "Item 1","Description of item 1","path_to_image1.svg"
     "Item 2","Description of item 2","path_to_image2.svg"
     ```

2. **Configure the script**:
   - The script expects the CSV file to be in the same directory as the script. If your CSV file is in a different location, you can specify the full path in the `csv_file_name` variable.
   - The `output_file` variable determines the name of the HTML output file (default is `output.html`).

3. **Run the script**:
   - Execute the Python script. The script will read the CSV, sort the data by the `fysiekePlaatNameNL` column, and generate an HTML table.
   
4. **Result**:
   - After running the script, an HTML file (`output.html`) will be created in the same directory with a table structure containing the images and captions based on the CSV data.

## Example Output

The generated HTML will contain a table with a row of `<figure>` elements, where each figure consists of:
- An image with the `src` attribute pointing to the SVG file.
- A caption with the name (`fysiekePlaatNameNL`) below the image.

Example HTML output:
```html
<table>
  <tr>
    <td><figure>
      <img src="path_to_image1.svg" alt="Description of item 1">
      <figcaption>Item 1</figcaption>
    </figure></td>
    <td><figure>
      <img src="path_to_image2.svg" alt="Description of item 2">
      <figcaption>Item 2</figcaption>
    </figure></td>
  </tr>
</table>
```

## Notes:
- Ensure your CSV file does not have any missing values in the `fysiekePlaatNameNL`, `fysiekePlaatDefinition`, or `svg` columns, as the script may not handle empty fields gracefully.
- The generated HTML table will be simple and may need further styling, which can be added manually or using CSS. 

## Troubleshooting:
- **Missing CSV file**: If the input CSV file is not found, the script will raise a `FileNotFoundError`. Make sure the file exists and the path is correctly specified.
- **Empty or invalid data**: Ensure there are no missing values in essential columns (`fysiekePlaatNameNL`, `fysiekePlaatDefinition`, and `svg`). Empty data will be replaced with empty strings in the HTML output.
