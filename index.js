//     Using Http module
// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("Server is Running");
//     res.end();
// }).listen(3000);

const express = require('express');
const app = express();
const routes = require('./routes/route')
routes.use('/route',routes);
app.get('/',(req,res)=>{
    res.write("Server is running and Loading");
})
app.listen(3000,()=>{
    console.log(`server is running at 3000`);
})