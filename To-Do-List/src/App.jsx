import {BrowserRouter, Routes, Route} from "react-router-dom";
import Display from "./components/all";
import {tasks} from "./components/data";
import React from "react";
import { useState } from "react";
import EditPage from "./components/EditPage";
import './App.css'
import Button from "./components/buttons";

export default function App(){
  const [showCompleted, setShowCompleted] = useState(false);
  

  const completedTasks = tasks.filter(task => {
    if (showCompleted) {
      console.log(tasks)
      return task.status === "completed";
    } else {
      console.log(tasks)
      return tasks; // Show all tasks
    }
  });
  
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path = "/" element = {<Display data = {completedTasks}/>}/>
        <Route path = "/edit" element = {<EditPage/>}/>;
      </Routes>
      <Button name = "edit" onClick={() => window.location.href="/edit"} className="button" />
      <Button name = "all" onClick= {() => setShowCompleted(false)} className="button"/>
      <Button name = "completed" onClick= {() => setShowCompleted(true)} className="button" />
    </div>
    </BrowserRouter>
  );
}

