var PatientService = {
  fetchPatients: function () {
    RestClient.get(
      "patients",
      function (data) {
        const tbody = $("#upcoming-appointments tbody");

        $.each(data, function (i, item) {
          var tr = $("<tr>").append(
            $("<td>").html(item.action),
            $("<td>").text(item.name),
            $("<td>").text(item.date_of_birth),
            $("<td>").text(item.gender),
            $("<td>").text(item.email),
            $("<td>").text(item.phone_number),
            $("<td>").text(item.city),
            $("<td>").text(item.address),
            $("<td>").text(item.medical_history)
          );
          tbody.append(tr);
        });
      },
      function (error) {
        console.error("Error fetching patients:", error);
      }
    );
  },

  open_edit_patient_modal: function (patient_id) {
    RestClient.get("patients?id=" + patient_id, function (data) {
        console.log("DATA IS ", data);
        $("#addPatientModal").toggle();
        $("#addPatientForm input[name='id']").val(data.id);
        $("#addPatientForm input[name='name']").val(data.name);
        $("#addPatientForm input[name='date_of_birth']").val(data.date_of_birth);
        $("#addPatientForm input[name='gender']").val(data.gender);
        $("#addPatientForm input[name='email']").val(data.email);
        $("#addPatientForm input[name='city']").val(data.city);
        $("#addPatientForm input[name='address']").val(data.address);
        $("#addPatientForm input[name='medical_history']").val(data.medical_history);
    });
},


  delete_patient: function (patient_id) {
    if (confirm("Are you sure you want to delete this patient?") == true) {
      RestClient.delete("patients/delete/" + patient_id, {}, function (data) {
        PatientService.fetchPatients();
      });
    } else {
      console("Dismissied!");
    }
  }



  /*reload_patients_table: function() {
    Utils.get_datatable(
      "upcoming-appointments tbody",
      Constants.API_BASE_URL + "patients",
      [
        { data: "action" },
        { data: "name" },
        { data: "date_of_birth" },
        { data: "gender" },
        { data: "email" },
        { data: "phone_number" },
        { data: "city" },
        { data: "address" },
        { data: "medical_history" },
      ]
    );
  }
  */
};
