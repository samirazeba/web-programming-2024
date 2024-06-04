<?php
require_once __DIR__ . '/../dao/PatientDao.class.php';

class PatientService
{
    private $patients_dao;
    public function __construct()
    {
        $this->patients_dao = new PatientDao();
    }

    public function get_patients_paginated()
    {
        return $this->patients_dao->get_patients_paginated();
    }

    public function get_all_patients() {
        return $this->patients_dao->get_all_patients();
    }

    public function get_patient_by_email($email) {
        return $this->patients_dao->get_patient_by_email($email);
    }

    public function add_patient($payload) {
        $payload['password'] = password_hash($payload['password'], PASSWORD_BCRYPT);
         $this->patients_dao->add_patient($payload);
    }

    public function delete_patient($patient_id) {
        return $this->patients_dao->delete_patient($patient_id);
    }

    public function get_patient_by_id($patient_id) {
        return $this->patients_dao->get_patient_by_id($patient_id);
    }
}
