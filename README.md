# meetup-app

This is an assignment for creating a meetup-like web app for trivago.

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
     - json-server 0.15.* for creating a fake api.

> **Design Patterns**

    - Container/Presentational pattern is used for the react part.
    - 7-1 design pattern is used for stylesheets.

_Assigment Notes_:

- Clean Code principles applied across the codebase.
- All dependencies have been set to bugfix versions updates only to keep the consistency of workflow across all dependencies.
- I am not confident in using typescript's features because I have not studied them enough yet. I used prop-types dependency instead.
- I have not used react-app boilerplate. The webpack, jest and eslint configurations are customized by me. This way the app is **lightweight**, more **flexible** on handling error cases and more **scalable**.
- There are no unit tests for the api because we already using a mocked api with static data.
