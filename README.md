Lets grow
=====================

An app being built using React listing how to grow a selection of fruit and vegetables in the garden.

### How to run

1. `git clone` repo
2. `npm install` to get the node_modules
3. `npm start` to initialize the app
4. visit [http://localhost:8080/](http://localhost:8080/)

### Hierarchy

Quick breakdown of the main files and how `react-router` and `react-redux` live within it.

+ `index.html` - contains the html markup that the application will be contained within. In this case `<main id="lets-grow" />`
+ `index.js` - contains initialization of the react-router
  * `App.js` - wraps the application in a layer that contains the top level navigation and all state changes occur while wrapped in this layer using `{this.props.children}`
  * `Home.js` - the default page for when the application is at `/`
  * `About.js` - stand alone page describing generic stuff about why I am making this application!
  * `Food.js` - a container that lists all available foods and links to individual foods. As this contains children in the `react-router` tree, it contains the `{this.props.children}` with will look out for parameters on the url that matches the fruit that is in the store and link to the correct food item via the `FoodItemComponent.js`
  * `FoodItemComponent.js` - contains the store and checks the param that it is passed. It gets the correct food from the store and passes it to the `FoodItem.js` which renders the food item
  * `FoodItem.js` - a presentational component that takes parameters and displays the correct food item
