<?php
  require "conexao.php";

  $email = $_POST["email"];
  $tokenCar = $_POST["tokenCar"];


  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email'");
  $resultadoRow = mysqli_num_rows($resultado);

  if($resultadoRow == false){
    $retorno["status"] = "n";
    $retorno["mensagem"] = "Email invalido!";
    $retorno["funcao"] = "confirma";
  }else{
    mysqli_query($conexao,"UPDATE pessoa SET tokenCar = '$tokenCar' WHERE email = '$email'");
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Email enviado com seu token.";
    $retorno["funcao"] = "confirma";
  }
  echo json_encode($retorno);





?>
