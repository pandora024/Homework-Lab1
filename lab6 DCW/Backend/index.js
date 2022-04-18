const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();
app.use(cors());
 
// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let user = { 'name': 'Pamonwan', 'age': 22 }
router.route('/users')
   .get((req, res) => res.json(user))
   .put((req, res) => {
       user = { name: req.body.name, age: user.age }
       res.json(user)
   })

let student = {
   list: [
       { "id": 6135512024, "name": "pamonwan", "surname": "Intasra", "major": "CoE", "GPA": 2.43  },
       { "id": 6135512077, "name": "Pimupson", "surname": "Intasra", "major": "CoE", "GPA": 3.99 }]
}
 
router.route('/student')
   .get((req, res) => res.json(student))
 
 

router.route('/student')
   .get((req, res) => res.json(student))
 
   .post((req, res) => {
       console.log(req.body)
       let newStudent = {}
       newStudent.id = (student.list.length)?student.list[student.list.length - 1].id + 1:1
       newStudent.name = req.body.name
       newStudent.surname = req.body.surname
       newStudent.major = req.body.major
       newStudent.GPA = req.body.GPA
       student = { "list": [...student.list, newStudent] }
       res.json(student)
   })
   router.route('/student/:student_id')
   .get((req, res) => {
       const student_id = req.params.student_id
       const id = student.list.findIndex(item => +item.id === +student_id)
       res.json(student.list[id])
   })
   .put((req, res) => {
       const student_id = req.params.student_id
       const id = student.list.findIndex(item => +item.id === +student_id)
       student.list[id].name = req.body.name
       student.list[id].surname = req.body.surname
       student.list[id].major = req.body.major
       student.list[id].GPA = req.body.GPA
       res.json(student.list[id])
   })
 
   .delete((req, res) => {
       const student_id = req.params.student_id
       console.log('studentId: ',student_id)
       student.list = student.list.filter(item => +item.id !== +student_id)
       res.json(student.list)
   })

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log('server is running...'))
