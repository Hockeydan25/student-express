<template>
 <div id="app">
    <!--method calls and listening or listners for messages or events changes -->
    <new-student-form v-on:student-added="newStudentAdded"></new-student-form>
    <student-table v-bind:students="students" 
      v-on:student-arrived-or-left="studentArrivedOrLeft"
      v-on:delete-student="studentDeleted"></student-table>
    <student-message v-bind:student="mostRecentStudent"></student-message>

  </div>
</template>
<!--template from our sign in code no changes writen
script we added code to  mounted to be used -->
<script>  //start main script frame work

import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'


export default {
  name: 'App',
  components: {
    NewStudentForm,    
    StudentTable,
    StudentMessage
  },
  data() {//funtion that returns an object
    return {
      students: [],
      mostRecentStudent: {}
    }
  },
  mounted() {
    this.updateStudents()
    //loading all student to make the request to API 
  },
  //lots happening with these methods this is weid updata adds changing modifying is setup. Now deleted too.
  methods: {
    updateStudents(){
      this.$student_api.getAllStudents().then( students => {
        this.students = students
      }) 
      .catch( () => alert('Unable to fetch student list'))
    },
    newStudentAdded(student) {
      this.$student_api.addStudent(student).then( () => {
        this.updateStudents() //this method is called and then update will do work for the call to get for new list of students
      }) 
      .catch( err => {
        let userErrMessage = err.response.data.join(',')
        alert('Error adding student\n' + userErrMessage)
      })
    },
    studentArrivedOrLeft(student, present){
      //find student in array of students
      //update present attribute 
      student.present = present
      this.$student_api.updateStudent(student).then( () => {
        this.mostRecentStudent = student
        this.updateStudents() //this method is called and then update will do work for the call to get for new list of students
      })
      .catch( () => alert('Unable to update student list'))  
    },
    studentDeleted() { //rename stduentDeleted//link to 
      //returns a new array of all studnets for whom the func returns true. 
      this.$student_api.deleteStudent(student.id).then( () => {
        this.updateStudents() //calls method for an update to rows displayed.
        this.mostRecentStudent = {} //empty to reset row, clear welcom/goodbye message. 
      })
      .catch( () => alert('Unable to delete student list'))
    } 
  }
}
//END main script frame work
</script> 
<!--vue.cli will apply and fetch. -->
<!--CSS Casscade Style Sheet code, using bootstarp -->
<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css";
</style> <!-- end style and end of code page-->

