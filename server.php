<?php

$host = "localhost";
$db = "formulario";
$user = "root";
$pw = "heriberto1995";

$conexion = mysqli_connect($host, $user, $pw, $db);

if(!$conexion){
    die("Conexion fallida: " . mysqli_connect_error());
}

echo "Conexion ha sido exitosa";
mysqli_close($conexion);

?>