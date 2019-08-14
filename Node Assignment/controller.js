let express = require("express");
let bodyParser = require('body-parser');

let app = express();
let PORT = 3002;
app.use(bodyParser.json());


let service = require('./service.js');

    //Create parent    
    app.post('/parent',service.parent);

    //Create child 
    app.post('/child',service.child);
    
    //Create Grand child 
    app.post('/grandChild',service.grandChild);

    //family id  
    app.get('/familyid',service.familyId);

    app.listen(PORT,()=>{
        console.log(`magic happens at port no. ${PORT}`);
    });

  