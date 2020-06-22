const express = require('express')
const app = express()
const students = require('./students.json')
const bodyParser = require('body-parser')
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const studentData = JSON.parse(fs.readFileSync("students.JSON"))

app.get('/students?search', (req, res) => res.send(students))

app.get('/:id', (req, res) => {
    /* GET a user by their id */
     res.send(users[req.params.id-1]
)})

app.post('/', (req, res) => {
    /* POST user data using the request body */
    res.send('POST user data using req body')
})

app.get('/name=?', (req, res) => {
    /* GET a user by their name */
    res.send("query a name")
    res.send(users[req.query.name]
)})

const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))