//express server serves up the static html from client
const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const bodyParser = require('body-parser');

//Middleware
let myPath = path.join(__dirname, '../client/index.html');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(myPath));

app.get('/', (req, res)=> {
    // console.log(myPath);
    // res.end();
    // res.sendFile(myPath) //<-- why does sending the file here work? But not in the static file server above?
    res.end()
  });

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
