# PDF Editor 📄✨  
*A lightweight, script‑able PDF form‑filler & field editor powered by [`pdf‑lib`](https://github.com/Hopding/pdf-lib)*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) 
[![Made with Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.x-brightgreen)](#prerequisites)

---

## Table of Contents
1. [Features](#features)  
2. [Demo](#demo)  
3. [Quick Start](#quick-start)  
4. [API Reference](#api-reference)  
5. [CLI Usage](#cli-usage)  
6. [Roadmap](#roadmap)  
7. [Contributing](#contributing)  
8. [Security Notes](#security-notes)  
9. [License](#license)

---

## Features
- **Edit PDF form fields** (text, checkboxes, etc.) entirely in JavaScript
- **Extract field names** for easy scripting
- **No external CLI tools** required – pure Node.js
- **Streams & buffers** supported (useful in serverless / web contexts)
- Small dependency footprint: only `pdf‑lib@^1.17.1`

---

## Demo
```bash
# Clone & install
git clone https://github.com/pistachionet/PDF_editor.git
cd PDF_editor
npm i

# Fill two fields in sample.pdf and write output.pdf
node index.js \
  --input sample.pdf \
  --output output.pdf \
  --set "first_name=Nav" \
  --set "last_name=M."
