const express = require("express");
const app = express();
// middleware
app.use(express.json());
// middleware intercepts a req before it has to be sent in the response
const PORT = 3000;
let studentDb = [
  { name: "Santos" },
  { name: "Ciara" },
  { name: "Rayleigh" },
  { name: "Jason" },
];

//Create
app.post("/create_user", (req, res) => {
  //formatting the data to always match how me have our db
  const values = Object.values(req.body);
  const theRightWayToSendData = {
    name: values[0],
  };
  studentDb.push(theRightWayToSendData);
  res.send(studentDb);
});

//Read
app.get("/", (req, res) => {
  const students = [
    { name: "Santos" },
    { name: "Ciara" },
    { name: "Rayleigh" },
    { name: "Jason" },
  ];
  let greeting = `<div>`;
  for (const student of students) {
    greeting += `<h1>Howdy ${student.name}</h1>`;
  }
  greeting += `</div>`;

  const homePage = `<h1> Howdy</h1>`;
  res.send(greeting);
});
//Update
app.post("/update_users", (req, res) => {
  const studentFound = studentDb.find(
    (student) => student.name === req.body.name
  );

  res.send(studentDb);
});
//Delete
app.delete("/delete_users", (req, res) => {
  const studentFiltered = studentDb.filter(
    (student) => student.name !== req.body.name
  );
  studentDb = studentFiltered;
  console.log(studentFiltered);
  res.send(studentDb);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
