![SportSee](/Front-end/src/assets/logo.png)

# SportSee


## Project

This is a project carried out as part of the Front-End JavaScript React Developer training program at [OpenClassrooms](https://openclassrooms.com/en/paths/517-javascript-react-developer).

> Create the consumer-facing dashboard of a sports analytics platform.
> Build graphs and charts with React and use an API to fetch data.
>
> #### Skills evaluated:
>
> -   Ensuring the data quality of an application 
> -   Develop advanced graphical elements using JavaScript libraries 
> -   Interact with a web service 
> -   Produce technical documentation for an application 

### Situation:

I work as a developer at "SportSee", a startup dedicated to sports coaching.

As the company is growing, they want to launch a new version of the user profile page. This page will allow the user to track the number of sessions completed and the number of calories burned.

My role was to develop the front-end of this profile page using React, while adhering to the Figma mockups and User Stories.
(https://www.figma.com/design/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=1-2&t=0Sxd3i0O4FiBq9r6-0)
(https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e?p=f83bcc5efa944de2b23f63bbeb5445d1&pm=s)

#### Technical Constraints:

-   Priority to the Desktop version:
    -   No need for mobile and tablet versions.
    -   The project must be readable on screens of at least 1024 by 780 pixels.
-   React:
    -   Logical separation of code into reusable components.
    -   Proptypes must be integrated for each component.
-   Use of D3 or Recharts to generate charts is recommended.
-   Data: Use an API by making HTTP calls on the provided NodeJS backend using Fetch or Axios.
    -   Calls must be made outside of React components.
-   Create project documentation.
    -   Documentation must be done in English.
    -   Functions and methods in the project must be documented.
    -   The README file should only contain installation steps and project prerequisites.

## Setup Back-end

### 1. General information

To start this project, you are free to use Docker or not. In this documentation, we will see several methods to launch the project easily.

### 2. Project (**without Docker**)

#### 2.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

#### 2.2 Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn start` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.


### 3. Project (**with Docker**)

#### 2.1 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

#### 2.2 Starting the project

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

#### 2.3 Vscode and container remotes

Finally, if you have VsCode, you can easily launch your project in a docker environment.

You will need the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). Once you have this extension installed, just click on the `Reopen in Container` button.

Once in the container, run the `yarn dev` command.

### 4. Endpoints

#### 4.1 Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

#### 4.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

## Setup Front-End

This repository contains all the source code to run the SportSee sports analytics dashboard App.

### 1. General information

This project doesn't use Docker. In this documentation you will find the technologies and method used to launch the project.

### 2. Project

#### 2.1 Prerequisites

-[NodeJS (**version 18.20.4**)](https://nodejs.org/fr/blog/release/v18.20.4)
-[Yarn (**version 1.22.22**)](https://classic.yarnpkg.com/lang/en/docs/getting-started/)
-[React (**version 18.3.1**)](https://legacy.reactjs.org/docs/getting-started.html)
-[Vite (**version 5.3.4**)](https://vitejs.dev/guide/)
-[Recharts (**version 2.12.7**)](https://recharts.org/en-US/guide/installation)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

#### 2.2 Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to launch the app. 

#### 2.3 Endpoints

- `http://localhost:5173/*` returns a 404 error display for all routes not compliant. with the app
- `http://localhost:5173/` returns to the Home Page which contains 2 checkboxes to display user models in profile. the AppRouter also contains redirections in order to streamline the use of URLs
- `http://localhost:5173/profile/${userId}` (id 12 or 18 for models) returns the user profile according to id
- `http://localhost:5173/tuning` returns to the Sitting Page under development. the AppRouter also contains redirections in order to streamline the use of URLs
- `http://localhost:5173/cluster` returns to the Community Page under development. the AppRouter also contains redirections in order to streamline the use of URLs