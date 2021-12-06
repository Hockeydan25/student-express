// this is where our servers code will be. package.json will be its name and other libraries used by the app.
let express = require('express')

let api_routes = require('./routes/api.js')

let path = require('path')

//Create web application 
let app = express()

let vueClientPath = path.join(__dirname, 'student-sign-in-client', 'dist')
app.use(express.static(vueClientPath))

//request sent in a "body" to handle json and then convert to JavaScript.
app.use(express.json())

//error message handling here as routes not found.
app.use('/api', api_routes) // server. waits for changes.
//could not handle an catches, client web browser is getting message not found...maybe a catch all for the api route problem.   

app.use( function (req, res, next) {
    res.status(404).send('not found here friend')
})
/*software stacks building a solution. here errors in link getting the data from the
  internal webserver, specific 500.*/  

app.use( function (err, req, res , next) {
    console.log(err.stack)
    res.status(500).send('Server errors')
})

//start server running with nodemon- its refreshes with code changes. 
//directing which port the server will run on 3000. enviroment variables set will read and use, sets for heroku to 
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on port', server.address().port )
})

//this note I want in the config json but when I place it there is gives me errors.
/*do we connect local or at Heroku. delevopment is for local, production is fopr Heroku.
prpgress helps when we have many users.*/