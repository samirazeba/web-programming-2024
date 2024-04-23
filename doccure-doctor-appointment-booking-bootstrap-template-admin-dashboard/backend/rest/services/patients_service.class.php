<?php
require_once __DIR__ . '/../dao/PatientDao.class.php';

class PatientService
{
    private $patients_dao;
    public function __construct()
    {
        $this->patients_dao = new PatientDao();
    }

    public function get_patients()
    {
        return $this->patients_dao->get_patients();
    }
}
