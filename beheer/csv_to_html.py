import pandas as pd 

# Run query in Kern!
CONCEPT_NAME = "iconName" # 'fysiekePlaatNameNL'
CONCEPT_DESCR = "iconDefinition" # "fysiekePlaatDefinition"

# Put the script and your input file in the same folder, or provide the full path below.
csv_file_name = "beheer/tableDownloadIcons.csv"
text_separator = '"'
output_file = "beheer/output_icons.html"


df = pd.read_csv(csv_file_name, quotechar=text_separator)
df = df.sort_values([CONCEPT_NAME])

with open(output_file, "w", encoding="utf-8") as file:
    file.write("<table>\n")  # Start table

    col_count = 0
    file.write("  <tr>\n")  # Start row
    
    for index, row in df.iterrows():
        
        name = str(row[CONCEPT_NAME]) if not pd.isnull(row[CONCEPT_NAME]) else ""
        description = str(row[CONCEPT_DESCR]) if not pd.isnull(row[CONCEPT_DESCR]) else ""
        svg = str(row["svg"]) if not pd.isnull(row["svg"]) else ""

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
    # file.write("  </tr>\n")  # End row
    file.write("</table>\n")  # End table

print(f"HTML file '{output_file}' generated successfully!")






