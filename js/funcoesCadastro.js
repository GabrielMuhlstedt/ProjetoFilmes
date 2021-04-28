$(document).ready(function(){


  	$("#bCadastrar").click(function(){
        gerarToken();
        hashMD5();
        fLocalComunicaServidor();
        fLocalEnviaEmail();


  		return false;
  	});
});

var token = gerarToken();

function gerarToken(){
  var token = Math.random().toString(16).substr(2);
  return token;
}

function hashMD5(){
   var senha = $.MD5($('#senha').val());
   return(senha);
}

function fLocalComunicaServidor(){

  var senha_hash = hashMD5();

	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/cadastro.php",
		data: {
        nomePessoa: $('#nome').val(),
        dataNascimento: $('#data_nascimento').val(),
        email: $('#email').val(),
        senha: senha_hash.toString(),
        numCartao: $('#numCartao').val(),
        valCartao: $('#valCartao').val(),
        codSeg: $('#codSeg').val(),
        nomeTitular: $('#nomeTitular').val(),
        cpfCnpj: $('#cpfCnpj').val(),
        tokenVer: token.toString(),
    },
		success: function(retorno2){

			if(retorno2.funcao == "cadastro")
			{
				if(retorno2.status == "s")
				{
					alert(retorno2.mensagem);
				}
				else
				{
					alert(retorno2.mensagem);
				}
			}
		}

	});
}


function fLocalEnviaEmail(){
  $.ajax({
    type:"POST",
    dataType: "json",
    url: "../php/enviarEmail.php",
    data:{
      email: $('#email').val(),
      tokenVer: token.toString(),
    },
    success:function(retorno2){
    }
  });
}
