import React from "react";
import "../App.css";


function Form({updateUsers, user}) {
    //we pass in a function that we write in the main compoenent that allows us to update the state of the users
    //we also pass in the user state in its original state

   function handleInputChange(event) {
       //filtering the current user array to only show values that include what has been typed into the search bar as of yet
        const result = user.filter(person =>
            {
                //event.target.value gets the exact input of the search bar at any time
            return person.name.first.includes(event.target.value)
        })
        console.log(result)
        //send the filtered array to the main component
            updateUsers(result)
      };


    return (
        <div className="Form">
            <form>
                {/* add the call to the funciton above here */}
                <input type="text" className="searchButton" onChange={handleInputChange}></input>
            </form>
        </div>
    )
}

export default Form;