---
title: "RTC Strikes Back"
date: "4/28/2026"
author: "Axel LARGUIER"
tags: ["Next.js", "Node.js", "WebSocket", "PostgreSQL", "MongoDB", "Docker"]
readTime: "4 min read"
excerpt: "Application de chat temps réel type Discord avec serveurs, canaux, rôles, messagerie instantanée, app desktop Electron/Tauri et pipeline CI/CD."
---

## Contexte

Projet Epitech T-JSF-600 — évolution d'une application de chat en temps réel vers un produit complet et professionnel, réalisé en équipe dans des conditions startup.

## Fonctionnalités

- Authentification complète via JWT
- Chat temps réel via WebSocket
- Gestion de serveurs et canaux
- Rôles : Owner, Admin, Member
- Kick, Ban temporaire et permanent
- Édition et suppression de messages
- Réactions emoji sur les messages
- Messagerie privée entre utilisateurs
- Intégration API GIFs (Tenor/Giphy)
- Interface multilingue FR/EN
- Application desktop via Electron/Tauri
- Notifications système

## Stack technique

| Composant | Technologie |
|-----------|-------------|
| Frontend | Next.js, React, Tailwind CSS |
| Backend | Node.js, Express, WebSocket |
| Base de données | PostgreSQL, MongoDB |
| Auth | JWT |
| DevOps | Docker Compose, CI/CD GitHub Actions |

## Architecture

**PostgreSQL** gère les données structurées : utilisateurs, serveurs, canaux, membres, invitations.  
**MongoDB** gère les données temps réel : messages, présence, typing indicators.

## CI/CD

Pipeline GitHub Actions déclenché à chaque push, merge sur main, et création de tag — build automatique de l'application.

## Tests

24 tests automatisés couvrant : Auth, Servers, Channels, Members, Invitations.