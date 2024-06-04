<?php
require_once __DIR__ . '/../dao/DoctorDao.class.php';

class DoctorService
{
    private $doctor_dao;
    public function __construct()
    {
        $this->doctor_dao = new DoctorDao();
    }

    public function get_doctors()
    {
        return $this->doctor_dao->get_doctors();
    }

    public function add_doctor($payload){
        return $this->doctor_dao->add_doctor($payload);
    }

    public function get_doctor_by_id($doctor_id){
        return $this->doctor_dao->get_doctor_by_id($doctor_id);
    }
}
