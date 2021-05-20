var limiteDeFilme = 20;


function formarFilmes(filmes){
    console.log("Log do formarFilmes")

    console.log(filmes[0]["FilmeSerie"])

    for(var i = 0; i <  limiteDeFilme; i++){

        console.log("Logs dentro do FOR")

        if(filmes[i]["FilmeSerie"] == "Filme"){
            console.log("É um Filme")
            construirCard(document.getElementById('listaFilmes'), filmes[i]);

        }else if(filmes[i]["FilmeSerie"] == "Serie"){
            console.log("É uma Série")
            construirCard(document.getElementById('listaSeries'), filmes[i]);

        }else if(limiteDeFilme == 0){

            break;

        }else {
            console.log("Tipo Desconhecido")
            console.log(filmes[i]["FilmeSerie"]);
        }
    }
}


function construirCard(lista, filme){

    console.log("testando valor");
    console.log(filme["Titulo"])
    console.log("Criando Card");

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
        img.src = filme["Imagens"]
        capa.appendChild(img);

        let info = document.createElement('div');
        info.className = 'info';
        divFilme.appendChild(info);

        preencher(filme, info)

}

function preencher(filme, info){
    console.log("Preenchendo")

    let botaoModal = document.createElement('button');
    botaoModal.onclick = function(){
        mostrarModal(filme)
    };
    botaoModal.innerHTML = "Trailer"




    console.log("Preenchendo card")

    let html = "Título: " + filme["Titulo"];
    html += "<br>Gênero: " + filme["Genero"];
    html += "<br>Ano: " + filme["Ano"];
    html += "<br>Duração: " + filme["Duracao"];
    html += "<br>"
    html += "<br>"
    html += "<br>"


    info.innerHTML = html;
    info.appendChild(botaoModal);

}

function mostrarModal(filme){
    let video = filme["Trailer"];

    let modal = document.getElementById('modalVideo');

    let html = "<div class='modal-dialog' role='document'>";
    html += "<div class='modal-content'>";
    html += "<div class='modal-body' id='modal_conteudo'>";

    html += "</div>";
    html += "<button onclick='fecharModal()'>Fechar</button>";
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


$.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/mostrarFavoritos.php",
    success: function(retorno){
        console.log(retorno)


        formarFilmes(retorno)

    },
    error: function (retorno){
        console.log(retorno)

        console.log("Deu erro aqui.")
    }
})
