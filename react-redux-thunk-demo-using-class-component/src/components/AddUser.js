import React from 'react';

import { connect } from 'react-redux';
import { addUser } from '../actions';

class AddUser extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            phone: '',
            website: ''
        }
    }

    // To handle form submit
    handleSubmit = (event) => {
        event.preventDefault();

        // Call the reducer
        if( this.state.name === '' || this.state.phone === '' || this.state.website === '' )
        {
            alert('All fields are manadatory');
            return false;
        }

        this.props.addUser(this.state);

        // Reset the values
        this.setState({ name: '', phone: '', website: '' });
    }

    // To handle user input and set the value in local state
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="text-center"><h4>Add User</h4></div>
                <form className="form-inline" autoComplete="off" onSubmit={ this.handleSubmit } autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" className="form-control" name="name" onChange={ this.handleInput } value={ this.state.name } />
                    </div>
                    <div className="form-group" style={{ marginLeft: 60 }}>
                        <label htmlFor="name">Phone No:</label>
                        <input type="text" className="form-control" name="phone" onChange={ this.handleInput } value={ this.state.phone } />
                    </div>
                    <div className="form-group" style={{ marginLeft: 60 }}>
                        <label htmlFor="department">Website:</label>
                        <input type="text" className="form-control" name="website" onChange={ this.handleInput } value={ this.state.website } />
                    </div>
                    <button style={{ marginLeft: 60 }} type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addUser })(AddUser);