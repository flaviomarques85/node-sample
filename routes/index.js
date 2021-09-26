/** @param { import('express').Express } app */
module.exports = (app) => {
    app.get("/", (_,res) => {
        res.send("Voce chamou a Rota Raiz")
    })
}