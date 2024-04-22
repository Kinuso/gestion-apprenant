<?php
header('Content-Type: application/json');
require_once __DIR__ . "\..\..\config.php";

$dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME;
$conn = new PDO($dsn, DB_USER, DB_PWD);

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];

$sql = "SELECT * FROM `ga_user` WHERE User_Email = :EMAIL";

$statement = $conn->prepare($sql);
$statement->execute([':EMAIL' => $email]);
$result = $statement->fetch(PDO::FETCH_ASSOC);


if ($result) {
    $hashedPassword = $result["User_Password"];
    $userId = $result["User_ID"];
    $userRole = $result["Role_ID"];

    if (password_verify($password, $hashedPassword)) {
        session_start();
        $_SESSION["userId"] = $userId;
        $_SESSION["userRole"] = $userRole;
        echo json_encode(['status' => 'success', 'message' => 'Vous etes connecté', 'userId' => $userId, "userRole" => $userRole]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Identifiants incorrect']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Identifiants incorrect']);
}
