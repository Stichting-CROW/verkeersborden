//@ts-check
/**
 * @typedef {Object} RequirementReference - A reference to where a RFC 2119 requirement was written.
 * @property {string} textContent - The context in which the reference appears
 * @property {string} contextId - The html-id of the reference
 * @property {string} sectionId - The html-id of the section
 * @property {string} sectionTitle - The title of the section
 * @property {string=} sectionNumber - The number of the section
 */

/** This function adds an index of RFC 2119 keywords to the document.
 *
 * Requires:
   <section class="">
      <h2>Index van eisen</h2>
      <ol class="toc toc-column toc-labeled" id="index-of-requirements"></ol>
    </section>
 */
function indexOfRequirements(config) {
  const ul = document.querySelector("#index-of-requirements");
  if (!ul) return;

  const requirements = document.querySelectorAll(
    "section:not(#conformance) em.rfc2119"
  );

  /** @type {Record<string, RequirementReference[]>} */
  const requirementsPerSection = {};

  // Collect reference information on the instances of RFC 2119 keywords
  requirements.forEach((requirementElem, n) => {
    const parentElem = requirementElem.parentElement;
    if (!parentElem) return;
    if (!parentElem.id)
      //@ts-ignore
      parentElem.id = `requirement-${requirementElem.textContent.toLowerCase()}-${n}`;

    const sectionElem = requirementElem.closest("section");
    if (!sectionElem) return; // no reference possible
    const headerElem = sectionElem.querySelector(".header-wrapper");
    if (!headerElem) return; // no reference possible
    const sectionNumberElem = headerElem.querySelector(".secno");
    const sectionNumberText = sectionNumberElem
      ? sectionNumberElem.textContent || "(unnumbered)"
      : "(unnumbered)";
    const sectionTitle = headerElem.textContent || "";

    // If there is no array for this section yet, create it
    if (!requirementsPerSection[sectionNumberText]) {
      requirementsPerSection[sectionNumberText] = [];
    }
    requirementsPerSection[sectionNumberText].push({
      // flat content here, we don't want potential re-processing.
      textContent: parentElem.textContent || "",
      contextId: parentElem.id,
      sectionId: sectionElem.id,
      sectionTitle: sectionTitle,
      sectionNumber: sectionNumberText,
    });
  });
  // Create the index of RFC 2119 references
  for (const [__, requirements] of Object.entries(requirementsPerSection)) {
    const entryForSection = document.createElement("li");
    entryForSection.innerHTML = `In § <em>${requirements[0].sectionTitle}</em>:`;
    const listForSection = document.createElement("ol");

    for (const requirement of requirements) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#${requirement.contextId}">${requirement.textContent}</a>`;
      listForSection.appendChild(li);
    }
    entryForSection.appendChild(listForSection);
    ul.appendChild(entryForSection);
  }
}

var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specStatus: "DRAFT",
  pubDomain: "verkeersborden",
  shortName: "technicaldocs",
  license: "CC-BY",
  subtitle: "Toelichting op het informatiemodel",
  lint: { "no-unused-dfns": false },
  editors: [
    {
      name: "Elisabeth Klören",
      company: "CROW",
    },
    {
      name: "Redmer Kronemeijer",
      company: "CROW",
    },
  ],
  github: "https://github.com/Stichting-CROW/verkeersborden",
  postProcess: [indexOfRequirements],
  hypothesisComments: false,

  localBiblio: {
    Leidraad_SE_3: {
      title: "Leidraad SE versie 3",
      href: "https://www.leidraadse.nl/assets/files/downloads/LeidraadSE/V3/Leidraad_V3_SE_web.pdf",
      status: "Actueel",
      publisher: "Leidraad SE",
    },
    NEN_EN_ISO_9000_2015: {
      title:
        "NEN-EN-ISO 9000:2015 Kwaliteitsmanagementsystemen - Grondbeginselen en verklarende woordenlijst",
      href: "https://www.nen.nl/en/nen-en-iso-9000-2015-en-nl-211925",
      status: "Actueel",
      publisher: "NEN",
    },
    ISO_IEC_IEEE_29148_2018: {
      title:
        "ISO/IEC/IEEE 29148:2018 Systems and software engineering — Life cycle processes — Requirements engineering",
      href: "https://www.iso.org/standard/72089.html",
      status: "Actueel",
      publisher: "ISO",
    },
    ISO_IEC_IEEE_15288_2015: {
      title:
        "ISO/IEC/IEEE 15288 Systems and software engineering - System life cycle processes",
      href: "https://www.iso.org/standard/63711.html",
      status: "Actueel",
      publisher: "ISO",
    },
    NEN_2660_2_2022: {
      title:
        "NEN 2660-2 Regels voor informatiemodellering van de gebouwde omgeving - Deel 2: Praktische configuratie, extensie en implementatie van NEN 2660-1",
      href: "https://www.nen.nl/en/nen-2660-2-2022-nl-291667",
      status: "Actueel",
      publisher: "NEN",
    },
    NEN_2660_1_2022: {
      title:
        "NEN 2660-1 Rules for information modelling of the built environment - Part 1: Conceptual models",
      href: "https://www.nen.nl/en/nen-2660-1-2022-nl-291666",
      status: "Actueel",
      publisher: "NEN",
    },
    NEN_EN_ISO_55000_2014: {
      title:
        "ISO 55000:2014 Asset management — Overview, principles and terminology",
      href: "https://www.nen.nl/nen-iso-55000-2014-nl-193078",
      status: "Actueel",
      publisher: "NEN",
    },
    NEN_EN_ISO_19650_1_2019: {
      title:
        "Organisatie en digitalisering van informatie over gebouwen en civieltechnische werken, met inbegrip van building information modelling (BIM) - Informatiemanagement met behulp van bouw informatie modelling - Deel 1: Concepten en beginselen",
      href: "https://www.nen.nl/nen-en-iso-19650-1-2019-nl-275305",
      status: "Actueel",
      publisher: "NEN",
    },
    NEN_EN_ISO_19650_2_2019: {
      title:
        "Organisatie en digitalisering van informatie over gebouwen en civieltechnische werken, met inbegrip van building information modelling (BIM) - Informatiemanagement met behulp van building information modelling - Deel 2: Leveringsfase van de assets",
      href: "https://www.nen.nl/nen-en-iso-19650-2-2019-nl-275518",
      status: "Actueel",
      publisher: "NEN",
    },
    NEN_EN_ISO_19650_3_2020: {
      title:
        "Organization and digitization of information about buildings and civil engineering works, including building information modelling (BIM) - Information management using building information modelling - Part 3: Operational phase of the assets",
      href: "https://www.nen.nl/nen-en-iso-19650-3-2020-en-275488",
      status: "Actueel",
      publisher: "NEN",
    },
    NEN_EN_ISO_19650_4_2022: {
      title:
        "Organization and digitization of information about buildings and civil engineering works, including building information modelling (BIM) - Information management using building information modelling - Part 4: Information exchange",
      href: "https://www.nen.nl/nen-en-iso-19650-4-2022-en-301119",
      status: "Actueel",
      publisher: "NEN",
    },
    "NEN3381:2020": {
      title:
        "Wegmeubilair - Eisen voor permanente en tijdelijke verkeersborden",
      href: "https://www.nen.nl/nen-3381-2020-nl-267378",
      status: "Actueel",
      publisher: "NEN",
    },
  },
};
