var ReviewService = {
    fetchReviews: function() {
        RestClient.get("reviews", function(data){
            const tbody = $("#reviews tbody");
        
            $.each(data, function(i, item){
              var tr = $("<tr>").append(
                $("<td>").text(item.id),
                $("<td>").text(item.patient_id),
                $("<td>").text(item.patient_name),
                $("<td>").text(item.rating),
                $("<td>").text(item.comment)
              );
              tbody.append(tr);
            });
          });
    },
    reload_reviews_table: function() {
        Utils.get_datatable(
          "tbl_reviews",
          Constants.get_api_base_url() + "departments",
          [
            { data: "id" },
            { data: "patient_id" },
            { data: "patient_name" },
            { data: "rating" },
            { data: "comment" },
          ]
        );
      }
}