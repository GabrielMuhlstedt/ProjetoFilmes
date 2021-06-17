<?php
  session_start();
  require "conexao.php";

  $id_usuario = $_SESSION['id_usuario'];
  $sql = "select * from filme fi inner join favoritos fv on fi.id = fv.idFilme where fv.idUsuario = $id_usuario";

  $resultado = mysqli_query($conexao, $sql);
  $res = [];
  while ($row = mysqli_fetch_object($resultado)) {
    $res[] = $row;
  }
  echo json_encode($res)
 ?>
