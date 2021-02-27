import React from "react";
import "../App.css";

//the curly braces takes things from the state and passes them into the props/ into the components

const ResultsHead = (user) => {

    
    function sortByName(user) {
        console.log(user)
        console.log("name was clicked")
        // return user.sort()
    }

    return (
                <thead className="Results">
                    <tr>
                        <th>Image</th>
                        <th onClick={sortByName}>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
    )
    
}

export default ResultsHead;