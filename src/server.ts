const moduleAlias = require('module-alias');
const path = require('path');
import aliasList from './aliases.json';
const extension = !__dirname.includes('dist') ? '.ts' : '.js';

let aliases: any = aliasList;
let finalList: any = {};
Object.keys(aliases).forEach((key) => {
    const dir = aliases[key].replace('.ts', extension);
    finalList[key] = path.join(__dirname, dir);
});

moduleAlias.addAliases(finalList);

import { config } from 'dotenv';
config();

import { createServer } from 'http';
import runServer from './app';

import appConfig from '@config';
(async () => {
    console.log(`=================================================`);
    console.log(`| CHUCK NORRIS JOKES API `);

    const app = runServer();
    const httpServer = createServer(app);

    httpServer.listen(appConfig.PORT, () => {
        console.log(`| SERVER PORT => ${appConfig.PORT}`);
        console.log(`| WEBAPP URL => ${appConfig.WEBAPP_URL}`);
        console.log(`=================================================`);
    });
})();

