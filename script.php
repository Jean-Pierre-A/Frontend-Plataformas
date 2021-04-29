<?php
    $salt = "MATRIX";
    $usuario = array();
    $usuario["nombre"] = $_POST["Usuario_reg"];
    $usuario["correo"] = $_POST["Correo_reg"]:
    $usuario["password"] = md5($salt.$_POST["Contra_reg"]);

    echo json_encode($usuario);
?>