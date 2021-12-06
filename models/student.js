//module is a function we use its going to fill in our datatypes.
module.exports = (sequelize, DataTypes) => { 
    //student objeect with three properties seeting the datatypes.
    //null setting will tell user it app can be null or not, we can change true/false. 
    let Student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,  // you can have the same names video-9.
            allowNull: false
        }, starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            //have to have unique id #'s , 0 or 1 we are using sqlize db and is 
        }, present: {
            type: DataTypes.BOOLEAN,  //true false checked in a chackbox link with a message.
            allowNull: false,
            defaultValue: false  // right away not checked.
        }
    })
        // return as promise. force is true overwrite will happen and data will be updated.
        /* force specifies whether to drop the table or not
        true= drop table every time app restarts. Need this setting if table schema changed,
        false = keep table(this will be the perm setting). */
    Student.sync({force: false}).then( () => {
        console.log('synced student table')
    })
    return Student  
    //return will set our student. nodemon server, will assist us with changes and restart auto.
}