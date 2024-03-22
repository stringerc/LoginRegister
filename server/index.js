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
    password: '', //If you have set xampp password please enter it here
    database: 'plantdb',
})

// Let us now create a aroute to the server that will register a user.

app.post('/register', (req, res)=>{
    // We need to get variables sent from the form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //Lets create SQL statement to insert the user to the Database table Users
    const SQL = 'INSERT INTO Users (email, username, password) VALUES (?,?,?)' //We are going to enter these values through a variable
    const Values = [sentEmail, sentUserName, sentPassword]
    
    //Query to execute the sql statement stated above
    db.query(SQL, Values, (err, resultes)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
            // Lets try and see
        }
    })
})