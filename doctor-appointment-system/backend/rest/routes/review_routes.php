<?php

require_once __DIR__ . '/../../vendor/flightphp/core/flight/Flight.php';
require_once __DIR__ . '/../services/reviews_service.class.php';

Flight::set('review_service', new ReviewsService());

Flight::route('GET /reviews', function(){
    $data = Flight::get('review_service')->get_reviews();
    Flight::json($data);
});