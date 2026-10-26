# Portfolio content

English copy draft for the public website. Section notes and link targets are editorial instructions; publish the quoted copy and labels, not this document's instructions. Background and factual boundaries are recorded in [portfolio-brief.md](portfolio-brief.md).

This draft has been implemented with minor interface-copy adaptations. Rendered profile facts and descriptions live in [profile.ts](../src/data/profile.ts); section headings and interface copy live in [index.astro](../src/pages/index.astro) and the timeline components in `src/components/home/`. Update the implementation when changing published content.

## Navigation

Start / About / Experience / Projects / Now / Connect

## Start

Eyebrow:

> PLAYER 01

Heading:

> Hi, I'm Naufal Yudhistira.

Tagline:

> A web developer, curious about what comes next.

Introduction:

> Based in Malang, Indonesia, I build web applications and keep an eye on where technology is heading. Lately, AI and agentic development have been catching my attention.

Primary link: **Get to know me** → `#about`

Secondary link: **Find me on LinkedIn** → https://www.linkedin.com/in/gopla/

## About

Heading:

> A little about me

Body:

> I'm Naufal Yudhistira, also known as Gopla, a web developer based in Malang, Indonesia. My experience spans frontend and full-stack development, with earlier work in ERP customization and data engineering.
>
> My work includes applications for collaborative teambuilding games, as well as frontend development for microlearning modules and popup escape rooms. In the teambuilding games, players work toward a shared goal through a mix of web-based gameplay and physical puzzles similar to board games. My contribution is on the game application development side.
>
> Alongside that work, I enjoy keeping up with developments across technology. There's always something new to learn about, and lately I've been especially interested in AI and agentic development.

## Experience

Heading:

> Where I've been building

Introduction:

> From business applications to collaborative games, here's a look at my development experience.

### Helden Inc / Exp Inc.

Role: **Frontend Developer**

Dates: **October 2023–Present**

> Developing web-based games, microlearning modules, and popup escape rooms to create fun, meaningful experiences, with attention to product performance and collaboration across teams.

Editorial note: the owner confirmed Helden Inc and Exp Inc. are the same company. Publish one experience entry using the earliest supplied start date, October 2023. Original LinkedIn entries remain in profile-facts.md as source material.

### Get Aplikasi Indonesia

Role: **Software Developer**

Dates: **May 2022–October 2023**

> Developed and maintained applications across multiple projects as a full-stack developer, using different technology stacks to suit each project's needs.

### Earlier experience

Publish a timeline ordered by the latest role's start date, with one entry per company. Initially show Helden Inc / Exp Inc., Get Aplikasi Indonesia, and McEasy. Show more reveals Heasoft Indonesia and PT Jenna Berkah Barokah; Show less collapses them again. McEasy's two titles remain nested under one company, with each role's original dates and responsibilities. Preserve overlapping dates as supplied.

- **McEasy · Odoo Developer · March–May 2022:** Customized an internal Odoo ERP, including the Sales and Subscription modules.
- **McEasy · Data Engineer · December 2021–February 2022:** Collected and visualized data from Excel and database sources in dashboards.
- **Heasoft Indonesia · Full Stack Developer · January–April 2021:** Developed web applications with ExpressJS, VueJS, and MySQL.
- **PT Jenna Berkah Barokah · Full Stack Developer · December 2020–May 2021:** Built a REST API and admin website for an online shop using ExpressJS, VueJS, and MySQL.

### Education

Publish a separate, always-visible timeline beneath the experience timeline, newest first. Education stays visible when older work experience is collapsed.

- **Politeknik Negeri Malang:** Associate's degree in Information Technology · 2018–2021.
- **SMK Negeri 1 Kepanjen:** Computer Software Engineering · 2015–2018.

## Projects

Eyebrow: **PROJECT INVENTORY**

Heading: **Things I've been building.**

Display order:

1. **SaifuLog** — featured; personal finance. Track expenses, income, transfers, and monthly budgets across accounts. React, TypeScript, Firebase, Tailwind CSS. Website: https://saifulog.gopla.my.id/.
2. **Polator** — poker calculator. React, Firebase, Tailwind CSS. Website: https://polator.vercel.app/. Public source: https://github.com/gopla/polator.
3. **Helden Board** — a collaborative workspace for organizing tasks, planning sprints, and tracking work with Scrum and Kanban boards.
4. **Helden PER CMS** — a content management system for preparing PER games: multilingual content, game flows, and client-specific themes and settings.

Descriptions and stacks for the first two projects come from their local READMEs/package manifests. Pixel illustrations are decorative, not screenshots. Live demo links were supplied by the owner. Helden descriptions come from their repository domain glossaries and the CMS content-management guide. Screenshots and public Helden links have not been provided. No public SaifuLog repository link is included because the repository was unavailable anonymously.

## Now

Heading:

> On my radar

Introduction:

> A few things I'm paying attention to in technology.

### AI

> Following how AI tools are evolving and where they fit into everyday development.

### Agentic development

> Keeping up with coding agents and how they are changing the way software is built.

### What's next

> Staying curious about new ideas, tools, and approaches across the web.

## Connect

Heading:

> Let's connect

Body:

> Want to say hello or talk about web development and technology? Find me on LinkedIn, or explore what I'm building on GitHub.

Link label: **Find me on LinkedIn**

Link target: https://www.linkedin.com/in/gopla/

Secondary button: **Find me on GitHub** → https://github.com/gopla

## Footer

> Naufal Yudhistira · Web developer

Link label: **Back to start** → `#start`

## Optional interface copy

Use these sparingly as decorative accents or accessible labels when the corresponding interaction exists.

| Element                   | Copy                                    |
| ------------------------- | --------------------------------------- |
| Small welcome message     | Welcome to my little corner of the web. |
| About section accent      | CHARACTER PROFILE                       |
| Experience section accent | EXPERIENCE LOG                          |
| Now section accent        | CURRENT CURIOSITIES                     |
| Connect section accent    | SAY HELLO                               |
| Mobile navigation toggle  | Open menu / Close menu                  |
| Skip link                 | Skip to content                         |

## Page metadata

Title:

> Naufal Yudhistira (Gopla) | Web Developer

Description:

> Meet Naufal Yudhistira, also known as Gopla, a web developer based in Malang, Indonesia, with experience in web applications, collaborative games, and interactive learning.

Social preview title and description can reuse these values. Add the preview image and canonical URL when the artwork and domain are ready.
