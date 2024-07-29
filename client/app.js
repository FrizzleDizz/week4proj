const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // get the form inputs
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

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
});