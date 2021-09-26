const auth =  require('../app/middlewares/auth')

module.exports = (app) => {
    app.get('/panel', auth, (req, res) => {
        res.json({
            menssage: "Voce foi ligado com sucesso!"
        })
    })
}