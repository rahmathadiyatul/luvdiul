const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const router = express.Router()
const users = require('./controllers/users')

mongoose.connect('mongodb://localhost:27017/luvdiul')
const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database Connected")
})

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("home")
})
app.get('/login', (req, res) => {
    res.render("./users/login")
})
router.route('/login')
    .get(users.loginUser)
    .post(users.login)

router.get('/logout', users.logout)

app.listen(3000, () => {
    console.log("We Love Diul 3000!")
})