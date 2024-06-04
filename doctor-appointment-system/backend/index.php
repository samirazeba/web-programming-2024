<?php

require 'vendor/autoload.php';
require 'rest/routes/middleware_routes.php';
require 'rest/routes/patient_routes.php';
require 'rest/routes/doctor_routes.php';
require 'rest/routes/appointment_routes.php';
require 'rest/routes/department_routes.php';
require 'rest/routes/prescription_routes.php';
require 'rest/routes/review_routes.php';

Flight::start();
