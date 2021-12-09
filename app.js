const express = require("express");
const app = express();
const port = 3000;
require('./db');

const router = require("./routes/mens")
app.use(express.json());

app.use(router);
         

app.listen(port,()=> {
    console.log(`app listening to ${port}`);
})
