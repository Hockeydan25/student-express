<template><!-- template/HTML here -->
    <div><!--Start Main DIV -->
        <!--  show a message when student arrives or leaves  -->
        <div v-show="student.name">
            <div v-if="student.present" class="alert alert-primary">
                Welcome, {{ student.name }}
            </div>
            <div v-else class="alert alert-secondary" >
                Goodbye, {{ student.name }}. See you later!
            </div>

        </div>    

    </div><!--END Main DIV -->
</template>

<script>
export default {
    name: 'StudentMessage',
    props: {
       student: Object 
    }
   
}
</script>

<style scoped>

</style>