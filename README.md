# Biomes — Handlebars / Express version

This is the original Biomes website reorganized into the Express + Handlebars structure used by `WebDandD2026Example1`.

## Structure

- `app.js` — Express server and routes
- `views/layouts/default.hbs` — common page layout
- `views/partials/_head.hbs` — common `<head>`
- `views/partials/_nav.hbs` — common navigation
- `views/partials/_footer.hbs` — common footer
- `views/*.hbs` — page-specific body/main content
- `public/css/style.css` — stylesheet
- `package.json` — Express + express-handlebars dependencies

## Run

```bash
npm install
node app.js
```

Then open:

`http://localhost:3000`

The image paths are kept pointing at the original public repository so the visual assets remain the same without changing their content.
