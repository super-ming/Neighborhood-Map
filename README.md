# Neighborhood Map

## Overview

This application uses React and Google Maps API to display a map of a neighborhood in
Singapore. It performs a search for nearby restaurants and returns information
about the restaurant using Facebook Places Graph API.

## Features

Each restaurant is indicated by a marker on the map. An info window with
available information about the restaurant can be activated by click or mouse
over of the marker. Clicking on the hamburger button opens a drawer displaying a
list view of the restaurants. A text box is available for the user to filter the
list via text input. Clicking on a list item will display the corresponding
info window.

## Setup

* Follow these [instructions](https://developers.google.com/maps/documentation/javascript/get-api-key) on getting your own Google API key.
* Visit [here](https://developers.facebook.com/) to create a Facebook for Developers account. Create a new
app and visit the Basic Settings page to obtain your App ID and App Secret.
* Clone this repository to your working directory.
* Install all project dependencies with `npm install`.
* In the Components folder, open map.js and replace the values of fbAppID, fbAppSecret, and googleMapsAPI
variables with your own keys. Save your changes.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Therefore, the default service worker only works in production build.

To run a production build in the project directory :

### `npm run build`
### `serve -s build`

This will run on http://localhost:5000.

## Dependencies

* react: ^16.6.0
* create-react-app: ^2.1.1
* react-burger-menu: ^2.5.4
* google-maps-react: ^2.0.2
* react-dom: ^16.6.0
* react-scripts: 2.0.5

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router-dom
```

Alternatively you may use `yarn`:

```sh
yarn add react-router-dom
```

This works for any library, not just `react-router-dom`.
