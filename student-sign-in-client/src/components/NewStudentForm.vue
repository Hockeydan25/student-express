<template><!-- template/HTML here -->
    <div><!--Start main DIV for newstudentform -->        
        <!--  show errors from form validation -->
        <div class="alert alert-danger" v-if="errors.length > 0">
            <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
        </div>

        <div class="card add-student m-2 p-2"> <!--start card-title Div container-->
            <h4 class="card-title">Add new Guest</h4>

            <div class="form-group"> <!--start name Div container-->
                <label for="name">Name</label>
                    <!--  v-model newStudentName -->
                <input id="name" class="form-control" v-model.trim="newStudentName"><!--v-modle used here-->
            </div> <!--end name Div container-->
        
            <div class="form-group"> <!--start star-id Div container-->
                <label for="starID">RSVP - Yes or No</label>
                    <!--  v-model newStarID -->
                <input id="starID" class="form-control" v-model.trim="newStarID"> <!--v-modle used here-->
            </div> <!--end star-id Div container-->
                <!--  v-on:click event handler -->
            <button class="btn btn-primary" v-on:click ="addStudent">Add</button>
        </div> <!--END card-title Div container-->   
    </div><!--END main DIV for newstudentform -->
</template>

<script>
export default {
    name: 'NewStudentForm',
    emits: ['student-added'],//Array. list events type componet that gets emited.
    data(){
       return {
           newStudentName: '',
           newStarID: '',
           errors: []
       }
    },
    methods:{
        addStudent() {
            this.errors = [] //clear errors array,

            if (!this.newStudentName) {
                this.errors.push('Student name is required')
            }

            if (!this.newStarID){    
              this.errors.push('StarID is required')
            } 
            
            if (this.errors.length == 0){                // if there are no eerrors .
                let student = {name: this.newStudentName, starID: this.newStarID, present: false}
            
                //emit message to parent with new student. pass along the data.
                this.$emit('student-added', student)
                this.newStudentName = ''
                this.newStarID = ''
            }                          
        }
    }
}
</script>

<style scoped>

</style>