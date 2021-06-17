<?php
  session_start();

  require "conexao.php";

  $Titulo = $_POST["titulo"];
  $Genero = $_POST["genero"];
  $Ano = $_POST["ano"];
  $Duracao = $_POST["duracao"];
  $Relevancia = $_POST["relevancia"];
  $Sinopse = $_POST["sinopse"];
  $Trailer = $_POST["trailer"];
  $FilmeSerie = $_POST["filmeSerie"];
  $imagem = $_POST["imagem"];

  $retorno["status"] = "n";
  $retorno["mensagem"] = "Erro ao enviar dados do Filme";

  $sql_code = "INSERT INTO filme (Titulo, Genero, Ano, Duracao, Relevancia, Sinopse, Trailer, Imagens, filmeSerie) VALUES('$Titulo', '$Genero','$Ano','$Duracao','$Relevancia','$Sinopse','$Trailer','$imagem','$FilmeSerie')";
  $resultado = mysqli_query($conexao, $sql_code);

  if($resultado == true ){
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Filmes Enviados com sucesso";
  }

  echo json_encode($retorno);
 ?>
