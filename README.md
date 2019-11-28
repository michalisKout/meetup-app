# meetup-app

This is an assignment for creating a meetup-like web app based on custom react hooks.

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

> **Design Patterns**

    - Container/Presentational pattern is used for the react part.
    - 7-1 design pattern is used for stylesheets.
    - BEM using sass.

> **Delivery Process - Trello board [Link](https://trello.com/b/Vd9rnbZM/trivago-challenge)**

> **CI/CD Site Deploy - [Link](https://happy-visvesvaraya-d5d3bd.netlify.com)**

> **How to Execute**

- Specify the node version. You can run "nvm use" for this step.
- Install node_modules using "npm i"
- Run in Developement mode: "npm start"
- Production build: "npm build"
- Setup Mock API with json-server: "npm run mock:api"
- Run tests/ export coverage statistics: "npm test" / "npm run test:coverage"

_Assigment Notes_:

- Used prop-types dependency to simulate type strict rules.
- Clean Code principles applied across the codebase.
- Accessibility.
- All dependencies have been set to bugfix versions updates only to keep the consistency of workflow across all dependencies.
- I have not used react-app boilerplate. The webpack, jest and eslint configurations are customized by me.
- Mocked Api is not covered by unit tests.
- HashRouter used instead of Router for supporting deployment on a static site genarator (like Netlify).
- EventsDataTransformer is not tested.
- Unit Tests aren't completed (1 failing test on api test).
