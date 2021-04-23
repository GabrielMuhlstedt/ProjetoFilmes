$(document).ready(function(){
  $("#bRecuperar").click(function(){
    fLocalComunicaServidor('form-recupSenha', 'recupSenha')

    return false;
  });
});
