const express = require('express')
const router = express.Router()

const fs = require('fs')

const students = JSON.parse(fs.readFileSync('students.json'))

router.get('/', (req, res) => res.send(students))

router.get('/:id', (req, res) => {
    const selectedStudent = students.find(student => student.id === Number(req.params.id))
    res.send(selectedStudent)
})

router.get('/studentsearch/:first_name', (req, res) => {
    const searchStudentName = students.find(student => student.first_name == req.params.first_name)
    res.send(searchStudentName)
})

router.get('/:id/grades', (req, res) => {
    const searchStudentGrade = students.find(student => student.id === Number(req.params.id))
    res.send(searchStudentGrade.grades)
})

router.get('/:id/grades/:class', (req, res) => {
    const searchStudentGrade = students.find(student => student.id === Number(req.params.id))
    if(req.params.class == 'math') {
        res.send(searchStudentGrade.grades.math)
    }
    else if(req.params.class == 'science') {
        res.send(searchStudentGrade.grades.science)
    }
    else if(req.params.class == 'reading') {
        res.send(searchStudentGrade.grades.reading)
    }
    else if(req.params.class == 'writing') {
        res.send(searchStudentGrade.grades.writing)
    }
})

router.post('/:id/grades/:class/:newgrade', (req, res) => {

    //console.log("********************")
    //console.log(req.params)
    //console.log("********************")

    //const searchStudentGrade = students.find(student => student.id === Number(req.params.id))
    
    /*
    router.post('/book/create', book_controller.book_create_post);
    exports.book_create_post = function(req, res) {
        res.send('NOT IMPLEMENTED: Book create POST');
    };
*/
    //req.params.class

    res.send("Student number: "+req.params.id+" now has the grade of "+req.params.newgrade+" for class "+req.params.class)
  
})

module.exports = router

    //console.log("********************")
    //console.log(req.params)
    //console.log("********************")