$(document).ready(function(){


  	$("#bCadastrar").click(function(){
        if(validar()){
          gerarToken();
          hashMD5();
          fLocalComunicaServidor();
          fLocalEnviaEmail();
        }


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
		success: function(retorno){

			if(retorno.funcao == "cadastrar")
			{
				if(retorno.status == "s")
				{
					alert(retorno.mensagem);
          window.location.href = "../pages/login.html";
				}
				else
				{
					alert(retorno.mensagem);
          window.location.href = "../pages/cadastro.html";
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
      if(retorn2o.funcao == "cadastrar")
      {
        if(retorno2.status == "s")
        {
          window.location.href = "../pages/login.html";
        }
        else
        {
          alert(retorno2.mensagem);
        }
      }
    }
  });
}

function zerarValidacao(){
  let box = document.getElementById('box-nome');
  box.className = 'input-box'

  let boxNasc = document.getElementById('box-dataNasc');
  boxNasc.className = 'input-box'

  let boxEmail = document.getElementById('box-email');
  boxEmail.className = 'input-box'

  let boxSenha = document.getElementById('box-senha');
  boxSenha.className = 'input-box'

  let boxConf = document.getElementById('box-ConfSenha');
  boxConf.className = 'input-box'

  let boxNum = document.getElementById('box-numCartao');
  boxNum.className = 'input-box'

  let boxVal = document.getElementById('box-valCartao');
  boxVal.className = 'input-box'

  let boxCod = document.getElementById('box-codSeg');
  boxCod.className = 'input-box'

  let boxNomeT = document.getElementById('box-nomeTitular');
  boxNomeT.className = 'input-box'

  let boxCpf = document.getElementById('box-cpfCnpj');
  boxCpf.className = 'input-box'
}


function validarCampoPreenchido(){

  let erro = false;

  let nome = document.getElementById('nome').value;

  if(nome === '' || nome == null || nome == undefined){
      let box = document.getElementById('box-nome');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let data_nascimento = document.getElementById('data_nascimento').value;
  if(data_nascimento == '' || data_nascimento == null || data_nascimento == undefined){
      let box = document.getElementById('box-dataNasc');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let email = document.getElementById('email').value;
  if(email == '' || email == null || email == undefined){
      let box = document.getElementById('box-email');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let senha = document.getElementById('senha').value;
  if(senha == '' || senha == null || senha == undefined){
      let box = document.getElementById('box-senha');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let ConfSenha = document.getElementById('ConfSenha').value;
  if(ConfSenha == '' || ConfSenha == null || ConfSenha == undefined){
      let box = document.getElementById('box-ConfSenha');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let numCartao = document.getElementById('numCartao').value;
  if(numCartao == '' || numCartao == null || numCartao == undefined){
      let box = document.getElementById('box-numCartao');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let valCartao = document.getElementById('valCartao').value;
  if(valCartao == '' || valCartao == null || valCartao == undefined){
      let box = document.getElementById('box-valCartao');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let codSeg = document.getElementById('codSeg').value;
  if(codSeg == '' || codSeg == null || codSeg == undefined){
      let box = document.getElementById('box-codSeg');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let nomeTitular = document.getElementById('nomeTitular').value;
  if(nomeTitular == '' || nomeTitular == null || nomeTitular == undefined){
      let box = document.getElementById('box-nomeTitular');
      box.className = 'input-box-erro'
      erro  = true;
  }

  let cpfCnpj = document.getElementById('cpfCnpj').value;
  if(cpfCnpj == '' || cpfCnpj == null || cpfCnpj == undefined){
      let box = document.getElementById('box-cpfCnpj');
      box.className = 'input-box-erro'
      erro  = true;
  }

  return erro;
}

function confirmarSenha(){

  let erro = false;

  let senha = document.getElementById('senha').value;
  console.log(senha)
  let confSenha = document.getElementById('ConfSenha').value;
  console.log(confSenha)

  if(senha !== confSenha){
      let box = document.getElementById('box-senha');
      box.className = 'input-box-erro'

      let boxConf = document.getElementById('box-ConfSenha');
      boxConf.className = 'input-box-erro'

      alert("Senha e Confirmar Senha não coincidem")
      erro = true;
  }
  return erro;
}

function validarData(){

  let erro = false;
  let data_nascimento = document.getElementById('data_nascimento').value;
  for (let i in data_nascimento){
      if(i == 2 || i == 5){
          if(data_nascimento[i] !== "/"){
              let box = document.getElementById('box-dataNasc');
              box.className = 'input-box-erro'
              erro = true;
          }

      }
  }
  if(erro == true){
    alert("Por Favor, Insira a data de nascimento no formato DD/MM/AAAA");
  }
  return erro;

}

function validarValidade(){
  let erro = false
  let valCartao = document.getElementById('valCartao').value;
  for(let i in valCartao){
      if(i == 2){
          if(valCartao[i] !== "/"){
              let box = document.getElementById('box-valCartao');
              box.className = 'input-box-erro'
              alert("Por favor, insira a data de Validade no formato MM/AA")
              erro = true;
          }
      }
  }
  return erro;
}

function validarEmail(){

  let erro = false;
  let email = document.getElementById('email').value;
  console.log(email)
  let StringSplit = email.split('@');
  console.log(StringSplit)

  if(StringSplit.length < 2){
      let box = document.getElementById('box-email');
      box.className = 'input-box-erro'
      alert("Por favor, insira o email no formato email@dominio")
      erro = true;
  }
  return erro;

}


function validar(){

  zerarValidacao()

  if(!validarCampoPreenchido() && !confirmarSenha() && !validarData() && !validarValidade() && !validarEmail()){
      return true
  }

  return false;
}
