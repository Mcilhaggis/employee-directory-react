import React from "react";
import "../App.css";

//the curly braces takes things from the state and passes them into the props/ into the components

const ResultsHead = () => {
    return (
        <div className="Results">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
    
}

export default ResultsHead;