//Twój kod

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static('./public/zadanie02/'));
app.use(cookieParser());

app.post('/cookie/set', (req, res) => {
    const { myname } = req.bomdy;
    res.cookie('name', myname, {
        maxAge: 160704000,
    });
    res.send("Zapisano imię.");
});

app.get('/cookie/show', (req, res) => {
    const myCookie = req.cookies.name;
    res.send("Name is " + myCookie)
});


app.get('/cookie/check', (req, res) => {
    const myCookie = req.cookies.name;

    if (myCookie != undefined) {
        res.send("Name set ")
    }
    else {
        res.send("Name not set ")
    }

});



app.listen(3000, () => {
    console.log("Listening on port 3000");
});