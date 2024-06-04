var Constants = {

  get_api_base_url: function() {
    if (location.hostname == 'localhost') {
      return "http://localhost:80/web-programming-2024/doctor-appointment-system/backend/";
    } else {
      return "https://shark-app-4urug.ondigitalocean.app/backend";
    }
  }
};
