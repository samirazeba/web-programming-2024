<?php

require __DIR__ . '/../../../vendor/autoload.php';

if($_SERVER['SERVER_NAME'] == 'localhost' || $_SERVER['SERVER_NAME'] == '127.0.0.1') {
    define('BASE_URL', 'http://localhost:80/web-programming-2024/doctor-appointment-system/backend/');
} else {
    define('BASE_URL', $_SERVER['SERVER_NAME'] . '/doctor-appointment-system/backend/');
}
    


error_reporting(0);

$openapi = \OpenApi\Generator::scan(['../../../rest/routes', './']);
header('Content-Type: application/x-yaml');
echo $openapi->toYaml();
?>