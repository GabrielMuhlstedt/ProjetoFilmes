<?php
  session_start();

  require "conexao.php";

  $id_usuario = $_SESSION['id_usuario'];

  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE idPessoa= '$id_usuario' AND admin = 's'");

  $retorno["status"] = "n";
  $retorno["mensagem"] = "Usuario não admin.";

  if(mysqli_num_rows($resultado) > 0)
	{
		$retorno["status"] = "s";
		$retorno["mensagem"] = "Usuario e um admin";
	}

  echo json_encode($retorno);











 ?>
