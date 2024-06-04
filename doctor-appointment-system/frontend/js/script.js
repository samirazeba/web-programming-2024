/*
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
*/


/*
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
*/



/*
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
*/



/*
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
*/

