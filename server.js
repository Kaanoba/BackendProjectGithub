    const express = require('express')
    const app = express()
    const port = 3001
    const path = require('path')
    const morgan = require('morgan')
    require('dotenv').config()

    // dış tanımlamalar
    const notFound = require('./middlewares/notFound')




    // hazır middlewareler
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(morgan('tiny'))

    // custom middlewareler
    



    // Endpoints
    app.get('/', (req, res) => res.status(200).json({msg: 'Hello express server!'}))


    // Not found
    app.use(notFound)


    app.listen(port, () => {
        console.log(`Server running on the ${port}`)
    })