const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT  || 3000, function(){
  console.log('Website up and running!')
})

// --------------------------- GET/POST SECTION --------------------------------

app.get('/', function(req,res){
  res.sendFile(__dirname + '/home.htm')
}) 

app.get('/webDev', function(req,res){
  res.sendFile(__dirname + '/web_dev.htm')
}) 

app.get('/architecture', function(req,res){
  res.sendFile(__dirname + '/architecture.htm')
}) 

app.get('/graphics', function(req,res){
  res.sendFile(__dirname + '/graphic_design.htm')
})
