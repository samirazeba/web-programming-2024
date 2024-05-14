console.log("Script loaded");
var app = $.spapp({
  defaultView: "#home",
  templateDir: "./views/",
  pageNotFound: "error_404",
  reloadView: true,
});

app.route({
  view: "doctor-dashboard",
  load: "doctor-dashboard.html",
  onCreate: function () {},
  onReady: function () {
    fetchPatients();
  },
});

function fetchPatients() {
  $(document).ready(function () {
    $.ajax({
      url: "patients.json",
      dataType: "json",
      success: function (data) {
        var tbody = $("#upcoming-appointments tbody");
        tbody.empty(); // Clear the table body

        // Loop through the data and add each row to the table
        $.each(data, function (i, item) {
          var tr = $("<tr>").append(
            $("<td>").text(item.id),
            $("<td>").text(item.name),
            $("<td>").text(item.date_of_birth),
            $("<td>").text(item.gender),
            $("<td>").text(item.email),
            $("<td>").text(item.phone_number),
            $("<td>").text(item.city),
            $("<td>").text(item.address),
            $("<td>").text(item.medical_hisotry)
          );
          tbody.append(tr);
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error: " + textStatus, errorThrown);
      },
    });
  });
}

app.route({
  view: "patient-dashboard",
  load: "patient-dashboard.html",
  onCreate: function () {},
  onReady: function () {
    fetchDoctors();
  },
});

function fetchDoctors() {
  $(document).ready(function () {
    $.ajax({
      url: "doctor-list.json",
      dataType: "json",
      success: function (data) {
        var tbody = $("#doctor-list tbody");
        tbody.empty(); // Clear the table body

        $.each(data, function (i, item) {
          var tr = $("<tr>").append(
            $("<td>").text(item.id),
            $("<td>").text(item.department_id),
            $("<td>").text(item.name),
            $("<td>").text(item.specialization),
            $("<td>").text(item.date_of_birth),
            $("<td>").text(item.gender),
            $("<td>").text(item.email),
            $("<td>").text(item.phone_number),
            $("<td>").text(item.city),
            $("<td>").text(item.address)
          );
          tbody.append(tr);
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error: " + textStatus, errorThrown);
      },
    });
  });
}

app.route({
  view: "appointments",
  load: "appointments.html",
  onCreate: function () {},
  onReady: function () {
    fetchAppointments();
  },
});

function fetchAppointments() {
  $(document).ready(function () {
    $.ajax({
      url: "appointments.json",
      dataType: "json",
      success: function (data) {
        var tbody = $("#appointments tbody");
        tbody.empty(); // Clear the table body

        $.each(data, function (i, item) {
          var tr = $("<tr>").append(
            $("<td>").text(item.id),
            $("<td>").text(item.patient_id),
            $("<td>").text(item.doctor_id),
            $("<td>").text(item.appointment_type),
            $("<td>").text(item.date),
            $("<td>").text(item.time),
            $("<td>").text(item.status)
          );
          tbody.append(tr);
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error: " + textStatus, errorThrown);
      },
    });
  });
}

app.route({
  view: "patient-profile",
  load: "patient-profile.html",
  onCreate: function () {},
  onReady: function () {
    fetchPrescriptions();
  },
});

function fetchPrescriptions() {
  $(document).ready(function () {
    $.ajax({
      url: "prescriptions.json",
      dataType: "json",
      success: function (data) {
        var tbody = $("#prescriptions tbody");
        tbody.empty();

        $.each(data, function (i, item) {
          var tr = $("<tr>").append(
            $("<td>").text(item.id),
            $("<td>").text(item.appointment_id),
            $("<td>").text(item.medicaments),
            $("<td>").text(item.dosage_instructions),
            $("<td>").text(item.start_date),
            $("<td>").text(item.end_date)
          );
          tbody.append(tr);
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error: " + textStatus, errorThrown);
      },
    });
  });
}

app.route({
  view: "reviews",
  load: "reviews.html",
  onCreate: function () {},
  onReady: function () {
    fetchReviews();
  },
});

function fetchReviews() {
  $(document).ready(function () {
    $.ajax({
      url: "reviews.json",
      dataType: "json",
      success: function (data) {
        var tbody = $("#reviews tbody");
        tbody.empty();

        $.each(data, function (i, item) {
          var tr = $("<tr>").append(
            $("<td>").text(item.id),
            $("<td>").text(item.patient_id),
            $("<td>").text(item.patient_name),
            $("<td>").text(item.rating),
            $("<td>").text(item.comment)
          );
          tbody.append(tr);
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error: " + textStatus, errorThrown);
      },
    });
  });
}

app.route({
  view: "departments",
  load: "departments.html",
  onCreate: function () {},
  onReady: function () {
    fetchDepartments();
  },
});

function fetchDepartments() {
  $(document).ready(function () {
    $.ajax({
      url: "departments.json",
      dataType: "json",
      success: function (data) {
        var tbody = $("#departments tbody");
        tbody.empty();

        $.each(data, function (i, item) {
          var tr = $("<tr>").append(
            $("<td>").text(item.id),
            $("<td>").text(item.department_name),
            $("<td>").text(item.department_head_name)
          );
          tbody.append(tr);
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error: " + textStatus, errorThrown);
      },
    });
  });
}

app.run();
