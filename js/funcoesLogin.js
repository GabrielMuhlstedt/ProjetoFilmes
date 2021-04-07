$(document).ready(function(){
  $('#bLogar').click(function(){
    fLocalComunicaServidor();

  })
});


  function hashMD5(){
    var senha_hash_md5 = $.MD5($('#senha').val());
    return(senha_hash_md5);
  }

  function fLocalComunicaServidor(){
    var senha_hash = hashMD5();
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "../php/login.php",
      data: {
        email: $('#email').val(),
        senha: senha_hash.toString(),
      },
      sucess: function(retorno){
        if (retorno == "s"){
          alert("Usuario Logou");
        }else{
          alert("Erro no Login!");
        }
      }
    })
  }
