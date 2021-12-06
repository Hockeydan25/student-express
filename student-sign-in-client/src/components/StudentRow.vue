<template>
        <!--  created table rows, Each row will have a checkbox, bound to the app's data 
        When the checkbox is checked/unchecked, the student will be signed in/out -->
        <tr v-bind:class="{ present:student.present, absent: !student.present }"> <!--variable student is created here -->
            <td>{{ student.name }}</td>   
            <td>{{ student.starID }}</td>
            <td><input type="checkbox" v-bind:checked="student.present" v-on:change="arrivedOrLeft(student, $event.srcElement.checked)"> <!--check box for a present student.--></td>
            <td v-show="edit"> <img v-on:click="deleteStudent" src="@/assets/trashbin.png"></td>
            <!-- new row for deleting student works with click, @ symbol is a shortcut keyword. -->
            <!-- delete in=mage no shows or not shows based on message. -->
            
        </tr>

</template>

<script>

export default {
     name: 'StudentRow',
     props: {
         student: Object,
         edit: Boolean
    },
    emits: ['student-arrived-or-left','delete-student'], 
     methods: {
         arrivedOrLeft(student, present) {
            //will tell/emit it's parent/studentTable.studentTable will tells its parent/App.vue to delete student. 
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent(){   
            //if this is true it will show no show or true false. Confirms deletion with drop down message.
            if(confirm(`Delete ${this.student.name}?`)) { 
                //will tell/emit it's parent/studentTable.studentTable will tells its parent/App.vue to delete student.    
                this.$emit('delete-student', this.student)
            }
        }                                   //payload student.
    }
    
}
</script>

<style scoped>
/* stlying for the messages when student checks/signs in, color pops for attention. */
.present {
    color: gray;
    font-style: italic;
    background-color: lightgray;
}
/* stlying for the messages when student leaves, color pops for attention. */
.absent {
    color: black;
    font-weight: bold;
    background-color: darkgray;
}   
/* styling the delete icon to not be to tall. looks equal to other text in the row. */
img {
    height: 30px;
}

</style>