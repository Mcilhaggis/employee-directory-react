import React from "react";
import "../App.css";

//the curly braces takes things from the state and passes them into the props/ into the components

const ResultsBody = ({image, name, phone, email, dob}) => {
    return (
                    <tr>
                        <td><img src={image} alt=""></img></td>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{dob}</td>
                    </tr>
    )
    
}

export default ResultsBody;