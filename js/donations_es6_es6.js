function showCustomDonation() {
    document.getElementById("inlineRadio4").classList.toggle("toggle-display")
}

const storedValue = localStorage.getItem("email");

function validateSummary() {
    const validate = document.getElementsById("validate");
    if (validate.validity.valueMissing) {
          validate.setCustomValidity("Enter email!")
    } else {
          validate.setCustomValidity("");
    };
 }
 
 function setForm() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("No invalid data detected.");
       return false;
    }
  }