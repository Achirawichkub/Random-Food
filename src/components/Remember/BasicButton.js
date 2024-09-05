import React from "react";
import Button from 'react-bootstrap/Button'
function BasicButton(){
    const handleClick = () => {
        alert('Button Clicked');
    };
    const nameClick = () => {
        alert('Achirawich');
    };
    return(
        <><Button variant="primary" onClick={handleClick}>
            Click Me
        </Button><br></br>
        <Button variant="primary" onClick={nameClick}>
                Clickkkkkkkkkk
        </Button></>
    )
}
export default BasicButton