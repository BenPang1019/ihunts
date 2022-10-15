import mysql from "mysql"

export const db = mysql.createConnection({
    // host: "127.0.0.1",
    // user: "root",
    // password: "",
    // database: "test",


    host: "auth-db343.hstgr.io",
    user: "u811623433_ihunts",
    password: "Ihunts123",
    database: "u811623433_ihunts",

})