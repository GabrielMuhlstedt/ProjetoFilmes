
    
    let listaDrama = document.getElementById("listaDrama");
    let listaRomance = document.getElementById("listaRomance");
    let listaComedia = document.getElementById("listaComedia");
    let listaFantasia = document.getElementById("listaFantasia");
    let listaHeroi = document.getElementById("listaHeroi");

function formarFilmes(filmes = Array()){

    for(let i = 1; i < 6; i++){
        let divPai = document.getElementById("listaAcao"); /*tornar isso dinâmico*/

        let card = document.createElement('div');
        card.className = 'card';
        divPai.appendChild(card);

        let filme = document.createElement('div');
        filme.className = 'filme';
        card.appendChild(filme);

        let capa = document.createElement('div');
        capa.className = 'img';
        filme.appendChild(capa);

        let img = document.createElement('img');
        /*img.url = ""; tornoar isso dinâmico*/
        capa.appendChild(img);

        let info = document.createElement('div');
        info.className = 'info';
        filme.appendChild(info);

        /*Só falta tornar algumas coisa dinÊmicas aqui, fora isso, nada mais. */
        let lista = "Título: ***** <br/>"
        lista += "Gênero: ****** <br/>"
        lista += "Ano: **** <br/>"
        lista += "Duração: ******* <br/>"
        lista += "Sinopse: hjfdbv.kjbviç auierowdnvv kfio boib fe...<br/>"
        lista += "Trailer: <button onclick='mostrarModal()'>trailer<button/>"

        info.innerHTML = lista;

    }

}

function mostrarModal(){
    $('#sucessoGravacao').modal('show')
}

/*

function adicionarFilme(genero, contador, classe1, classe2, elementoPai){
            let divPai = document.querySelector('#'+elementoPai);
            
            

            let container = document.createElement('div');
            container.classList.add('filme')
            divPai.appendChild(container);
            
            let filme = document.createElement('div');
            filme.classList.add(classe1);
            filme.classList.add(classe2);
            container.appendChild(filme)

            let imgFilme = document.createElement('img');
            imgFilme.src = './imagens/filme'+genero+contador+'.jpg';
            
            filme.appendChild(imgFilme)
            
            
        }

*/