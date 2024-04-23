function fetchPatients() {
  RestClient.get(
    "get_patients.php",
    function (data) {
      console.log("Rest client data: ", data);
      const patients = [];

      data.forEach((patient) => {
        patients.push(patient);
      });

      populatePatients(patients);
    },
    function (jqXHR) {
      console.log("Error with RestClient.get(): ", jqXHR);
    }
  );
}
function populatePatients(patients) {
  console.log(patients);
  const section = document.getElementById("patients");

  section.innerHTML = "";

  patients.forEach((patient) => {
    const card = `
        <div class="card widget-profile pat-widget-profile">
        <div class="card-body">
            <div class="pro-widget-content">
                <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                        <img src="${patient.img}" alt="${patient.name}">
                    </a>
                    <div class="profile-det-info">
                        <h3 class="patient-name mb-0">${patient.name}</h3>
                        <p class="patient-info">Location: ${patient.location}</p>
                        <p class="patient-info">Phone: ${patient.phone}</p>
                        <p class="patient-info">Age: ${patient.age}</p>
                        <p class="patient-info">Blood Group: ${patient.bloodGroup}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    section.innerHTML += card;
  });
}
