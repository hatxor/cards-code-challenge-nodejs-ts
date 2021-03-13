import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import container from "./inversify.config";
import { logErrors, errorHandler, manageError } from "./logs";
import cors from "cors";
import helmet from "helmet";
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";
import mongoose from 'mongoose';

// Controllers
import './http/controllers/cardController';

// Initialize configuration
dotenv.config();

// Initialize express
const app = express();

// Helmet
app.use(helmet());

// Cors
app.use(cors())

// Logs/Errors management
app.use(logErrors);
app.use(manageError);
app.use(errorHandler);

// Db
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/db')
    .then(() => {
        // tslint:disable-next-line:no-console
        console.log('mongodb started.');
    }).catch(() => {
        // tslint:disable-next-line:no-console
        console.log('Mongodb connection failed.');
    })

// Configure and initialize server
const server =  new InversifyExpressServer(container, null, { rootPath: "/" }, app);
const appConfigured = server.build();
const serve = appConfigured.listen(process.env.SERVER_PORT || 3000, () => `App running on ${serve.address().port}`);
