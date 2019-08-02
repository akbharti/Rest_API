
    let express = require("express");
    let bodyParser = require('body-parser');
    let fileUpload = require('express-fileupload');

    let app = express();let PORT = 3001;
    app.use(bodyParser.json());
    app.use(fileUpload());
  
    let da = require('./da.js');
    let service = require('./service.js');

         //Create post   
       app.post('/save',service.save);

        //upload file post
        app.post('/fileupload',service.fileupload);

        //update PUT
        app.put('/update',service.update);
      
         //delete DELETE
         app.delete('/delete',service.delete);         
             
         //get one data GET  '/usn'
          app.get('/usn',service.usn);      
            
          
          //get all data GET  '/table'
          app.get('/table',service.table);       
      

        app.listen(PORT,()=>{console.log(`Express server is on port no. ${PORT}`);});
