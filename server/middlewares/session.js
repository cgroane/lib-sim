module.exports = {
    checkUserSession(req, res, next) {
        if (!req.session.user) {
            req.session.user = {
                username: '',
                user_id: '',
                cart: []
            }
        }
        next();
    }
}