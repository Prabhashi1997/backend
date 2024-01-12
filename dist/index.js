"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import needed libraries
const express = require("express");
const bodyParser = require("body-parser");
const route_1 = require("./routes/route");
// get express application. executes the express function by calling it with an empty arguments list "()".
const app = express();
// body parser middleware
app.use(bodyParser.json()); //returns middleware that only parses JSON.
app.use(bodyParser.urlencoded({ extended: false }));
// define app port
const port = process.env.PORT || 3000;
// starts the server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
app.use('/app', route_1.default);
//listen() - telling your app to start listening for visitors on a specific address and port, much like how Node listens for connections.
