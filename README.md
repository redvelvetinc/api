# red-velvet-api

## Modules

- Identity: Where we have the Users and Auth services
- Catalog: Where we have the Profiles and its gallery

## Status

| Branch | Status |
| ------ | ------ |
| master | ? |
| develop | ? |

## Running Locally

```javascript
yarn install
yarn dev
```

## Running in Docker

```sh
docker build -t api .
docker run -p 3000:3000 api
```

## Debugging in Docker

For debugging this server in the Docker container we could just make node's debug port 9222 available and attach VS Code/Chrome to this.

```sh
docker-compose up --build
```

But for a faster edit/compile/debug cycle we will use a more sophisticated approach by mounting the 'dist' folder directly into the container running in Docker. Inside Docker it uses 'nodemon' for tracking changes in the 'dist' folder and restart the node runtime automatically.

## Créditos

- https://github.com/jamg44/NodeTyped
- https://github.com/Microsoft/TypeScript-Node-Starter
- https://github.com/dannielhugo/typescript-clean-architecture
- https://github.com/Thavarajan/Mangoose-Typescript-With-Repository-Pattern
- https://github.com/vladotesanovic/typescript-mongoose-express/blob/master/server/routes/author/author.ts
- https://github.com/Microsoft/vscode-recipes/tree/master/Docker-TypeScript
