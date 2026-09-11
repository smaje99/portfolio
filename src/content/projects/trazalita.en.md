---
slug: trazalita.en
locale: en
status: published
title: TrazalITA
description: A system in development with Astro and PayloadCMS for public transparency, compliance, document management, and traceability on a PostgreSQL foundation.
focus: Transparency, compliance, and document management
tags:
  - Astro
  - PayloadCMS
  - TypeScript
  - PostgreSQL
  - Traceability
---

## Context and purpose

TrazalITA is an information system in development that supports compliance management related to the Transparency and Access to Information Index (ITA), overseen by Colombia’s Procuraduría General de la Nación. The project is aimed at educational institutions and administrative staff who need to organize regulatory requirements and related responsibilities.

The case keeps the institutional context at a general level. It does not expose internal documents, institutional data, sensitive modules, or results without authorized public evidence.

## Confirmed scope

The work uses Resolution 1519 of 2020 and its annexes as its regulatory basis. I direct the scope, requirements, and solution decisions; I also document architecture, operations, data dictionaries, sequence diagrams, and project governance.

The main decision is to focus an existing CMS on ITA regulations instead of building an integral educational management application from scratch. The documented technology composition combines PayloadCMS with Next.js and PostgreSQL, Astro for static page generation, Docker and Nginx for infrastructure, and TypeScript for development.

## Status and limits

The project remains **in development**. This page describes its purpose, decisions, and documented contribution; it does not present specific features, a complete flow, institutional results, metrics, or an operational product. Detailed technical evidence and any expansion of the context remain subject to confidentiality review.

## Learnings

- A concrete regulatory framework helps connect requirements, architecture decisions, and evidence.
- Starting from an existing CMS keeps the compliance problem bounded and avoids assuming the scope of an integral platform.
- ADRs, data dictionaries, and sequence diagrams make technical reasoning visible without publishing sensitive material.
