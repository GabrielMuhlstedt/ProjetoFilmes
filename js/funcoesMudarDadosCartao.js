$(document).ready(function(){
  	$("#bMudar").click(function(){
        fLocalComunicaServidor();
  		return false;
  	});
});


function fLocalComunicaServidor(){
	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/mudarDadosCartao.php",
		data: {
        numCartao: $('#numCartao').val(),
        valCartao: $('#valCartao').val(),
        codSeg: $('#codSeg').val(),
        nomeTitular: $('#nomeTitular').val(),
        tokenCar: $('#tokenCar').val(),
    },
		success: function(retorno){

			if(retorno.funcao == "Cartao")
			{
				if(retorno.status == "s")
				{
					alert(retorno.mensagem);
          window.location.href = "../pages/main/";
				}
				else
				{
					alert(retorno.mensagem);
				}
			}
		}

	});
}
