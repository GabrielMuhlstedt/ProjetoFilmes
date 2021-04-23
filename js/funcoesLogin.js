$(document).ready(function(){
  $('#bLogar').click(function(){

    fHashSenha($("#senha_hash").val());
		fLocalComunicaServidor('form-login', 'login')

		return false;
  })
});


function fHashSenha(){

  var senha_hash_md5 = $.MD5($('#senha_hash').val());
  $("#senha_hash").val(senha_hash_md5);

}


function fLocalComunicaServidor(formulario, arquivo){

	var dados = $("#"+formulario).serialize();

	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/"+arquivo+".php",
		data: dados,
		success: function(retorno){

			if(retorno.funcao == "login")
			{
				if(retorno.status == "s")
				{
					alert(retorno.mensagem);
					window.location.href = "../pages/main.html";
				}
				else
				{
					alert(retorno.mensagem);
				}
			}
		}

	});

}
