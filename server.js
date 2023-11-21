const express = require('express');
const app = express();
const PORT = 5050;
require('dotenv').config();

//MiddleWare
app.use(express.json()); 
app.use(cors());
app.use(express.static('public')); //static files -- images served public


app.get('/', (req,res)=>{
    res.send("Hello, Welcome to Home Route")
});

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
}); 