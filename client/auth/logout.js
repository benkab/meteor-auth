Template.navigation.events({

    'click .logout' : function(){
        Meteor.logout(function(error){
            if(error){
                alert('could not log out');
            }
            else{
                // Redirect to signin page
                FlowRouter.go('signin');
            }
        });
    }

});