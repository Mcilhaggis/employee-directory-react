import React from "react";
import "../App.css";

//the curly braces takes things from the state and passes them into the props/ into the components

const ResultsBody = ({image, name, phone, email, dob}) => {

    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        
        return formattedDate;
      };


    return (
                    <tr>
                        <td><img src={image} alt=""></img></td>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{formatDate(dob)}</td>
                    </tr>
    )
    
}

export default ResultsBody;