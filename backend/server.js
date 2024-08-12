import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors)

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'flashcard_db'
}).promise(console.log('Hey'))

app.get('/flashcards', (req, res) => {
    pool.query('SELECT * FROM flashcards', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/flashcards', (req, res) => {
    const { question, answer } = req.body;
    connection.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err, result) => {
        if (err) throw err;
        res.send('Flashcard added successfully!');
    });
});

app.put('/flashcards/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    connection.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err, result) => {
        if (err) throw err;
        res.send('Flashcard updated successfully!');
    });
});

// Delete a flashcard
app.delete('/flashcards/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM flashcards WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.send('Flashcard deleted successfully!');
    });
});
const port=8000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});