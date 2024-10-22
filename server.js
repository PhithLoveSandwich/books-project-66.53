const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books'
});

db.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('MySQL Connected...');
    }
});

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books';
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
