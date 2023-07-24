import {Database} from "../../data/Database.js"
export default function validateLogin(values) {

  function InDatabase(str){
    //returns an array containing boolean value of whether email in database and the ID of the email
    for (var i = 0; i <Database.length; i++) {
          
          if(Database[i].email === str){
            //alert("email found")
            return [true, i] 
          };
          
    }
    return [false,-1]
  }








    let errors = {};
   
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    else if(InDatabase(values.email)[0] === false){
        errors.email = "This email has not yet been registered."
      }
      
    
    
    

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    else if (InDatabase(values.email)[0]){
        if(values.password !== Database[InDatabase(values.email)[1]].password){
          errors.password = "Email and Password do not match"
        }
        
      }
      
  
    return errors;
  }
  