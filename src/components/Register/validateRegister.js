import {Database} from "../../data/Database"
export default function validateRegister(values) {
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
  
    if (!values.fname.trim()) {
      errors.fname = 'First name required';
    }
    if (!values.lname.trim()) {
      errors.lname = 'Last name required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    else if (InDatabase(values.email)[0]){
      errors.email = "An Account with this Email address has already been created!"
    }





    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }
  