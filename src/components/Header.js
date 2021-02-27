import React from "react";
import "../App.css";
import "./style.css";


function Header() {
    return(
        <div className="header">
        <h1>Employee Directory</h1>
        <p>Click the carrots to filter by catagory or start typing to filter by name</p>
        </div>
    )
}

export default Header;