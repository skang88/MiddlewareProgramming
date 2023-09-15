const express = require('express')
const app=express()

app.set('views',__dirname+'/views')
app.set('view engine','ejs')
app.engine('html', require('ejs').renderFile)

app.get('/',(req,res)=>{

    res.render('index',{name : 'Seokgyun Kang'})
})

const server = app.listen(3000,function(){
    console.log("port 3000")
})