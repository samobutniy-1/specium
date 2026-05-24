# Specium 🦁
### *The Encyclopedia of Living Species*

A modern wildlife encyclopedia built with Angular 17+. Explore different animal classes, filter by species, and discover detailed information about each animal.

---

## ✨ Features

- 🌿 Browse animals by biological class (Mammals, Birds, Reptiles, Fish, Amphibians, Insects)
- 🔍 Filter animals by order within each class
- 📖 Detailed information page for each animal
- 🎨 Glassmorphism UI with unique backgrounds per animal class
- 📱 Responsive design

---

## 🛠️ Tech Stack

- **Angular 17+** — Standalone components, Signals, Computed
- **TypeScript** — Strict typing with interfaces
- **Tailwind CSS** — Utility-first styling
- **Angular Router** — Client-side navigation with dynamic routes

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Angular CLI

```bash
npm install -g @angular/cli
```

### Installation

```bash
# Clone the repository
git clone https://github.com/samobutniy-1/specium.git

# Navigate to the project
cd specium

# Install dependencies
npm install

# Start development server
ng serve
```

Open your browser and navigate to `http://localhost:4200`

---

## 📁 Project Structure

```
src/app/
├── core/
│   └── services/
│       └── animal.service.ts     # Data access methods
├── data/
│   ├── animals.data.ts           # Animals database
│   └── animal-classes.data.ts    # Animal classes database
├── features/
│   ├── home/                     # Home page with class cards
│   ├── animal-class/             # Class page with filtering
│   └── animal-detail/            # Animal detail page
└── shared/
    ├── components/
    │   ├── animal-card/          # Reusable animal card
    │   ├── navbar/               # Navigation bar
    │   └── back-button/          # Back navigation button
    └── models/
        └── animal.model.ts       # TypeScript interfaces
```

