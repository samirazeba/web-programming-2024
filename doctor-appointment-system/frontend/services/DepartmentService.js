var DepartmentService ={
    fetchDepartments: function(){
        RestClient.get("departments", function(data){
            const tbody = $("#departments tbody");
        
            $.each(data, function(i, item){
              var tr = $("<tr>").append(
                $("<td>").text(item.id),
                $("<td>").text(item.department_name),
                $("<td>").text(item.department_head_name)
              );
              tbody.append(tr);
            });
          });
    },
    reload_departments_table: function() {
        Utils.get_datatable(
          "tbl_departments",
          Constants.get_api_base_url() + "departments",
          [
            { data: "id" },
            { data: "department_name" },
            { data: "department_head_name" },
          ]
        );
      }
}