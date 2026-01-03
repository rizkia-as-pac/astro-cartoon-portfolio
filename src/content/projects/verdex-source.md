---
title: "Verdex Source – Digital Asset Marketplace"
date: "09/26/2024"
start_date: "09/26/2024"
completion_date: "11/28/2024"
organization: "Verdex ID"
excerpt: "A digital asset marketplace focused on database design and backend development with payment gateway integration."
techStack:
  - name: "TypeScript"
    icon: "/svg/typescript.svg"
  - name: "Next.js"
    icon: "/svg/nextjs.svg"
  - name: "PocketBase"
    icon: "/svg/pocketbase.svg"
  - name: "Tripay"
    icon: "/icons/tripay.png"
gallery:
  - "/content/projects/verdex-source/2.png"
  - "/content/projects/verdex-source/1.png"
  - "/content/projects/verdex-source/3.png"
---

This project is a digital asset marketplace developed for **Verdex ID**, where I worked as a Backend Developer. The main responsibility in this project was designing the database structure and building the backend to support transactional workflows.

## Overview

The system is designed to manage digital assets, users, and purchase flows in a structured and consistent way. Special attention is given to how data is organized so that transactions, ownership, and payment states can be handled reliably.

The project emphasizes clarity in data relationships and backend logic rather than complex feature layering.

## Payment Integration

A key part of this project is integrating a payment gateway to handle asset purchases. The payment flow covers transaction creation, payment status handling, delivering digital assets to buyers, and updating purchase states based on payment results.

The integration is designed to fit cleanly into the backend logic, keeping payment-related concerns isolated from core business rules where possible.

## Implementation

The backend is built using TypeScript with Next.js, while PocketBase is used as a lightweight backend service for data storage and authentication. Database design and API structure are tailored to support marketplace use cases and payment workflows.

## Current State

The project was developed between September 2024 and November 2024 and has been deployed for actual use. It serves as a practical implementation of backend design and payment gateway integration in a real product environment.
