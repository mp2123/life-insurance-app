# Report: Life Insurance AZ 2026 Web App Architecture

## 1. Core Architecture
The application is built using the **Next.js 16** (App Router) framework, leveraging **Tailwind CSS 4** for styling and **TypeScript** for type safety. It is hosted on **Vercel**, which provides high-performance Edge functions for AI and seamless deployment.

## 2. Data Management (Supabase + Prisma)
Your data is currently managed in a **Supabase PostgreSQL** database.
- **ORM (Object-Relational Mapper):** We use **Prisma** to define the database schema and communicate with the database.
- **Tables:**
  - `Question`: Stores 307 verified insurance questions, options, and explanations.
  - `User`: Manages user accounts and profiles.
  - `Score`: Tracks practice exam results and progress.
- **Seeding:** A custom Node.js script (`direct-seed.js`) was used to parse the OCR text and upload it directly to the cloud.

## 3. High-End Visuals & Animations
The app features several trending UI components inspired by `21st.dev` and `Aceternity`:
- **3D Rendering:** Uses `@react-three/fiber` (Three.js) for the interactive Dot Shader backgrounds and particle systems.
- **3D Parallax:** The `HalideLanding` component uses a custom 3D transform engine for topographical depth.
- **Scroll Animations:** Integrated `framer-motion` for the 3D Container Scroll effect.
- **Evervault Scanner:** A custom-built hardware-accelerated clipping system that glitches cards into ASCII code in real-time.

## 4. AI Study Assistant
The chatbot uses the **Vercel AI SDK v6** with a **"Bring Your Own Key" (BYOK)** model.
- **Providers:** Supports both **Google Gemini 1.5 Flash** and **OpenAI GPT-4o mini**.
- **Security:** API keys are stored in the user's browser `localStorage`, ensuring zero server-side costs and maximum privacy.
- **Context:** The system prompt primes the AI with Arizona 2026 insurance laws.

---
*Date: February 17, 2026*
