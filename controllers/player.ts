/**
 * HOMEFRONT ONLINE GAME SERVER
 * Created by Brunno Pleffken Hosti <brunno.pleffken@outlook.com>
 * Repository: https://github.com/brunnopleffken/homefront-server
 */

import * as express from "express";
import * as database from "../database";
import * as authentication from "../middlewares/authentication";

var db: any = database;
var router: express.Router = express.Router();


/**
 * Root folder
 * GET /player
 */
router.get("/", (req: express.Request, res: express.Response): void => {
	throw new Error("Accessing ROOT!");
});

/**
 * Get content of 'players'
 * GET /players/x
 */
router.get("/x", authentication, (req: express.Request, res: express.Response): void => {
	db.query("SELECT * FROM players", (error: any, results: any): void => {
		if(error) throw error;
		res.json({ message: "Running /x", result: results });
	});
});

/**
 * Just show message "Running Y"
 * GET /players/y
 */
router.get("/y", (req: express.Request, res: express.Response): void => {
	res.json({ message: "Running /y" });
});

module.exports = router;
