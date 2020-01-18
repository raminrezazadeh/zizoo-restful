# Zizoo GraphQL Code Challenge

# Getting started with docker

To get the Node server running locally:

- Clone this repo
- `docker-compose up`
- Open your browser and go to `http:localhost:8080`.

# Getting started without docker
- Clone this repo
- Step one - [Zizoo Restful](https://github.com/raminrezazadeh/zizoo-restful/tree/master/restful) - Follow Zizoo Restful documentation
- Step two - [Zizoo GraphQL](https://github.com/raminrezazadeh/zizoo-restful/tree/master/graphql) - Follow Zizoo GraphQL documentation
- Step three - Open your browser and go to GraphQl URL provided by Step two.


# GraphQL sample queries
- Create Boat
```
mutation create {
  createBoat(
    input: {
        name: "Sample Boat"
        type: MOTOR_BOAT
        year: 1999
        marina: "Sample"
        skipper: MANDATORY
        active: true
        cabins: 1
        length: 80
        price: 1000.0
    }
  ) {
    name,
    year,
    price,
  }
}
```

- Update Boat
```
mutation update {
  updateBoat(
    id: "5e21bd8da0d4f061a5cd372e",
    input: {
        name: "Sample Boat"
        type: MOTOR_BOAT
        year: 1999
        marina: "Sample"
        skipper: MANDATORY
        active: true
        cabins: 1
        length: 80
        price: 1000.0
    }
  ) {
    name,
    year,
    price,
  }
}
```

- Delete Boat
```
mutation delete {
  deleteBoat(
    id: "5e21bd8da0d4f061a5cd372e",
  ) {
    name,
    year,
    deleted,
  }
}
```

- Get All Boats (Input is optional)
```
mutation getBoats {
  boats(input: {active:true}) {
      id,
      name,
      marina,
      deleted
    }
}
```

- Get Boat by id
```
mutation getBoat {
  boat(id: "5e21bd8da0d4f061a5cd372e") {
      id,
      name,
      marina,
      deleted
    }
}
```
