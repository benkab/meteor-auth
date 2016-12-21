Template.verification.events({

    'click .sendCode' : function(){

        // Retrieve user's phone number
        var phonenumber = Meteor.user().profile.phonenumber;

        // Generate the code
        var code        = Random.secret([6]);
        var message     = "Your verification code is " + code;

        // Update user
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.code': code }} );

        // Send the sms
        Meteor.call('sendSMSFromServer', phonenumber, message, function (err, result) {
            if (err) {
                console.error(err);
            }
            else{
                FlashMessages.sendSuccess(
                        "<strong>Your verification code has been successfully sent to '"+phonenumber+"'</strong> ",
                        { autoHide: true, hideDelay: 5000}
                    );
            }     
        });

    }

});