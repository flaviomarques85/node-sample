module.exports = (req, res, next) => {

    const   { username, password } =  req.body

    if(username  && password) {
        return next()
    }

    return res.json({
        message: "Usuario e/ou senha invalidos"
    })
}