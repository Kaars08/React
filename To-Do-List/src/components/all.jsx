import React from "react";
import "../App.css";
import Button from "./buttons";
import "./display.css";
import { useState } from "react";
const Display = ({data}) => {
    return (
    <div className=".display">
        <table>
            <tbody>
                <tr>
                    <th>Task</th>
                    <th> Status</th>
                </tr>
                {data.map((item) => (
                <tr key={item.task}>
                    <td>{item.task}</td>
                    <td>{item.status}</td>
                </tr>))}
            </tbody>
        </table>
     </div>
    )
};
export default Display;