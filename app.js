const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const sequelize = require('./util/database')
const cricketer_model = require('./models/cricketer_model')

app.post('/submit-form',(req,res)=>{
    cricketer_model.create({
        name:req.body.name,
        dob:req.body.date,
        photo:req.body.photo_url,
        birthplace:req.body.Birthplace,
        career:req.body.career,
        matches:req.body.matches,
        score:req.body.score,
        fifties:req.body.fifties,
        centuries:req.body.centuries,
        wickets:req.body.wickets,
        average:req.body.average,
    })
    .then(response=>{
        console.log("inserted data",response)
        res.status(201).send(express.response)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/get-player',(req,res)=>{
    cricketer_model.findAll({where:{
        name:req.body.name
    }}).then(response=>{
        res.send(response[0])
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/delete-player',(req,res)=>{
    //console.log(req.query.name)
    cricketer_model.destroy({where:{
        name:req.query.name
    }}).then(response=>res.send(response))
    .catch(err=>console.log(err))
})


sequelize.sync()
.then(result => {
    app.listen(4000)
    console.log("Synced with DB and app runing on port: ",4000)
}).catch(err => console.log(err))