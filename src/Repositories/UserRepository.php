<?php

namespace App\Repositories;

use App\Models\Database;
use App\Models\User;
use PDO;

class UserRepository
{
    private $DB;
    private $user;
    public function __construct()
    {
        $database = new Database();
        $this->DB = $database->getDB();
        $this->user = new User();

        require_once __DIR__ . '/../../config.php';
    }

    
    public function login($email): array|bool
    {
        $sql = "SELECT * FROM GA_User WHERE User_Email = :Email_User";

        $statement = $this->DB->prepare($sql);
        $statement->execute([
            ":Email_User" => $email
        ]);
        return $statement->fetch(PDO::FETCH_ASSOC);
    }
}
