
$(document).ready(function(){
  $("#bEnviar").click(function(){
      //if(validar()){
      redimensionaImagem();
      cadastrar();
      //}
  	return false;
  });
});

var arquivo;
var formData;
var barraInvertida1 = "\\";
var barraInvertida = barraInvertida1.substring(0,1);
var barraNormal = "/";

function redimensionaImagem() {
    arquivo = document.getElementById("upload-image-filmes").files[0];
    formData = new FormData();
    formData.append("file", arquivo);
}

function cadastrar(){
  var fullPath = $("#upload-image-filmes").val();
  if (fullPath){
    var startIndex = (fullPath.indexOf(barraInvertida) >= 0 ? fullPath.lastIndexOf(barraInvertida) : fullPath.lastIndexOf(barraNormal));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf(barraInvertida) === 0 || filename.indexOf(barraNormal) === 0){
      filename = filename.substring(1);
    }
  }

  $.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/uploadFilme.php",
    data: {
        titulo: $('#titulo').val(),
        genero: $('#genero').val(),
        ano: $('#ano').val(),
        duracao: $('#duracao').val(),
        relevancia: $('#relevancia').val(),
        sinopse: $('#sinopse').val(),
        trailer: $('#trailer').val(),
        filmeSerie: $('#filmeSerie').val(),
        imagem: filename,
    },
    success: function(retorno){
    }
  })
  $.ajax({
      url: "../php/enviaImagem.php",
      type: "post",
      data: formData,
      contentType:false,
      cache: false,
      processData: false,
      success: function(retorno){
      }
  })

  }
