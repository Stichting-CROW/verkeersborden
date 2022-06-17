//@ts-check
/**
 * @typedef {Object} RequirementReference - A reference to where a RFC 2119 requirement was written.
 * @property {string} textContent - The context in which the reference appears
 * @property {string} contextId - The html-id of the reference
 * @property {string} sectionId - The html-id of the section
 * @property {string} sectionTitle - The title of the section
 * @property {string=} sectionNumber - The number of the section
 */

function indexOfRequirements(config) {
  const ul = document.querySelector("#index-of-requirements");
  if (!ul) return;

  const requirements = document.querySelectorAll(
    "section:not(#conformance) em.rfc2119"
  );

  /** @type {Record<string, RequirementReference[]>} */
  const requirementsPerSection = {};

  requirements.forEach((requirementElem, n) => {
    const parentElem = requirementElem.parentElement;
    if (!parentElem) return;
    if (!parentElem.id)
      //@ts-ignore
      parentElem.id = `requirement-${requirementElem.textContent.toLowerCase()}-${n}`;

    const sectionElem = requirementElem.closest("section");
    if (!sectionElem) return;
    const headerElem = sectionElem.querySelector(".header-wrapper");
    if (!headerElem) return;
    const sectionNumberElem = headerElem.querySelector(".secno");
    const sectionNumberText = sectionNumberElem
      ? sectionNumberElem.textContent || "(unnumbered)"
      : "(unnumbered)";
    const sectionTitle = headerElem.textContent || "";

    if (!requirementsPerSection[sectionNumberText]) {
      requirementsPerSection[sectionNumberText] = [];
    }
    requirementsPerSection[sectionNumberText].push({
      textContent: parentElem.textContent || "",
      contextId: parentElem.id,
      sectionId: sectionElem.id,
      sectionTitle: sectionTitle,
      sectionNumber: sectionNumberText,
    });

    // const li = document.createElement("li");
    // li.innerHTML = `<a href="#${parentElem.id}">${parentElem.textContent}</a>`;
    // ul.appendChild(li);
  });

  for (const [section, requirements] of Object.entries(
    requirementsPerSection
  )) {
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

  console.log(JSON.stringify(requirementsPerSection, undefined, "  "));
}

var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specStatus: "DRAFT",
  pubDomain: "verkeersborden",
  shortName: "framework",
  subtitle: "Uitgangspunten, use-case en architectuurframework",
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
  hypothesisComments: true,
};
