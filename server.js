const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const childProcess = require("child_process");
const env = require('./env')
const environmentName = env.environmentName
const pythonScriptArr = env.pythonScript
const targetVideoDir = env.targetVideoDir
app.use(cors())

function randomNumber(){
    let str = ''
    for (let i = 0; i < 6; i++) {
        str += Math.floor(Math.random() * 10)
    }
    return parseInt(str)
}

function runPython(fileName, res){
    if(fileName){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Run python")
        const targetVideoFile = targetVideoDir + fileName
        let result

        //run python file here
        const command = `cd ~ && 
            source ~/opt/anaconda3/etc/profile.d/conda.sh && 
            conda activate ${environmentName} &&
            python3 ${pythonScriptArr[0]} ${targetVideoFile} && 
            python3 ${pythonScriptArr[1]} &&
            python3 ${pythonScriptArr[2]} &&
            python3 ${pythonScriptArr[3]} ${targetVideoFile} ${fileName}`

        try{
            const pythonProcess = childProcess.spawnSync(command, { shell: true });
            console.log("1, ", pythonProcess.output.toString())
            console.log("2, ",pythonProcess.stdout.toString())
            console.log("3, ",pythonProcess.stderr.toString())

            result = true

            res.send({
                "result": result,
                "filename": "result_"+fileName
            })
        }catch(error){
            console.log('Error', error);
        }
    }
}

//file get
const multer = require('multer');
app.use("/", express.static('./inputData'))
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "inputData/"); //uploads라는 폴더에 file을 저장
    },
    filename: (req, file, cb) => {
        cb(null, `${randomNumber()}_${file.originalname}`);
    },
});
const upload = multer({ storage: storage }).single("file");
let fileName
app.post("/api/upload", (req, res) => {
    //비디오를 서버에 저장한다.
    upload(req, res, (err) => {
        if (err) {
            return res.json({ success: false, err });
        }
        fileName = res.req.file.filename
        return res.json({
            success: true,
            url: res.req.file.path, //파일을 저장하게되면 uploads 폴더 안에 저장되게되는데 그 경로를 보내줌
            fileName: fileName,
        });
    });
});

app.get('/api/result', cors(), function (req, res) {
    runPython(fileName, res)
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});

app.listen(8080, function(){
    console.log("listening on 8080")
})