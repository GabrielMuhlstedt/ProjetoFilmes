$(document).ready(function(){

  fLocalEventosClick();


});


function fHashSenha(){

  var senha_hash_md5 = $.MD5($('#senhaHash').val());
  $("#senhaHash").val(senha_hash_md5);

}


function fLocalEventosClick(){
  $("#bGravar").click(function(){

    fHashSenha($("#senhaHash").val());

    return false;

  });

}

function fLocalComunicaServidor(arquivo){

  var valores = $("form").serialize();

  $.ajax({

    type: "POST",
    dataType: "json",
    data: valores,
    url: "../php/" + arquivo + ".php",
    success:function(retorno){

    }
  });

}
