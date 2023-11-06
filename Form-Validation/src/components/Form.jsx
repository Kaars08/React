import React from "react";
import Buttons from "./Button";
import { data } from "./data";
import { useState } from "react";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css"

const Form  = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleUserChange = (e) => {
        if (data.find((data) => data.username === e.target.value)){
            alert("username alreasy existing");
        }
        else{
            setUserName(e.target.value);
        }
    }

    const handlePassChange = (e) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(e.target.value.length >= 8 && !regex.test(e.target.value)){
            alert("password did not meet basic conditions")
            setPassword('')
        }
        else{
            setPassword(e.target.value)
        }
    }

    const handleEmailChange = (e) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (e.target.value.length >= 15 && !regex.test(e.target.value)){
            alert("enter valid email")
            setEmail('')
        }
        else{
            setEmail(e.target.value)
        }
    }
    const handleSubmit = e => {
        console.log("Submitted Data:", { username, password, email });
        if (username === "" || password === "" || email === ""){
            alert('enter details')
            setSubmitted(false)
        }
        else{
            setSubmitted(true)
        }
        e.preventDefault();
    }
    if (submitted){
        return <Welcome/>
    }
    return(
        <form onSubmit={handleSubmit} className="form-group">
            <label htmlFor="exampleInputEmail1">
                Username
                <input type = "text" placeholder= "Name" className="form-control" value = {username || ""} onChange={handleUserChange} />
            </label>
            <label htmlFor="exampleInputEmail1" >
                Password
                <input type = "text" placeholder= "password" className="form-control" value = {password || ""} onChange={handlePassChange}/>
            </label>
            <label htmlFor="exampleInputEmail1">
                Email 
                <input type = "text" placeholder= "email" className="form-control" value = {email || ""} onChange={handleEmailChange}/>
        
            </label>
            <Buttons name = "login" type="submit" variant = "success"/>
        </form>
    );
}

export default Form;