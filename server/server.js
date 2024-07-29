// module imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
//executes express
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

// upon initiation
app.get("/", function (request, response) {
  response.send("Welcome to the root node! Leave a message!");
});

// database get request upon initiation (link to previous messages on HTML/CSS)
app.get("/messages", async function (request, response) {
    // get the existing messages from the database
    const result = await db.query(`SELECT * FROM messages`);
    const messages = result.rows;
    response.json(messages);
  });
  
// post to database function (link to form on HTML/CSS)
app.post("/message", function (request, response) {
  // retrieve the information from the form
  console.log(request.body);
  // here we would add input to the database
  response.json("Form entry added");
});

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});