let express = require("express");
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());

let da = require('./da.js');


exports.save = (req,res) =>
{
    let obj = req.body;
    console.log(obj);
    da.insert(obj.usn,obj.name);
    res.json(obj);
}


exports.fileupload = (req,res) =>
{
    let sampleFile = req.files.fileName;
    let usn = req.body.usn;

    sampleFile.mv(`C:/Users/Abhishek.Kumar/Documents/upload/${sampleFile.name}`, (err)=>{   
     if (err)
       return res.status(500).send(err);
  
    path = `C:/Users/Abhishek.Kumar/Documents/upload/${sampleFile.name}`;
    da.fileInsert(usn,path);
    res.send('File uploaded!');
    }); 
}

exports.update = (req,res) =>
{
    let obj = req.body;
    console.log(obj);
    da.update(obj.id,obj.name);
    res.json(obj);
}


exports.delete = (req,res) =>
{
    let obj = req.body;
    console.log(obj);
    da.delete(obj.id);
    res.json(obj);
}


exports.usn = (req,res) =>
{
    let obj = req.body;
    console.log(obj);
    da.oneRow(obj.id,res); 
}

exports.table = (req,res) =>
{
    da.Table(res); 
}

