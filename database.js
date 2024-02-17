const {
    createpool
} = require('mysql');
const pool=createpool({
    host:"localhost",
    user:"root",
    password:"",
    database:"database1"
    connectionlimit:10
})

pool.query('select * from login' ,(err,result,fields)=>{
    if(err) {
        return console.log(err);
    }
    return console.log(result);
})