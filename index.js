// index.js
console.log("js is working today")

$.ajax({
  type: 'GET',
  url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1',
  dataType: 'json',
  success: function (response, textStatus) {
    console.log(response);
  },
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  }
});