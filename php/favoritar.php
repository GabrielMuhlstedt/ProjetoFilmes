<?php
  session_start();

  require "conexao.php";

  $retorno['mensagem'] = "processo de favoritar";

  $id_filme = $_POST["id"];
  $id_usuario = $_SESSION['id_usuario'];

  $resultConfere = mysqli_query($conexao, "SELECT * FROM favoritos WHERE idFilme = $id_filme AND idUsuario = $id_usuario");

  $row = mysqli_num_rows($resultConfere);

  if ($row == 0){

    $retorno['mensagem'] = "Filme favoritado";
    $result = mysqli_query($conexao, "INSERT INTO favoritos(idUsuario, idFilme) VALUES('$id_usuario', '$id_filme')");
  }
  else{
    $retorno['mensagem'] = "Filme removido dos favoritos";

    $result = mysqli_query($conexao, "DELETE FROM favoritos WHERE idFilme = $id_filme AND idUsuario = $id_usuario");
  }
  echo json_encode($retorno);

  mysqli_close($conexao);

 ?>
