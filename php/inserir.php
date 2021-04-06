<?php

  $nome = $_POST["nome"];
  $data_nascimento = $_POST["data_nascimento"];
  $email = $_POST["email"];
  $senha = $_POST["senhaHash"];
  $numCartao = $_POST["numCartao"];
  $valCartao = $_POST["valCartao"];
  $codSeg = $_POST["codSeg"];
  $nomeTitular = $_POST["nomeTitular"];
  $cpfCnpj = $_POST["cpfCnpj"];




  $con = mysqli_connect("localhost:3306","root","","projetofilmes");

  mysqli_query($con, "INSERT INTO pessoa(nomePessoa, dataNascimento, email, senha, numCartao, valCartao, codSeg, nomeTitular, cpfCnpj) VALUES('$nome', '$data_nascimento', '$email', '$senha', '$numCartao', '$valCartao', '$codSeg', '$nomeTitular', '$cpfCnpj')");


 ?>
