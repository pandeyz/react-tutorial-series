import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

function ListTodo() {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state);    // mapStateToProps equivalent

    // To mark task as done
    const handleDoneTodo = (index) => {
        let tableRow = document.getElementsByTagName("tr")[index+1];
        let tableFirstCol = tableRow.cells[0];
        tableFirstCol.style.setProperty("text-decoration", "line-through");
    }

    // To delete task
    const handleDeleteTodo = (task) => {
        if( window.confirm('Are you sure?') )
        {
            dispatch(deleteTodo(task));     // mapDispatchToProps equivalent
        }
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
                {
                    ( tasks && tasks.length > 0 )
                    ?
                    tasks.map( (task, index) => 
                    <tr key={index}>
                        <td>{ task }</td>
                        <td>
                            <button title="Task Done" onClick={ () => handleDoneTodo(index) } type="button" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-ok"></span></button>
                            <button title="Delete Task" onClick={ () => handleDeleteTodo(task) } style={{ marginLeft: 10 }} type="button" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-trash"></span></button>
                        </td>
                    </tr>)
                    :
                    null
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo;