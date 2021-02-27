import React from "react";
import "../App.css";

//the curly braces takes things from the state and passes them into the props/ into the components

const ResultsHead = ({sortByName, sortByPhone, sortByEmail, sortByDob }) => {


    return (
                <thead className="Results">
                    <tr>
                        <th>Image</th>
                        <th onClick={sortByName}>Name</th>
                        <th onClick={sortByPhone}>Phone</th>
                        <th onClick={sortByEmail}>Email</th>
                        <th onClick={sortByDob}>DOB</th>
                    </tr>
                </thead>
    )
    
}

export default ResultsHead;