/**
 * HOMEFRONT ONLINE GAME SERVER
 * Created by Brunno Pleffken Hosti <brunno.pleffken@outlook.com>
 * Repository: https://github.com/brunnopleffken/homefront-server
 */

import * as express from "express";

var router = express.Router();

// List of root routes
router.use("/player", require("./player"));

// Root
router.get("/", (req: express.Request, res: express.Response): void => {
	res.json({ message: "Up, and running! :)" });
});

module.exports = router;
