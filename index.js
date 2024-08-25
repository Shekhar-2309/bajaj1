// Step 1: Initialize Node.js project and install dependencies
// npm init -y
// npm install express body-parser

// Step 2: Create an Express server
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Step 3: Define GET /bfhl route
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Step 4: Define POST /bfhl route
app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const user_id = "john_doe_17091999";
  const email = "john@xyz.com";
  const roll_number = "ABCD123";

  let numbers = [];
  let alphabets = [];
  let highest_lowercase_alphabet = "";

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item);
      if (item >= "a" && item <= "z" && item > highest_lowercase_alphabet) {
        highest_lowercase_alphabet = item;
      }
    }
  });

  res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highest_lowercase_alphabet
      ? [highest_lowercase_alphabet]
      : [],
  });
});

// Step 5: Start the server
app.listen(port, () => {  console.log(`Server is running on port ${port}`);});

// Step 6: Deploy the application to Heroku
// heroku login
// heroku create
// git init
// git add .
// git commit -m "Initial commit"
// heroku git:remote -a <your-heroku-app-name>
// git push heroku master