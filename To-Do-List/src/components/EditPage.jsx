import React from "react";
import {tasks as initialTasks} from "./data";
import Display from "./all";
import { useState } from "react";
import Button from "./buttons";

const EditPage = () =>{
    const [newTask, setNewTask] = useState({task:"", status:""})
    const [tasks, setTasks] = useState(initialTasks);
    const [submitted, setSubmitted] = useState(false);
    const handleTaskChange = e => {
        setNewTask({...newTask, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, newTask]);
        setNewTask({ task: "", status: "" });  
        setSubmitted(true)
      };

    if(submitted){
        return <Display data={tasks} />;
    }
    return(
        <div>
            <h2>Edit Tasks </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Task:
                    <input type = "text" name = "task" value = {newTask.task} onChange = {handleTaskChange} />
                </label>

                <label>
                    status:
                    <input type = "text" name = "status" value = {newTask.status} onChange = {handleTaskChange} />
                </label>

                <br/>
                <Button name = "submit" type = "submit" className="button"/>
            </form>
            
            
        </div>
    )
};

export default EditPage;

