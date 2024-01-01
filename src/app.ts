/* eslint-disable import/first */
import express, { Application } from 'express';
import bodyParser from 'body-parser';

export default function runServer() {
    const app: Application = express();
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    const route = require('./routes').default;
    route(app);
    return app;
}

