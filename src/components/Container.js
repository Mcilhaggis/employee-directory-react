import React, { Component } from "react";
// import '../App.css';
import Header from "./Header.js";
import Form from "./Form.js";
import ResultsHead from "./ResultsHead.js";
import ResultsBody from "./ResultsBody.js";
import "./style.css";



class Container extends Component {

    //Initailising the objects state
    constructor() {
        //super initalises 'this' to be used in a constructor
        super();
        this.state = {
            user: [],
            error: null,
            order: true
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

    sortByName = () => {
        this.setState({
            users: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.name.first < b.name.first) return -1;
            if(a.name.first > b.name.first) return 1;
            return 0;
        })
            : this.state.users.reverse((a,b) => {
                if(a.name.first < b.name.first) return 1;
                if(a.name.first > b.name.first) return -1;
                return 0;
            }),
            order: !this.state.order
        })
    }

    sortByPhone = () => {
        this.setState({
            users: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.cell < b.cell) return -1;
            if(a.cell > b.cell) return 1;
            return 0;
        })
            : this.state.users.reverse((a,b) => {
                if(a.cell < b.cell) return 1;
                if(a.cell > b.cell) return -1;
                return 0;
            }),
            order: !this.state.order
        })
    }

    sortByEmail = () => {
        this.setState({
            users: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.email < b.email) return -1;
            if(a.email > b.email) return 1;
            return 0;
        })
            : this.state.users.reverse((a,b) => {
                if(a.email < b.email) return 1;
                if(a.email > b.email) return -1;
                return 0;
            }),
            order: !this.state.order
        })
    }

    sortByDob = () => {
        this.setState({
            users: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.dob < b.dob) return -1;
            if(a.dob > b.dob) return 1;
            return 0;
        })
            : this.state.users.reverse((a,b) => {
                if(a.dob < b.dob) return 1;
                if(a.dob > b.dob) return -1;
                return 0;
            }),
            order: !this.state.order
        })
    }

    render() {

        return (<div>
            <Header />
            <Form 
            // passing in the updateUsers function to be used in the form component
            updateUsers={this.updateUsers}
            //passing in the users to the form component
            user={this.state.user}/>
            <div className='container'>
                <table className="table">
                    <ResultsHead 
                    sortByName={this.sortByName}
                    sortByPhone={this.sortByPhone}
                    sortByEmail={this.sortByEmail}
                    sortByDob={this.sortByDob}
                    />

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
