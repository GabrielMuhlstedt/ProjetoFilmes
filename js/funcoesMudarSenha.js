$(document).ready(function(){
  	$("#bSenha").click(function(){
        if(validar()){
          hashMD5();
          fLocalComunicaServidor();
        }


      return false;
  	});
});

function hashMD5(){
   var senha = $.MD5($('#senha').val());
   return(senha);
}

function fLocalComunicaServidor(){

  var senha_hash = hashMD5();
	$.ajax({
		type:"POST",
		dataType: "json",
		url: "../php/mudarSenha.php",
		data: {
        senha: senha_hash.toString(),
        tokenSenha: $('#tokenSenha').val(),
    },
    success: function(retorno){
      if(retorno.funcao == "SenhaNova")
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

function confirmarSenha(){

  let erro = false;

  let senha = document.getElementById('senha').value;
  console.log(senha)
  let confSenha = document.getElementById('ConfSenha').value;
  console.log(confSenha)

  if(senha !== confSenha){
      let box = document.getElementById('senha');
      box.className = 'confirmaInput input-box-erro'

      let boxConf = document.getElementById('ConfSenha');
      boxConf.className = 'confirmaInput input-box-erro'

      alert("Senha e Confirmar Senha não coincidem")
      erro = true;
  }
  return erro;
}

function zerarValidacao(){

  let box = document.getElementById('senha');
  box.className = 'confirmaInput'

  let boxConf = document.getElementById('ConfSenha');
  boxConf.className = 'confirmaInput'

}

function validar(){

  zerarValidacao()

  if(!confirmarSenha()){
      return true
  }

  return false;
}
