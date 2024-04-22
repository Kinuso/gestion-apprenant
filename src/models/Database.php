<?php

namespace App\Models;

use PDO;
use PDOException;

final class Database
{
    private $DB;
    private $config;

    public function __construct()
    {
        $this->config = __DIR__ . '/../../config.php';
        require_once $this->config;

        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME;
            $this->DB = new PDO($dsn, DB_USER, DB_PWD, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        } catch (PDOException $error) {
            echo "Erreur de connexion à la Base de Données : " . $error->getMessage();
        }
    }

    public function getDB(): PDO
    {
        return $this->DB;
    }

    /**
     * Initialisation de la Base de Données : installation des tables et mise à jour du fichier config.php
     * @return string message d'échec ou de réussite.
     */
    public function initialisationBDD(): string
    {

        if ($this->testIfTableReservationExists()) {
            return "La base de données semble déjà remplie.";
            die();
        } else {
            try {
                $i = 1;
                $migrationExistante = TRUE;
                while ($migrationExistante === TRUE) {
                    $migration = __DIR__ . "/../../Migration/BDD-FESTIVAL$i.sql";
                    if (file_exists($migration)) {
                        $sql = file_get_contents($migration);
                        $this->DB->query($sql);
                        $i++;
                    } else {
                        $migrationExistante = FALSE;
                    }
                }

                if ($this->UpdateConfig()) {
                    return "installation de la Base de Données terminée !";
                }
            } catch (PDOException $erreur) {
                return "impossible de remplir la Base de données : " . $erreur->getMessage();
            }
        }
    }

    /**
     * Vérifie si la table Films existe déjà dans la BDD
     * @return bool
     */
    private function testIfTableReservationExists(): bool
    {
        $existant = $this->DB->query('SHOW TABLES FROM ' . DB_NAME . ' like \'%user%\'')->fetch();

        if ($existant !== false && $existant[0] == PREFIXE . "user") {
            return true;
        } else {
            return false;
        }
    }


    private function UpdateConfig(): bool
    {

        $fconfig = fopen($this->config, 'w');

        $contenu = "<?php
      // lors de la mise en open source, remplacer les infos concernant la base de données.
      
      define('DB_HOST', '" . DB_HOST . "');
      define('DB_NAME', '" . DB_NAME . "');
      define('DB_USER', '" . DB_USER . "');
      define('DB_PWD', '" . DB_PWD . "');
      define('PREFIXE', '" . PREFIXE . "');
      
      // Si le nom de domaine ne pointe pas vers le dossier public, indiquer le chemin entre le nom de domaine et le dossier public.
      // exemple: /mon-site/public/
      define('HOME_URL', '" . HOME_URL . "');
      
      // Ne pas toucher :
      
      define('DB_INITIALIZED', TRUE);";


        if (fwrite($fconfig, $contenu)) {
            fclose($fconfig);
            return true;
        } else {
            return false;
        }
    }
}
