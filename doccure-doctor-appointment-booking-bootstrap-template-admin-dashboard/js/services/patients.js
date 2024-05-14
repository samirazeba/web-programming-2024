var patientService = {
  reload_patient_datatable: function () {
    RestClient.get("get_patients.php", function (data) {
      console.log("Patients data loaded", data);
    });
  },
};
