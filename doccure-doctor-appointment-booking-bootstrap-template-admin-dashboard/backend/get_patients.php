<?php
require_once __DIR__ . '/rest/services/PatientService.class.php';

try {
    $patient_service = new PatientService();
    $data = $patient_service->get_patients();
    header('Content-Type: application/json');
    echo json_encode($data);
} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}
