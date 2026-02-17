---
name: mermaid-visualizer
description: High-end infographic and diagram generator using Mermaid CLI. Use this to create flowcharts, mind maps, and entity-relationship diagrams for study material.
---

# 📊 Mermaid Visualizer Skill Instructions

## When to use:
- When the user asks for "infographics", "charts", "diagrams", or "visual maps".
- To visualize complex relationships (e.g., "Life Insurance Policy Cycle").

## Core Command:
To render a diagram:
`mmdc -i <input.mmd> -o <output.png> -b transparent`

## Diagram Styles:
1. **Flowcharts:** Use `graph TD` for vertical processes.
2. **Mind Maps:** Use `mindmap` syntax for brainstorming concepts.
3. **Themes:** Always use the `neutral` or `base` theme for professional look.
   `mmdc -i <input.mmd> -o <output.png> -t neutral`
