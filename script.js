const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();
   const studentName =  document.getElementById("studentName").value.trim();
   const registerNo = document.getElementById("registerNo").value.trim();
   const department = document.getElementById("department").value;
   const eventName = document.getElementById("event").value;
   const email = document.getElementById("email").value.trim();

   If  (!studentName || !registerNo || !department || !eventName || !email) {
      message.textContent="Please complete al fields.";
      return;
}

message.textContent = "Thank you, " + studentName + "! Your registration for " + eventName + " has been received.";
form.reset();
});



