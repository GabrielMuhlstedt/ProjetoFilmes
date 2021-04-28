$(document).ready(function(){
  $("#bRecuperar").click(function(){
    gerarToken()
    fLocalComunicaServidor2()
    fLocalEnviaEmail();

    return false;
  });
});

var token = gerarToken();
function gerarToken(){
  var token = Math.random().toString(16).substr(2);
  return token;
}

function fLocalComunicaServidor2(){

	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/recuperar.php",
		data: {
        email: $('#email').val(),
        tokenSenha: token.toString(),
    },
		success: function(retorno){

			if(retorno.funcao == "recuperar")
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


function fLocalEnviaEmail(){
  $.ajax({
    type:"POST",
    dataType: "json",
    url: "../php/enviarEmailRecup.php",
    data:{
      email: $('#email').val(),
      tokenSenha: token.toString(),
    },
    success:function(retorno2){
      if(retorno2.funcao == "recuperar")
			{
				if(retorno2.status == "s")
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



//pessoa digita o email, clica no botao-> envia o email com um token se o email ta no banco, usar query(se retornar s manda pra proxima), no email tem o link pra pagina -> nova senha com token do Email
//query percorre o banco pra verificar o banco pra ver se o token ta certo, se tiver envia pro banco as senhas certas.

//dados do cartão igual ao de email
