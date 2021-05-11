const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const path = __dirname + '/app/views/';
app.use(express.static(path));


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/routes.js")(app);



app.get("/", (req, res) => {
  res.sendFile(path + "index.html")
});

app.get("/login", (req, res) => {
  res.sendFile(path + "index.html")
});

app.get("/register", (req, res) => {
  res.sendFile(path + "index.html")
});

app.get("/articlessss/:article_id", (req, res) => {
  res.sendFile(path + "index.html")
});


const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});