# 🧩 `buildProvidersTree` – Compose Multiple React Context Providers Elegantly

A tiny utility that helps you compose multiple React providers into a single clean component.

## 🚀 Features

- ✅ Fully type-safe (no `any`)
- ✅ Simple, declarative API
- ✅ Works perfectly with TypeScript's `satisfies` keyword
- ✅ Cleaner root setup for your app

---

## 📦 Installation

```bash
npm install build-providers-tree
# or
yarn add build-providers-tree
```

---

# With buildProvidersTree

## ✨ Usage Example

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { buildProvidersTree, ProviderComponent } from "build-providers-tree";

import App from "./App";
import { ThemeProvider } from "./*";
import { TanStackQueryProvider } from "./*";
import { ToasterProvider } from "./*";

const Providers = buildProvidersTree([
  [ThemeProvider, {}] satisfies ProviderComponent<typeof ThemeProvider>,
  [TanStackQueryProvider, {}] satisfies ProviderComponent<
    typeof TanStackQueryProvider
  >,
  [ToasterProvider, {}] satisfies ProviderComponent<typeof ToasterProvider>,
] as const);

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
```

# without buildProvidersTree

````tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { buildProvidersTree, ProviderComponent } from "build-providers-tree";

import App from "./App";
import { ThemeProvider } from "./*";
import { TanStackQueryProvider } from "./*";
import { ToasterProvider } from "./*";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <ThemeProvider>
      <TanStackQueryProvider>
        <ToasterProvider>
          <App />
        </ToasterProvider>
      </TanStackQueryProvider>
    </ThemeProvider>
  </StrictMode>
);

---

## 🧠 API Reference

### `buildProvidersTree(providers)`

Wraps multiple providers in a nested tree.

#### Parameters

* `providers` – A readonly array of tuples in the form of:

  ```ts
  [ProviderComponent, props]
````

Each item must satisfy the `ProviderComponent<T>` type, ensuring props are validated against each component’s expected props.

---

### `ProviderComponent<T>`

```ts
type ProviderComponent<T extends React.ElementType> = [
  T,
  Omit<React.ComponentProps<T>, "children">
];
```

You can use `satisfies` to make TypeScript enforce the prop types of each provider.

---

## 🛡️ Type Safety Tips

- Always use `as const` to preserve the tuple structure.
- Use `satisfies ProviderComponent<typeof X>` to get full type-checking on props.
- Supports any provider component that accepts `children`.

---

## 🧪 Tested With

- `styled-components` ThemeProvider
- `@tanstack/react-query` QueryClientProvider
- Custom context providers

---

## 📁 Directory Structure Suggestion

```
src/
│
├── providers/
│   ├── buildProvidersTree.ts
│   └── index.ts // exports composed Providers
│
├── App.tsx
└── main.tsx
```

---

## 📝 License

MIT © \[Mohammad Garmabi]

---

Would you like me to also generate the `package.json`, `tsconfig.json`, and entry files for publishing this as a real npm package?
