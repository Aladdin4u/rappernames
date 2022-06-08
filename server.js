const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage' : {
        'age' : 29,
        'birthname' : 'Shelyee Bin Abraham Joseph',
        'birthlocation' : 'London, England'
    },
    'chance the rapper' : {
        'age' : 29,
        'birthname' : 'Chance Benette',
        'birthlocation' : 'London, England'
    },
    'unknown' : {
        'age' : 0,
        'birthname' : 'unknown',
        'birthlocation' : 'unknown'
    }
}
app.get('/', (req, res)  => {
    res.sendFile(__dirname + '/index.html')
    console.log('Homepage is running')
})

app.get('/api/:name', (req, res)  => {
    const rappersName = req.params.name.toLowerCase()
    if(rappers[rappersName]) {
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['unknown'])
    }
    // res.json(rappers)
    // console.log('api is running')
})


app.listen(PORT, (req, res) => {
    console.log(`node is running on port ${PORT}`)
})