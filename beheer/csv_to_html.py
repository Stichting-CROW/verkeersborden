import pandas as pd 

# Put the script and your input file in the same folder, or provide the full path below.
csv_file_name = "tableDownload.csv"
text_separator = '"'
output_file = "output.html"

df = pd.read_csv(csv_file_name, quotechar=text_separator)
df = df.sort_values(['fysiekePlaatNameNL'])

with open(output_file, "w", encoding="utf-8") as file:
    file.write("<table>\n")  # Start table
    file.write("  <tr>\n")  # Start row
    
    for index, row in df.iterrows():
        
        name = str(row["fysiekePlaatNameNL"]) if not pd.isnull(row["fysiekePlaatNameNL"]) else ""
        description = str(row["fysiekePlaatDefinition"]) if not pd.isnull(row["fysiekePlaatDefinition"]) else ""
        svg = str(row["svg"]) if not pd.isnull(row["svg"]) else ""

        file.write(f"    <td><figure>\n")
        file.write(f"      <img src=\"{svg}\" alt=\"{description}\" >\n")
        file.write(f"      <figcaption>{name}</figcaption>\n")
        file.write(f"    </figure></td>\n")
    
    file.write("  </tr>\n")  # End row
    file.write("</table>\n")  # End table

print(f"HTML file '{output_file}' generated successfully!")






