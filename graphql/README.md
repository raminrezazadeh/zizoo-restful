# zizoo-graphql

> ### ZizooBoat code challenge with (Apollo) codebase containing boat GraphQL apis.


# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Rename `.env.example` to `.env` and open it. Set your ZizooBoat restful api url and working port.
- `npm start` to start the local server

# Code Overview

## Dependencies

- [ZizooBoat Restful](https://github.com/raminrezazadeh/zizoo-restful/tree/master/restful) - The service provide zizoo boat restful api
- [Apollo](https://www.apollographql.com/) - Data Graph Platform

## Application Structure

- `src/index.js` - The entry point to our application. This file defines our express server and dependencies (connects it to MongoDB using mongoose).
- `src/config.js` - This file contains configuration for express port and mongo url that read from .env.
- `src/resolvers.js` - This file contains Query and Mutation Resolvers.
- `src/schema.js` - This file contains GraphQl type definitions and Schemas.
- `src/datasources` - This folder contains our data sources and connect to our restful api for query and edit.
