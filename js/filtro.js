var filmes = null;

class Filtro{
    constructor(titulo, genero, ano, relev) {
        this.titulo = titulo;
        this.genero = genero;
        this.ano = ano;
        this.relev = relev;
    }
}



function filtrar(filtro){

    let filmesFiltrados = filmes;
    console.log("Esse são os filmes Filtrados: " )
    console.log(filmesFiltrados)
    if(filtro.titulo != ''){
        console.log("Entrou no filtro do título");

        filmesFiltrados = filmesFiltrados.filter(f => f.Titulo.substring(0, filtro.titulo.length).toLowerCase() == filtro.titulo.toLowerCase());
        //Arrumar isso
    }
    if(filtro.genero != ''){
        console.log("Entrou no filtro do gênero");
        filmesFiltrados = filmesFiltrados.filter(f => f.Genero == filtro.genero);

    }

    if(filtro.ano != ''){
        console.log("Entrou no filtro do Ano");
        filmesFiltrados = filmesFiltrados.filter(f => f.Ano == filtro.ano);
    }

    if(filtro.relev != ''){
        console.log("Entrou no filtro da relevância");
        filmesFiltrados = filmesFiltrados.filter(f => f.Relevancia < filtro.relev);
        filmesFiltrados = filmesFiltrados.filter(f => f.Relevancia > filtro.relev - 1);
    }

    console.log("Esse são os filmes depois de Filtrados: " )
    console.log(filmesFiltrados)

    formarFilmes(filmesFiltrados)

}

function pegarFiltros(){

    let titulo = document.getElementById("filtroTitulo").value;
    let genero = document.getElementById("filtroGenero").value;
    let ano = document.getElementById("filtroAno").value;
    let relevancia = document.getElementById("filtroRelevancia").value;


    let filtro = new Filtro(titulo, genero, ano, relevancia);

    filtrar(filtro);




}

function formarFilmes(listaFilmes){

    let area = document.getElementById("filmesArea");
    area.innerHTML = "";

    console.log("Esses são os filmes que serão montados: ")
    console.log(listaFilmes)
    for(var i = 0; i <  listaFilmes.length; i++){

        console.log("Logs dentro do FOR")
        console.log(listaFilmes[i]["Imagens"])
        construirCard(document.getElementById("filmesArea"), listaFilmes[i])
    }
}


function construirCard(lista, filme){



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
        img.src = "../images/" + filme["Imagens"];
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

    let html = "<h6>" + filme["Titulo"] + "</h6>";
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
    html += "<div class='modal-body modalConfig' id='modal_conteudo'>";

    html += "</div>";
    html += "<button onclick='fecharModal()' class='modalFechar'>Fechar</button>";
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
    url: "../php/puxarFilmes.php",
    success: function(retorno){
        console.log("Esse é o retorno: ")
        console.log(retorno)

        filmes = retorno;
        console.log("Esse é o filmes: ")
        console.log(filmes)
        formarFilmes(filmes);

    }
})
