class Carro {
    constructor(marca, modelo, ano, valor, cor, temEscada) {
        // Propriedades
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.cor = cor;
        this.velocidade = 0;
        this.estado = "desligado";
        this.temEscada = temEscada;
        if (this.modelo === "Uno" && this.temEscada === true) {
            this.limiteMaximo = 200;
        } else {
            this.limiteMaximo = 50;
        }
    }

    // Métodos:
    ligar() {
        this.estado = "ligado";
        console.log(`Carro ligado`);
    }

    desligar() {
        if (this.velocidade === 0) {
            this.estado = "desligado";
            console.log(`Carro desligado`);
        }
    }

    aumentarVelocidade() {
        console.log(this.velocidade);
        if (this.estado === "ligado") {
            if (this.velocidade === this.limiteMaximo) {
                console.log(`Limite máximo ${this.limiteMaximo} atingido`);
            } else {
                this.velocidade += 10;
                console.log(`Carro andando a ${this.velocidade} km/h`);
            }
        }
    }

    apresentar() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Valor: ${this.valor}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Velocidade: ${this.velocidade}`);
        console.log(`Estado: ${this.estado}`);
    }

    diminuirVelocidade() {
        if (this.velocidade === 0) {
            console.log("Carro parado, não é possível diminuir além disso");
            return;
        }
        this.velocidade -= 10;
        console.log(`Carro andando a ${this.velocidade} km/h`);
    }
}

let uno = new Carro("Ford", "Uno", 2001, 75.50, "Prata", false);
uno.ligar();
// for (let i = 0; i <= 5; i++) {
// uno.aumentarVelocidade();
// }
uno.aumentarVelocidade(); // 0 => 10km/h
uno.aumentarVelocidade(); // 10 => 20
uno.aumentarVelocidade(); // 20 => 30
uno.aumentarVelocidade(); // 30 => 40
uno.aumentarVelocidade(); // 40 => 50
uno.aumentarVelocidade(); // 50, informando que atingiu o limite máximo do carro

uno.desligar(); // Ignorado pq o carro está em andando

uno.diminuirVelocidade(); // 50 => 40
uno.diminuirVelocidade(); // 40 => 30
uno.diminuirVelocidade(); // 30 => 20
uno.diminuirVelocidade(); // 20 => 10
uno.diminuirVelocidade(); // 10 => 0
uno.diminuirVelocidade(); // 0, informando que o carro está parado
uno.desligar();

uno.apresentar();

/*
https://dontpad.com/franciscosensaulas/js
Ex 1: Criar uma classe chamada Pessoa com os seguintes itens:
Propriedades:
- Nome
- Sobrenome
- Idade
- Altura
- Peso
Métodos:
- Apresentar nome completo
- Calcular o imc

Ex 2: Criar uma classe calculadora com os seguintes itens abaixo:
Métodos:
Somar: recebendo como parâmetro o número 1 e número 2.

Ex 3: Criar uma classe Colaborador com os seguites itens:
Propriedades:
- Nome
- CPF
- Quantidade de horas
- Valor Hora começa com 6.50 por padrão
- Valor dos descontos
- Valor dos acrescimos
Método: 
- Calcular salarioBruto
- Calcular salarioLiquido
*/