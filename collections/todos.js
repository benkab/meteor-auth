Todos = new Mongo.Collection('todos');

TodoSchema = new SimpleSchema({
    description : {
        type : String
    },
    created_at  : {
        type : Date,
        autoValue : function(){
            return new Date()
        }
    },
    done  : {
        type : Boolean,
        defaultValue : false
    }
});

Todos.attachSchema(TodoSchema);