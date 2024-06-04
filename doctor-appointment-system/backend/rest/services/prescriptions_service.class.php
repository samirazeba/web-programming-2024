<?php

require_once __DIR__ . "/../dao/PrescriptionDao.class.php";

class PrescriptionService {
    private $prescription_dao;

    public function __construct() {
        $this->prescription_dao = new PrescriptionDao();
    }
    public function get_prescriptions() {
        return $this->prescription_dao->get_prescriptions();
    }
}