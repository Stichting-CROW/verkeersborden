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
  shortName: "beheerplan",
  license: "CC-BY",
  subtitle: "Open beheer conform BOMOS",
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
  lint: { "no-unused-dfns": false },
  localBiblio: {
    BOMOS_fundament: {
      title: "BOMOS, het fundament",
      href: "https://gitdocumentatie.logius.nl/publicatie/bomos/fundament/",
      status: "Actueel",
      publisher: "Logius",
    },
    BOMOS_verdieping: {
      title: "BOMOS, de verdieping",
      href: "https://gitdocumentatie.logius.nl/publicatie/bomos/verdieping/",
      status: "Actueel",
      publisher: "Logius",
    },
    kenkrechmer: {
      title: "Open standaards call for action",
      href: "https://www.csrstds.com/OpnStdsCallforAction.pdf",
      status: "Actueel",
      publisher: "University of Colorado",
    }, 
    NEN_2660_2_2022: {
      title: "NEN 2660-2 Regels voor informatiemodellering van de gebouwde omgeving - Deel 2: Praktische configuratie, extensie en implementatie van NEN 2660-1",
      href: "https://www.nen.nl/en/nen-2660-2-2022-nl-291667",
      status: "Actueel",
      publisher: "NEN",
    }, 
    },
};

