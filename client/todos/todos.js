Meteor.subscribe('todos');

Template.todos.helpers({
    todos: ()=> {
        return Todos.find({});
    }
});

Template.todos.events({
    'click .glyphicon-trash' : function(){
        Todos.remove(this._id);
    }
});