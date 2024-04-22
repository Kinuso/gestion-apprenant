<?php

spl_autoload_register(function ($class) {

    $class = str_replace('App', '', $class);
    $file = "../src/$class.php";

    if (file_exists($file)) {
        require $file;
    }
});
