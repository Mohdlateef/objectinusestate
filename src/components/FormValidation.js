import React from "react";
import { useState } from "react";



const FormValidation=()=>{


let[userData,getUserData]=useState({Name:"",Email:"",Password:"",Confirmpassword:""});

let{Name,Email,Password,Confirmpassword}=userData;
let [messege,setmessege]=useState("")
function inputData(e){
    let key=e.target.name
    getUserData({...userData,[key]:e.target.value})

}
function getFormData(e){
    e.preventDefault();
    if(!Name||!Email||!Password)
    {
        alert("Please fill the form")
    }
    if(Password!==Confirmpassword)
    {
    alert("password and confirm password doesn't match");
    }
    else{
      
setmessege("User register sucessfully");
    }
}

return(
    <div>
<form onSubmit={getFormData}>
    <input type="text" placeholder="Name" value={Name} name="Name" onChange={inputData}></input>
    <input type="email" placeholder="Email" value={Email} name="Email" onChange={inputData}></input>
    <input type="password" placeholder="Password" value={Password} name="Password"onChange={inputData}></input>
    <input type="password" placeholder="ConfirmPassword" value={Confirmpassword} name="Confirmpassword"onChange={inputData}></input>
<button>Submit</button>
</form>
<div> {messege ?<p>{messege}With the Name:{Name} with Email:{Email} </p>:null}</div>
    </div>
)
}


export default FormValidation;