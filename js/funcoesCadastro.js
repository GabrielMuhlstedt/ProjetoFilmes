$(document).ready(function(){


  	$("#bGravar").click(function(){
        fHashSenha($("#senha_hash").val());
        gerarToken()
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


function fHashSenha(){

  var senha_hash_md5 = $.MD5($('#senha_hash').val());
  $("#senha_hash").val(senha_hash_md5);

}

function fLocalComunicaServidor(){

	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/cadastro.php",
		data: {
        nomePessoa: $('#nome').val(),
        dataNascimento: $('#data_nascimento').val(),
        email: $('#email').val(),
        senha: $('#senha_hash').val(),
        numCartao: $('#numCartao').val(),
        valCartao: $('#valCartao').val(),
        codSeg: $('#codSeg').val(),
        nomeTitular: $('#nomeTitular').val(),
        cpfCnpj: $('#cpfCnpj').val(),
        tokenVer: token.toString(),
    },
		success: function(retorno){

			if(retorno.funcao == "cadastro")
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
    url: "../php/enviarEmail.php",
    data:{
      email: $('#email').val(),
      tokenVer: token.toString(),
    },
    success:function(retorno2){
    }
  });
}

//window.location.href = "../index.html";
