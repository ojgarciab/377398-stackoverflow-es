<?php
/* No necesitas paréntesis para "include". Es preferible usar "require"
    para que falle en caso de no encontrarse */
require 'conexion.php';

$conn = @mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre);

/* Hay que comprobar si la conexión se estableció correctamente */
if (mysqli_connect_error() !== NULL) {
    die('Error de Conexión: ' . htmlspecialchars(mysqli_connect_error()));
}

/* Es importante repetir las validaciones en el lado del servidor */
$nombre = trim($_POST['nombre']);
if ($nombre == '' || strlen($nombre) > 30) {
    die('Nombre inválido, verificar campo');
}
$apellido = trim($_POST['apellido']);
if ($apellido == '' || strlen($apellido) > 30) {
    die('Apellido inválido, verificar campo');
}
$email = trim($_POST['email']);
if ($email == '') {
    die('Email inválido, verificar campo');
}

/* INDISPENSABLE escapar las cadenas con "mysqli_real_escape_string" */
$nombre = mysqli_real_escape_string($conn, $nombre);
$apellido = mysqli_real_escape_string($conn, $apellido);
$curp = mysqli_real_escape_string($conn, $_POST['curp']);
//$fecha_enfermedad = mysqli_real_escape_string($conn, $_POST['fecha_enfermedad']);
$email = mysqli_real_escape_string($conn, $email);

/* Deberías usar en su lugar la función SQL "NOW()" */
//$time = mysqli_real_escape_string($conn, date("g:i a"));

/* Ahora podemos concatenar las cadenas con seguridad */
$resultado = $conn->query("
    INSERT INTO datos_usuarios (
        nombre,
        apellido,
        curp,
        email
    ) VALUES (
        '$nombre',
        '$apellido',
        '$curp',
        '$email'
    )"
);

/* Es mejor usar comparaciones estrictas para comprobar si hubo error */
if ($resultado === false) {
    die('Error en la consulta: '. htmlspecialchars($conn->error));
}
/* En caso de que no hubiera error, devolvermos el mensaje esperado */
die('Registro insertado');
