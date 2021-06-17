function verificaAdm(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/verificaAdm.php",
        success: function(retorno){
            console.log(retorno);
            criarAdmFunctions(retorno);

        }
    })
}

function criarAdmFunctions(resultado){
    if(resultado["status"] == "s"){
        let menu = document.getElementById("menu");
        let li = document.createElement("li");

        let a = document.createElement("a");
        a.href = "../cadastrarFilmes.html";
        li.appendChild(a);

        let icone = document.createElement("span");
        icone.className = "icone";
        a.appendChild(icone);

        let titulo = document.createElement("span");
        titulo.className = 'titulo';
        titulo.innerHTML = 'Cadastrar Filme';
        a.appendChild(titulo);

        menu.appendChild(li);

    }
}

verificaAdm();
