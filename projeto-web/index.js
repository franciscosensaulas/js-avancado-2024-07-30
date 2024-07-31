function apresentarNomeCompleto() {
    console.log("Olá mundo");
    let nome = "Francisco";
    let sobrenome = "Lucas Janesch Lange Sens";
    let nomeCompleto = `${nome} ${sobrenome}`;
    console.log(`Nome: ${nomeCompleto}`);
}

function apresentarSoma() {
    let numero1 = 8;
    let numero2 = 3;
    let soma = numero1 + numero2;
    console.log(`Soma: ${soma}`);
    if (soma % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Não é par");
    }
}

function apresentarDadosVetor() {
    // Criando o vetor
    let nomes = [];
    // Adicionando elemento no vetor
    nomes.push("Bob");
    nomes.push("Zeus");
    nomes.push("Seus");
    // Quantidade de elementos do vetor
    const quantidadeCachorros = nomes.length;
    // Alterando um elemento na posição 2 para Teus, que anteriormente era Seus
    nomes[2] = "Teus";

    // Obter o indice da posição do vetor referente ao nome Bob
    const indiceBob = nomes.findIndex(nome => nome == "Bob");
    // Remover bob do vetor
    nomes.splice(indiceBob, 1);

    console.log(`Quantidade de cachorros: ${quantidadeCachorros}`);
    console.log(`Cachorros: ${nomes}`);
}

function apresentarDadosObjeto() {
    let thor = {
        nome: "thor",
        forca: 89,
        defesa: 90,
        categoria: "Deus",
        sangue: {
            fatorRh: "**",
            tipoSanguineo: "A"
        },
        filhos: ["Magni", "Thrúd"]
    }
    thor.filhos.push("Lokinho");

    console.log(`Nome: ${thor.nome}`);
    console.log(`Força: ${thor.forca}`);
    console.log(`Sangue: ${thor.sangue.tipoSanguineo}${thor.sangue.fatorRh}`);
    console.log(`Filhos: 
    ${thor.filhos[0]}
    ${thor.filhos[1]}
    ${thor.filhos[2]}`);
}


// Função com retorno que recebe como parâmetro lado1 e o lado2
function calcularAreaRetangulo(lado1, lado2) {
    let area = (lado1 * lado2);
    return area;
}

function exemploFormasGeometricas() {
    let areaRetangulo = calcularAreaRetangulo(5, 12);
    console.log(`Área do retângulo: ${areaRetangulo}`);
}


function calcularSalarioBruto(valorHora, quantidadeHoras, auxilios) {
    let salarioBruto = valorHora * quantidadeHoras;
    let valorAuxilios = calcularAuxilios(auxilios);
    return salarioBruto + valorAuxilios;
}

function calcularAuxilios(auxilios) {
    let valorAuxilios = 0;
    for (let i = 0; i < auxilios.length; i = i + 1) {
        valorAuxilios = valorAuxilios + auxilios[i]
    }
    return valorAuxilios;
}

function calcularDescontos(salarioBruto, descontos) {
    let valorDescontos = 0;
    // Percorrer cada uma da lista de objetos dos descontos 
    for (let i = 0; i < descontos.length; i += 1) {
        // Obter o desconto da lista de descontos
        let desconto = descontos[i];
        // Verificar se o tipo do cálculo do desconto é normal
        if (desconto.tipo === "normal") {
            // Acrescentar o valor do desconto na soma dos descontos
            valorDescontos += desconto.valor;
        } else {
            // Explicação do código abaixo
            // Desconto de INSS de 8%, desconto.percentula conterá 8
            // O percentualDesconto receberá 0.08 que é 8 / 100
            // O valorDesconto irá multiplicar o salário bruto * 0.08(8%)
            
            // Calcular o percentual do desconto
            let percentualDesconto = desconto.percentual / 100;
            // Calcular o valor do desconto
            let valorDesconto = salarioBruto * percentualDesconto;
            // Acrescentar o valor do desconto calculado utilizando percentual  
            valorDescontos += valorDesconto;
        }
    }
    // Retorna a soma de todos os descontos
    return valorDescontos;
}

function calcularSalarioLiquido(salarioBruto, descontos){
    let valorDescontos = calcularDescontos(salarioBruto, descontos);
    let salarioLiquido = salarioBruto - valorDescontos;
    return salarioLiquido;
}

// https://dontpad.com/franciscosensaulas/js
function exemploFolhaPagamento() {
    let valorHora = 20;
    let quantidadeHoras = 220;
    let alimentacao = 1400;
    let combustivel = 12.50 * 20;
    let idioma = 300;
    let homeOffice = 150;
    let moradia = 200;
    let descontos = [
        {
            nome: "Unimed",
            valor: 400,
            tipo: "normal",
        },
        {
            nome: "valeOnibus",
            percentual: 6,
            tipo: "percentual"
        },
        {
            nome: "inss",
            percentual: 17,
            tipo: "percentual"
        }
    ]

    let auxiliosRecebidos = [alimentacao, combustivel, idioma, homeOffice, moradia]
    let salarioBrutoColaborador = calcularSalarioBruto(valorHora, quantidadeHoras, auxiliosRecebidos);
    let salarioLiquido = calcularSalarioLiquido(salarioBrutoColaborador, descontos)

    console.log("Salário Bruto: ", salarioBrutoColaborador);
    console.log("Salário Líquido: ", salarioLiquido);
}

exemploFolhaPagamento();














