<template>  <!-- template -->
    <div>
        <div class="card student-list m-2 p-2"> <!--start card studentlist Div container-->
            <h4 class="card-title">Student List</h4>
            
            <div class="edit-table-toggle form-check">
                <input type="checkbox" id="edit-table" class="form-chcek-input" v-model="editTable">
                <label for="edit-table" class="form-check-table">edit-table?</label>        
            </div>
           
            <div id="student-table"> <!--start student-table Div container-->
                <table class="table"> <!--table created-->
                    <tr> 
                        <th>Name</th> <!-- table headers title for each row-->
                        <th>StarID</th>
                        <th>Present?</th>
                        <th v-show="editTable">Delete</th>
                    </tr>
                   <!--Listening /connecting table rows Each row will have a checkbox, bound to the app's data 
                   When the checkbox is checked/unchecked, the student will be signed in/out -->
                    <student-row 
                        v-for="student in students" 
                        v-bind:student="student" v-bind:key="student.starID"
                        v-bind:edit="editTable"
                        v-on:student-arrived-or-left="arrivedOrLeft"
                        v-on:delete-student="deleteStudent">
                        <!--variable student is created here -->
                        <!--check box for a present student.-->                        
                    </student-row>
                </table>
            </div> <!--end student-table Div container-->
        </div> <!--end card student-listDiv container-->

    </div>
</template>

<script>
import StudentRow from '@/components/StudentRow.vue'

export default {
    name: 'StudentTable',
    components: { StudentRow },
    emits: ['student-arrived-or-left', 'delete-student' ],
    props: {
        students: Array
    },
    data() {                   //data needed to edit box.
        return {
            editTable: false  //false will set as unchecked present.
        }
    },
    methods: {
        arrivedOrLeft(student, present){
          //emits message to parent app.vue.
          this.$emit('student-arrived-or-left', student, present) 
        },    
        deleteStudent(student) {
        //emits message to parent app.vue.
            this.$emit('delete-student', student) //student is argument, payload.
        }    
    }
}
</script>

<style>


</style>