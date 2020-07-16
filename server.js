const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const grubController = require('./controllers/grub.js');
app.use('/grub', grubController);


mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});


app.listen(3000, ()=>{
  console.log("I'm Listening...");
});
