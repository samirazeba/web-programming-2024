<?php
require_once __DIR__ . '/rest/services/patients_service.class.php';

$patients_service = new PatientService();
$data = $patients_service->get_patients();
header('Content-Type: application/json');
echo json_encode($data);
