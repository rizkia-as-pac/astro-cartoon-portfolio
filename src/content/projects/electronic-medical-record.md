---
title: "Electronic Medical Record System"
date: "13/02/2025"
start_date: "13/02/2025"
organization: "Unimuda Medical Center"
excerpt: "Developing a Digital Medical Record (EMR) system using Golang, PostgreSQL, and SQLC with the implementation of Clean Architecture, and building the interface with Svelte and Tauri for Android applications."
techStack:
  - name: "Golang"
    icon: "/svg/golang.svg"
  - name: "PostgreSQL"
    icon: "/svg/postgresql.svg"
  - name: "SQLC"
    icon: "/icons/sqlc.png"
  - name: "Svelte"
    icon: "/svg/svelte.svg"
  - name: "Tauri"
    icon: "/icons/tauri.png"
gallery:
  - "/content/projects/electronic-medical-record/7.png"
  - "/content/projects/electronic-medical-record/1.png"
  - "/content/projects/electronic-medical-record/2.png"
  - "/content/projects/electronic-medical-record/3.png"
  - "/content/projects/electronic-medical-record/6.png"
  - "/content/projects/electronic-medical-record/4.png"
  - "/content/projects/electronic-medical-record/5.png"
---

This project is an electronic medical record (EMR) system developed in collaboration with **Unimuda Medical Center**. The goal is to support daily clinical and administrative workflows through a structured and maintainable system.

## Overview

The system is designed to manage patient information, patient visits, and medical record data, along with related administrative data such as organizations, locations, and practitioners. This structure helps keep clinical data organized and connected within its operational context.

From the start, the focus has been on keeping the structure clear and avoiding unnecessary complexity, allowing the system to evolve gradually as real needs become clearer.

## Implementation

Backend and frontend are treated as separate concerns to keep responsibilities clear. Design decisions prioritize readability, consistency, and long-term maintainability rather than rapid feature expansion.

The overall structure is intended to make data relationships explicit and easier to reason about as the system becomes larger.

## Current State

This project is still under active development and will continue to be updated. It is planned to be deployed and used in practice, not only as a prototype or academic exercise.

## Notes

This project reflects my general approach to larger systems: start simple, build a solid foundation, and improve things step by step based on real usage and feedback.
