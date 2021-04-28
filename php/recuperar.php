<?php

  require "conexao.php";

  $email = $_POST["email"];
  $tokenSenha = $_POST["tokenSenha"];


  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email'");
  $resultadoRow = mysqli_num_rows($resultado);

  if($resultadoRow == false){
    $retorno["status"] = "n";
    $retorno["mensagem"] = "Erro na Recuperação!";
    $retorno["funcao"] = "recuperar";
  }else{
    mysqli_query($conexao,"UPDATE pessoa SET tokenSenha = '$tokenSenha' WHERE email = '$email'");
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Email de recuperação enviado!";
    $retorno["funcao"] = "recuperar";
  }
  echo json_encode($retorno);

 ?>
