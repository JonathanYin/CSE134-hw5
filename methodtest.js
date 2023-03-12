// Get references to the HTML elements
const idInput = document.getElementById("id");
const articleNameInput = document.getElementById("article_name");
const articleBodyTextarea = document.getElementById("article_body");
const dateOutput = document.getElementById("date");
const responseOutput = document.getElementById("response");
const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Add event listeners to the buttons
postBtn.addEventListener("click", postData);
getBtn.addEventListener("click", getData);
putBtn.addEventListener("click", putData);
deleteBtn.addEventListener("click", deleteData);

// Helper function to get the form data as a JSON object
function getFormData() {
  const data = {
    id: idInput.value,
    article_name: articleNameInput.value,
    article_body: articleBodyTextarea.value,
    date: new Date().toLocaleString()
  };
  return data;
}

// Helper function to display the response data in the HTML page
function displayResponse(response) {
  response.json().then(data => {
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(data, null, 2);
    responseOutput.innerHTML = "";
    responseOutput.appendChild(pre);
  });
}

// POST request
function postData() {
  const url = "https://httpbin.org/post";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(getFormData())
  };
  fetch(url, options)
    .then(response => displayResponse(response))
    .catch(error => console.error(error));
}

// GET request
function getData() {
  const url = "https://httpbin.org/get";
  const options = {
    method: "GET"
  };
  fetch(url, options)
    .then(response => displayResponse(response))
    .catch(error => console.error(error));
}

// PUT request
function putData() {
  const url = "https://httpbin.org/put";
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(getFormData())
  };
  fetch(url, options)
    .then(response => displayResponse(response))
    .catch(error => console.error(error));
}

// DELETE request
function deleteData() {
  const url = "https://httpbin.org/delete";
  const options = {
    method: "DELETE"
  };
  fetch(url, options)
    .then(response => displayResponse(response))
    .catch(error => console.error(error));
}
