let express = require("express");
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());

let da = require('./da.js');
let validation = require('./validation.js');

exports.parent = (req,res) =>
{
    let obj = req.body;
    let err =  validation.parents_info(obj);
    console.log(err);

if(err == null) 
   let dbErr =  da.parent(obj.family_id, obj.id, obj.name, obj.child_name, obj.gchild_name,res)
else
    {
        if(err.details[0].message.includes("empty"))
            res.json("Field is not allowed to be empty");
    }
}

exports.child = (req,res) =>
{
    let obj = req.body;
    let err =  validation.child_info(obj);

if(err == null) 
    da.child(obj.family_id, obj.id, obj.name, obj.parent_name, obj.child_name,res);
else
res.json(err.details[0].message); 
}


exports.grandChild = (req,res) =>
{   
    let obj = req.body;
    let err =  validation.child_info(obj);

if(err == null) 
    da.grandChild(obj.family_id, obj.id, obj.name, obj.parent_name, obj.gparent_name,res);
else
res.json(err.details[0].message); 
}


exports.familyId = (req,res) =>
{
    let obj = req.body;
    da.family(obj.family_id,res);;
}
