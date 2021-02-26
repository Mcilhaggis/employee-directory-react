import React, { Component } from "react";
// import '../App.css';
import Header from "./Header.js";
import Form from "./Form.js";
import ResultsHead from "./ResultsHead.js";
import ResultsBody from "./ResultsBody.js";


class Container extends Component {

    //Initailising the objects state
    constructor() {
        //super initalises 'this' to be used in a constructor
        super();
        this.state = {
            user: [],
            error: null
        }
    }
    //setting the loading state to true and running the api call
    componentDidMount() {
        //since we are now fetching the api data we set loading to true
        this.getEmployees();
    }


    //Make async call to the API 
    getEmployees = async () => {
        try {
            await fetch('https://randomuser.me/api/?results=50&inc=id,picture,name,cell,email,dob')
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    console.log(data.results)
                    let user = data.results
                    this.setState({ user: user });
                });
        }
        catch (error) {
            this.setState({ error: error });
        }
    }

    updateUsers = (users) => {
        this.setState({ user: users });
    }

    render() {

        return (<div>
            <Header />
            <Form 
            updateUsers={this.updateUsers}
            user={this.state.user}/>
            <div className='container'>
                <table className="table">
                    <ResultsHead />

                    <tbody>
                        {this.state.user.map((users, id) => (

                            <ResultsBody
                                key={id}
                                image={users.picture.thumbnail}
                                name={users.name.first}
                                phone={users.cell}
                                email={users.email}
                                dob={users.dob.date}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

        )

    }
}


export default Container;
