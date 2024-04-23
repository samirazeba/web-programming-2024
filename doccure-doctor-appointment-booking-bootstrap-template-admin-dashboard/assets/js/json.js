window.onload = async function () {
  // Fetch patients data
  fetch("patients.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((patients) => {
      const patientsContainer = document.getElementById("patients");
      patientsContainer.className = "row row-grid";
      patients.forEach((patient) => {
        // Create HTML elements for patient data
        const patientElement = document.createElement("div");
        patientElement.className = "col-md-6 col-lg-4 col-xl-3";
        patientElement.innerHTML = `
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
        // Append the patient element to the patients container
        patientsContainer.appendChild(patientElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });

  // Fetch data from doctors.json
  fetch("doctors.json")
    .then((response) => response.json()) // Parse JSON response
    .then((doctors) => {
      // Get the container where doctor cards will be appended
      const container = document.getElementById("doctors");

      // Iterate through each doctor data
      doctors.forEach((doctor) => {
        // Create HTML elements for doctor card
        const doctorCard = document.createElement("div");
        doctorCard.className = "col-md-6 col-lg-4 col-xl-3";
        doctorCard.innerHTML = `
          <div class="profile-widget">
            <div class="doc-img">
              <a href="#doctor-profile">
                <img class="img-fluid" alt="User Image" src="${doctor.image}">
              </a>
              <a href="javascript:void(0)" class="fav-btn">
                <i class="far fa-bookmark"></i>
              </a>
            </div>
            <div class="pro-content">
              <h3 class="title">
                <a href="#doctor-profile">${doctor.name}</a>
                <i class="fas fa-check-circle verified"></i>
              </h3>
              <p class="speciality">${doctor.speciality}</p>
              <div class="rating">
                ${"★".repeat(Math.floor(doctor.rating))}${"☆".repeat(
          5 - Math.floor(doctor.rating)
        )}
                <span class="d-inline-block average-rating">(${
                  doctor.rating
                })</span>
              </div>
              <ul class="available-info">
                <li>
                  <i class="fas fa-map-marker-alt"></i> ${doctor.location}
                </li>
                <li>
                  <i class="far fa-clock"></i> ${doctor.availability}
                </li>
              </ul>
              <div class="row row-sm">
                <div class="col-6">
                  <a href="#doctor-profile" class="btn view-btn">View Profile</a>
                </div>
                <div class="col-6">
                  <a href="#booking" class="btn book-btn">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        `;
        // Append doctor card to the container
        container.appendChild(doctorCard);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  fetch("appointments.json")
    .then((response) => response.json())
    .then((data) => {
      const appointmentsContainer = document.getElementById(
        "appointments-container"
      );

      // Loop through the data and create appointment list
      data.forEach((appointment) => {
        const appointmentDiv = document.createElement("div");
        appointmentDiv.classList.add("appointment-list");

        appointmentDiv.innerHTML = `
		<div class="profile-info-widget">
		  <a href="#patient-profile" class="booking-doc-img">
			<img src="${appointment.image}" alt="User Image">
		  </a>
		  <div class="profile-det-info">
			<h3><a href="#patient-profile">${appointment.name}</a></h3>
			<div class="patient-details">
			  <h5><i class="far fa-clock"></i> ${appointment.date}</h5>
			  <h5><i class="fas fa-map-marker-alt"></i> ${appointment.location}</h5>
			  <h5><i class="fas fa-envelope"></i> ${appointment.email}</h5>
			  <h5 class="mb-0"><i class="fas fa-phone"></i> ${appointment.phone}</h5>
			</div>
		  </div>
		</div>
		<div class="appointment-action">
		  <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
			<i class="far fa-eye"></i> View
		  </a>
		  <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
			<i class="fas fa-check"></i> Accept
		  </a>
		  <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
			<i class="fas fa-times"></i> Cancel
		  </a>
		</div>
	  `;

        appointmentsContainer.appendChild(appointmentDiv);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  /*// Fetch data from booking.json
  fetch("booking.json")
    .then((response) => response.json())
    .then((data) => {
      // Get the day-slot and time-slot ul elements
      let daySlotUl = document.querySelector(".day-slot ul");
      let timeSlotUl = document.querySelector(".time-slot ul");

      // Loop through the data to generate day slots and time slots
      data.forEach((item, index) => {
        // Create day slot li
        let daySlotLi = document.createElement("li");
        daySlotLi.innerHTML = `
                <span>${item.day}</span>
                <span class="slot-date">${item.date}</span>
            `;
        daySlotUl.appendChild(daySlotLi);

        // Create time slot li
        let timeSlotLi = document.createElement("li");
        item.appointments.forEach((appointment) => {
          timeSlotLi.innerHTML += `
                    <a class="timing" href="#">
                        <span>${appointment.time}</span>
                    </a>
                `;
        });
        timeSlotUl.appendChild(timeSlotLi);
      });
    })
    .catch((error) => console.error("Error fetching data:", error)); */

  fetch("booking.json")
    .then((response) => response.json())
    .then((data) => {
      // Get the day-slot and time-slot ul elements
      let daySlotUl = document.querySelector(".day-slot ul");
      let timeSlotUl = document.querySelector(".time-slot ul");

      let selectedWeekday = null; // Variable to store the selected weekday
      let selectedTimeSlot = null; // Variable to store the selected time slot

      // Function to handle click on weekday
      function handleWeekdayClick(event) {
        // Prevent default behavior of the link
        event.preventDefault();

        // If the clicked day is already selected, deselect it
        if (event.currentTarget.classList.contains("selected")) {
          event.currentTarget.classList.remove("selected");
          selectedWeekday = null;
        } else {
          // Remove selected class from previously selected weekday
          let selectedDay = daySlotUl.querySelector(".selected");
          if (selectedDay) {
            selectedDay.classList.remove("selected");
          }

          // Set the selected weekday
          event.currentTarget.classList.add("selected");
          selectedWeekday =
            event.currentTarget.querySelector(".slot-date").innerText;
        }
      }

      // Function to handle click on time slot
      function handleTimeSlotClick(event) {
        // Prevent default behavior of the link
        event.preventDefault();

        // Get the selected time slot
        selectedTimeSlot = event.target.innerText;

        // Add a class to indicate selection
        event.target.classList.add("selected");
      }

      // Loop through the data to generate day slots and time slots
      data.forEach((item, index) => {
        // Create day slot li
        let daySlotLi = document.createElement("li");
        daySlotLi.innerHTML = `
                <span>${item.day}</span>
                <span class="slot-date">${item.date}</span>
            `;
        daySlotLi.addEventListener("click", handleWeekdayClick); // Add event listener to day slot li
        daySlotUl.appendChild(daySlotLi);

        // Create time slot li
        let timeSlotLi = document.createElement("li");
        item.appointments.forEach((appointment) => {
          let timeSlotLink = document.createElement("a");
          timeSlotLink.setAttribute("href", "#");
          timeSlotLink.classList.add("timing");
          timeSlotLink.innerText = appointment.time;
          timeSlotLink.addEventListener("click", handleTimeSlotClick); // Add event listener to time slot link
          timeSlotLi.appendChild(timeSlotLink);
        });
        timeSlotUl.appendChild(timeSlotLi);
      });

      // Function to handle click on "Book appointment" button
      function handleBookAppointmentClick() {
        // Print selected values to console
        //console.log("Selected Weekday:", selectedWeekday);
        console.log("Selected Time Slot:", selectedTimeSlot);
      }

      // Get the "Book appointment" button and attach event listener
      let bookAppointmentBtn = document.querySelector(".submit-btn");
      bookAppointmentBtn.addEventListener("click", handleBookAppointmentClick);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
