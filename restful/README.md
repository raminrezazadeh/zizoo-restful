# zizoo-restful

> ### ZizooBoat code challenge with (Express + Mongoose) codebase containing boat CRUD.

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- Rename `.env.example` to `.env` and open it. Set your mongo url and port.
- `npm start` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 

## Application Structure

- `src/index.js` - The entry point to our application. This file defines our express server and dependencies (connects it to MongoDB using mongoose).
- `src/config.js` - This file contains configuration for express port and mongo url that read from .env.
- `src/routes/` - This folder contains the route definitions for our BoatAPI.
- `src/models/` - This folder contains the schema definitions for our Mongoose models.
- `src/controllers/` - This folder contains the controllers definitions for handle requests.
- `src/services/` - This folder contains the services definitions for working with models.
- `src/types/` - This folder contains the types definitions for model enum definitions.
- `src/dependecies/` - This folder contains the database connections and dependencies for using when application started.


## Run tests
- `npm run test` to start tests
