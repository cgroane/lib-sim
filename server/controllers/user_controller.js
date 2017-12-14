module.exports = {
    register(req, res, next) {
        const dbInstance = req.app.get('db')
        
        dbInstance.register_user([req.body.username, req.body.pw])
        .then(() => res.status(200).send('User created'))
        .catch(() => res.status(500).send(`Couldn't add this user`))
    },
    loginUser(req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.login_user([req.body.username, req.body.pw])
        .then((users) => {
            console.log(users)
            req.session.user = users[0];
            return res.status(200).send(users[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('Error loggin in')
        })
    },
    logout(req, res, next) {
        const {session} = req;
        session.destroy();
        res.status(200).send(req.session)
    },
    getUser(req, res, next) {
        res.status(200).send(req.session.user)
    }
}