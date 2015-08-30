/**
 * HOMEFRONT ONLINE GAME SERVER
 * Created by Brunno Pleffken Hosti <brunno.pleffken@outlook.com>
 * Repository: https://github.com/brunnopleffken/homefront-server
 */

import * as mysql from "mysql";


// Define connection credentials
var connection: mysql.IConnection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "homefront"
});

// Connect to MySQL server
connection.connect((err: any): void => {
	if(err) {
		throw new Error("MySQL connection could not be established.");
	}
});

module.exports = connection;
