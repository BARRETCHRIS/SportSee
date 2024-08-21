# Project 12 - Front-End App

This repository contains all the source code to run the SportSee sports analytics dashboard App.

## 1. General information

This project doesn't use Docker. In this documentation you will find the technologies and method used to launch the project.

## 2. Project

### 2.1 Prerequisites

-[NodeJS (**version 18.20.4**)](https://nodejs.org/fr/blog/release/v18.20.4)
-[Yarn (**version 1.22.22**)](https://classic.yarnpkg.com/lang/en/docs/getting-started/)
-[React (**version 18.3.1**)](https://legacy.reactjs.org/docs/getting-started.html)
-[Vite (**version 5.3.4**)](https://vitejs.dev/guide/)
-[Recharts (**version 2.12.7**)](https://recharts.org/en-US/guide/installation)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to launch the app. 

### 2.3 Endpoints

- `http://localhost:5173/*` returns a 404 error display for all routes not compliant. with the app
- `http://localhost:5173/` returns to the Home Page which contains 2 checkboxes to display user models in profile. the AppRouter also contains redirections in order to streamline the use of URLs
- `http://localhost:5173/profile/${userId}` (id 12 or 18 for models) returns the user profile according to id
- `http://localhost:5173/tuning` returns to the Sitting Page under development. the AppRouter also contains redirections in order to streamline the use of URLs
- `http://localhost:5173/cluster` returns to the Community Page under development. the AppRouter also contains redirections in order to streamline the use of URLs
