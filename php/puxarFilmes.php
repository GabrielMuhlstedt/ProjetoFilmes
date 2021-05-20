<?php
  require "conexao.php";

  $resultado = mysqli_query($conexao, "SELECT * FROM filme");

  while ($row = mysqli_fetch_object($resultado)) {
    $res[] = $row;
  }
  echo json_encode($res)
 ?>
