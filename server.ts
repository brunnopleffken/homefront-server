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

/**
 * Call controllers/application in every application request
 */
application.use(require("./controllers/application"));

/**
 * Build up server and listen to port 3001
 */
var server = application.listen(3001, (): void => {
	var host: string = server.address().address;
	var port: number = server.address().port;
	console.log("Homefront Server is now listening at http://%s:%s", host, port);
});
