import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password="";
const validPassword =["srinu","pavan","samba","Malleswari"];
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

app.post('/check',(req,res)=>{
   password = req.body.password;
   if(validPassword.includes(password)){
       res.sendFile(__dirname+'/public/secret.html');
   } else {
       res.send("Invalid Password");
   }
});
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});