import { Conta } from "../src/model/Conta";

export interface ContaRepository{

//metodos do CRUD

procurarPorNumero(numero:number): void;
listarTodas():void;
cadastrar(conta: Conta): void;
atualizar(conta: Conta): void;
deletar(numero: number): void;

//Metodos Bancários

sacar(numero:number, valor: number): void
depositar(numero:number, valor: number): void
transferir(numeroOrigem:number, numeroDestino:number, valor: number): void


}