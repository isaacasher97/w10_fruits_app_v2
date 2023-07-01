require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./controllers/user')
const PORT = process.env.PORT
const methodOverride = require('method-override')
const FruitRouter = require('./controllers/fruit');
const session = require('express-session');
const MongoStore = require('connect-mongo');

//MIDDLEWARE
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true, 
    resave: false,
}));
app.use("/fruit", FruitRouter) // will have a prefix of /fruit on top of what is defined as a path on the FruitRouter
app.use("/user", userRouter);




app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})