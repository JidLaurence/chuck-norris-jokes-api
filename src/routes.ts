/* eslint-disable import/first */
import { Application } from 'express';
import cors from 'cors';

import version1 from '@routes/versionOne.route';
import checkAuthentication from '@middlewares/checkAuthentication';

const project: any = require('./../package.json');

export default async function routes(app: Application) {
    app.use(cors({}));

    app.get('/favicon.ico', (req, res) => {
        res.sendFile(__dirname + '/favicon.ico');
    });

    app.get('/', async (req: any, res: any) => {
        return res.send({
            name: project.name,
            version: project.version,
            status: 'online',
        });
    });

    app.use(checkAuthentication);
    app.use('/v1/jokes', version1);
}

