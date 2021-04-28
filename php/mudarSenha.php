<?php
  require "conexao.php";

  $senha = $_POST["senha"];
  $tokenSenha = $_POST["tokenSenha"];


  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE tokenSenha= '$tokenSenha'");
  $resultadoRow = mysqli_num_rows($resultado);

  $retorno["status"] = "n";
  $retorno["mensagem"] = "Token invalido!";
  $retorno["funcao"] = "SenhaNova";

  if($resultadoRow == true){
    $resultado2 = mysqli_query($conexao, "UPDATE pessoa SET senha = '$senha' WHERE tokenSenha= '$tokenSenha'");
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Senha atualizada com sucesso!";
  }

  echo json_encode($retorno);
?>



















 ?>
