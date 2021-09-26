require("dotenv").config
const express  =  require("express")
const cors =  require("cors")
const compression =  require("compression")
const consing =  require('consign')

const app =  express()

consing()
    .include('./app/middlewares/global')
    .then('./routes')
    .into(app)

app.listen(process.env.APP_PORT || 3003, () => {
    console.log("App Sample ouvindo na Porta 3003")
})