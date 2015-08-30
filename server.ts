/**
 * HOMEFRONT ONLINE GAME SERVER
 * Created by Brunno Pleffken Hosti <brunno.pleffken@outlook.com>
 * Repository: https://github.com/brunnopleffken/homefront-server
 */

/// <reference path="./thirdparty/def/express.d.ts" />
/// <reference path="./thirdparty/def/mysql.d.ts" />
/// <reference path="./thirdparty/def/node.d.ts" />

import * as express from "express";

var application: express.Express = express();

// Define controllers
application.use(require("./controllers/application"));

// Listen to server
var server = application.listen(3001, (): void => {
	var host: string = server.address().address;
	var port: number = server.address().port;
	console.log("Homefront Server is now listening at http://%s:%s", host, port);
});
