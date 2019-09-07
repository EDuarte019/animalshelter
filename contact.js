function validateSummary() {
    var validate = document.getElementsByClassName("form-group col-md-6");
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