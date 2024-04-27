<?php
require_once __DIR__ . '/rest/services/_service.class.php';

$doctors_service = new DoctorService();
$data = $doctors_service->get_doctors();
header('Content-Type: application/json');
echo json_encode($data);
