<?php

  require "conexao.php";

  $numCartao = $_POST["numCartao"];
  $valCartao = $_POST["valCartao"];
  $codSeg = $_POST["codSeg"];
  $nomeTitular = $_POST["nomeTitular"];
  $tokenCar = $_POST["tokenCar"];


  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE tokenCar= '$tokenCar'");
  $resultadoRow = mysqli_num_rows($resultado);

  if($resultadoRow == false){
    $retorno["status"] = "n";
    $retorno["mensagem"] = "Token invalido!";
    $retorno["funcao"] = "Cartao";
  }else{
    $resultado = mysqli_query($conexao, "UPDATE pessoa SET numCartao = '$numCartao' , valCartao = '$valCartao' , codSeg = '$codSeg' , nomeTitular = '$nomeTitular' WHERE tokenCar= '$tokenCar'");
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Dados atualizados com sucesso.";
    $retorno["funcao"] = "Cartao";
  }
  echo json_encode($retorno);











 ?>
