// #When "New comment" button is clicked bind to event handler
// #Show the comment box
// #Hide the new comment button 

// #Conditional 
// #If there is a value, get the value of two fields 
// #Append html div to page with value of two placed 
// #Otherwise don't do anything (show an error)

$(document).ready(function() {
  $('#new_comment_button').on("click", function(event) {
    event.preventDefault();
    buildcommentbox();
  });
});

function buildcommentbox() { $("<form id='new_comment'><textarea></textarea><input type='text' placeholder='Your Name'></form>").appendTo("#comment_list");
}
