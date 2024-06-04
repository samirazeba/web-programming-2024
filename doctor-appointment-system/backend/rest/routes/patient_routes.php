<?php

require_once __DIR__ .  '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/patients_service.class.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


Flight::set('patient_service', new PatientService());

Flight::group('/patients', function () {
    Flight::route('GET /all', function() {
    });


    Flight::route('GET /', function () {
        $data = Flight::get('patient_service')->get_patients_paginated();

        foreach ($data as $id => $patient) {
            $data[$id]['action'] = '<div class="btn-group" role="group" aria-label="Actions">' .
                '<button type="button" class="btn btn-warning" onclick="PatientService.open_edit_patient_modal(' . $patient['id'] . ')">Edit</button>' .
                '<button type="button" class="btn btn-danger" onclick="PatientService.delete_patient(' . $patient['id'] . ')">Delete</button>' .
                '</div>';
        }
        Flight::json($data);
    });

   
    Flight::route('POST /add', function () {
        $payload = Flight::request()->data->getData();
        $patient = Flight::get('patient_service')->add_patient($payload);
        Flight::json($patient);

 });

 /**
     * @OA\Post(
     *      path="/patients/login",
     *      tags={"patients"},
     *      summary="Patient login",
     *      @OA\Response(
     *           response=200,
     *           description="Logged user"
     *      ),
     *      @OA\RequestBody(
     *          description="Food ID",
     *          @OA\JsonContent(
     *             @OA\Property(property="email", required=false, type="string", example="some email"), 
     *             @OA\Property(property="password", required=false, type="string", example="Some secret password")      
     *               
     *           )
     *      ),
     * )
     */
    Flight::route('POST /login', function () {
        $payload = Flight::request()->data->getData();
        $patient = Flight::get('patient_service')->get_patient_by_email($payload['email']);

        if (!$patient)
            Flight::halt(500, "Invalid username or password");

        unset($patient['password']);

        $jwt_payload = [
            'patient' => $patient,
            'iat' => time(), //time when token has been issued
            'exp' => time() + (60 * 60 * 24) //expiration time in seconds (valid for one day)
        ];

        $token = JWT::encode(
            $jwt_payload,
            Config::JWS_SECRET(),
            'HS256'
        );

        Flight::json(
            array_merge($patient, ['token' => $token])
        );

 });
    
    /**
     * @OA\Post(
     *      path="/patients/logout",
    *      tags={"patients"},
    *      summary="Patient logout",
    *      security={{"ApiKey": {}}},
    *      @OA\Response(
    *           response=200,
    *           description="Success response or exception if unable to verify jwt token"
    *      )
    * )
    */
    Flight::route('POST /logout', function(){
        //decoding token
        try{
            $token = Flight::request()->getHeader("Authentication");
            if(!$token)
                Flight::halt(401, "Missing authentication header");
            $decoded_token = JWT::decode($token, new Key(Config::JWS_SECRET(), 'HS256'));

            Flight::json([
                'jwt_decoded' => $decoded_token,
                'patient' => $decoded_token->patient
            ]);
        } catch(\Exception $e){
            Flight::halt(401, $e->getMessage());
        }

    });


    
    Flight::route('DELETE /delete/@patient_id', function ($patient_id) {
        if ($patient_id == NULL || $patient_id == '') {
            Flight::halt(500, "Required parameters are missing!");
        }
        Flight::get('patient_service')->delete_patient($patient_id);
        Flight::json(['data' => NULL, 'message' => "You have successfully deleted the patient"]);
    });

    /**
     * @OA\Post(
     *      path="/patients/info",
    *      tags={"patients"},
    *      summary="Patient info",
    *      security={{"ApiKey": {}}},
    *      @OA\Response(
    *           response=200,
    *           description="Success response or exception if unable to verify jwt token"
    *      )
    * )
    */
    Flight::route('GET /info', function(){
        Flight::json(
            [
                'name'=> 'Carl Kelly',
                'email' => 'carl.kelly@gmail.com'
            ]
        );
    });

});


