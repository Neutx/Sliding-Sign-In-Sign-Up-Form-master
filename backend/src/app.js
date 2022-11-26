const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello from VIT Archive")
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})