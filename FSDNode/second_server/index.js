const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('./jwt');
app.use(express.json());
app.use(jwt());
app.post('/test',(req,res)=>{
res.send('Hello');
console.log('works')
});
app.get('/',(req,res)=>{
    res.send('Hello');
    });


    const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
    const server = app.listen(port, function () {
        console.log('Server listening on port ' + port);
    });