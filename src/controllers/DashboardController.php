<?php

namespace App\Controllers;

use App\Repositories\DashboardRepository;
use App\Repositories\UserRepository;
use App\Services\ResponseService;

// use src\Services\Reponse;

class DashboardController
{
    private $UserRepo;
    private $ReservationRepo;

    public function __construct()
    {
        // Instanciez les 3 propriétés avec les repositories concernés.
        $this->UserRepo = new UserRepository();
    }


    public function getAllProm()
    {
        $dashboardRepository = new DashboardRepository();
        if ($dashboardRepository->getAllProm()) {
            return (['status' => 'success', 'message' => 'Voici les promotions', 'promInfo' => $dashboardRepository->getAllProm()]);
        } else {
            return (['status' => 'error', 'message' => 'Erreur dans la récuperation des promotions']);
        }
    }

    function getStudentsByProm($data)
    {
        $dashboardRepository = new DashboardRepository();;
        if ($dashboardRepository->getStudentsByProm($data)) {
            return (['status' => 'success', 'message' => 'Voici les promotions', 'StudentsInfo' => $dashboardRepository->getStudentsByProm($data)]);
        } else {
            return (['status' => 'error', 'message' => 'Aucun apprenant dans cette promotion']);
        }
    }
}
