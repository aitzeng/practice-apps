const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync() // Connects to the mySQL server with the credentials
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, session_id VARCHAR(50) NOT NULL, name VARCHAR(20) NOT NULL, email VARCHAR(25) NOT NULL, password VARCHAR(20) NOT NULL, address1 VARCHAR(25) NOT NULL, address2 VARCHAR(25) NULL, city VARCHAR(20) NOT NULL, state VARCHAR(20) NOT NULL, zipcode INT NOT NULL, phone VARCHAR(20) NOT NULL, creditcard VARCHAR(25) NOT NULL, cvv INT NOT NULL, expiration VARCHAR(10) NOT NULL, billzip INT NOT NULL);"
  ))
  .catch((err) => console.log(err));

module.exports = db;
