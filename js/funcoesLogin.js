$(document).ready(function(){
  $('#bLogar').click(function(){
    hashMD5();
		fLocalComunicaServidor()

		return false;
  })
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
		url: "../php/login.php",
		data:{
        email: $('#email').val(),
        senha: senha_hash.toString(),
    },
		success: function(retorno){

			if(retorno.funcao == "login")
			{
				if(retorno.status == "s")
				{
					alert(retorno.mensagem);
					window.location.href = "../pages/main/index.html";
				}
				else
				{
					alert(retorno.mensagem);
				}
			}
		}

	});

}
