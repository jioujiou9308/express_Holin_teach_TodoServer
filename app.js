const mysql = require('mysql2/promise');
require('dotenv').config();
const express = require('express');
const app = express();


const dbConfig = {
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     connectionLimit: 10,

}

const pool = mysql.createPool(dbConfig);
//NOTE get all
app.get("/api/row", async (req, res) => {
     const [data, filed] = await pool.execute(`SELECT * FROM row`);
     //要習慣下res.send 才不會一職跑
     res.send(data)
})
// simple query


//開一個在8001的首頁
app.get("/", (req, res) => {
     res.send("my todo server")
})

//連結到8001連結
app.listen(process.env.SERVER_PORT, (req, res) => {
     console.log(`server is running on port ${process.env.SERVER_PORT}`);
})