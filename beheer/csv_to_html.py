import pandas as pd 

# Script to generate the HTML for images of physical plates (to be used in documentation)

# Run query in Kern!
CONCEPT_NAME = "name" 
CONCEPT_DESCR = "definition" 
IMAGE_LINK = "svgImage"

# Put the script and your input file in the same folder, or provide the full path below.
csv_file_name = "beheer/tableDownloadStandardPlates.csv"    # "beheer/tableDownloadIcons.csv"
output_file = "beheer/output_standard_plates.html"          # "beheer/output_icons.html"
text_separator = '"'


df = pd.read_csv(csv_file_name, quotechar=text_separator)
df = df.sort_values([CONCEPT_NAME])

with open(output_file, "w", encoding="utf-8") as file:
    file.write("<table>\n")  # Start table

    col_count = 0
    file.write("  <tr>\n")  # Start row
    
    for index, row in df.iterrows():
        
        name = str(row[CONCEPT_NAME]) if not pd.isnull(row[CONCEPT_NAME]) else ""
        description = str(row[CONCEPT_DESCR]) if not pd.isnull(row[CONCEPT_DESCR]) else ""
        svg = str(row[IMAGE_LINK]) if not pd.isnull(row[IMAGE_LINK]) else ""

        file.write(f"    <td><figure>\n")
        file.write(f"      <img src=\"{svg}\" alt=\"{description}\" >\n")
        file.write(f"      <figcaption>{name}</figcaption>\n")
        file.write(f"    </figure></td>\n")

        col_count += 1
        if col_count == 4:  # After 4 columns, close row and start a new one
            file.write("  </tr>\n")
            file.write("  <tr>\n")
            col_count = 0

    if col_count != 0:
        file.write("  </tr>\n")
    file.write("</table>\n")  # End table
    file.write(
        '\n<p class="license">\n'
        '  Images © contributors of the '
        '<a href="https://github.com/ndwnu/qgis-verkeersborden-style">qgis-verkeersborden-style</a> project.<br>\n'
        '  Licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.\n'
        '</p>\n'
    )

print(f"HTML file '{output_file}' generated successfully!")






