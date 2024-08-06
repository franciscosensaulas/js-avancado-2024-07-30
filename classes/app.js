class Conta {
    constructor(nomeCliente, saldoConta, tipoConta, limiteCreditoConta){
        this.nome = nomeCliente;
        this.saldo = saldoConta;
        this.tipo = tipoConta;
        this.limiteCreditoConta = limiteCreditoConta;
        this.extrato = []; // lista(vetor)
    }
    depositar(valor){
        let saldoAnterior = this.saldo;
        this.saldo += valor;
        this.extrato.push(`Depositado o valor de ${valor} com sucesso, saldo anterior: ${saldoAnterior}!`);
    }
    mostrarExtrato(){
        console.log(`Cliente: ${this.nome}\nConta: ${this.tipo}\nSaldo: ${this.saldo}\nExtrato:`);
        if (this.extrato.length === 0){
            console.log("Nenhuma movimentação");
            return;
        }
        for (let index = 0; index < this.extrato.length; index++) {
            const registro = this.extrato[index];
            console.log(`\t${registro}`);
        }
    }
}
let conta1 = new Conta("Judity", 0, "Conta Salário", 0);
conta1.depositar(600.99);
conta1.depositar(1);
conta1.depositar(1000.00);
conta1.mostrarExtrato();

let conta2 = new Conta("Victor com H", -501, "Conta Negativado", 50000);
conta2.mostrarExtrato();