
  let mysql = require('mysql');

  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "student"
  });

   con.connect(function(err) {
      if (err) throw err;
    });

    //Create post  
     exports.Insert= function(usn,name){
      let sqlInsert = `INSERT INTO stud_info (usn,name) VALUES ('${usn}','${name}')`;  
  
      con.query(sqlInsert, function (err, result, fields) {
       if (err) 
          console.log(err);
      console.log("1 record inserted");
     });
   };


    //Create file post
     exports.fileInsert= function(susn,filename){
 
     let sqlInsert = `INSERT INTO stud_file (usn,filepath) VALUES ('${susn}','${filename}')`;     
      
      con.query(sqlInsert, function (err, result, fields) {
       if (err) 
          console.log(err);
     console.log("1 file inserted");
    });
  };


    //update PUT
     exports.Update= function(id,name){

    let sqlUpdate = `UPDATE stud_info SET name = '${name}' WHERE id = '${id}'`;;  
    
    con.query(sqlUpdate, function (err, result, fields) {
      if (err) 
        console.log(err);
     console.log("1 record upadted");
    });
   };
  
    //delete
     exports.Delete= function(id){

    let sqlDelete = `DELETE FROM stud_info WHERE id='${id}'`;  
    
    con.query(sqlDelete, function (err, result, fields) {
      if (err) 
        console.log(sqlDelete);
      console.log("1 record Deleted");
    });
  };

    //get oneRow
     exports.oneRow= function(id,res){

     let sqlOneRow = `SELECT * FROM stud_info WHERE id='${id}'`;  
      
     con.query(sqlOneRow, function (err, result, fields) {
        if (err) 
            console.log(err);
        else{
            console.log(result);
            res.send(JSON.stringify(result));
          }
    });
   };
        

   // get full table
    exports.Table= function(res){

      let sqlTable = ` SELECT * 
                       FROM stud_info 
                       INNER JOIN stud_file
                       ON stud_info.usn = stud_file.usn;`;

    con.query(sqlTable, function (err, result, fields) {
       if (err) 
          console.log(err);
      else{
          console.log(JSON.stringify(result));
          res.send(JSON.stringify(result)); 
        }
    });
   };
  


  
   