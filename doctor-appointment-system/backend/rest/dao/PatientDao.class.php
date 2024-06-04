<?php

require_once __DIR__ . '/BaseDao.class.php';

class PatientDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct('patients');
    }

    public function get_patients_paginated()
    {
        return $this->query(
            "SELECT * FROM patients",
            []
        );
    }

    public function get_all_patients() {
        return $this->query(
            "SELECT * FROM patients",
            []
        );
    }

    public function add_patient($payload){
        return $this->insert("patients", $payload);
    }

    public function delete_patient($patient_id) {
        $this ->execute("DELETE FROM patients WHERE id = :id", ["id" => $patient_id]);
    }

   /* public function get_patient_by_id($patient_id){
        return $this->query_unique(
            "SELECT + FROM patients WHERE id = :id", 
            ['id' => $patient_id]
        );
    }*/

    /*public function edit_patient($id, $patient){
        $query = "UPDATE patients SET name = :name, date_of_birth = :date_of_birth
                WHERE id = :id";
        $this->execute($query, [
            'name' => $patient['name'],
            'date_of_birth' => $patient['date_of_birth'],
            'id' => $patient['id']
        ]);
    }*/

    public function get_patient_by_email($email){
        return $this->query_unique("SELECT * FROM patients WHERE email = :email", ["email" => $email]);

    }

    public function get_patient_by_id($id){
        return $this->query_unique("SELECT * FROM patients WHERE id = :id", ["id" => $id]);
    }

}

