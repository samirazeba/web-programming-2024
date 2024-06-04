var PrescriptionService = {
    fetchPrescriptions: function(){
        RestClient.get('prescriptions', function(data){
            const tbody = $("#prescriptions tbody");
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
        });
    },
    reload_prescriptions_table: function() {
        Utils.get_datatable(
          "tbl_prescriptions",
          Constants.get_api_base_url() + "prescriptions",
          [
            { data: "id" },
            { data: "appointment_id" },
            { data: "medicaments" },
            { data: "dosage_instructions" },
            { data: "start_date" },
            { data: "end_date" },
          ]
        );
      }
}