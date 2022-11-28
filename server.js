const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const fs = require('fs')
const app = express()

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});


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

//file get
const multer = require('multer');
//in front user send their video to "/api/upload"
//in back computer send processed video to "/upload"
app.use("/", express.static('./inputData'))
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "inputData/"); //uploads라는 폴더에 file을 저장
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
        //파일이름을 현재시간_파일이름.mp4로 저장하겠다는의미(중복방지)
    },
});
const upload = multer({ storage: storage }).single("file"); //파일하나만업로드하겠다는의미
app.post("/api/upload", (req, res) => {
    //비디오를 서버에 저장한다.
    upload(req, res, (err) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({
            success: true,
            url: res.req.file.path, //파일을 저장하게되면 uploads폴더 안에 저장되게되는데 그경로를 보내줌
            fileName: res.req.file.filename,
        });
    });
});

// app.use(express.static(path.join(__dirname, 'clientsrc/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});

app.listen(8080, function(){
    console.log("listening on 8080")
})