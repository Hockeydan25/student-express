import axios from 'axios'

let base_url = '/api/students'

export default { //like a fetch returns promises is these get an post routes.maps to our server.
    getAllStudents() { 
        return axios.get(base_url).then( response => {
            return response.data  //I should understand why this is the same return for all 3 parameters here...
        })//axios placing what the user types 
    },

    addStudent(student) {
        return axios.post(base_url, student).then( response => {
            return response.data
        })
    },
    updateStudent(student) {
        //creates a URL frame from the api/students/1  
        return axios.patch(`${base_url}/${student.id}`, student).then( response => {
          return response.data      
        }) 
    },    
    //base url= /api/students, any as this will delete the selected and link to the api.js code.
    // not sure if link is right App.vue mthod call to studentDeleted. template string. 
    deleteStudent(id) {
        return axios.delete(`${base_url}/${id}`).then( response => {
            return response.data 
        })
    }
}