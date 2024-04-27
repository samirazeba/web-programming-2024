document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please fill in both fields.");
        return;
      }

      // If validation passes, print the entered data into the console
      console.log("Email:", email);
      console.log("Password:", password);
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;

      // Simple validation
      if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // If validation passes, print the entered data into the console
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
    });
  }

  const form = document.querySelector(".prescription-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Perform form validation
      const nameInput = form.querySelector("#name");
      const quantityInput = form.querySelector("#quantity");
      const daysInput = form.querySelector("#days");
      const timesCheckboxes = form.querySelectorAll(
        'input[name="times[]"]:checked'
      );

      let isValid = true;

      if (
        !nameInput.value.trim() ||
        !quantityInput.value.trim() ||
        !daysInput.value.trim() ||
        timesCheckboxes.length === 0
      ) {
        isValid = false;
        alert("Please fill in all fields and select at least one time.");
      }

      if (!isValid) {
        return; // Exit if the form is not valid
      }

      // If the form is valid, print inputted values to the console
      const prescriptionData = {
        name: nameInput.value,
        quantity: quantityInput.value,
        days: daysInput.value,
        times: Array.from(timesCheckboxes).map((checkbox) => checkbox.value),
      };

      console.log("Prescription Data:", prescriptionData);

      // Clear the form
      form.reset();
    });
  }

  //Doctor settings
  var doctorForm = document.getElementById("doctor_basic_information");

  if (doctorForm) {
    doctorForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      var firstName = document.getElementById("first_name").value;
      var lastName = document.getElementById("last_name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var gender = document.getElementById("gender").value;
      var dob = document.getElementById("dob").value;
      var specialization = document.getElementById("specialization").value;
      var clinic = document.getElementById("clinic").value;
      var availability = document.getElementById("availability").value;

      // Simple validation
      if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        gender === "Select" ||
        !specialization ||
        !clinic
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      // If validation passes, print the entered data into the console
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Gender:", gender);
      console.log("Date of Birth:", dob);
      console.log("Specialization:", specialization);
      console.log("Clinic:", clinic);
      console.log("Availability:", availability);

      doctorForm.reset();
    });
  }

  // Patient settings
  var patientForm = document.getElementById("patient_settings_form");

  // Add submit event listener to the form
  patientForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form field values
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var bloodGroup = document.getElementById("blood_group").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var zipCode = document.getElementById("zip_code").value;
    var medicalHistory = document.getElementById("notes").value;

    // Simple validation
    if (
      !firstName ||
      !lastName ||
      !dob ||
      !email ||
      !phone ||
      bloodGroup === "Select" ||
      !address ||
      !city ||
      !country ||
      !zipCode ||
      !medicalHistory
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Print values to console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Date of Birth:", dob);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Blood Group:", bloodGroup);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Country:", country);
    console.log("Zip Code:", zipCode);
    console.log("Medical History:", medicalHistory);

    // Reset form after submission
    patientForm.reset();
  });

  //Add review
  const med_record_form = document.querySelector(".medical-record-form");

  if (med_record_form) {
    med_record_form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Perform form validation
      const diagnosisInput = med_record_form.querySelector("#diagnosis");
      const treatmentInput = med_record_form.querySelector("#treatment");
      const notesInput = med_record_form.querySelector("#notes");

      let isValid = true;

      if (
        !diagnosisInput.value.trim() ||
        !treatmentInput.value.trim() ||
        !notesInput.value.trim()
      ) {
        isValid = false;
        alert("Please fill in all fields.");
      }

      if (!isValid) {
        return; // Exit if the form is not valid
      }

      // If the form is valid, print inputted values to the console
      const medicalRecordData = {
        diagnosis: diagnosisInput.value,
        treatment: treatmentInput.value,
        notes: notesInput.value,
      };

      console.log("Medical Record Data:", medicalRecordData);

      // Clear the form
      med_record_form.reset();
    });
  }
});
