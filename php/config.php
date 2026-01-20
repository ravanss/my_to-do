<?php
//Configuration file for PHP settings
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'to-do_app';

try{
    $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
};

?>

