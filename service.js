let express = require("express");
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());

let da = require('./da.js');


exports.save = function(req,res)
{
    let obj = req.body;
    console.log(obj);
    da.Insert(obj.usn,obj.name);
    res.json(obj);
}


exports.fileupload = function(req,res)
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

exports.update = function(req,res)
{
    let obj = req.body;
    console.log(obj);
    da.Update(obj.id,obj.name);
    res.json(obj);
}

exports.delete = function(req,res)
{
    let obj = req.body;
    console.log(obj);
    da.Delete(obj.id);
    res.json(obj);
}


exports.usn = function(req,res)
{
    let obj = req.body;
    console.log(obj);
    da.oneRow(obj.id,res); 
}

exports.table = function(req,res)
{
    da.Table(res); 
}

