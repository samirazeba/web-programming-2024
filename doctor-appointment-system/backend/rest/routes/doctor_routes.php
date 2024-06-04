<?php

require_once __DIR__ .  '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/doctors_service.class.php';

Flight::set('doctors_service', new DoctorService());

Flight::route('GET /doctors', function(){
    $data = Flight::get('doctors_service')->get_doctors();
    Flight::json($data);
});

Flight::route('POST /doctors/add', function(){
    $data = Flight::request()->data->getData();
    $doctor = Flight::get('doctors_service')->add_doctor($data);
    Flight::json($doctor);
});

/**
     * @OA\Get(
     *      path="/doctors/details",
     *      tags={"doctors"},
     *      summary="Get doctor details",
     *      security={
     *          {"ApiKey": {}}
     *      },
     *      @OA\Response(
     *           response=200,
     *           description="Array of doctor details"
     *      )
     * )
     */
    Flight::route('GET /doctors/details', function() {
        Flight::json(Flight::get('doctor'));
    });