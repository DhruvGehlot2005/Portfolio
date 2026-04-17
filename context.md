# Project Overview
A high-fidelity, futuristic portfolio website for "Dhruv Gehlot", a Software Engineering Intern. The design features a dedicated Hero landing page, single-page smooth scrolling, and a minimal metallic aesthetic.

## Tech Stack
- **Runtime:** Bun
- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Material Symbols Outlined
- **Tools:** Vite (via Bun)

## Architecture
- `/frontend`: React + TS + Tailwind
- `context.md`: Single source of truth (Project Root)
- `task.md`: Task tracking (Brain Dir)

## Feature Status
- [x] Project Setup
- [x] Core Components
- [x] Visual Polish
- [x] Content Update (Resume Revamp & Integration)
- [x] Layout Expansion & Immersive Design
- [x] Hero Section Rebalancing
- [x] Expanded Project Repository (8 Projects)
- [x] Project Navigation Integration
- [x] Decorative Element Cleanup <!-- id: decor-cleanup -->
  - [x] Remove `Telemetry` component sidebars (NAV_COORD, CORE_LOAD, Readouts)
  - [x] Remove status headers from `Experience.tsx` (LOGS_LOADED, STABILITY)
  - [x] Remove protocol footer from `Contact.tsx` (PROTOCOL: DHRUV_GEHLOT_V3)
- [x] Animation Consistency <!-- id: animation-consistency -->
  - [x] Apply `scale: 1.03` hover and title color highlight to `Experience.tsx` and `Projects.tsx` nodes to match `Hackathons.tsx`
- [x] Content & Layout Calibration <!-- id: role-layout-calib -->
  - [x] Update role from "Software Engineering Intern" to "Software Engineer" site-wide
  - [x] Fix uneven block heights in `Experience.tsx` using flex-stretch alignment
- [x] High-Density Layout & Typography Scale <!-- id: density-typo -->
  - [x] Expand `max-w-6xl` containers to `max-w-7xl` for panoramic space utilization
  - [x] Global typography bump (Hero, Summary, Node Cards) for improved readability and authority
  - [x] Increased padding and spacing across all major sections to fill visual voids
- [x] Style Synchronization <!-- id: style-sync -->
  - [x] Match `Hackathons.tsx` header and card background (`metallic-card`) with `Projects.tsx` section style
- [x] Narrative Upgrade <!-- id: narrative-up -->
  - [x] Replace generic descriptions in `Hero.tsx` and `About.tsx` with solution-oriented, creative engineering copy
- [x] Section Standardization <!-- id: section-std -->
  - [x] Rename `Deployment_History` -> `Experience`
  - [x] Rename `Project_Repository` -> `Projects`
  - [x] Rename `Merit_Shields` -> `Hackathons`
  - [x] Remove technical subtitles (Professional_Nodes, Storage_Units, National_Scale) from all section headers
- [x] Contact Finalization <!-- id: contact-final -->
  - [x] Rename `Transmission_Terminal` -> `Contact`
  - [x] Transition to a split-column grid:
    - [x] **Left Column**: High-density contact nodes vertically stacked (Redundant tech labels removed)
    - [x] **Right Column**: Casual, grounded narrative focused on 3rd-year CS student experiences <!-- id: contact-narrative-tone -->
  - [x] Normalize vertical padding (`py-20`) to match site-wide section spacing standards <!-- id: contact-spacing-sync -->

## Data Models
N/A

## API Contracts
N/A

## Proposed Changes
### [frontend]
#### [MODIFY] [App.tsx](file:///c:/D_drive/Projects/Portfolio/frontend/src/App.tsx)
- Remove `Telemetry` component from the main layout.
#### [MODIFY] [Experience.tsx](file:///c:/D_drive/Projects/Portfolio/frontend/src/components/Experience.tsx)
- Remove decorative status readouts from the section header.

## Verification Plan
### Automated Tests
- `bun run dev`: Verify the clean layout without sidebars and extra status text.
### Manual Verification
- Check side edges and Experience section header for removal of targeted elements.

## Technical Debt
- Standardize all component imports to use `.tsx` extensions.
