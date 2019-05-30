import bodyParser from "body-parser";
import express from "express";
import ActivityLogger from "./middleware/ActivityLogging";
import ActivityRouter from "./routes/ActivityRouter";
import UserRouter from "./routes/UserRouter";

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get( "/", ( req, res ) => {
    res.send( "hello tech-assessment-restful" );
} );

app.use("/user", ActivityLogger, UserRouter);
app.use("/activity", ActivityRouter);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
