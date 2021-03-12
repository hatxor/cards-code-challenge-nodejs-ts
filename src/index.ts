import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import container from "./inversify.config";
import cors from "cors";
import helmet from "helmet";
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";

// Controllers
import './http/controllers/cardController';

// Initialize configuration
dotenv.config();

// Initialize express
const app = express();

// CORS
const corsOptions = {
    origin: 'https://api.streamloots.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Helmet
app.use(helmet());

app.use(cors(corsOptions))

// Configure and initialize server
const server =  new InversifyExpressServer(container, null, { rootPath: "/" }, app);
const appConfigured = server.build();
const serve = appConfigured.listen(process.env.SERVER_PORT || 3000, () => `App running on ${serve.address().port}`);