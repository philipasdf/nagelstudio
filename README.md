# Nagelstudio Projekt

Homepage für das Nagelstudio meiner Mutter :)

## Anforderungen

- lightweight & gute Performance (viele Mobile-User)
- responsive Design (wegen Mobile-User)
- schönes Design, da es Kunden ansprechen muss

## Technologie

Nach paar-stündiger Recherche, wollte ich fast "Svelte" nehmen, weil ich nur eine Homepage baue und keine Applikation mit einem User-Interface. Aber aus Übungszwecken habe ich mich dazu entschieden:

| Name             | Beschreibung                                                                          | Link                                         |
| ---------------- | ------------------------------------------------------------------------------------- | -------------------------------------------- |
| VueJS            | JavaScript Framework, einer der "big three"                                           | https://vuejs.org/                           |
| Nuxt3            | Framework für VueJS mit extra Features. Interessant hier das "Server-side rendering". | https://v3.nuxtjs.org/                       |
| Firebase Hosting | Server zum deployen meiner Anwendung von Google                                       | https://firebase.google.com/products/hosting |

# Firebase

## Deployment

ggf. vorher NEU authentifizieren (logout + login)

```sh
npm run build
firebase deploy
```

# VueJS

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
