<?php
  session_start();

  require "conexao.php";

  $email = $_POST["email"];
  $senha = $_POST["senha"];

  $resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email' AND senha = '$senha' and verificado = 's'");

  $retorno["status"] = "n";
  $retorno["mensagem"] = "Usuario não cadastrado, Erro no login ou Email não verificado(cheque seu email)";
  $retorno["funcao"] = "login";

	if(mysqli_num_rows($resultado) > 0)
	{
		$registro = mysqli_fetch_assoc($resultado);

		$_SESSION["email"] = $registro["email"];
    $_SESSION["id_usuario"] = $registro["idPessoa"];
		$_SESSION["inicio"] = time();
		$_SESSION["tempolimite"] = 600; // 15 segundos
		$_SESSION["id"] = session_id();


		$retorno["status"] = "s";
		$retorno["mensagem"] = "Usuario Logado com sucesso";
	}

  echo json_encode($retorno);


  /*if($resultadoRow == false){
    $retorno["status"] = "n";
    $retorno["mensagem"] = "Usuario não cadastrado, Erro no login ou Email não verificado(cheque seu email)";
    $retorno["funcao"] = "login";
  }else{
    $retorno["status"] = "s";
    $retorno["mensagem"] = "Usuario Logado com sucesso";
    $retorno["funcao"] = "login";
  }
	echo json_encode($retorno);
  */
 ?>
