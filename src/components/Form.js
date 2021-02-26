import React from "react";
import "../App.css";


function Form({updateUsers, user}) {

   function handleInputChange(event) {
        // Getting the value and name of the input which triggered the change
        // const { name, value } = event.target;
        // console.log(event.target.value)
        // console.log(user)

        const result = user.filter(person =>
            {
            return person.name.first.includes(event.target.value)
        })
        console.log(result)
        // Updating the input's state
        // this.setState({
            //   [name]: value
            // });
            updateUsers(result)
      };


    return (
        <div className="Form">
            <form>
                <input type="text" className="searchButton" onChange={handleInputChange}></input>
            </form>
        </div>
    )
}

export default Form;