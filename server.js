const express = require('express');
const dotenv = require('dotenv');

// load env vars
dotenv.config({path: './config/config.env'});


const app = express();

app.get('/api/v1/bootcamps/', (req, res)=>{
  
  res.status(200).json({success: 'true', message: 'show all bootcamps'});
})
app.get('/api/v1/bootcamps/:id', (req, res)=>{
    
    res.status(200).json({success: 'true', message: `get single bootcamp ${req.params.id}`});
  })
app.post('/api/v1/bootcamps/', (req, res)=>{
    
    res.status(200).json({success: 'true', message: 'create a bootcamp'});
  })
app.put('/api/v1/bootcamps/:id', (req, res)=>{
    
    res.status(200).json({success: 'true', message: `update bootcamp ${req.params.id}`})
  })    
app.delete('/api/v1/bootcamps/:id', (req, res)=>{
res.status(200).json({success: 'true', message: `delete bootcamp ${req.params.id}`});
})





const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} ${PORT}...`));
