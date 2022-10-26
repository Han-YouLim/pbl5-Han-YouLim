const express = require('express')
const path = require('path')
const app = express()

app.listen(8080, function(){
    console.log("listening on 8080")
})

app.use(express.json())
var cors = require('cors')
app.use(cors())

app.use(express.static(path.join(__dirname, 'clientsrc/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});