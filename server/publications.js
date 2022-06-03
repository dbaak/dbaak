// the messages publicaction now takes a parameter
// so we can limit the set of messages
// that get sent to the client in one go.
Meteor.publish('messages.filtered',function (chatroomId) {
    if (this.userId){
        // HERE is another place for you to edit
        // put in a line that finds
        // and returns all messages that have chatroomId
        // equal to the chatroomId sent into this function
        return Messages.find({chatroomId:Session.get("chatroomId")}); // filter on comments
        //return Messages.find({});
    }
});


Meteor.publish("chatrooms", function(){
    //if (this.userId){
    if (Meteor.user()){// logged in
        return Chatrooms.find({});
    }
});
