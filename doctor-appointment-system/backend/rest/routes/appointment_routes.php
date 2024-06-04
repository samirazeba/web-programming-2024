<?php

require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/appointments_service.class.php';

Flight::set('appointment_service', new AppointmentService());

Flight::route('GET /appointments', function(){
    $data = Flight::get('appointment_service')->get_appointments();
    Flight::json($data);
});