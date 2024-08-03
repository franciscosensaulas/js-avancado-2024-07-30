/* 
Create  => permitir cadastrar
Read    => permitir visualizar
Update  => permitir alterar
Delete  => permitir apagar
*/

function cadastrar(nomeMarca) {
    let marca = {
        "nome": nomeMarca
    }
    
    fetch("http://localhost:3000/marcas", {
        method: "post",
        body: JSON.stringify(marca)
    })
    .then(data => console.log("Marca cadastrada com sucesso"))
    .catch(erro => console.error("Erro ao tentar cadastrar a marca"));
}

async function obterTodos() {
    let resposta = await fetch("http://localhost:3000/marcas", {
        method: "get"
    });
   
    if(resposta.ok){
        let marcas = resposta.json();
        return marcas;
    }
    
    console.error("Ocorreu um erro ao consultar as marcas");
    return null;
}

async function obterMarcaPorNome(nome){
    let marcas = await obterTodos();
    if (marcas === null)
        return null;

    for (let i = 0; i < marcas.length; i++){
        let marca = marcas[i];
        if(marca.nome === nome)
            return marca;
    }

    return null;
}

function apagarPorId(id){
    fetch(`http://localhost:3000/marcas/${id}`,{
        method: "DELETE"
    })
    .then(requisicao => {
        if (requisicao.ok)
            console.log("Marca apagada com sucesso");
        else
            console.log(`Não encontrada marca com o id ${id}`);
    })
    .catch(erro => console.error("Não foi possível apagar"));
}

function alterar(id, nome) {
    let marca = {
        "nome": nome
    }
    fetch(`http://localhost:3000/marcas/${id}`, {
        method: "PUT",
        body: JSON.stringify(marca)
    })
    .then(response => {
        if (response.ok === false){
            console.log(`Marca não alterada pois não foi possível encontrar com o id ${id}`);
            return;
        }
        console.log("Marca alterada com sucesso");
    })
    .catch(error => console.error("Não foi possível alterar a marca"));
}

async function apagarPorNome(nome) {
    let marca = await obterMarcaPorNome(nome);
    if (marca === null){
        console.log(`Não encontrada marca com o nome ${nome}`);
        return;
    }
    apagarPorId(marca.id);
}

async function apresentarTodos(){
    let marcas = await obterTodos();
    console.log("Marcas: ");

    for (let index = 0; index < marcas.length; index++) {
        const marca = marcas[index];
        console.log(`Id: ${marca.id} Nome: ${marca.nome}`)
    }
}

apresentarTodos();
// cadastrar("Intel");
// cadastrar("Razer");
// alterar("795f", "AMD 3.0");
// apagarPorNome("Dell");
// apagarPorId("9721");