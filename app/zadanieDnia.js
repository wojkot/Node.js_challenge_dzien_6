const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app = express();
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static('./public/zadanieDnia/'));

app.post('/save', (req, res) => {
    console.log('saving');
    let { mypost } = req.body;
    console.log(mypost);
    let mc = req.cookies.comments;
    let c = addComment(mc, mypost)
    mc = res.cookie('comments', c);
    res.write('<h1>Saved<h1>');
    res.write('<a href = "/view">Back</a>')
    res.end();


});

app.get('/', (req, res) => {
    res.redirect('add.html');
    console.log('reading');
    let mc = req.cookies.comments;
    console.log(readComments(mc))
});

app.get('/clear', (req, res) => {
    let mc = req.cookies.comments;
    res.clearCookie('comments');
    res.send('Cookie cleared!');
});


app.get('/view', (req, res) => {
    console.log('reading');
    let mc = req.cookies.comments;
    readComments(mc).forEach(comment => {
        if (comment != null) {
            res.write(comment + '\n');
        }

    });
    res.end();

});


app.listen(3000, () => {
    console.log("Listening on port 3000");
});


function addComment(commentsCookieValue, newComment) {
    const comments = readComments(commentsCookieValue);
    comments.push(newComment);
    return JSON.stringify(comments);
}


function readComments(commentsCookieValue) {
    return commentsCookieValue ? JSON.parse(commentsCookieValue) : [];
}