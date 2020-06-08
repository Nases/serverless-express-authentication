require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')


const path = require('path')

const app = express()

// allow cors with credentials and explicit uri
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Passport config
require('./config/passport')(passport)

mongoose
  .connect('mongodb+srv://nases2:DtpEkmjqcWvV3DQ1@nases-group-llc-bophr.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))


// EJS middleware
app.set('view engine', 'ejs')
app.use(expressLayouts)


// parse application/json
app.use(bodyParser.json())


// Express session middleware
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    // cookie: { secure: true }
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Flash messages middleware
app.use(flash())

// assign flash messages to global variables
app.use((req, res, next) => {
  Object.entries(req.flash()).map(([type, info]) => {
    res.locals[type] = info
  })
  next()
})

app.use('/', require('./routes/index'))


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))