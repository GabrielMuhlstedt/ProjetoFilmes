<?php

date_default_timezone_set('Etc/UTC');

$email = $_POST["email"];
$tokenCar = $_POST["tokenCar"];

require '../PHPMailer/PHPMailerAutoload.php';

$tituloEmail =  "Mudança Dados";

$message = "<!DOCTYPE html>
<html lang='en'>

<head>
</head>

<body>

  <div id='email' value='$email' hidden>
  </div>
  <div>
    <a>Seu token é: '$tokenCar'</a>
  </div>
  <a>Para continuar a mudança, clique<a href='http://localhost/ProjetoFilmes/pages/mudarDadosCartao.html'> aqui</a>. </a>


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

$retorno2["status"] = "s";
$retorno2["mensagem"] = "Email Enviado para atualizar seus dados.";
$retorno2["funcao"] = "mudar";
echo json_encode($retorno2);

 ?>
