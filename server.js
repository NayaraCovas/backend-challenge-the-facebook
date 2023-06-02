const express = require('express')
const route = require('./config/routes')
const app = express()



app.set('view engine','ejs')

app.use('/public',express.static('public'));
app.use(express.urlencoded({extended:true})); 

//require mongoose
require('./config/mongo');

//require route
app.use(route)




let port = 5400
app.listen(port,()=>console.log(`app is on port ${port}`))