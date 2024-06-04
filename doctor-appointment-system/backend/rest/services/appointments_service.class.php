<?php
require_once __DIR__ . '/../dao/AppointmentDao.class.php';

class AppointmentService
{
    private $appointment_dao;
    public function __construct()
    {
        $this->appointment_dao = new AppointmentDao();
    }

    public function get_appointments()
    {
        return $this->appointment_dao->get_appointments();
    }
}
