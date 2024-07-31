const form = document.querySelector("form");
const messageList = document.getElementById("messageList");


// fetches messages and appends them to messageList element
async function getMessages() {
    const messages = await fetch ("http://localhost:8080/messages");
  
    console.log(messages);
  
    const data = await messages.json();
  
    console.log(data);
  
    messageList.innerHTML = "";
  
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].message);
      const message = document.createElement("li");
      message.textContent = `${data[i].name} ${data[i].message}`;
      messageList.appendChild(message);
    }
  }
  getMessages();


//form entry functions
form.addEventListener("submit", async function (event) {
    event.preventDefault();
  
    // get the form inputs
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
  
    console.log(formValues);
  
    // make an API call when we submit the form
    const response = await fetch("http://localhost:8080/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    console.log(data);
    getMessages();
  });



//add element & fetch get end point to receive messages
//make it look pretty