import "reflect-metadata";
import express from "express";
import container from "./inversify.config";
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";

import './http/controllers/cardController';

const app = express();

const server =  new InversifyExpressServer(container, null, { rootPath: "/api" }, app);

const appConfigured = server.build();

const serve = appConfigured.listen(process.env.PORT || 3000, () => `App running on ${serve.address().port}`);