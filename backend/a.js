const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
app.use(cors());





app.get("/createTable",(req,res)=>{
var username="";
var email="";
var password="";

let sql='CREATE TABLE IF NOT EXISTS user(id INT AUTO_INCREMENT ,name varchar(255),email varchar(255),password varchar(255),role varchar(255),primary key(id))';
//    const sql = 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL)';
    connection.query(sql, [username, email, password], (err, results) => {
      if (err) {
        console.error('Error signing up:', err);
        return res.status(500).json({ message: 'Error signing up' });
      }
      res.status(200).json({ message: 'Table created successful' });
    });
})
//signup
app.post('/signup', (req, res) => {
    const { name, email, password ,role } = req.body;
    const sql = 'INSERT INTO user (name, email, password, role) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, email, password,role], (err, results) => {
      if (err) {
        console.error('Error signing up:', err);
        return res.status(500).json({ message: 'Error signing up' });
      }
      res.status(200).json({ message: 'Signup successful' });
    });
  });
//sign in
app.post('/signin', (request, response) => {



    let email = request.body.email;
      let password = request.body.password;
  
      if (email && password) {
          connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], function(error, results, fields){
      if (error) {
        throw error;
      }
       if (results.length > 0) {
  console.log("login ok");
  response.json({
"statusCode":200,
"name":results[0]["name"],
"role":results[0]["role"],


  });
  }else{
    console.log("email or password wrong");
    response.send("email or password wrong");
  }
  
   }
  );
      }

  });

app.post('/addTutorInfo', (req, res) => {
  const {
      subjectName,
      name,
      email,
      dob,
      phone,
      gender,
      address,
      idType,
      idNumber,
      issuedAuthority,
      document,
      degree,
      university,
      institution,
      cgpa,
      passed_year,
      license,
      license_no,
      issued_date
  } = req.body;

  let createTableSql = 'CREATE TABLE IF NOT EXISTS tutorInfo (id INT AUTO_INCREMENT, name varchar(255), subjectName varchar(255), email varchar(255), dob varchar(255), phone varchar(255), gender varchar(255), address varchar(255), idType varchar(255), idNumber varchar(255), issuedAuthority varchar(255), document varchar(255), degree varchar(255), university varchar(255), institution varchar(255), cgpa varchar(255), passed_year varchar(255), license varchar(255), license_no varchar(255), issued_date varchar(255), primary key(id))';

  connection.query(createTableSql, function(err, result) {
      if (err) {
          throw err;
      }

      let searchSql = 'SELECT * FROM tutorinfo WHERE email = ?';
      connection.query(searchSql, [email], function(error, results, fields) {
          if (error) {
              throw error;
          }

          console.log(results.length);
          if (results.length > 0) {
              res.send({
                  "message": "already exist"
              });
          } else {
              const insertSql = 'INSERT INTO tutorInfo (name, subjectName, email, dob, phone, gender, address, idType, idNumber, issuedAuthority, document, degree, university, institution, cgpa, passed_year, license, license_no, issued_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
              connection.query(insertSql, [name, subjectName, email, dob, phone, gender, address, idType, idNumber, issuedAuthority, document, degree, university, institution, cgpa, passed_year, license, license_no, issued_date], function(error, results, fields) {
                  if (error) {
                      throw error;
                  }

                  res.json({
                      "statusCode": 200,
                      "message": "tutor added "
                  });
              });
          }
   });});
});





//get tutor

app.post('/getTutor', (req, res) => {
    const { subjectName } = req.body;

 
    
    connection.query('SELECT * FROM tutorinfo WHERE subjectName = ?', [subjectName, ], function(error, results, fields){
        if (error) {
          throw error;
        }
    

    res.json({
  "statusCode":200,
  "info":results
  
    });

    
     }
    );
 
 

  });

//delete

app.post('/delete', (req, res) => {

  const { email } = req.body;
  connection.query('DELETE FROM tutorinfo WHERE email = ?', [email], function(error, results, fields){
    if (error) {
      throw error;
    }


res.json({
"statusCode":200,
"message":"deleted",
"info":results

});


 }
);

})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //password: 'your_password',
    database: 'mytutor'
  });
app.listen(
    4000
    // 3000
    //PORT
    , () => {
    console.log("Server is running on port ${3000}");
});