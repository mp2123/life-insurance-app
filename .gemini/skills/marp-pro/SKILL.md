---
name: marp-pro
description: Professional Markdown slide deck generator using Marp CLI. Use this to turn study notes or guides into paginated PDF/HTML presentations.
---

# 🎨 Marp Pro Skill Instructions

## When to use:
- When the user asks for "slides", "presentations", "Marp output", or "paginated PDFs".
- To transform long Markdown documents into visual study aids.

## Core Command:
To render a Marp file:
`marp <input.md> --pdf -o <output.pdf>`

## Presentation Standards:
1. **Theming:** Always use the `gaia` or `default` theme unless specified.
2. **Directives:** Include the following header in all generated Marp MD files:
   ```markdown
   ---
   marp: true
   theme: gaia
   paginate: true
   backgroundColor: #fff
   ---
   ```
3. **Paging:** Use `---` to separate slides.
4. **Structure:** Keep slides concise. Limit text per slide to 1 question or 3 bullet points.
