<?php
session_start();
include_once("conexao.php");


$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$dataNascimento = filter_input(INPUT_POST, 'dataNascimento', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$senha = md5(filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_STRING));
$numCartao = filter_input(INPUT_POST, 'numCartao', FILTER_SANITIZE_STRING);
$valCartao = filter_input(INPUT_POST, 'valCartao', FILTER_SANITIZE_STRING);
$codSeg = filter_input(INPUT_POST, 'codSeg', FILTER_SANITIZE_STRING);
$nomeTitular = filter_input(INPUT_POST, 'nomeTitular', FILTER_SANITIZE_STRING);
$cpfCnpj = filter_input(INPUT_POST, 'cpfCnpj', FILTER_SANITIZE_NUMBER_INT);


$result_usuario = "INSERT INTO pessoa (nomePessoa, dataNascimento, email, senha, numCartao, valCartao, codSeg, nomeTitular, cpfCnpj) VALUES('$nome', '$dataNascimento', '$email', '$senha', '$numCartao', '$valCartao', '$codSeg', '$nomeTitular', '$cpfCnpj')";
$resultado_usuario = mysqli_query($conn, $result_usuario);

if(mysqli_insert_id($conn)){
  $_SESSION['msg'] = "<p style='color:green;'> Usuario cadastrado com sucesso </p>";
  header("Location: ../pages/cadastro.html");
}else {
  $_SESSION['msg'] = "<p style='color:red;'> Usuario nao foi cadastrado com sucesso </p>";
  header("Location: ../pages/cadastro.html");
}




 ?>
