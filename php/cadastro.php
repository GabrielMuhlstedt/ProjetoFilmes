<?php
  require "conexao.php";

  $nome = $_POST["nomePessoa"];
  $dataNascimento = $_POST["dataNascimento"];
  $email = $_POST["email"];
  $senha = $_POST["senha"];
  $numCartao = $_POST["numCartao"];
  $valCartao = $_POST["valCartao"];
  $codSeg = $_POST["codSeg"];
  $nomeTitular = $_POST["nomeTitular"];
  $cpfCnpj = $_POST["cpfCnpj"];
  $tokenVer = $_POST["tokenVer"];



  $result_usuario = "INSERT INTO pessoa (nomePessoa, dataNascimento, email, senha, numCartao, valCartao, codSeg, nomeTitular, cpfCnpj, tokenVer) VALUES('$nome', '$dataNascimento', '$email', '$senha', '$numCartao', '$valCartao', '$codSeg', '$nomeTitular', '$cpfCnpj','$tokenVer')";
  $resultado_usuario = mysqli_query($conexao, $result_usuario);


  $retorno["status"] = "n";
  $retorno["mensagem"] = "Erro no cadastro!";
  $retorno["funcao"] = "cadastro";

  if($resultado_usuario == true){
  		$retorno["status"] = "s";
  		$retorno["mensagem"] = "Cadastro concluido, um email de confirmação foi enviado!";
  	}
  echo json_encode($retorno);

 ?>
