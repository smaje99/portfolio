# TrazalITA — case study

**Work item:** `BLG-F3-S06-01`
**Status:** editorial brief `draft`; ready for a future public implementation, not published as an Astro route.
**Project status:** `in-development`
**Visibility:** `private`
**Review owner:** Sergio Majé
**Evidence reviewed:** [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), [`src/data/projects.ts`](../../src/data/projects.ts), [`docs/project-status-taxonomy.md`](../project-status-taxonomy.md), and [`docs/case-study-template.md`](../case-study-template.md).

## 1. Executive summary

TrazalITA is an information system in development that supports compliance management related to the Transparency and Access to Information Index (ITA), overseen by Colombia’s Procuraduría General de la Nación. The project is aimed at educational institutions and administrative staff, in a context where organizing regulatory requirements and their management may be a specific need. Sergio Majé directs the project’s scope, requirements, architecture, technical documentation, operations, and governance. This brief records confirmed decisions and limits, but it does not yet present specific features, verifiable results, or an operational product.

## 2. Context and problem

The project starts from a management need: educational institutions may require a specific tool to organize compliance associated with Procuraduría surveys. The identified context includes the risk of observations, memoranda, or sanctions when the information and responsibilities related to that compliance are not managed clearly. TrazalITA addresses this context through the ITA framework and its regulatory requirements.

The confirmed information supports a description of the general purpose and intended users — administrative staff — but does not authorize details about a specific institution, its documents, data, internal processes, or sensitive design. The previous operational limitation, the complete user and data flow, and an inventory of implemented features are not published either. Those elements require additional evidence or validation and are deferred.

Therefore, this brief explains the compliance problem and the solution reasoning at a publishable level. A system demonstration, specific modules, internal documents, and claims about institutional results remain outside the current scope.

## 3. Objective and scope

### Objective

Support compliance management related to the Transparency and Access to Information Index (ITA) in educational institutions.

### Included in the documented scope

- The system’s focus on compliance related to the ITA.
- Requirements defined from Resolution 1519 of 2020 and its annexes.
- The definition and documentation of architecture, operations, and governance decisions.
- The use of an existing CMS as the solution’s foundation, with the scope focused on ITA regulations.

### Outside the current public scope

- Specific features, implemented modules, and the precise separation between design and implementation.
- The complete user and data flow.
- Results, metrics, validations, or evidence of operation.
- Screenshots, internal documents, institutional data, and sensitive technical details.
- Presenting the project as an integral educational management application or commercial product.

The primary constraints are the confidentiality of the institutional context and the lack of detailed, publishable technical evidence.

## 4. Personal contribution

Sergio directs the project’s scope and management and makes the solution decisions within the identified regulatory framework. He contributes to researching and documenting the regulations, defining requirements, recording architecture decisions (ADRs), defining the architecture and operations, preparing data dictionaries and sequence diagrams, and establishing project governance.

This description reflects the documented scope of his contribution; it does not claim that Sergio built every component alone or attribute results that do not yet have publishable evidence. ChatGPT/Codex is used as assistance for analysis and construction under Sergio’s direction, without replacing his responsibility for scope, decisions, and review.

The brief does not identify other people or institutions or assign authorship for elements that are not documented for publication. The team contribution, implementation of specific modules, and system validation require a future expansion.

## 5. Solution decisions

### Start from an existing CMS

The main decision is to use an existing CMS and focus it on ITA regulations, rather than building an integral educational management application from scratch. The confirmed criterion is to keep the problem within a focused compliance scope and use an existing technological foundation. The functional outcome of this decision is not stated yet: its integration and specific needs remain part of the development work.

### Translate the regulatory framework into requirements and artifacts

Resolution 1519 of 2020 and its annexes are the primary regulatory basis. Requirements are defined from that framework, and decisions are documented through ADRs, architecture, data dictionaries, and sequence diagrams. This maintains an explicit relationship between the regulation and the design, although this brief does not publish the detailed contents of those artifacts.

### Separate managed content from static presentation

The solution uses PayloadCMS with Next.js and PostgreSQL, while Astro generates static pages from content managed by PayloadCMS. Each content change requires a new `astro build`. Docker and Nginx cover the infrastructure, and TypeScript is part of the development stack. This describes the confirmed technology composition; it does not mean that the case study is currently exposed on the public site or that the complete system is operational.

