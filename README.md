This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# React Redux Taproom Independent Project

## _By: Andrew Kim_

## Intro

This project will display a taproom that incorporates the use of React and Redux to store state. 

## Description

On page load, a user will see an  add a keg CTA. A user can then click on the button to render a new component that shows details that need to be filled to add a keg. After a keg is added, it'll get added a growing list. From there, they can update, sell pints, or delete kegs. When a user clicks the "Add Keg" button, the KegList component will be hidden and the user will see the NewKegForm component instead. State will be placed in a Redux store using a root reducer to specify how state changes in the appication. Actions and action constants will be used to perform specific functions such as deleting and adding a keg. These actions are dispatched to the store.

## Setup/Installation

Clone the repo to load a local server. User may need to npm install before the next command can be run.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Component Diagram

![](images/TapRoomDiagram.png)

## Support and Contact Details

If you run into issues with the code email me at andrewswkim47@gmail.com

## Technologies Used

React, create-react-app which packages our node modules, react-reveal, React Redux.

## License

Copyright (c) 2020 Andrew Kim



