import React from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Tasks } from '../api/tasks';

import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

export default class App extends TrackerReact(React.Component) {

  constructor(props) {
    super(props)

    this.state = {
      subscription: {
        tasks: Meteor.subscribe("tasks")
      },
      error: { status: false, className: 'is-invalid', text: 'Task at least has a charecter!' }
    }
  }

  handleTodoAdd(e) {

    this.setState({
      error: { ...this.state.error, status: false }
    })

    if (e.key === 'Enter') {
      let task = e.target.value.trim()

      if (task) {

        Meteor.call('tasks.insert', task, (error, data) => {
          if (error) {
            this.setState({
              error: { ...this.state.error, status: true, text: "You are not authorised!" }
            })
          }
        })

        e.target.value = '';

      } else {
        this.setState({
          error: { ...this.state.error, status: true }
        })
      }

    }

  }

  getTasks() {
    return Tasks.find().fetch()
  }

  render() {
    return (
      <div>

        <TaskForm error={this.state.error} handleTodoAdd={this.handleTodoAdd.bind(this)} />

        <ul className="list-group">

          {
            this.getTasks().map((task, key) => {

              return <TaskItem key={key} task={task} />

            })
          }

        </ul>

      </div>
    )
  }
}
