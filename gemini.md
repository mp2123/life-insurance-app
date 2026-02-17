# 🎯 Workspace Context: Life Insurance & Mixology Monorepo

## 📚 Objectives
1.  **Life Insurance AZ 2026:** Study for the licensing exam using a high-end AI-powered web app.
2.  **Professional Bartender Portfolio:** A creative web app for cocktail recipes, tutorial videos, and affiliate marketing.

## 🛠 Active Tools & Skills
- **Marp Pro:** Generating professional study slide decks.
- **Mermaid Visualizer:** Creating comprehensive insurance and mixology mindmaps.
- **Vercel AI SDK v6:** Powering the "Bring Your Own Key" (BYOK) AI assistants.
- **Supabase & Prisma:** Managing Postgres databases for both applications.

## 📜 Standard Operating Procedures
1.  **Monorepo Management:** 
    - `frontend/` contains the Insurance App.
    - `bartender-app/` contains the Mixology Portfolio.
2.  **Database Connection:** Use the **Session Pooler (Port 5432)** for all Prisma CLI operations (`db push`, `generate`) to avoid IPv6/Transaction pooling hangs.
3.  **Visual Standards:** Use "Gaia" theme for Insurance and "Neutral/Amber" glassmorphism for Bartending.
4.  **AI BYOK:** Ensure the "Settings" button in the chatbot is used to save personal Gemini/OpenAI keys to `localStorage`.

## 🚀 Technical Status & Milestones
- **[x] Insurance Database Live:** 307 verified questions successfully seeded to Supabase.
- **[x] Butter-Smooth Scroll:** Optimized `card-scanner.tsx` with `useAnimationFrame` for 120Hz smooth motion.
- **[x] Bartender App Cloned:** Architecture duplicated and themed for Mixology.
- **[x] Vercel Deployments:** Both apps connected to GitHub and hosted on Vercel.

## 📍 Where We Left Off (Next Steps)
1.  **Bartender Database Setup:**
    - Run `npx prisma db push` using the new Bartender Supabase URL.
    - Run `node prisma/seed-bartender.js` to upload initial cocktail recipes.
2.  **Video Integration:** Embed personal bartending tutorial videos into the `bartender-app` landing page.
3.  **Affiliate Shop:** Add curated bar tool links to the `Product` table in Supabase.
4.  **Practice Exam Logic:** Build the interactive testing UI for the Insurance app using the live `Question` table.
