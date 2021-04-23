<?php
  require "conexao.php";

  $email = $_POST["email"];
  $senha = $_POST["senha_hash"];

  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email' AND senha = '$senha'");
  $resultadoRow = mysqli_num_rows($resultado);

  if($resultadoRow == false){
    $retorno["status"] = "n";
    $retorno["mensagem"] = "Usuario não cadastrado ou erro no login";
    $retorno["funcao"] = "login";
  }else{
    $resultado2 = mysqli_query($conexao, "SELECT verificado FROM pessoa WHERE email= '$email');
    if($resultado2 == 's'){
      $retorno["status"] = "s";
      $retorno["mensagem"] = "Usuario Logado com sucesso";
      $retorno["funcao"] = "login";
    }else{
      $retorno["status"] = "n";
      $retorno["mensagem"] = "Verificação email não realizada";
      $retorno["funcao"] = "login";
    }
  }

	echo json_encode($retorno);

 ?>
