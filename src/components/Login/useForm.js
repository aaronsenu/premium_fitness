import { useState, useEffect } from 'react';
import { Database } from '../../data/Database';
import LoggedIn_Navbar from "../Logged_In/LoggedIn_Navbar/loggedIn_navbar"
import Home from "../../components/Home/Home"
import swal from "sweetalert"

const useForm = (callback, validate) => {

  function logging_in() {
    window.scroll(1000,1000)

    swal({
      title: "Logging In...",
      button: true
    })
    .then((willEnter) => {
      
      if (willEnter) {
        
        login()
        window.scroll(0,0)
        
        swal("You have sucessfully Logged In!", {
          icon: "success",
        });
      } 
    });
  
  }
  
  function login(){
    localStorage.setItem("status", true)
    
  }


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

  const [values, setValues] = useState({
    
    email: '',
    password: '',
  
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        const id = InDatabase(values.email)[1];
        var name = Database[id].fname
        localStorage.setItem("name", name);
        localStorage.setItem("email", values.email)
        localStorage.setItem("ID", id )
        console.log(localStorage.getItem("ID"))
       // Database[InDatabase(values.email)[1]].status = true;
        logging_in();


      
      

      

      
        
        
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors
  
  };
};

export default useForm;
