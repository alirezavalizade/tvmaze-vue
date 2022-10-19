# tvmaze-vue

This application is built with Vue.js, there is a React version as well, you can find it [here](https://github.com/alirezavalizade/tvmaze)! You can compare how I shared state in the both application by using the framework tools.

# Live demo

[Click here](https://tranquil-cranachan-e80665.netlify.app/)

# State machines for logic

![app-logic-overview](./public/app-logic-overview.gif?raw=true)

## Tech stack - [live demo here](https://tranquil-cranachan-e80665.netlify.app/)

### Vue 3 (composition api)

### Tailwind CSS

I like Tailwind because it helps to not repeat yourself and really helps to build something faster. Love it! the only issue I see that is sometime the code get messy because of long class names but I like the power that it gives you. everything is built from scratch. created reusable components in ui directory like Button, Icon Button etc.

### xstate for logic

Using state machines to build the application logic I believe that the application logic should live outside of any UI components. Complexity is Xstate's breakfast :) its really easy to understand your code and lets you achieve something complex in an easy way. It resolved a lot of problems for me:

- resolve the difficulty of understanding any code with or without visualizer
- resolve the difficulty of enhancing any code that was created before (legacy code).
- visualizer: above you can see an example of inspector that you can use to see the exact state of your application. You can also interact with it.
- it makes testing easier.
- there won't be any bottom-up code!
- machines are documents! You don't need to write documents any more.
- it keeps the logic out of the components which makes easier to test your UI components as well!
- it's independent of any ui library and thanks to the use ful hooks you can have optimistic ui updates which helps to have better performance in your application because your app wont get re-renders and the virtual-dom wont start get diffing process.

NOTE: I let the xstate/inspector to be active in the live application so that you can also see it live while working with the app. Make sure you unblock your popup in browser.

### virtualized list?

I couldn't find any virtual list library which works with vue 3. If there was any I'd use virtualized list like the react version or If I had more time I'd do create a virtual list.

# Screenshot of the app

![app-screenshot](./public/screenshot.png?raw=true)
![app-screenshot](./public/filter.png?raw=true)
![app-screenshot](./public/show-detail.png?raw=true)
![app-screenshot](./public/no-result-found.png?raw=true)

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
