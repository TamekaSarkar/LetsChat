'use strict';
const express = require('express');
const app = express();
const chatCat = require('./app/routes/index');
const port = process.env.PORT || 3000
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatCat.session);
app.use('/',chatCat);
//app.use(chatCat.session);


app.listen(port,()=>{
    console.log(`ChatCat running on port ${port}` );
})