// get the current date information stored in variables
let today = new Date();
let dayOfWeek = today.getDay();
let month = today.getMonth();
let date = today.getDate();
let year = today.getFullYear();

// convert day of week to string 
const dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// convert month of year to string
const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let ending = 'th';

if (date === 1 || date === 21 || date === 31) {
  ending = 'st';
};

if (date === 2 || date === 22) {
  ending = 'nd'
};

if (date === 3 || date === 23) {
  ending = 'rd';
};

let currentDate = `${dayString[dayOfWeek]} ${monthString[month]} ${date}${ending}, ${year}`

//submit event for when the submit button is clicked
const blogComment = document.querySelector('form');

blogComment.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const name = nameInput.value;

  const commentInput = document.getElementById('message');
  const comment = commentInput.value;

  // if there is a comment to add to the comment section...
  if (comment) {

    // create a new <div> to put the new comment into
    const commentContainer = document.createElement('div');
    commentContainer.classList.add("commentContainer");

    // profile picture, date and comment that will be appended
    commentContainer.innerHTML = 
    `<div class="commentImg">
      <img src="https://picsum.photos/600" alt="User's Profile Image" />
    </div>
    <div class="commentTxt" id="commentTxt">
      <p><strong>${currentDate} ${name}</strong></p>
      <p>
        ${comment}
      </p>
    </div>`

    const commentSection = document.querySelector('section.comments');
    commentSection.insertBefore(commentContainer, blogComment);

    // clear out the input field, set the value to nothing
    nameInput.value = '';
    commentInput.value = '';
  };

});
