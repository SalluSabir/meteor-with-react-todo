import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    Meteor.publish("tasks", ()=>{
        return Tasks.find()
    })
}

Meteor.methods({
    'tasks.insert'(task){
        check(task, String)

        if(!this.userId){
            throw new Meteor.Error('not-authorized')
        }

        Tasks.insert({
            task: task,
            completed: false,
            owner: Meteor.userId(),
            createdAt: new Date(),
        })
    },

    'tasks.todoCompleted'(taskID, completed){
        check(taskID, String)
        check(completed, Boolean)

        Tasks.update(taskID, {$set : {'completed' : completed}} )
    },

    'tasks.remove'(taskID){
        check(taskID, String)

        if(!this.userId){
            throw new Meteor.Error('not-authorized')
        }

        Tasks.remove(taskID)
    }
})