var contAcao = 0;
var contRomance = 0;
var contDrama = 0;
var contComedia =0;
var contFantasia = 0;
var contHeroi = 0;
var contFilme = 30;

function formarFilmes(filmes){
    console.log("Log do formarFilmes")



    for(var i = 0; i < filmes.length; i++){

        console.log("Logs dentro do FOR")

        if(filmes[i]["Genero"] == "Acao" && contAcao < 6){
            console.log(filmes[i]["Titulo"] + "É de Ação")
            construirCard(document.getElementById('listaAcao'), filmes[i]);
            contAcao++;

        }else if(filmes[i]["Genero"] == "Romance" && contRomance < 6){
            console.log(filmes[i]["Titulo"] + "É de Romance")
            construirCard(document.getElementById('listaRomance'), filmes[i]);
            contRomance++;


        }else if(filmes[i]["Genero"] == "Drama" && contDrama < 6){
            console.log(filmes[i]["Titulo"] + "É de Drama")
            construirCard(document.getElementById('listaDrama'),filmes[i]);
            contDrama++;


        }else if(filmes[i]["Genero"] == "Comedia" && contComedia < 6){
            console.log(filmes[i]["Titulo"] + "É de Comédia")
            construirCard(document.getElementById('listaComedia'),filmes[i]);
            contComedia++;


        }else if(filmes[i]["Genero"] == "Fantasia" && contFantasia < 6){
            console.log(filmes[i]["Titulo"] + "É de Fantasia")
            construirCard(document.getElementById('listaFantasia'),filmes[i]);
            contFantasia++;


        }else if(filmes[i]["Genero"] == "Herois" && contHeroi < 6){
            console.log(filmes[i]["Titulo"] + "É de Herói")
            construirCard(document.getElementById('listaHeroi'), filmes[i]);
            contHeroi++;

        }else {
            console.log("Gênero desconhecido")
            console.log(filmes[i]["Genero"]);
        }
    }
}


function construirCard(lista, filme){

    console.log("testando valor de Titulo");
    console.log(filme["Titulo"])
    console.log("Criando Card de " + filme["Titulo"]);
        let divPai = lista;

        let card = document.createElement('div');
        card.className = 'card';
        divPai.appendChild(card);

        let divFilme = document.createElement('div');
        divFilme.className = 'filme';
        card.appendChild(divFilme);

        let capa = document.createElement('div');
        capa.className = 'img';
        divFilme.appendChild(capa);

        let img = document.createElement('img');
        img.src = "../../images/" + filme["Imagens"];
        capa.appendChild(img);

        let info = document.createElement('div');
        info.className = 'info';
        divFilme.appendChild(info);

        preencher(filme, info)

}

function preencher(filme, info){
    console.log("Preenchendo" + filme["Titulo"])

    let botaoModal = document.createElement('button');
    botaoModal.onclick = function(){
        mostrarModal(filme)
    };
    botaoModal.innerHTML = "Trailer"

    let botaoFavorito = document.createElement('button');
    botaoFavorito.onclick = function(){
        favoritar(filme)
    }
    botaoFavorito.innerHTML = "Favoritar";


    console.log("Preenchendo card de " + filme["Titulo"])

    let html = "<h6>" + filme["Titulo"] + "</h6>";
    html += "<br>Gênero: " + filme["Genero"];
    html += "<br>Ano: " + filme["Ano"];
    html += "<br>Duração: " + filme["Duracao"];
    html += "<br>"


    info.innerHTML = html;
    info.appendChild(botaoModal);
    info.appendChild(botaoFavorito);

}

function mostrarModal(filme){
    let video = filme["Trailer"];

    let modal = document.getElementById('modalVideo');

    let html = "<div class='modal-dialog' role='document'>";
    html += "<div class='modal-content'>";
    html += "<div class='modal-body modalConfig' id='modal_conteudo'> ";

    html += "</div>";
    html += "<button onclick='fecharModal()'class='modalFechar'>Fechar</button>";
    html += "</div>";
    html += "</div>";
    html += "<div class='divFundo'></div>";

    html += "</div>";

    modal.innerHTML = html

    let conteudo = document.getElementById('modal_conteudo');
    conteudo.innerHTML = video;
    conteudo.innerHTML += "<h1>Sinopse: </h1>" + filme["Sinopse"];


    $('#modalVideo').modal('show')
}

function fecharModal() {

let modal = document.getElementById('modalVideo');
modal.innerHTML = '';

}

function favoritar(filme){

    dado = {
        "id": filme["id"]
    }
    console.log(dado)
$.ajax({
    type: "POST",
    dataType: "json",
    data: dado,
    url: "../../php/favoritar.php",
    success: function(retorno){
        console.log("Deu success")
        console.log(retorno)
        alert(retorno['mensagem']);
    },
    error: function(retorno){
        console.log("Deuu error")
        console.log(retorno)
    }
})

}

$.ajax({
    type: "POST",
    dataType: "json",
    url: "../../php/puxarFilmes.php",
    success: function(retorno){
        console.log("deu success")
        console.log(retorno)

        formarFilmes(retorno)

    },
    error: function (retorno){
        console.log(retorno)

        console.log("Deu erro aqui.")
    }
})
