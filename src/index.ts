// import needed libraries
import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes/route';

// get express application. executes the express function by calling it with an empty arguments list "()".
const app = express();
// body parser middleware
app.use(bodyParser.json());         //returns middleware that only parses JSON.
app.use(bodyParser.urlencoded({extended: false}));
// define app port
const port = process.env.PORT || 3000;
// starts the server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
app.use('/', routes);



//listen() - telling your app to start listening for visitors on a specific address and port, much like how Node listens for connections.