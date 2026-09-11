---
slug: epicrisisia.es
locale: es
status: published
title: EpicrisisIA
description: Sistema en desarrollo para procesar y estructurar información de documentos clínicos, con foco en interoperabilidad y validación.
focus: Documentos clínicos, interoperabilidad y validación
tags:
  - Python
  - FastAPI
  - MongoDB
  - Procesamiento documental
---

## Problema y objetivo

EpicrisisIA es un sistema en desarrollo para automatizar la auditoría de un caso médico hasta la generación de la epicrisis médica. El foco público se mantiene en el procesamiento y la estructuración documental; no se presentan casos clínicos, documentos reales, datos personales, prompts privados ni reglas propietarias.

El problema confirmado es el trabajo de leer informe por informe y cruzar manualmente información distribuida en varios artefactos. El flujo completo declarado cubre las etapas de recepción, extracción, normalización, validación, auditoría, generación y revisión, sin convertir una salida asistida en una decisión médica.

## Contribución técnica

Sergio realizó la refactorización y el rediseño integral de la aplicación, definió la arquitectura, integró LLMs y RAG, mejoró el flujo, añadió herramientas deterministas y alineó la experiencia con el sistema de diseño de la empresa, incluyendo accesibilidad y flujos UX integrados. El núcleo inicial y el flujo base fueron construidos por otro desarrollador contratado, con participación del líder técnico en el diseño original.

El stack documentado incluye Python, Docker, MongoDB, Celery, Redis, FastAPI y PydanticAI. La ficha no desglosa el papel interno de cada componente ni las fuentes del RAG porque esa evidencia permanece restringida.

## Estado y aprendizajes

El proyecto conserva el estado **en desarrollo**. La evidencia pública disponible permite explicar el problema, el alcance general, la contribución y las tecnologías, pero no publicar diseños sensibles, validaciones internas ni métricas de coste. Los aprendizajes incluyen gestión de stakeholders, colas de trabajo, LLMs y RAG, refactorización, control de alcance, UX y accesibilidad.
