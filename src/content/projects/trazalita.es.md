---
slug: trazalita.es
locale: es
status: published
title: TrazalITA
description: Sistema en desarrollo con Astro y PayloadCMS para apoyar transparencia pública, cumplimiento, gestión documental y trazabilidad sobre una base PostgreSQL.
focus: Transparencia, cumplimiento y gestión documental
tags:
  - Astro
  - PayloadCMS
  - TypeScript
  - PostgreSQL
  - Trazabilidad
---

## Contexto y propósito

TrazalITA es un sistema de información en desarrollo para apoyar la gestión del cumplimiento relacionado con el Índice de Transparencia y Acceso a la Información (ITA), vigilado por la Procuraduría General de la Nación de Colombia. El proyecto se orienta a instituciones educativas y personal administrativo que necesitan organizar requisitos normativos y responsabilidades relacionadas.

La ficha mantiene el contexto institucional en un nivel general. No expone documentos internos, datos institucionales, módulos sensibles ni resultados que todavía no tienen evidencia pública autorizada.

## Alcance confirmado

El trabajo parte de la Resolución 1519 de 2020 y sus anexos como base normativa. Sergio dirige el alcance, la definición de requisitos y las decisiones de solución; también documenta arquitectura, operaciones, diccionarios de datos, diagramas de secuencia y gobierno del proyecto.

La decisión principal es enfocar un CMS existente en la normativa ITA, en lugar de construir desde cero una aplicación integral de gestión educativa. El alcance tecnológico documentado combina PayloadCMS con Next.js y PostgreSQL, Astro para generar páginas estáticas, Docker y Nginx para infraestructura, y TypeScript como lenguaje de desarrollo.

## Estado y límites

El proyecto conserva el estado **en desarrollo**. Esta página describe propósito, decisiones y contribución documentada; no presenta funcionalidades concretas, un flujo completo, resultados institucionales, métricas ni un producto operativo. La evidencia técnica detallada y cualquier ampliación del contexto permanecen sujetas a revisión de confidencialidad.

## Aprendizajes

- Un marco normativo concreto ayuda a relacionar requisitos, decisiones de arquitectura y evidencia.
- Partir de un CMS existente mantiene acotado el problema de cumplimiento y evita asumir el alcance de una plataforma integral.
- ADRs, diccionarios de datos y diagramas de secuencia hacen visible el razonamiento técnico sin publicar material sensible.
