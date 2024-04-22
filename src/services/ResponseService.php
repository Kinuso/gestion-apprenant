<?php

namespace App\Services;

class ResponseService
{
    public function sendJson(array $data, int $code): void
    {
        ob_clean();
        header('Content-Type: application/json');
        http_response_code($code);
        echo json_encode($data);
    }
}
