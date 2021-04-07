<?php
  $conexao = mysqli_connect("localhost", "root", "", "projetofilmes");

  $email = $_POST["email"];
  $senha = $_POST["senha"];

  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email' and senha = '$senha'");
  $resultadoRow = mysqli_num_rows($resultado);

  if($resultadoRow == false){
    echo json_encode("n");
  }else{
    echo json_encode("s");
  }

  mysqli_close($conexao);
 ?>
