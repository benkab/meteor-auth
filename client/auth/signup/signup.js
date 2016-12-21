// $.validator.setDefaults({
//     // custom rules go here    
// });

Template.signup.onRendered(function(){

    $('.signup').validate({
        rules: {
            password: {
                minlength: 6
            },
            phonenumber: {
                digits: true,
                minlength: 13
            },
            confirmpassword : {
                equalTo : password
            },
            messages: {
                confirmpassword: {
                    equalTo: "This field must be the same as the password field."
                }
            }
        },
        submitHandler: function(event){

            var username        = $('[name=username]').val();
            var firstname       = $('[name=firstname]').val();
            var lastname        = $('[name=lastname]').val();
            var phonenumber     = $('[name=phonenumber]').val();
            var email           = $('[name=email]').val();
            var password        = $('[name=password]').val();
            var token           = Random.id(64);
            var code            = "";

            // Create user
            Accounts.createUser({
                username    : username,
                email       : email,
                password    : password,
                profile     : {
                    firstname   : firstname,
                    lastname    : lastname,
                    phonenumber : phonenumber,
                    token       : token,
                    confirmed   : false,
                    code        : code
                }
            }, function(err){
                if(err){
                    FlashMessages.sendError(
                        "<strong>Failed to sign up!</strong> ",
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

Template.signup.onDestroyed(function(){
    
});