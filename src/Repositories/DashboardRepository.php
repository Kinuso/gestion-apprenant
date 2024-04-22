<?php

namespace App\Repositories;

use App\Models\Database;
use App\Models\User;
use PDO;

class DashboardRepository
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


    public function getAllProm()
    {
        $sql = "SELECT * FROM `ga_class`";

        $statement = $this->DB->prepare($sql);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getStudentsByProm($data)
    {
        $sql = "SELECT u.* FROM ga_user u JOIN userhasclass uc ON u.User_ID = uc.User_ID JOIN ga_class c ON uc.Class_ID = c.Class_ID WHERE c.Class_Name = :ClassName;";

        $statement = $this->DB->prepare($sql);
        $statement->execute([
            ":ClassName" => $data['Prom']
        ]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}
