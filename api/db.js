import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",


    // host: "www.ihunts.co",
    // user: "u811623433_ihuntsdatabase",
    // password: "Admin1234",
    // database: "u811623433_ihuntsdatabase",

})