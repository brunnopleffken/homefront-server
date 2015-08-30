/**
 * HOMEFRONT ONLINE GAME SERVER
 * Created by Brunno Pleffken Hosti <brunno.pleffken@outlook.com>
 * Repository: https://github.com/brunnopleffken/homefront-server
 */

import * as database from "../database";


module.exports = (req: any, res: any, next: any): void => {
	var db: any = database;

	/**
	 * Check if token has been passed as Header
	 */
	if(!req.headers.token) {
		res.status(400).json({ message: "You haven't passed any token." }).end();
		return;
	}

	/**
	 * Verify token and allow/deny access
	 */
	db.query("SELECT * FROM sessions WHERE sessions.token = ?;", [req.headers.token], (error: any, results: any): void => {
		if(error) throw error;

		if(results.length > 0) {
			db.query("UPDATE sessions SET sessions.session_time = ? WHERE sessions.token = ?;", [new Date(), req.headers.token]);
			req.playerId = results[0].id;
			next();
		}
		else {
			res.status(401).json({
				message: "Token doesn't exist: player is not authenticated."
			}).end();
		}
	});
};
