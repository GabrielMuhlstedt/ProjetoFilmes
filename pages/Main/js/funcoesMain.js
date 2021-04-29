$(document).ready(function(){

  fLocalComunicaServidor()

  $("#bDadosCartão").click(function(){
      window.location.href = "../../pages/ConfirmaMudarDados.html";
    return false;
  });
});

function fLocalComunicaServidor(){


	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../../php/validaSessao.php",
		success: function(retorno){

			if(retorno.funcao == "valida-sessao")
			{
				if(retorno.status == "s")
				{
					//alert(retorno.mensagem);
				}
				else
				{
					window.location.href = "../../pages/login.html";
				}
			}
		}

	});

}
