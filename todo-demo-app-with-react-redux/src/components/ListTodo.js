import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../actions';

class ListTodo extends React.Component {

    // To mark task as done
    doneTodo = (index) => {
        let tableRow = document.getElementsByTagName("tr")[index+1];
        let tableFirstCol = tableRow.cells[0];
        tableFirstCol.style.setProperty("text-decoration", "line-through");
    }

    // To delete task
    deleteTodo = (task) => {
        if( window.confirm('Are you sure?') )
        {
            this.props.deleteTodo(task);
        }
    }

    render() {
        // Check if the records exist otherwise show a proper message
        var todoTableRows = <tr><td colSpan="2" className="text-center">No task found</td></tr>;
        if( this.props.tasks.length > 0 )
        {
            todoTableRows = this.props.tasks.map( (task, index) => <tr key={index}>
                            <td>{ task }</td>
                            <td>
                                <button title="Task Done" onClick={ () => this.doneTodo(index) } type="button" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-ok"></span></button>
                                <button title="Delete Task" onClick={ () => this.deleteTodo(task) } style={{ marginLeft: 10 }} type="button" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-trash"></span></button>
                            </td>
                            </tr> )
        }
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={{ width: 90 + '%' }}>Task</th>
                            <th style={{ width: 10 + '%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { todoTableRows }
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tasks: state
    }
}

// export default ListTodo;
export default connect(mapStateToProps, { deleteTodo })(ListTodo);