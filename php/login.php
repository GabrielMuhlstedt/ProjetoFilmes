<?php
  require "conexao.php";

  $email = $_POST["email"];
  $senha = $_POST["senha"];

  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email' AND senha = '$senha' and verificado = 's'");
  $resultadoRow = mysqli_num_rows($resultado);

  if($resultadoRow == false){
    $retorno["status"] = "n";
    $retorno["mensagem"] = "Usuario não cadastrado, Erro no login ou Email não verificado(cheque seu email)";
    $retorno["funcao"] = "login";
  }else{
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Usuario Logado com sucesso";
    $retorno["funcao"] = "login";
  }
	echo json_encode($retorno);
 ?>
