var DoctorService = {
    fetchDoctors: function() {
        RestClient.get("doctors", function(data){
          const tbody = $("#doctor-list tbody");
      
          $.each(data, function(i, item){
            var tr = $("<tr>").append(
              $("<td>").text(item.department_id),
              $("<td>").text(item.name),
              $("<td>").text(item.specialization),
              $("<td>").text(item.date_of_birth),
              $("<td>").text(item.gender),
              $("<td>").text(item.email),
              $("<td>").text(item.phone_number),
              $("<td>").text(item.city),
              $("<td>").text(item.address),
              $("<td>").text(item.review_id)
            );
            tbody.append(tr);
          });
        });
      }
      /*
      reload_doctors_table: function() {
        Utils.get_datatable(
          "tbl_doctors",
          Constants.API_BASE_URL + "doctors",
          [
            { data: "id" },
            { data: "nadepartment_idme" },
            { data: "name" },
            { data: "specialization" },
            { data: "emadate_of_birthil" },
            { data: "phone_number" },
            { data: "gender" },
            { data: "email" },
            { data: "phone_number" },
            { data: "city" },
            { data: "address" },
          ]
        );
      }
      */
}