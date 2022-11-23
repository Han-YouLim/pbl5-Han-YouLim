const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const app = express()

app.listen(8080, function(){
    console.log("listening on 8080")
})

const connection = mysql.createConnection({
    host: '127.0.0.1', // 여기 수정함
    user: 'root',
    password: '0000',
    database: 'pbl19',
    port: '3306',
});
connection.connect();

connection.query('SELECT * from upload_file', (error, rows, fields) => {
    if (error) throw error;
    console.log('Test SUCCESS>>>>> ', rows);
});

connection.end();

app.use(express.json())
var cors = require('cors')
app.use(cors())

app.use(express.static(path.join(__dirname, 'clientsrc/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});

// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, 'uploads')
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, `${file.originalname}`)
//     }
// })
// let upload = multer({ dest: 'uploads/' })
// const server = express();
// server.post('/uploadFile', upload.single('file'), (req, res, next) => {
//     const file = req.file;
//     console.log(file.filename);
//     if (!file) {
//         const error = new Error('No File')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//     res.send(file);
// })
//
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
// });