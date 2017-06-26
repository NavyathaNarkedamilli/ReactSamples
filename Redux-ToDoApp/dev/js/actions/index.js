export const addNewTask = (task) =>{
    console.log("you clicked")
    return{
        type:"ADDNEW_TASK",
        payload:task
    }
};