const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT||5600
const publicdir = path.join(__dirname, './public')
app.set('view engine', 'ejs'); 
app.use(express.static(publicdir))
app.get('/', function(req, res){ 
    res.render('index'); 
}) 
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})