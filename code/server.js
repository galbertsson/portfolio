const express = require('express');
const path = require('path');
const app = express();
const port = process.env.NODE_ENV === "production" ? 80 : 5000;

var MongoClient = require('mongodb').MongoClient;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/projects', (req, res) => {
  MongoClient.connect("mongodb://127.0.0.1:27017/", {useNewUrlParser: true}, function(err, db) {
    if(!err) {
      var dbo = db.db("portfolio");
      dbo.collection("projects").find().toArray(function(err, result) {
        if (err) throw err;
        res.send({projects: result});
      });

      db.close();
    }else{
      res.send("");
    } 
  });
});

app.use('/pictures',express.static('pictures'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server = app.listen(port, () => console.log(`Listening on port ${port}`));