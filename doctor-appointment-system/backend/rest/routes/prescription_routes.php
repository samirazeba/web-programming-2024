<?php
require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/prescriptions_service.class.php';

Flight::set('prescription_service', new PrescriptionService());

Flight::route('GET /prescriptions', function(){
    $data = Flight::get('prescription_service')->get_prescriptions();
    Flight::json($data);
});