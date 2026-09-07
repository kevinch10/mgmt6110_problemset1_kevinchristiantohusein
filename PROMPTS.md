# PROMPTS.md - [ScoutEdge]
**Student:** [Kevin Christianto Husein] · **Course:** MGMT 6110 · **Problem Set 1**
**User sentence:** A football coach opens this screen to identify an upcoming opponent’s three biggest weaknesses, and knows it worked when those three weaknesses are clearly highlighted with supporting statistics.
**Live link:** (https://mgmt6110problemset1kevin.vercel.app/)

---

## Prompt 1 - the master prompt
```
ROLE: You are a senior front-end developer building a React web app.
GOAL: Build the front end of [ScoutEdge], a web product for [football coaches and coaching staff preparing for an upcoming match, reviewing the opponent before a training session or match-planning meeting, with one coaching staff using the product at a time]. Their job on this product is [identify the upcoming opponent’s three biggest weaknesses so they know what to focus on in their match preparation]. Screens:
[Match Overview: shows the upcoming opponent, upcoming match, recent results, and key fictional performance statistics; the user reviews the opponent’s current form; they see a clear summary of who they are playing and how the opponent has been performing]
[Weakness Analysis: shows the opponent’s three biggest weaknesses ranked by importance, with supporting fictional statistics and explanations; the user reviews the evidence behind each weakness; they see three clearly highlighted weaknesses with supporting statistics]
[Match Preparation: shows the three weaknesses converted into preparation priorities, including a tactical focus and training focus for each; the user reviews what the team should prepare for; they see three clear and actionable preparation priorities]
OUTPUT: A running app. Keep every invented value in ONE data file of its own, with
at least [15] rows, so the screen looks real. One component per screen or section.
Move between screens without reloading the page. Readable on a phone at arm's
length. When you are done, list the files you created and what each one holds.
GUARDRAILS: Screens and invented data only. Do NOT call the Gemini API or any
other model. Do NOT call any outside service or fetch from any URL. No database,
no login, no user accounts, no analytics. No features I did not list. No real
company's name, logo, or trademark. Invented names and numbers only, nothing
confidential.
CONTEXT: Individual Problem Set 1 for MGMT 6110 Human-AI Collaboration at SMU.
Built in Google AI Studio, shared as a link, and opened on a phone by classmates
in Week 3. I am not a programmer: when you make a choice I did not specify, say
so in one line rather than burying it.
```
**What came back:** A running app, 3 screens, first screen with 18 rows, preview loaded. It also added a
a lot of performance statistics which was very detailed.
**What I changed next and why:** Decided to limit it to just 10 rows instead since it was too long and hard to understand and digest.

---

## Prompt 2 - Match Overview's performance statistics overcrowded
```
The performance statistics in the Match Overview screen is too complicated with 18 rows please cap it at maximum of 10.

```
**What came back:** The match analysis was limited to just 10.
**What I changed next and why:** The second page "Weakness Analysis" was inconsistent the first rank had in-depth analysis while rank 2 and rank 3 did not have any in-depth analysis

---

## Prompt 3 - Weakness Analysis page
```
For the Weakness Analysis page, the weakness rank 2 and 3 does not have an in-depth tactical analysis while rank 1 has it, please make it consistent throughout all three ranks

```
**What came back:** The Weakness Analysis page is now consistent, rank 1, 2, and 3 all have in-depth analysis
**What I changed next and why:** Changed nothing else.

---

