const express = require("express");
const app = express();
const students = require("./students.json");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const studentData = JSON.parse(fs.readFileSync("students.JSON"));

app.get("/students", (req, res) => {
	let student = req.query.search;

	if (student) {
		res.send(studentData.filter((x) => x["name"].includes(student)));
	}
	res.send(studentData);
});

app.get("/students/:studentId", (req, res) => {
	/* GET a user by their id */
	res.send(studentData[req.params.studentId]);
});

app.get("/grades/:studentId", (req, res) => {
	/* GET a grade by their id */
	let id = Number(req.params.studentId);

	studentData.forEach((element) => {
		if (id === element.studentID) {
			res.send(element.grades);
		}
	});
});

app.post("/grades", (req, res) => {
	grade = req.query.grade;
	id = req.query.id;

	if (grade && id) {
		res.send("New grade: " + grade + ", added for student # " + id);
	}

	res.send("Please provide both Grade and Student ID!");
});

app.post("/register", (req,res) => {
    id = req.query.id;
    studentName = req.query.name;

    if(id && studentName) res.send("Sudent " + id + ", named " + studentName + " was added.")

    res.send("Please include both name and ID to register")
})

const port = 3000;
app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
