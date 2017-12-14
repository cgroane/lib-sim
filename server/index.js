const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const createInitialSession = require('./middlewares/session').checkUserSession;

const { dbUser, database, connectionString } = require("../config").massive;
const { secret } = require("../config").session;
const { domain, clientID, clientSecret } = require("../config.js").passportAuth0;

const port = 3001;
const app = express()
app.use(json())
app.use(cors())

massive(connectionString)
.then(db => app.set('db', db))
.catch(console.log)

app.use(
    session({
        secret, 
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 30000
        }
    })
);
app.use((req, res, next) => {
    createInitialSession(req, res, next)
})

const userCtrl = require('./controllers/user_controller');
const bookCtrl = require('./controllers/books_controller');

// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(
//     new Auth0Strategy(
//         {
//             domain,
//             clientID,
//             clientSecret,
//             callbackURL: '/api/auth/login'
//         },
//         function(accessToken, refreshToken, extraParams, profile, done){
//             app
//             .get('db')
//             .getUserByAuthId(profile.id)
//             .then(response => {
//                 if(!response[0]) {
//                     app
//                         .get('db')
//                         .createUserByAuth([profile.id, profile.displayName])
//                         .then(created => {
//                             console.log(created);
//                             return done(null, created[0])
//                         })
//                 } else{
//                     return done(null, response[0])
//                 }
//             })
//         }
//     )
// );

// passport.serializeUser(function(user, done) {
//     done(null, user)
// })

// passport.deserializeUser(function(obj, done) {
//     done(null, obj)
// })


//users
app.post('/api/auth/login', userCtrl.loginUser);
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/logout', userCtrl.logout);
app.get('/api/auth/login', userCtrl.getUser);

//books
app.get('/api/books', bookCtrl.getAllBooks);
app.post('/api/books', bookCtrl.addBook);
app.get('/api/books/:book_id', bookCtrl.getBook);
app.put('/api/books/:book_id', bookCtrl.editBook);
app.delete('/api/shelf', bookCtrl.removeFromShelf);
app.post('/api/shelf', bookCtrl.addToShelf);
app.post('/api/shelf/books', bookCtrl.getShelf)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})