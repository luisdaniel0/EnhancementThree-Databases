/**
 * Programmer: Luis Sanchez
 * Contact: luisanchezdh@gmail.com
 * Date: 10/12/2024
 * Version: 1.0
 * Purpose: This JavaScript file establishes a web server using the Express framework to handle HTTP requests and responses. It connects to a MySQL database to retrieve trivia questions stored in a questions table. It also provides an API endpoint (/questions) that the front end can call to fetch trivia questions for the quiz.
 */

const express = require('express'); // framework for building web applications
const mysql = require('mysql2'); // MySQL database driver for Node.js
const cors = require('cors'); // middleware for enabling CORS
const app = express(); // create an instance of an Express application
const port = 3000; // define the port for the server

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'quiz_app',
});

app.use(cors()); //CORS middleware

//connect to mysql database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

//API endpoint to get questions
app.get('/questions', (req, res) => {
    connection.query('SELECT * FROM questions', (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(results); //send results to json
    });
});

//start server listen on default port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
