import React, { Component } from 'react'

export default class TaskItem extends Component {

    handleTodoCompleted(e) {
        if (this.props.task.task) {
            Meteor.call('tasks.todoCompleted', this.props.task._id, !this.props.task.completed)
        } else {
            throw "Error! _id is required";
        }
    }

    handleTodoRemove(e) {
        if (this.props.task._id) {
            Meteor.call('tasks.remove', this.props.task._id)
        } else {
            throw "Error! _id is required";
        }
    }

    render() {
        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">

                <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" checked={this.props.task.completed} id={this.props.task._id} onChange={this.handleTodoCompleted.bind(this)} />
                    <label className="custom-control-label" htmlFor={this.props.task._id}>{this.props.task.completed ? <del>{this.props.task.task}</del> : this.props.task.task}</label>
                </div>

                <div className="d-flex align-items-center ">
                    <span className="badge badge-primary badge-pill mr-3">{(new Date(this.props.task.createdAt)).toLocaleDateString('en-US', DATE_OPTIONS)}</span>

                    <button type="button" className="close" onClick={this.handleTodoRemove.bind(this)}>
                        <span id={this.props.task._id}>&times;</span>
                    </button>
                </div>

            </li>
        )
    }
}