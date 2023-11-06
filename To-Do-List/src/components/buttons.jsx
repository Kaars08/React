import React from "react";

const Button = ({name, onClick, type, className, variant }) => {
    return(
        <div>
            <button variant = {variant} type={type} onClick={onClick} className={className}>{name}</button>
        </div>
    );
}

export default Button;