let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", 
  database: "family"
});

 con.connect( (err) =>{
    if (err) throw err;
  });

  //Create post  
  exports.parent=  (family_id,id,name,child_name,gchild_name,res) => {

    let sqlInsert = `INSERT INTO parent (family_id,id,name,child_name,gchild_name) 
                     VALUES ('${family_id}', '${id}', '${name}', '${child_name}', '${gchild_name}' )`;  

    con.query(sqlInsert,   (err, result, fields) =>{
      if (err){ 
        console.log(err.sqlMessage);
        return err.sqlMessage;
        // res.json(err.sqlMessage);
      }
        else{
    console.log("1 record inserted in parent table");
    //res.json("Cool! your record is inserted"); 
  }
   });
 };


   //Create post   in child
   exports.child=  (family_id,id,name,parent_name,child_name,res) => {

    let sqlInsert = `INSERT INTO child (family_id,id,name,parent_name,child_name) 
                     VALUES ('${family_id}', '${id}', '${name}', '${parent_name}', '${child_name}' )`;  

    con.query(sqlInsert,   (err, result, fields) =>{
      if (err){ 
        console.log(err.sqlMessage);
         res.json(err.sqlMessage);
      }
        else{
         console.log("1 record inserted in child table");
         res.json("Cool!! your record is inserted"); 
        }
   });
 };

 
   //Create post   in grandchild
   exports.grandChild=  (family_id,id,name,parent_name,gparent_name,res) => {

    let sqlInsert = `INSERT INTO grand_child (family_id,id,name,parent_name,gparent_name)
                     VALUES ('${family_id}', '${id}', '${name}', '${parent_name}', '${gparent_name}' )`;  

    con.query(sqlInsert,   (err, result, fields) =>{
     if (err){ 
      console.log(err.sqlMessage);
        res.json(err.sqlMessage);
     }
       else{
         console.log("1 record inserted in Grand parent table");
         res.json("Cool your record is inserted"); 
       }
   });
 };
 

  //get oneRow
   exports.family=  (fid,res)=>{
  
    let sqlOneRow = `SELECT * FROM parent where family_id='${fid}'`;  
      
    con.query(sqlOneRow, (err, result, fields) =>{
       if (err) 
           console.log(err);
       else {  
          console.log(JSON.stringify(result));  
          res.json(result); 
        }
     });
  };




    
