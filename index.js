const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// express middleware

 app.use(cors());
 app.use(express.json());

// mongodb











 app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
 })