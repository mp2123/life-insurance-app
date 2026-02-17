# 🌐 Michael Panico's Web-App Ecosystem

Welcome to the central hub of a high-performance, AI-driven monorepo. This repository houses a collection of sophisticated web applications, ranging from professional licensing study platforms to creative mixology portfolios.

## 🚀 The Ecosystem

Our ecosystem is built for scalability, performance, and a premium user experience. We leverage the latest web technologies to deliver modern, responsive, and feature-rich applications.

### 📋 Active Applications

#### 1. [Life Insurance AZ 2026](./apps/insurance-app)
A high-performance study platform designed to master the Arizona 2026 Life Insurance Exam.
- **Core Mission:** Streamline the licensing process through AI-powered study aids and interactive testing.
- **Key Features:**
  - **307 Verified Questions:** Comprehensive database seeded and ready.
  - **AI Study Assistant:** Personalized guidance using Vercel AI SDK.
  - **Optimized UI:** "Gaia" themed interface with 120Hz smooth-scroll card scanning.
  - **Interactive Exams:** Real-time feedback and progress tracking.

#### 2. [Mixology Lab & Portfolio](./apps/mixology-app)
A premium digital destination for cocktail education, professional networking, and affiliate marketing.
- **Core Mission:** Showcase bartending expertise while providing value through high-quality recipes and gear recommendations.
- **Key Features:**
  - **Recipe Discovery:** Dynamic database of curated cocktail recipes.
  - **Glassmorphic Design:** "Neutral/Amber" aesthetic for a high-end feel.
  - **Video Integration:** Embedded tutorial videos for hands-on learning.
  - **Affiliate Shop:** Integrated links for professional-grade bar tools.

## 🛠 Tech Stack

- **Framework:** Next.js 15+ (App Router, TypeScript)
- **Database:** Supabase (PostgreSQL) with Prisma ORM
- **Styling:** Tailwind CSS, Framer Motion, Lucide React
- **AI Integration:** Vercel AI SDK v6 (BYOK - Bring Your Own Key)
- **Visualization:** Mermaid.js, Three.js (Planned), Marp Pro (Slides)

## 📁 Repository Structure

```text
.
├── apps/
│   ├── insurance-app/      # Arizona 2026 Life Insurance Study Platform
│   └── mixology-app/       # Professional Bartender Portfolio & Recipe Lab
├── docs/                   # Documentation, Diagrams, and Study Materials
│   ├── diagrams/           # Mermaid source files and PNG exports
│   └── study-material/     # Master guides and OCR-processed content
├── onboarding/             # Affiliate marketing and business documents
├── scripts/                # Data processing and legacy migration tools
└── README.md               # Ecosystem Overview (You are here)
```

## ⚙️ Development & Setup

### Environment Configuration
Each application in the `apps/` directory requires its own `.env` file. Refer to the specific app's documentation for required environment variables (Supabase URLs, AI API Keys, etc.).

### Getting Started
1. Clone the repository.
2. Navigate to the desired app: `cd apps/insurance-app` or `cd apps/mixology-app`.
3. Install dependencies: `npm install`.
4. Run the development server: `npm run dev`.

---
*Developed and Maintained by Michael Panico*
