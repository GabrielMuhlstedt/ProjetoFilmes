$(document).ready(function(){
  	$("#bConfirma").click(function(){
      fLocalComunicaServidor();
      fLocalEnviaEmail();
      return false;
  	});
});



function fLocalComunicaServidor(){
	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/confirmaMudarDados.php",
		data: {
        tokenCar: token.toString(),
    },
		success: function(retorno){

			if(retorno.funcao == "mudarDados")
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
