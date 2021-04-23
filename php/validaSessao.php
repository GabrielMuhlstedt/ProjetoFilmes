<?php

	session_start();

	$retorno["status"] = "n";
	$retorno["funcao"] = "valida-sessao";
	$retorno["mensagem"] = "faça autenticação";


	if(isset($_SESSION['id']) == false)
	{

		$retorno["status"] = "n";
		$retorno["funcao"] = "valida-sessao";
		$retorno["mensagem"] = "Sessao nao existente";

		//echo "não existe id<br>";
		//print_r($_SESSION);
	}
	else
	{
		//echo "existe id<br>";
		//print_r($_SESSION);

		$segundos = time() - $_SESSION["inicio"];

		if($segundos > $_SESSION["tempolimite"])
		{
			unset($_SESSION["usuario"]);
			unset($_SESSION["inicio"]);
			unset($_SESSION["tempolimite"]);
			unset($_SESSION["id"]);
			session_destroy();

			//echo "acabou o tempo<br>";
			//print_r($_SESSION);

			$retorno["status"] = "n";
			$retorno["mensagem"] = "Sessao expirada";
		}
		else
		{
			//echo "sessao renovada<br>";
			//print_r($_SESSION);

			$_SESSION["inicio"] = time();
			$retorno["status"] = "s";
			$retorno["mensagem"] = "Sessao Renovada";
			$retorno["funcao"] = "valida-sessao";

			print_r($_SESSION);
		}
	}

	echo json_encode($retorno);

?>
