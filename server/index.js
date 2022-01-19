//express server serves up the static html from client
const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../dist')));


//Requests
app.get('/recipes', (req, res)=> {
  console.log('test');
});

app.post('/recipe', (req, res)=> {
  console.log('test');
  res.end();
});


app.listen(port, ()=> {
  console.log(`Listening at localhost:${port}`)
});
