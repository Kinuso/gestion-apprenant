<?php

namespace App\Controllers;

use App\Repositories\UserRepository;
use App\Services\ResponseService;

// use src\Services\Reponse;

class UserController
{
    private $UserRepo;
    private $ReservationRepo;

    public function __construct()
    {
        $this->UserRepo = new UserRepository();
    }
    public function getUser(): void
    {
        $user = [
            ['name' => 'John', 'age' => 25],
        ];

        $responseService = new ResponseService();
        $responseService->sendJson($user, 200);
    }

    public function login($user): array|bool
    {
        $email = htmlspecialchars(strip_tags(trim($user["email"])));
        $password = htmlspecialchars(strip_tags(trim($user["password"])));
        $userRepo = new UserRepository();

        if ($userRepo->login($email)) {
            if (password_verify($password, $userRepo->login($email)['User_Password'])) {
                return (['status' => 'success', 'message' => 'L"utilisateur existe, voici ses informations', 'userInfo' => $userRepo->login($email)]);
            } else {
                return (['status' => 'Error', 'message' => 'Identifiants incorrects']);
            }
        } else {
            return (['status' => 'Error', 'message' => 'Identifiants incorrects']);
        }
    }
}
