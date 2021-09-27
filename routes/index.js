/** @param { import('express').Express } app */
module.exports = (app) => {
    app.get("/", (_,res) => {
        res.status(200).json({mensage: "Node-Sample APi"})
    })
}