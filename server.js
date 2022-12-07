const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const childProcess = require("child_process");
const env = require('./env')
const fs = require("fs")
const environmentName = env.environmentName
const pythonScriptArr = env.pythonScript
const targetVideoDir = env.targetVideoDir
const outputVideoDir = env.outPutVideoDir
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
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
            const pythonProcess = childProcess.spawnSync(command, { shell: true })
            console.log("1, ", pythonProcess.output.toString())
            console.log("2, ",pythonProcess.stdout.toString())

            result = true

            res.send({
                "result": result,
                "filename": "result_"+fileName
            })
        }catch(error){
            console.log('Error', error)
        }
    }
}

//file upload
const multer = require('multer')
app.use("/", express.static('./inputData'))
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "inputData/")
    },
    filename: (req, file, cb) => {
        cb(null, `${randomNumber()}_${file.originalname}`)
    },
});
const upload = multer({ storage: storage }).single("file")
let fileName

//save video on server
app.post("/api/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.json({ success: false, err })
        }
        fileName = res.req.file.filename
        return res.json({
            success: true,
            url: res.req.file.path,
            fileName: fileName,
        })
    })
})

app.get('/api/result', cors(), function (req, res) {
    runPython(fileName, res)
})

//serve video
app.get('/api/video/:fn', function(req, res, next) {
    const path = `${outputVideoDir}${req.params.fn}`

    const stat = fs.statSync(path)
    const fileSize = stat.size
    const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)

});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'clientsrc/build/index.html'));
});

app.listen(8080, function(){
    console.log("listening on 8080")
})