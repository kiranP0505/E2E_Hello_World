const bodyParser =  require("body-parser");
const express = require("express")
const cors = require("cors");

const app = express();
const port = 4000;

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.get("/abc", (req, res) => {
    res.send(JSON.stringify([{name: "k", city: "M"},{name: "S", city: "P"},{name: "A", city: "D"},{name: "H", city: "N"}]));
});

app.get("/ping", (req, res) => {
    res.end("true");
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});