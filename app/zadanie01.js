//Twój kod

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded());



app.use(express.static('./public/zadanie01/'));

app.post("/calc", (req, res) => {
    const { number1, number2 } = req.body;
    if ((parseInt(number1) % parseInt(number2)) === 0) {
        res.send("Liczba " + number2 + " jest dzielnikiem " + number1);
    }
    else {
        res.send("Liczba " + number2 + " nie jest dzielnikiem " + number1);
    }
});



app.listen(3000, () => {
    console.log("Listening on port 3000");
});
