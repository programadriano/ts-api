//using
import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import DataBase from './config/db';
//import Auth from './config/auth';

//Routes
import movieController from './controller/movieController'

class Program {
    public app: express.Application;
    private morgan: morgan.Morgan;
    private bodyParser;
    private database: DataBase;

    constructor() {
        this.app = express();
        this.database = new DataBase();
        this.middlewareRequest();
        this.dataBaseConnection();
        this.routes();
    }


    middlewareRequest() {

        const options: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: '*',
            preflightContinue: false
        };

        this.app.use(cors(options));
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    dataBaseConnection() {
        this.database.createConnection();
    }

    closedataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback());
    }

    routes() {

        this.app.route("/").get((req, res) => {
            res.send({ 'result': 'version 0.0.2' })
        });

        //    this.app.use(Auth.validate);

        this.app.route("/api/v1/movie").get(movieController.getAll);
        this.app.route("/api/v1/movie/:id").put(movieController.getById);
        this.app.route("/api/v1/movie").post(movieController.create);
        this.app.route("/api/v1/movie/:id").put(movieController.update);
        this.app.route("/api/v1/movie/:id").delete(movieController.delete);
    }
}

export default new Program();
