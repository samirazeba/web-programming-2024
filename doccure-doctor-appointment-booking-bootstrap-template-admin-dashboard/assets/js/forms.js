document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addDoctorForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get form values
      var departmentId = document.getElementById("departmentId").value;
      var doctorName = document.getElementById("doctorName").value;
      var specialization = document.getElementById("specialization").value;
      var dob = document.getElementById("dob").value;
      var gender = document.getElementById("gender").value;
      var email = document.getElementById("email").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var city = document.getElementById("city").value;
      var address = document.getElementById("address").value;

      // Validate form
      if (
        !departmentId ||
        !doctorName ||
        !specialization ||
        !dob ||
        !gender ||
        !email
      ) {
        alert(
          "You have to fill everything except phone number, city, and address."
        );
        return;
      }

      // Print form values to the console
      console.log("Department ID:", departmentId);
      console.log("Doctor Name:", doctorName);
      console.log("Specialization:", specialization);
      console.log("Date of Birth:", dob);
      console.log("Gender:", gender);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("City:", city);
      console.log("Address:", address);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addReviewForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get form values
      var patientId = document.getElementById("patientId").value;
      var patientName = document.getElementById("patientName").value;
      var rating = document.getElementById("rating").value;
      var comment = document.getElementById("comment").value;

      // Validate form
      if (!patientId || !rating) {
        alert(
          "Fill out everything except comment and patient name. Those are optional."
        );
        return;
      }

      if (rating < 1 || rating > 5) {
        alert("Rating must be between 1 and 5.");
        return;
      }

      // Print form values to the console
      console.log("Patient ID:", patientId);
      console.log("Patient Name:", patientName);
      console.log("Rating:", rating);
      console.log("Comment:", comment);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addAppointmentForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get form values
      var patientId = document.getElementById("patientId").value;
      var doctorId = document.getElementById("doctorId").value;
      var appointmentType = document.getElementById("appointmentType").value;
      var date = document.getElementById("date").value;
      var time = document.getElementById("time").value;
      var status = document.getElementById("status").value;

      // Validate form
      if (
        !patientId ||
        !doctorId ||
        !appointmentType ||
        !date ||
        !time ||
        !status
      ) {
        alert("All fields are required.");
        return;
      }

      // Print form values to the console
      console.log("Patient ID:", patientId);
      console.log("Doctor ID:", doctorId);
      console.log("Appointment Type:", appointmentType);
      console.log("Date:", date);
      console.log("Time:", time);
      console.log("Status:", status);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addPatientForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get form values
      var patientName = document.getElementById("patientName").value;
      var dob = document.getElementById("dob").value;
      var gender = document.getElementById("gender").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var city = document.getElementById("city").value;
      var address = document.getElementById("address").value;
      var medicalHistory = document.getElementById("medicalHistory").value;

      // Validate form
      if (
        !patientName ||
        !dob ||
        !gender ||
        !email ||
        !phone ||
        !city ||
        !address ||
        !medicalHistory
      ) {
        alert("All fields are required.");
        return;
      }

      // Print form values to the console
      console.log("Patient Name:", patientName);
      console.log("Date of Birth:", dob);
      console.log("Gender:", gender);
      console.log("Email:", email);
      console.log("Phone Number:", phone);
      console.log("City:", city);
      console.log("Address:", address);
      console.log("Medical History:", medicalHistory);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addPrescriptionForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get form values
      var appointmentId = document.getElementById("appointmentId").value;
      var medicaments = document.getElementById("medicaments").value;
      var dosageInstructions =
        document.getElementById("dosageInstructions").value;
      var startDate = document.getElementById("startDate").value;
      var endDate = document.getElementById("endDate").value;

      // Validate form
      if (
        !appointmentId ||
        !medicaments ||
        !dosageInstructions ||
        !startDate ||
        !endDate
      ) {
        alert("All fields are required.");
        return;
      }

      // Print form values to the console
      console.log("Appointment ID:", appointmentId);
      console.log("Medicaments:", medicaments);
      console.log("Dosage Instructions:", dosageInstructions);
      console.log("Start Date:", startDate);
      console.log("End Date:", endDate);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addDepartmentForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get form values
      var departmentName = document.getElementById("departmentName").value;
      var departmentHeadName =
        document.getElementById("departmentHeadName").value;

      // Validate form
      if (!departmentName) {
        alert("You have to enter department name.");
        return;
      }

      // Print form values to the console
      console.log("Department Name:", departmentName);
      console.log("Department Head Name:", departmentHeadName);
    });
});

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
});
