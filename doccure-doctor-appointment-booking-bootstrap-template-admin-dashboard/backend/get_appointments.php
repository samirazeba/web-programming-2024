<?php
require_once __DIR__ . '/rest/services/_service.class.php';

$appointments_service = new AppointmentService();
$data = $appointments_service->get_appointments();
header('Content-Type: application/json');
echo json_encode($data);
