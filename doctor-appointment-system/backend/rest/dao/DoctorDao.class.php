<?php
require_once __DIR__ . "/BaseDao.class.php";

class DoctorDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("doctors");
    }
    public function get_doctors()
    {
        return $this->query(
            "SELECT *
            FROM doctors ",
            []
        );
    }

    public function add_doctor($payload){
        return $this->insert("doctors", $payload);
    }

    public function get_doctor_by_id($doctor_id){
        return $this->query_unique(
            "SELECT * FROM doctors WHERE id = :id",
            ["id" => $doctor_id]
        );
    }
}
