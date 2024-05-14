<?php

require_once __DIR__ . '/BaseDao.class.php';

class PatientDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct('patients');
    }

    public function get_patients()
    {
        return $this->query(
            "SELECT * FROM patients",
            []
        );
    }
}
