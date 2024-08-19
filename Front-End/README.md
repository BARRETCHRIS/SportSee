# Project 12 - Front-End App
[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjYuNjc5OTk4Mzk3ODI3MTUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxMjYuNjc5OTk4Mzk3ODI3MTUgMzUiPjxyZWN0IHdpZHRoPSI1MC42Nzk5OTgzOTc4MjcxNSIgaGVpZ2h0PSIzNSIgZmlsbD0iI2Y4ZTcxYyIvPjxyZWN0IHg9IjUwLjY3OTk5ODM5NzgyNzE1IiB3aWR0aD0iNzYiIGhlaWdodD0iMzUiIGZpbGw9IiNlYWY4MWMiLz48dGV4dCB4PSIyNS4zMzk5OTkxOTg5MTM1NzQiIHk9IjIxLjUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtZmFtaWx5PSInUm9ib3RvJywgc2Fucy1zZXJpZiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjIiPlVTRTwvdGV4dD48dGV4dCB4PSI4OC42Nzk5OTgzOTc4MjcxNSIgeT0iMjEuNSIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IidNb250c2VycmF0Jywgc2Fucy1zZXJpZiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjIiPkhUTUw1PC90ZXh0Pjwvc3ZnPg==)](https://forthebadge.com)

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
