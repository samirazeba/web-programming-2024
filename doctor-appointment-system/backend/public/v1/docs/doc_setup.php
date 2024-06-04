<?php

/**
 * @OA\Info(
 *   title="API",
 *   description="Web programming API",
 *   version="1.0",
 *   @OA\Contact(
 *     email="samira.zeba@stu.ibu.edu.ba",
 *     name="Samira Zeba"
 *   )
 * )
 * @OA\OpenApi(
 *   @OA\Server(
 *       url=BASE_URL
 *   )
 * )
 * 
 * @OA\SecurityScheme(
*      securityScheme="ApiKey",
*      type="apiKey",
*      in="header",
 *     name="Authentication"
 * )
 */
