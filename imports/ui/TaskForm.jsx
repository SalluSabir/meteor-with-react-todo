import React from 'react'

export default TaskForm = (props) => {
    const { status, className, text } = props.error

    return (
        <input
            className={`form-control form-control-lg ${status ? className : ''}`}
            type="text"
            id="task"
            placeholder={`${status ? text : 'Please enter task description and hit Enter'}`}
            onKeyDown={props.handleTodoAdd}
        />
    )
}
