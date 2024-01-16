<h1 align="center">
Foodi
</h1>
<p align="center">
The Restaurant Management App
</p>

## clone or download
```terminal
$ git clone https://github.com/Riteshkaul/foodi.git
$ yarn # or npm i
```


## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `authContext` - The AuthContext folder contains the implementation of a Context API for handling authentication in your application.
    - #### `firebase` - Initialize the firebase.
    - #### `hooks` - The hooks folder contains custom React hooks that provide reusable logic for various functionalities in your application.
    - #### `pages` - The pages folder contains the admin, home and menu pages.
    - #### `layout` - The layout folder contains React components that define the overall structure of your application, including the main dashboard and menu components.
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `index.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs just the client app in development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view the client in the browser.


### `npm start`

Runs just the server in development mode.<br>
Open [http://localhost:6001](http://localhost:6001) server in the browser.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn React, check out the [React documentation](https://react.dev/).
