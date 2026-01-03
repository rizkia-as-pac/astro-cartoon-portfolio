---
title: "Meezu Store – Merchandise Online Store"
date: "03/03/2024"
start_date: "03/08/2024"
completion_date: "05/18/2024"
organization: "Verdex ID"
excerpt: "A merchandise online store where I designed the database and developed the backend with payment gateway integration."
techStack:
  - name: "TypeScript"
    icon: "/svg/typescript.svg"
  - name: "Next.js"
    icon: "/svg/nextjs.svg"
  - name: "PostgreSQL"
    icon: "/svg/postgresql.svg"
  - name: "Prisma ORM"
    icon: "/icons/prismaorm.svg"
  - name: "Tripay"
    icon: "/icons/tripay.png"
gallery_column: 4
gallery:
  - "/content/projects/meezu-store/5.png"
  - "/content/projects/meezu-store/1.png"
  - "/content/projects/meezu-store/2.png"
  - "/content/projects/meezu-store/3.png"
  - "/content/projects/meezu-store/4.png"
  - "/content/projects/meezu-store/6.png"
  - "/content/projects/meezu-store/7.png"
  - "/content/projects/meezu-store/8.png"
  - "/content/projects/meezu-store/9.png"
  - "/content/projects/meezu-store/10.png"
---

This project is a merchandise online store developed for a content creator, where I worked as a Backend Developer as part of a small development team. It was my first real-world client project, involving direct collaboration with UI/UX designers, frontend developers, a copywriter, and a tech lead.

## Overview

The system supports common e-commerce workflows such as product listing, shopping cart, order processing, and payment handling. On the backend side, the focus was on designing a database structure that could reliably handle products, orders, discounts, and transaction states.

The project emphasized practicality and speed, as the client wanted a solution that could be launched quickly without complex onboarding processes.

## Payment Integration

A key part of this project is integrating a payment gateway to handle merchandise purchases. The payment flow covers transaction creation, payment status handling, delivering order results to buyers, and updating order states based on payment outcomes.

Tripay was chosen due to its relatively simple setup process, allowing the team to move forward without long registration or approval delays.

## Implementation & Challenges

I was responsible for designing the database, developing backend logic, and writing API specifications. As the project progressed, I had to revise the database design multiple times to better match real transaction flows and edge cases.

Midway through development, two backend team members stepped away due to academic commitments, which required me to take over the remaining backend tasks. Additional challenges included limitations in the chosen stack for background processing, which led to using cron jobs to handle tasks such as sending transactional email notifications.

## Notes

This project taught me a lot about **working in a team, handling client expectations, and adapting technical decisions under real constraints.** It was a meaningful step from academic learning to practical backend development in a production-facing project.
