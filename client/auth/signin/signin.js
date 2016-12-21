Template.signin.onRendered(function(){

    $('.signin').validate({

        submitHandler: function(event){

            var email       = $('[name=email]').val();
            var password    = $('[name=password]').val();

            Meteor.loginWithPassword(email, password, function(error){
                if(error){
                    FlashMessages.sendError(
                        "<strong>Failed to login!</strong> Provided credentials not correct",
                        { autoHide: true, hideDelay: 5000}
                    );
                }
                else{
                    // Redirect to home page
                    FlowRouter.go('home');
                }
            });

        }
    });
});