import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";

const Buttons = ({name, onClick, type, variant}) => {
    return(
    <Button variant = {variant} onClick = {onClick} type = {type}>{name}</Button>
    );
}

export default Buttons;