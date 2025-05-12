# react-providers-tree

A utility to build a tree of React providers with their props.

## Installation

```bash
npm install react-providers-tree
# or
yarn add react-providers-tree
```

## Usage

```tsx
import buildProvidersTree from 'react-providers-tree';

// Example providers
const ThemeProvider = ({ children }) => <div className="theme">{children}</div>;
const AuthProvider = ({ children }) => <div className="auth">{children}</div>;

// Create the providers tree
const Providers = buildProvidersTree([
  [ThemeProvider, { theme: 'dark' }],
  [AuthProvider, { isAuthenticated: true }],
]);

// Use in your app
function App() {
  return (
    <Providers>
      <YourApp />
    </Providers>
  );
}
```

## API

### `buildProvidersTree(componentsWithProps: Array<[Provider, props]>)`

Creates a single component that wraps all providers in the correct order.

#### Parameters

- `componentsWithProps`: An array of tuples, where each tuple contains:
  - A React provider component
  - Props object for that provider

#### Returns

A React component that accepts children and renders all providers in the correct order.

## License

MIT 