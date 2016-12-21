// Configure the Twilio client


Meteor.methods({
  sendSMSFromServer: function (recipient, message) {
    var result = AppWorkshop.sendSMS(recipient, message);
    return result;
  }
  // 'sendSMS': function (opts) {
  //   try {
  //     var twilioClient = new Twilio({
  //       from: Meteor.settings.TWILIO.FROM,
  //       sid: Meteor.settings.TWILIO.SID,
  //       token: Meteor.settings.TWILIO.TOKEN
  //     });
  //     var result = twilioClient.sendSMS({
  //       to: opts.to,
  //       body: opts.message
  //     });
  //     return result;
  //   } catch (err) {
  //     console.error(err);      
  //   }
    
  // }
});