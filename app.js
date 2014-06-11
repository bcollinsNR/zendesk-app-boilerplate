(function() {

  return { // the entire app goes inside this return block!
    // listen for API events such as the start of our app, when bits of it get clicked on or when AJAX requests complete
    events: {
      'app.activated':                'initialize', 
      'ticket.save':                  'ticketSaveHandler',
    },

    // This app doesn't make any AJAX requests but they would go here if it did
    requests: {

    },

    initialize: function(data) { // function called when we load
      if (data.firstLoad) {
        //console.log("begin testing events");
      }
    },

    ticketSaveHandler: function(data) { // function called when we load
      console.log("ticket comment content");
      var ticket = this.ticket();
      var status = ticket.status();
      var comment = this.comment();
      var response = comment.text();

      console.log("Status:");
      console.log(status);
      console.log("-----------");
      console.log("Response:");
      console.log(response);

      return true; 
    },    

  };

}());
