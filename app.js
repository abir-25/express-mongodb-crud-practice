const express = require("express");
const {
  getById,
  insertStudent,
  searchAllStudents,
  searchDetails,
} = require("./students.service");
const app = express();

app.use(express.json());

// const document = {
//   name: "Arofine nisho",
//   roll: 10,
//   class: 12,
// };
app.get("/api/students/detail/:id", async (req, res) => {
  const response = await getById(req.params.id);
  res.send(response);
});

app.post("/api/students/searchAll", async (req, res) => {
  const response = await searchAllStudents();
  res.send(response);
});

app.post("/api/students/search", async (req, res) => {
  const response = await searchDetails(req.body);
  res.send(response);
});

app.post("/api/students/create", async (req, res) => {
  const response = await insertStudent(req.body);
  res.send(response);
});

app.put("/api/students/update/:id", (req, res) => {
  console.log("PUT /api/students/:id", req.params.id);
  res.send("PUT Successful");
});

app.delete("/api/students/delete/:id", (req, res) => {
  console.log("DELETE /api/students/:id", req.params.id);
  res.send("DELETE Successful");
});

module.exports = app;
