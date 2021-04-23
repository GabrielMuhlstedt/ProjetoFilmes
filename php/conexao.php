<?php

	define("ENDERECO", "localhost");
	define("PORTA", "3306");
	define("BANCO", "projetofilmes");
	define("USUARIO_MYSQL", "root");
	define("SENHA_MYSQL", "");

	$conexao = mysqli_connect(ENDERECO.":".PORTA, USUARIO_MYSQL, SENHA_MYSQL, BANCO);

?>
