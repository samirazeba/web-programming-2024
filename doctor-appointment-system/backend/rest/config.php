<?php

// Set the reporting

use PSpell\Config as PSpellConfig;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL ^ (E_NOTICE | E_DEPRECATED));

class Config {
    public static function DB_NAME(){
        return Config::get_env('DB_NAME', 'doctor_appointment_system');
    }
    public static function DB_PORT(){
        return Config::get_env('DB_PORT', 3306);
    }
    public static function DB_USER(){
        return Config::get_env('DB_USER', 'root');
    }
    public static function DB_PASSWORD(){
        return Config::get_env('DB_PASSWORD', 'root');
    }
    public static function DB_HOST(){
        return Config::get_env('DB_HOST', '127.0.0.1');
    }

    public static function JWS_SECRET(){
        return Config::get_env('JWS_SECRET', 'p8zb&Fad[(&;}KS+)3&zGbX+Vfh_/3');
    }
    public static function get_env($name, $default){
        return isset($_ENV[$name]) && trim($_ENV[$name]) != "" ? $_ENV[$name] : $default;
    }
}

// Database access credentials
//define('DB_NAME', 'doctor_appointment_system');
//define('DB_PORT', 3306);
//define('DB_USER', 'root');
//define('DB_PASSWORD', 'root');
//define('DB_HOST', '127.0.0.1'); // localhost

//JWS Secret
//define('JWS_SECRET', 'p8zb&Fad[(&;}KS+)3&zGbX+Vfh_/3');