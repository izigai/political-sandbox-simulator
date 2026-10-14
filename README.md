# Political Sandbox Simulator

A client-side browser game where you play as a president managing a nation's stats, tax policy, budget, laws, and political characters.

## Features

- 6 core stats: GDP, Corruption, Crime, Ecology, Approval, Economy
- 20 political characters with traits that have real numerical effects
- Tax system (VAT, income tax, LVT) with parliamentary voting
- Budget allocation across 5 sectors
- 6 laws with parliamentary voting mechanics
- Full i18n support (Russian/English) with instant language switching
- Public Sentiment system with 4 social classes

## Tech

- Pure client-side JavaScript (no framework)
- Single `app.js` engine file with `GameState` class
- `build.js` copies files to `dist/`

## Running

```bash
npm install
npm run build
```

Then open `dist/index.html` in a browser.
