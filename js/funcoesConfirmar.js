$(document).ready(function(){

  	$("#bConfirmar").click(function(){
  		fLocalComunicaServidor();
  		return false;
  	});
});


function fLocalComunicaServidor(){

	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/confirmarEmail.php",
		data: {
        tokenVer: $('#token').val(),
    },
		success: function(retorno){

			if(retorno.funcao == "confirmarEmail")
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
