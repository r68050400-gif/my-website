function send() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    document.getElementById("status").innerText = "Please fill all fields ❌";
    document.getElementById("status").style.color = "red";
    return;
  }

  let contactData = {
    name: name,
    email: email,
    message: message
  };

  localStorage.setItem("contactData", JSON.stringify(contactData));

  document.getElementById("status").innerText = "Message saved successfully ✅";
  document.getElementById("status").style.color = "green";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

