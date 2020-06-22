const express = require('express')
const app = express()
const students = require('./students.json')
const bodyParser = require('body-parser')
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const studentData = JSON.parse(fs.readFileSync("students.JSON"))

app.get('/students', (req, res) => {
    let student = req.query.search
    
    if(student){res.send(studentData.filter(x => x['name'].includes(student)))}
    res.send(studentData)
})

app.get('/:id', (req, res) => {
    /* GET a user by their id */
     res.send(users[req.params.id-1]
)})


const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))