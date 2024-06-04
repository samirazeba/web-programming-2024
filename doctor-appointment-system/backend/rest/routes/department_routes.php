<?php

require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/departments_service.class.php';

Flight::set('department_service', new DepartmentsService());

Flight::route('GET /departments', function(){
    $data = Flight::get('department_service')->get_departments();
    Flight::json($data);
});