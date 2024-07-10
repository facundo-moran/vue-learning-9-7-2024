# Indecision app

Primer applicacion con Vue del 06/07/24

## Extensiones utilizadas

-   [Vue Official (importante)](https://marketplace.visualstudio.com/items?itemName=Vue.volar).
-   [Vue snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets).
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Cambiar configuración por default

[Vite Configuration Reference](https://vitejs.dev/config/).

## Comando nuevo proyecto

```sh
    npm create vue@latest
```

## Comandos mas utilizados

### 1. Instalar paquetes

```sh
    npm install
```

### 2. Modificacion en archivo .prettierrc.json

```sh
# 👇 preferencia (o modificar a gusto)
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "all"
}
```

### 3. Copilación para desarrollo (modo dev)

```sh
    npm run dev
```

## Otros comandos

### Instalar TailwindCSS

```bash
# 1
$ npm install -D tailwindcss postcss autoprefixer
# 2
$ npx tailwindcss init -p
# 3 tailwind.config.ts
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ]
```

### Chequeo de tipos, compilación y minimización (modo prod)

```sh
    npm run build
```

### Lint con [ESLint](https://eslint.org/)

```sh
    npm run lint
```
