require("./envList");
const express = require('express')
const path = require('path')
const mysql = require('mysql');
const app = express()

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
const childProcess = require('child_process');
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
    let fileName
    //비디오를 서버에 저장한다.
    upload(req, res, (err) => {
        if (err) {
            return res.json({ success: false, err });
        }
        fileName = res.req.file.filename
        return res.json({
            success: true,
            url: res.req.file.path, //파일을 저장하게되면 uploads폴더 안에 저장되게되는데 그경로를 보내줌
            fileName: res.req.file.filename,
        });
    });

    if(fileName){
        const targetVideoFile = '/inputData/'+ fileName
        //run python file here

        const command = `conda init && 
        conda run -n ${environmentName} && 
        python3 ${pythonScript[0]} ${targetVideoFile} && 
        python3 ${pythonScript[1]} &&
        python3 ${pythonScript[2]} &&
        python3 ${pythonScript[3]} ${targetVideoFile} ${fileName}`

        const pythonProcess = childProcess.spawn(command, { shell: true });
        pythonProcess.stdout.on('data', function(data) {
            console.log(data.toString());
        });

        pythonProcess.stderr.on('data', function(data) {
            console.log(data.toString());
        });
    }

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