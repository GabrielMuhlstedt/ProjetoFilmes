$(document).ready(function(){
  	$("#bSenha").click(function(){
        hashMD5();
        fLocalComunicaServidor();


      return false;
  	});
});

function hashMD5(){
   var senha = $.MD5($('#senha').val());
   return(senha);
}

function fLocalComunicaServidor(){

  var senha_hash = hashMD5();
	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/mudarSenha.php",
		data: {
        senha: senha_hash.toString(),
        tokenSenha: $('#tokenSenha').val(),
    },
    success: function(retorno){
      if(retorno.funcao == "SenhaNova")
      {
        if(retorno.status == "s")
        {
          alert(retorno.mensagem);
        }
        else
        {
          alert(retorno.mensagem);
        }
      }
    }

	});

}
