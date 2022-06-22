<?php

    $destinatario = 'hersac1@gmail.com';
    // correo al que se enviara

    $nombre = $_POST['name'];
    $celular = $_POST['cel'];
    $email= $_POST['mail'];
    $asunto = $_POST['asunto'];
    $mensaje= $_POST['mensaje'];

    $header = "Enviado desde el portafolio";
    $mensajeCompleto = $mensaje."\nAtentamente: ".$nombre."\n".$celular."\n".$email;

    mail($destinatario, $asunto, $mensajeCompleto, $header);

    echo "<script>alert('Correo enviado Exitosamente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\", 1000)</script>";
?>