import React from "react";
import "../App.css";


const styles = {
    image: {
        height: "100px",
        width: "100px"
    }
}
//the curly braces takes things from the state and passes them into the props/ into the components
const Form = ({ image, fullName, phone, email, DOB }) => {
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

                <tbody>
                    <tr>
                        <td><img src={image} alt="" style={styles.image}></img></td>
                        <td>{fullName}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{DOB}</td>
                    </tr>
                </tbody>



            </table>
        </div>
    )
}

export default Form;