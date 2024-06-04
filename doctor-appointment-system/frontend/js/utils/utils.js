const Utils = {

  init_spapp : function() {
    var app = $.spapp({
      templateDir: "./views/"
    });
    app.route({
      view: "doctor-dashboard",
      load: "doctor-dashboard.html",
      onCreate: function () {},
      onReady: function () {
        PatientService.fetchPatients();
      },
    });

    app.route({
      view: "patient-dashboard",
      load: "patient-dashboard.html",
      onCreate: function () {},
      onReady: function () {
        DoctorService.fetchDoctors();
      },
    });

    app.route({
      view: "appointments",
      load: "appointments.html",
      onCreate: function () {},
      onReady: function () {
        AppointmentService.fetchAppointments();
      },
    });

    app.route({
      view: "patient-profile",
      load: "patient-profile.html",
      onCreate: function () {},
      onReady: function () {
        PrescriptionService.fetchPrescriptions();
      },
    });

    app.route({
      view: "reviews",
      load: "reviews.html",
      onCreate: function () {},
      onReady: function () {
        ReviewService.fetchReviews();
      },
    });

    app.route({
      view: "departments",
      load: "departments.html",
      onCreate: function () {},
      onReady: function () {
        DepartmentService.fetchDepartments();
      },
    });
    
    app.run();
  },

  set_to_local_storage : function (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  get_from_localstorage: function (key) {
    return JSON.parse(window.localStorage.getItem(key));
  },

  logout_patient: function() {
    window.localStorage.clear();
    window.location = "#patient-login";
  },

  logout_doctor: function() {
    window.localStorage.clear();
    window.location = "#doctor-login";
  },
  
  block_ui: function (element) {
    $(element).block({
      message: '<div class="spinner-border text-primary" role="status"></div>',
      css: {
        backgroundColor: "transparent",
        border: "0",
      },
      overlayCSS: {
        backgroundColor: "#000",
        opacity: 0.25,
      },
    });
  },
  unblock_ui: function (element) {
    $(element).unblock({});
  },

  get_datatable: function (
    table_id,
    url,
    columns,
    disable_sort,
    callback,
    sort_column = null,
    sort_order = null,
    draw_callback = null,
    page_length = 10
  ) {
    if ($.fn.dataTable.isDataTable("#" + table_id)) {
      $("#" + table_id)
        .DataTable()
        .destroy();
    }
    var table = $("#" + table_id).DataTable({
      order: [
        sort_column == null ? 1 : sort_column,
        sort_order == null ? "desc" : sort_order,
      ],
      orderClasses: false,
      columns: columns,
      columnDefs: [{ orderable: false, targets: disable_sort }],
      processing: true,
      serverSide: true,
      ajax: {
        url: url,
        type: "GET",
        headers: {
          "Authentication": Utils.get_from_localstorage("patient").token
        }
      },
      lengthMenu: [
        [5, 10, 15, 50, 100, 200, 500, 5000],
        [5, 10, 15, 50, 100, 200, 500, "ALL"],
      ],
      pageLength: page_length,
      initComplete: function () {
        if (callback) callback();
      },
      drawCallback: function (settings) {
        if (draw_callback) draw_callback();
      },
    });
  },
}