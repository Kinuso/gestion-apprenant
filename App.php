<?php

use App\Controllers\DashboardController;
use App\Controllers\UserController;
use App\Views\HomeView;


class App
{
    public function run(): void
    {
        $this->loadAppView();
        $this->login();
        $this->loadPromotion();
        $this->loadLearner();
    }

    private function loadAppView(): void
    {
        $appView = new HomeView();
        $appView->loadView();
    }

    private function login()
    {

        if (str_contains($_SERVER['REQUEST_URI'], 'login')) {
            $userController = new UserController();

            $data = file_get_contents("php://input");
            $user = json_decode($data, true);
            ob_clean();
            echo json_encode($userController->login($user));
        }
    }

    private function loadPromotion()
    {
        if (str_contains($_SERVER['REQUEST_URI'], 'loadProm')) {
            $dashboardController = new DashboardController();
            ob_clean();
            echo json_encode($dashboardController->getAllProm());
        }
    }
    private function loadLearner()
    {
        if (str_contains($_SERVER['REQUEST_URI'], 'loadStudentsFromProm')) {
            $dashboardController = new DashboardController();

            $data = file_get_contents("php://input");
            $user = json_decode($data, true);
            ob_clean();
            echo json_encode($dashboardController->getStudentsByProm($user));
        }
    }
}
