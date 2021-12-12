require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(express.json());


app.get('/', (res) => {
    res.sendFile('../index.html');
});

app.get('/person', (res) => {
    res.sendFile('/person');
});

app.post("/person", (req, res) => {
    let uname = req.body.username;
    let upass = req.body.password;
    res.json({
        name: uname,
        pass: upass
    });
})



// Route to Login Page
app.get('/views', (req, res) => {
    res.sendFile('/views/login.html');
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));