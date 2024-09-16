# Event Client Setup

### Pre-requisites

-   `node` and `npm` installed
-   Install `yarn`
    -   `npm i -g yarn`
    -   `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted` in an **administrator** terminal

### Run App

-   Clone repo
-   `yarn`
-   `yarn start`

# Contribution

-   Create new branch (`your-name/branch-purpose`)
-   Lint code: `yarn run lint --fix`
-   Push code with meaningful commit messages
-   Pull request

# Questions

1. What does the main component function in this application return? It returns JSX that defines the UI of the app.
2. What is the value of using core components? Note that these components are not standard ReactJS components. Core components are optimized for mobile platforms and bridge native code with the JavaScript layer for better performance and styling.
3. Do you see any of the technologies from last unit’s guide that are used here to specify the styling of the application? A StyleSheet is an abstraction similar to CSS StyleSheets.
4. How are curly braces ({}) used in the JSX code: Curly braces are used in JSX to embed JavaScript expressions within the markup.
5. What is the purpose of the asynchronous (async) methods? They are used to handle operations that take time, such as fetching data or reading from storage, without blocking the main thread.
6. Does this application code use hooks? If so, explain where; if not, explain why not: No. Because we don't have components that need internal states yet. 
7. Identify one anonymous function in the code: src/components/__tests__/themedText-test.tsx:5
