# Airbnb Clone – Setup and Component Architecture with Next.js

Welcome to the **alx-project-0x00-setup** repository. This project scaffolds a basic Airbnb clone using the **Next.js framework** with **TypeScript**, **Tailwind CSS**, **ESLint**, and structured directory patterns. It focuses on building reusable components and understanding routing in a Next.js Pages Router setup.

---

## 🚀 Getting Started

### 1. Project Initialization

We use the `create-next-app` CLI tool to scaffold this project with custom options:

```bash
npx create-next-app@latest alx-project-0x00 --typescript
```

**CLI Options Selected:**

* ✅ ESLint
* ✅ Tailwind CSS
* ✅ Import alias (`@/*`)
* ❌ Use `/src` directory
* ❌ Use App Router (we are using Pages Router)

After setup, navigate into the project directory and start the development server:

```bash
cd alx-project-0x00
npm run dev -- -p 3000
```

Visit `http://localhost:3000` to view the app.

---

## 📁 Project Structure

```bash
alx-project-0x00/
│
├── components/           # Reusable UI components
│   ├── Card.tsx
│   ├── Pill.tsx
│   └── Button.tsx
│
├── interfaces/           # TypeScript interfaces
│   └── index.ts
│
├── pages/                # Pages Router
│   ├── index.tsx         # Home page
│   ├── landing.tsx       # Custom route: /landing
│   └── about.tsx         # Custom route: /about
│
├── public/
│   └── assets/images/    # Static assets (e.g., house.png, star.png)
│
├── styles/
├── tsconfig.json
└── tailwind.config.js
```

---

## 📌 Implemented Features

### ✅ Basic Routing

Using Next.js **Pages Router**, we added the following routes:

* `/` → Homepage
* `/landing` → Landing Page
* `/about` → About Page

Example:

```tsx
// pages/landing.tsx
import Card from "@/components/Card"

const Landing: React.FC = () => (
  <div>
    <h1 className="text-xl font-extralight">Landing Page</h1>
    <Card />
    <Card />
  </div>
)
export default Landing
```

---

### 🧩 Reusable Components

#### 1. `Pill.tsx`

Displays a styled tag with dynamic text.

```tsx
import { PillProps } from "@/interfaces"

const Pill: React.FC<PillProps> = ({ title }) => (
  <div className="bg-[#F9F9F9] px-3 h-[27px] rounded-full flex justify-center items-center">
    <p className="text-sm">{title}</p>
  </div>
)
export default Pill
```

#### 2. `Card.tsx`

Displays a listing card with a title, location, rating, and icon-enhanced meta data.

* Uses `Pill` component
* Imports images from `public/assets/images`

```tsx
import Image from "next/image"
import Pill from "./Pill"
import HOUSE_IMAGE from "@/public/assets/house.png"
import STAR_IMAGE from "@/public/assets/star.png"
...
```

#### 3. `Button.tsx` (Advanced)

Accepts `title` and `style` props to render customizable buttons in different sizes and shapes:

```tsx
// Button.tsx
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, style }) => (
  <button className={`text-white px-4 py-2 ${style}`}>
    {title}
  </button>
)
export default Button
```

Used in `/landing` as:

```tsx
<Button title="Small Button" style="text-sm rounded-sm bg-blue-500" />
<Button title="Medium Button" style="text-base rounded-md bg-green-500" />
<Button title="Large Button" style="text-lg rounded-full bg-purple-500" />
```

---

## 🔡 TypeScript Interfaces

All component props are strongly typed and reusable through the `interfaces/index.ts` file.

```ts
// interfaces/index.ts
export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string
  style: string
}
```

---

## 🖼️ Assets

Move image assets into:

```
public/assets/images/
├── house.png
└── star.png
```

They are statically served and used in `Card.tsx` via the `Image` component from `next/image`.

---

## 🧪 Running the Dev Server

To view your application:

```bash
npm run dev -- -p 3000
```

Then open:

* [http://localhost:3000](http://localhost:3000) – Home
* [http://localhost:3000/landing](http://localhost:3000/landing) – Landing Page
* [http://localhost:3000/about](http://localhost:3000/about) – About Page

---

## 📌 Highlights

* ✔️ Clean modular component structure
* ✔️ Props typing using TypeScript
* ✔️ Tailwind CSS for rapid UI styling
* ✔️ Static image serving
* ✔️ Reusable buttons and UI blocks

---

## 📚 Future Improvements

* Add navigation via `next/link`
* Introduce layout components for consistent page structure
* Fetch data dynamically with `getStaticProps` or `getServerSideProps`
* Integrate App Router for more advanced features
* Add form elements and interactivity
