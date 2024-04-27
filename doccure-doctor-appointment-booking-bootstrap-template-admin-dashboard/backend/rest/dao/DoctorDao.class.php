<?php
require_once __DIR__ . "/BaseDao.class.php";

class DoctorDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("doctors");
    }
    public function get_patients()
    {
        return $this->query(
            "SELECT *
            FROM doctors ",
            []
        );
    }
}
