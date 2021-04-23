<?php
  require "conexao.php";

  $tokenVer = $_POST["tokenVer"];

  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE tokenVer= '$tokenVer'");
  $resultadoRow = mysqli_num_rows($resultado);

  if($resultadoRow == false){
    $retorno["status"] = "n";
    $retorno["mensagem"] = "Token invalido!";
    $retorno["funcao"] = "confirmarEmail";
  }else{
    mysqli_query($conexao,"UPDATE pessoa SET verificado = 's' WHERE tokenVer = '$tokenVer'");
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Email Verificado com sucesso,";
    $retorno["funcao"] = "confirmarEmail";
  }
  echo json_encode($retorno);
 ?>
