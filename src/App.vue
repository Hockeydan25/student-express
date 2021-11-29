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

<script>

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
  methods: {
    newStudentAdded(student) {
      this.students.push(student)
      this.students.sort(function(s1, s2) {
        return s1.name.toLowerCase() < s2.name.toLowerCase() ? -1 : 1
      })
    },
    studentArrivedOrLeft(student, present){
      //find student in array of students
      //update present attribute
      let updateStudent = this.students.find( function(s) { //method find useses a function called s to look for matching student in the (added)array.
        if (s.name === student.name && s.starID === student.starID) {
          //this is the student to update
          return true
        }

      })
        //updates student list
      if (updateStudent) {
        updateStudent.present = present
        this.mostRecentStudent = updateStudent
      }
    },
    studentDeleted(student) { //rename stduentDeleted
      //filter is used instead of a splice to remove. returns a new array of all studnets for whom the func returns true. 
      this.students = this.students.filter( function(s) {
        if(s != student) {
          return true
        }
      })//clear welcom/goobye

      this.mostRecentStudent = {} //empty object.
    }
  }
}
</script>
<!--vue.cli will apply and fetch. -->
<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css";
</style>
