# :ship: Travel Buddy :airplane:

A full-stack MERN app created by Damian Bennett

## Technologies Used
* MongoDB
* Express
* React
* Node.js
* HTML, CSS, Javascript
* Materialize
* Live site on [Heroku](https://damianstravelbuddy.herokuapp.com/)











# Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /auth/me/from/token | Checks if token is present on browser refresh
POST | /results | Returns restaurant results from Yelp API call
POST | /results/restaurantsSaved | Adds a user's saved restaurant to the database
GET | /profile/:id | Returns user profile page
POST | /profile/list/:userId | Adds a user's packing list item to the database
DELETE | /profile/list/:userId | Removes a user's packing list item from the database