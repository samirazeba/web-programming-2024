var AppointmentService = {
    fetchAppointments: function() {
        RestClient.get("appointments", function(data){
            const tbody = $("#appointments tbody");
        
            $.each(data, function (i, item){
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
          });
    },
    reload_appointments_table: function() {
        Utils.get_datatable(
          "tbl_appointments",
          Constants.get_api_base_url() + "appointments",
          [
            { data: "id" },
            { data: "patient_id" },
            { data: "doctor_id" },
            { data: "appointment_type" },
            { data: "date" },
            { data: "time" },
            { data: "status" },
          ]
        );
      }
}