<?php
require_once __DIR__ . '/../dao/PatientDao.class.php';

class patientService
{
    private $patient_dao;
    public function __construct()
    {
        $this->patient_dao = new PatientDao();
    }

    public function get_patients()
    {
        return $this->patient_dao->get_patients();
    }
}
