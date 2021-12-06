/* creating two routes on the server one gets all students converts to json format.
post creates a request to create data , new student object and then sends message back  */

let express = require('express')
let db = require('../models')

let Student = db.Student

// routes created here a get and post route.
let router = express.Router()
//returning a promise, get Fetches all the students.  use the method updatestudent in app.vue
router.get('/students', function(req, res, next){
    Student.findAll( {order:[
        'present',
        db.Sequelize.fn('lower', db.Sequelize.col('name'))
    ]} ).then( students => {
        return res.json(students) //a type of request 
    })//.catch( err => next(err) ) //again refer to err message from server.js (500).
})
//another promise, post creates ..always have to send something data or message. 200 messages are sucessful code 201 is specific.
//students use the method newStudentadded in app.vue.
router.post('/students', function(req, res, next) {
    Student.create(req.body).then( (data) => {
        return res.status(201).send('okay created')
    }).catch( err => {
        //handle user errors tells user they can fix this type error.
        if ( err instanceof db.Sequelize.VaildationError ) {
            //respond with a 404 bad request err code, include err msg. to tell users.
            let messages = err.errors.map( e => e.message)
            return res.status(400).json(messages)
        }
        //otherwise calls server.js 500 code already written, stack code.
        return next(err)
    })
})
/*:id match request anything. promise, patch updates.This code is giving us ablility to wrte for student..1.2.3.etc..
update a student use the method updateStudents in app.vue.*/
router.patch('/students/:id', function( req, res, next) {

    let studentID =  req.params.id
    let updatedStudent = req.body
    Student.update( updatedStudent, { where: { id: studentID } } )//basic sql update message to the row for StudentID.
        .then( (rowsModified) => {
            let numberOfRowsModified = rowsModified[0]//the number of rows affected.
            if (numberOfRowsModified == 1) {   ////exactly one row .
                return res.send('okay')
            }
            //student not found
            else {
                return res.status(404).json(['Student with that id not found!'])//good useful user msg.
            }            
                      
        })//user can fix
        .catch( err => { //bad request message ,//modification violates constainst? no name or same starid.
            if ( err instanceof db.Sequelize.VaildationError ) {
                let messages = err.errors.map( e => e.message)
                return res.status(400).json(messages)
            }else {
                return next(err)// unexpected, user can not fix this.
            }
        })
}) 
//delete a student use the method delete in app.vue. links to student.js, watch name matches.
//what happens for a student/100
router.delete('/students/:id', function(req, res, next) {
    let studentID = req.params.id
    Student.destroy( {where: { id: studentID } } ) //only studentID of id match.
    .then( (rowsDeleted) => { //function short form
        if (rowsDeleted == 1){
            return res.send('okay')
        }else {
            return res.status(404).json('Not Found') //can send in json form/ text.
        }
    })
    .catch( err => next(err) )// expect the unexpected errors
})


//don't forget to export, makes router available to the rest of the project.
module.exports = router // nothing below, it would be ignored.