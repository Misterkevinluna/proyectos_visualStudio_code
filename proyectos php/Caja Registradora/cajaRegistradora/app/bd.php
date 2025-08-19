<?php
$host = "host.docker.internal"; // Esto me permite que el contenedor acceda al host de tu máquina (donde corre MariaDB)
$usuario = "root";
$contrasena = "irvin2002822";
$bd = "caja_registradora";
$puerto = 13002;

$conn = new mysqli($host, $usuario, $contrasena, $bd, $puerto);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
