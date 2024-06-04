<?php

require_once __DIR__ . "/BaseDao.class.php";

class PrescriptionDao extends BaseDao {
    public function __construct() {
        parent::__construct('prescriptions');
    }

    public function get_prescriptions() {
        return $this->query (
            "SELECT * FROM prescriptions",
            []
        );
    }
}