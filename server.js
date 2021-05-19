const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kwaski:ValarMOrghulis@cluster0.g7dsq.mongodb.net/SurveyDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);






const userRouter = require('./api/routes/userRoute');
const clientRouter = require('./api/routes/clientRoute');
const surveyRouter = require('./api/routes/surveyRoute')



const app = express()


app.use(morgan('dev'))

//CORS 
app.use(cors())

//BODY-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 3000;

app.use('/api/users', userRouter);
app.use('/api/clients', clientRouter);
app.use('/api/survey', surveyRouter);



app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
})

app.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        id
    })

})


app.listen(port, () => {
    console.log('Server is running on Port : ' + port)
})
