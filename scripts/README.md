# 🛠 Scripts & Utilities

This directory contains a collection of Python and Node.js scripts designed for data processing, legacy code migration, and database seeding.

---

## 📁 Directory Structure

### ⚙️ [processing/](./processing)
Advanced Python scripts for text processing, OCR cleanup, and master guide rebuilding.
- **`ultimate_processor.py`:** A comprehensive script for cleaning and consolidating OCR-extracted study content.
- **`master_rebuilder.py`:** Rebuilds the master study guide from fragmented source files.
- **`export_to_ms.py`:** Utilities for exporting Markdown content to Microsoft Office formats (Word/PowerPoint).

### 🕰 [legacy/](./legacy)
Contains historical versions and proof-of-concept implementations.
- **`bartender-v2/`:** The original Python/Flask prototype of the Mixology Lab. It includes the initial recipe database, logging systems, and basic templates used as a reference for the Next.js migration.

---

## 🛠 Script Usage & Dependencies

### Python Scripts
Requires **Python 3.10+**. 
Install dependencies (if applicable) in a virtual environment:
```bash
pip install -r requirements.txt
```

### Database Seeding
App-specific seeding scripts are located within each app's `prisma/` directory for better isolation:
- **`apps/insurance-app/prisma/scripts/`**
- **`apps/mixology-app/prisma/seed-bartender.js`**

---
*Developed and Maintained by Michael Panico*
