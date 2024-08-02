function buscarMarcas(){
    fetch("http://localhost:3000/marcas", {
        method: "get"
    })
    .then(resposta => resposta.json())
    .then(dados => {
        let ulListaMarcas = document.getElementById("lista-marcas");

        for (let i = 0; i < dados.length; i++){
            let marca = dados[i];
            let li = document.createElement("li");
            li.innerText = marca.nome;
            ulListaMarcas.appendChild(li);
        }
    })
    .catch(erro => {
        console.error("Ocorreu um erro ao consultar as marcas");
    })
}


document.getElementById("atualizar").onclick = buscarMarcas;