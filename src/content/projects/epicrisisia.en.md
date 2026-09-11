---
slug: epicrisisia.en
locale: en
status: published
title: EpicrisisIA
description: A system in development for processing and structuring information from clinical documents, with a focus on interoperability and validation.
focus: Clinical documents, interoperability, and validation
tags:
  - Python
  - FastAPI
  - MongoDB
  - Document processing
---

## Problem and objective

EpicrisisIA is a system in development for automating the audit of a medical case through the generation of a medical epicrisis. Its public focus remains document processing and structuring; it does not expose clinical cases, real documents, personal data, private prompts, or proprietary rules.

The confirmed problem is the need to read reports one by one and manually cross-reference information distributed across several artifacts. The declared end-to-end flow covers intake, extraction, normalization, validation, auditing, generation, and review, without presenting assisted output as a medical decision.

## Technical contribution

I refactored and redesigned the application, defined its architecture, integrated LLMs and RAG, improved the workflow, added deterministic tools, and aligned the experience with the company design system, including accessibility and integrated UX flows. The initial core and base flow were built by another contracted developer, with the technical lead participating in the original design.

The documented stack includes Python, Docker, MongoDB, Celery, Redis, FastAPI, and PydanticAI. This page does not assign an internal role to every component or describe RAG sources because that evidence remains restricted.

## Status and learnings

The project retains its **in-development** status. The available evidence supports describing the problem, general scope, contribution, and technologies, but not publishing sensitive designs, internal validation, or cost metrics. Learnings include stakeholder management, work queues, LLMs and RAG, refactoring, scope control, UX, and accessibility.
