# FIRST CONTACT WITH FASTIFY

This is a demo project used for the understanding of the basis of the fastify framework. The project was developed on windows, functionality may vary on different Operating Systems.

## SET-UP GIUDE

### COMMANDS

`npm init -y` --> Creating a basic node package.json <br>
`npm i fastify` --> Installing fastify framework <br>
` npm i @fastify/swagger @fastify/swagger-ui` --> Installing automated openAPI specification via swagger<br>
`npm i uuid` --> For automated IDs when adding elements <br>
`npm i -D nodemon` --> Auto-updating server given changes

Compressed command: `npm i fastify @fastify/swagger @fastify/swagger-ui uuid & npm i -D nodemon`

### package.json modifications

We are going to replace some elements from the basic package.json file generated.<br>

`"main": "server.js"` --> `"main": "server.js"` <br>
`"start": "echo \"Error: no test specified\" && exit 1"` --> `"start": "node server", "dev": "nodemon server"`

## PROJECT STRUCTURE

`server.js` -> All the logic from the server, por listening, and route registering. <br>
`routes/items.js` -> Route definitions for the server. <br>
`handlers/items.js` -> Logic implementations for every defined route using handlers. <br>

## RUNNING TESTS

For running tests we will be using an IDE extension for VSCode (also available in cursor f.e.) that will let us run http requests from an .http file. Different requests can be separated via three hashtags (###) or enough line jumps.

### TO TEST THE ENDPOINTS

1. Initialize the server in the terminal using `node run dev`
2. Write your http request inside a .http file.
3. Click the 'Send Request' button above the written request.
4. The response can be seen in a new tab while the request can be seen on the terminal.

## DOCUMENTATION USED

[official docs](https://fastify.dev/docs/latest/Guides/Getting-Started/) <br>
[introduction video](https://www.youtube.com/watch?v=Lk-uVEVGxOA) <br>
[fastify with authentication](https://www.youtube.com/watch?v=oTPL9GNbwSE) (in spanish)
