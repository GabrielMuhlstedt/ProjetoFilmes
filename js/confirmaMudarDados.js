$(document).ready(function(){
  	$("#bConfirma").click(function(){
      gerarToken();
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
      email: $('#email').val(),
      tokenCar: token.toString(),
    },
		success: function(retorno){

			if(retorno.funcao == "confirma")
			{
				if(retorno.status == "s")
				{
					//alert(retorno.mensagem);
				}
				else
				{
					alert(retorno.mensagem);
				}
			}
		}

	});
}

var token = gerarToken();

function gerarToken(){
  var token = Math.random().toString(16).substr(2);
  return token;
}



function fLocalEnviaEmail(){
  $.ajax({
    type:"POST",
    dataType: "json",
    url: "../php/enviarEmailDados.php",
    data:{
      email: $('#email').val(),
      tokenCar: token.toString(),
    },
    success:function(retorno2){
      if(retorno.funcao == "mudar")
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
