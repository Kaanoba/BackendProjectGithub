    const express = require('express')
    const app = express()
    const port = 3001
    const path = require('path')
    const morgan = require('morgan')
    const Database = require('./db/Database')

    if (process.env.NODE_ENV != 'production') {
       require('dotenv').config()
    }
   

    // dış tanımlamalar
    const notFound = require('./middlewares/notFound')

    // Set
    app.set('view engine', 'ejs')


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


    // Server starting and Database starting section

   

    app.listen(port, () => {
        new Database().connect(process.env.CONNECTION_STRING)
        console.log(`Server running on the ${port}`)
    })