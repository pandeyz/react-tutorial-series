import React from 'react';

import { connect } from 'react-redux';
import { deleteUser, fetchUsers } from '../actions';

class ListUser extends React.Component {
    
    // To delete user
    handleDelete = (id) => {
        // Call the action
        if( window.confirm('Are you sure?') )
        {
            this.props.deleteUser(id);
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        var tableRow = <tr><td colSpan="5" className="text-center">No record found</td></tr>;
        if( this.props.users.length > 0 )
        {
            tableRow = this.props.users.map((user, index) => (<tr key={ index }>
                <td>{ index + 1 }</td>
                <td>{ user.name }</td>
                <td>{ user.phone }</td>
                <td>{ user.website }</td>
                <td><span onClick={ () => this.handleDelete(index) } className="glyphicon glyphicon-trash"></span></td>
            </tr>))
        }
        return (
            <div>
                <hr />
                <div className="text-center"><h4>List Users</h4></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tableRow }
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.UserReducer
    }
}

export default connect(mapStateToProps, { deleteUser, fetchUsers })(ListUser);