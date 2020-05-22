const express = require('express')
const app = express()

app.use(express.json())
app.set('port', process.env.port || 3000)

const studentsRouter = require('./routes/students')

app.use('/students', studentsRouter)

app.get('/', (req, res) => {
    res.send('welcome to the app')
})

app.post('/post', (req, res) => {
    res.send("I posted")
})

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`))
