//Our dependencies

const express = require('express')
const app = express()
const mysql = require ('mysql')
const cors = require('cors')

// Let us run the server.
app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

//Let us create our database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', //If you have set xamp password please enter it here
    database: '',
})