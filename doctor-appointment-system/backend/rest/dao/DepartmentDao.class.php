<?php

require_once __DIR__ . "/BaseDao.class.php";

class DepartmentDao extends BaseDao {
    public function __construct()
    {
        parent::__construct('departments');
    }

    public function get_departments() {
        return $this-> query(
            "SELECT * FROM departments",
            []
        );
    }
}