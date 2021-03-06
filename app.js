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
    // buildcommentbox();
    $(commentBox).appendTo("#comment_list");
    $(this).hide();

  $('#create_comment').on("click", function(event) {
    event.preventDefault();
    // console.log($(this).closest('form').hide());
    var authorName = $('input#authorName').val();   
    var commentText = $('textarea#comment_text').val();
      $('#new_comment').remove();
      $('#new_comment_button').show();
    if (commentText.length > 0) {
      createcomment(commentText, authorName);
    }
  });  
  });
});

function createcomment(commentText, authorName) {
  var commentTemplate = "<li>" + commentText + "<span class='author'>" + authorName + "</span></li>"
  $(commentTemplate).appendTo('#comment_list');
}


  var commentBox = "<form id='new_comment'><textarea id='comment_text'></textarea><input type='text' id='authorName' placeholder='Your Name'><input id='create_comment' type='submit' value='Create Comment'></form>"

