//= require jquery;
window.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('my-form');
  // var button = document.getElementById("my-form-button");
  const status = document.getElementById('status');


  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.innerHTML = 'Thank you!';
  }

  function error() {
    status.innerHTML = 'Oops! There was a problem.';
  }

  // handle the form submission event

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
