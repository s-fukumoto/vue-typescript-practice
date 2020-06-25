## Project
vue-typescript-practice

---
## 概要
VueでTypescriptを導入するための練習  

---
## 環境
* vue.js
* typescript

---
## project作成時めも
```
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, Linter
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
? Pick the package manager to use when installing dependencies: NPM
```

---
## 手順

```bash
cd vue-typescript-practice

docker-compose up -d

docker-compose exec app bash -c "npm install"

docker-compose exec app bash -c "npm run serve"

start http://localhost:8080
```
