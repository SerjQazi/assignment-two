


// on click on the submit button, add current date to user comment
let submitButton = addEventListener('click', function() {
  
  let today = new Date();
  let dayOfWeek = today.getDay();
  let month = today.getMonth();
  let date = today.getDate();
  let year = today.getFullYear();
  
  
  // convert day of week to string 
  const dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // convert month of year to string
  const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  // return currentDate
  
  let currentDate = dayString[dayOfWeek] + ` ` + monthString[month] + ` ${date}, ${year}`
  
  console.log(currentDate)
});

//submit event for when the submit button is clicked
const blogComment = document.querySelector('form');

blogComment.addEventListener('submit', function (event) {
  event.preventDefault();

  // console.log('Comment Submitted!');

  const commentSection = document.getElementById('message');
  const comment = commentSection.value;

  if (comment) {

    const commentParagraph = document.createElement('p');
    commentParagraph.appendChild(document.createTextNode(comment));

    const newComment = document.getElementById('commentTxt');
    newComment.appendChild(commentParagraph);

  }


});
