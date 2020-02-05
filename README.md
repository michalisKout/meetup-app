# meetup-app

This is a meetup-like web app based on custom react hooks.

# Tech description

> **Stack Tech (Core)**:

     - node version ===> 10.15.3 // npm ===> 6.4.1
     - webpack 4.41 .
     - React 16.10.* .
     - node-sass 4.12.* .
     - eslint 6.5.* for consistent code rules across project.
     - prettier 1.18.* for consistent code formating across project.
     - husky 3.0.* and lint-staged 9.4.* for pre-commit hooking.
     - jest 24.9.* and enzyme 6.5.* for testing.
     - json-server 0.15.* for creating a mock api.
     - axios 0.19.* for fecthing the mock api.

> **Applied Patterns**

    - Container/Presentational pattern is used for the react part.
    - 7-1 design pattern is used for stylesheets.
    - BEM using sass.

> **CI/CD Site Deploy - [Link](https://happy-visvesvaraya-d5d3bd.netlify.com)**

> **How to Execute**

- Specify the node version. You can run "nvm use" for this step.
- Install node_modules using "npm i"
- Run in Developement mode: "npm start"
- Production build: "npm build"
- Setup Mock API with json-server: "npm run mock:api"
- Run tests/ export coverage statistics: "npm test" / "npm run test:coverage"
