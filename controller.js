
    let express = require("express");
    let bodyParser = require('body-parser');
    let fileUpload = require('express-fileupload');

    let app = express();let PORT = 3001;
    app.use(bodyParser.json());
    app.use(fileUpload());
  
    let da = require('./da.js');

         //Create post 
         app.post('/save',(req,res)=>{ 
              let obj = req.body;
              console.log(obj);
              da.Insert(obj.usn,obj.name);
              res.json(obj);
          });


        //upload file post
        app.post('/fileupload',(req,res)=>{

              let sampleFile = req.files.fileName;
              let usn = req.body.usn;

              sampleFile.mv(`C:/Users/Abhishek.Kumar/Documents/upload/${sampleFile.name}`, (err)=>{   
              if (err)
               return res.status(500).send(err);
  
              path = `C:/Users/Abhishek.Kumar/Documents/upload/${sampleFile.name}`;
              da.fileInsert(usn,path);
              res.send('File uploaded!');
             });   
          });
        

        //update PUT
        app.put('/update',(req,res)=>{
              let obj = req.body;
              console.log(obj);
              da.Update(obj.id,obj.name);
              res.json(obj);
         });
      

         //delete DELETE
         app.delete('/delete',(req,res)=>{
              let obj = req.body;
              console.log(obj);
              da.Delete(obj.id);
              res.json(obj);
          });
          
             
         //get one data GET  '/usn'
          app.get('/usn',(req,res) => {   
            let obj = req.body;
            console.log(obj);
            da.oneRow(obj.id,res);   
         });
            
    
          //get all data GET  '/table'
          app.get('/table',(req,res) => {
             da.Table(res);  
         });
      

        app.listen(PORT,()=>{console.log(`Express server is on port no. ${PORT}`);});