# Cataloger
A sample RESTful api built-in NodeJs + Express

## Overview
This api is a example of RESTful api in NodeJS + Express, the scenario of a system catalog was used to show this.

The persistence is done in mongo database and a container docker is responsible to provide this.

The CRUD operations are possible in api through HTTP methods call.

## Enviroinment
The DockerFile provide the build enviroinment of api and docker-compose.yml file provide the simple stack used.

You need create a .env file in root path containning the following properties:

```properties
DB_URL=mongodb://mongodb:27017
DB_NAME=cataloger-db
```

## Running in Docker

To run just run the cli **`$ docker-compose up`**

## Running Standalone

You can run without docker container, to this just do the foolowing steps:

- Modify the propertie of mongo url in **`.env`** file;
- Run **`npm start`** in your CLI;

## Use
Just access the address **http://localhost:3000** in your rest client

### Endpoints

| HTTP Method | Endpoint | Description |
| ----------- | -------- | ----------- |
| `GET` |  /systems | List all systems |
| `GET` |  /systems/:id | Fetch a system |
| `POST` |  /systems | Create a new system |
| `PUT` |  /systems/:id | Update a system |
| `DELETE` |  /systems/:id | Delete a system |

## Author

Filipe Oliveira - [https://github.com/FilipeSoares](https://github.com/FilipeSoares)