### Keep publication limits proportional to the evidence

The brief publishes only the purpose, regulatory basis, technology composition, and documented contribution. It does not publish discarded alternatives, institutional decisions, modules, results, or internal material because no authorized technical source is available to describe them in detail. Their known status is `pending` or `restricted`, not a hypothesis to be filled in narratively.

## 6. Architecture and flow

The publishable architecture can be summarized as a separation between content management, site generation, and infrastructure support:

- **Content management:** PayloadCMS, supported by Next.js and PostgreSQL.
- **Presentation:** Astro generates static pages from managed content.
- **Infrastructure:** Docker and Nginx.
- **Cross-cutting language:** TypeScript.

The regulatory input to the problem consists of Resolution 1519 of 2020 and its annexes. However, the complete flow from a requirement or regulation to its management, review, evidence, response, or report is not confirmed for publication. For that reason, this brief does not draw a user flow or assign responsibilities to specific modules.

Persistence and integrations are mentioned only at the level confirmed by the stack: PostgreSQL is part of the PayloadCMS foundation, and Astro consumes CMS-managed content during the build process. Internal boundaries, validations, dependencies, and the precise separation between current implementation and planned evolution are deferred to a reviewed technical expansion.

## 7. Implementation and evidence

| Claim | Evidence | Maturity | Publishable |
| --- | --- | --- | --- |
| TrazalITA is an information system in development focused on compliance related to the ITA. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), “TrazalITA” section; [`src/data/projects.ts`](../../src/data/projects.ts). | applied | summarized |
| The project is aimed at educational institutions and administrative staff. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), TrazalITA input table. | contextual | yes |
| The primary regulatory basis is Resolution 1519 of 2020 and its annexes. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), “Evidence” area. | contextual | yes |
| The solution uses Docker, Nginx, PayloadCMS, Next.js, PostgreSQL, Astro, and TypeScript. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), “Technologies” area. | contextual | summarized |
| Sergio directs the project’s scope, requirements, architecture, operations, documentation, and governance. | [`docs/case-study-input-matrix.md`](../case-study-input-matrix.md), “Contribution” area. | applied | summarized |
| Specific features, a complete flow, verifiable results, or detailed publishable technical evidence exist. | The matrix records these elements as deferred or closed by scope; no authorized technical source is provided for publication. | pending | no |

The reviewed evidence supports a contextual editorial brief. It includes no screenshots, internal documents, private URLs, personal data, secrets, code fragments, or unvalidated metrics.

## 8. Current status and next steps

The project’s canonical status is `in-development`: TrazalITA is under construction and must not be described as operational, a validated MVP, or a finished product. The confirmed elements are its purpose, regulatory basis, intended users, technology composition, and the scope of Sergio’s contribution.

The documented next step is to integrate an existing CMS that responds to the defined needs. This brief does not anticipate modules, dates, results, or an operating model without supporting evidence. Publishing a detail route in Astro is a later task and requires a new editorial review.

## 9. Learnings

- A concrete regulatory framework can provide a starting point for organizing requirements and decisions, as long as the relationship between regulation, design, and evidence remains documented.
- In a focused compliance problem, starting from an existing CMS helps keep the solution bounded and avoids assuming the scope of an integral platform from the outset.
- ADRs, data dictionaries, sequence diagrams, and operations documentation make the technical reasoning visible before implementation details are exposed.
- Confidentiality does not prevent a project from being explained; it requires a precise separation between what can be published, what must be summarized, and what needs future validation.

## 10. Publication limits

- This brief is documentary and remains in `draft`; it creates no public route, navigation link, CTA, or CMS entry.
- The project retains exactly the `in-development` status and `private` visibility of the strategic inventory.
- No institutional names, documents, personal data, sensitive designs, secrets, internal URLs, or proprietary rules are exposed.
- Features, flow, results, metrics, or validations are not presented as facts when they are deferred.
- The personal contribution is described at the confirmed scope and is not expanded into integral authorship of an operational product.
- The English version preserves the same status, scope, responsibility, and maturity level.
