<?php

date_default_timezone_set('Etc/UTC');

$email = $_POST["email"];
$tokenVer = $_POST["tokenVer"];

require '../PHPMailer/PHPMailerAutoload.php';

$tituloEmail =  "Confirmação de Cadastro";

$message = "<!DOCTYPE html>
<html lang='en'>

<head>
</head>

<body>

  <div id='email' value='$email' hidden>
  </div>
  <div>
    <a>Seu token é: '$tokenVer'</a>
  </div>
  <a>Para continuar o cadastro, clique<a href='http://localhost/ProjetoFilmes/pages/confirmarEmail.html'> aqui</a>. </a>


  </body>
  <html>";

$mail = new PHPMailer;
$mail->IsSMTP();
$mail->CharSet = 'UTF-8';
$mail->SMTPDebug = 2;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;
$mail->Username = 'ProjetoFilmesExp';
$mail->Password = 'experiencia12345';
$mail->SetFrom('ProjetoFilmesExp@gmail.com', 'AquaFilmes');
$mail->addAddress($email,'');
$mail->Subject = $tituloEmail;
$mail->msgHTML($message);

$mail->send();

$retorno["status"] = "s";
//$retorno["mensagem"] = "Email Enviado para confirmação.";
$retorno["funcao"] = "cadastrar";
echo json_encode($retorno);

 ?>
