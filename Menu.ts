import readlinesync from 'readline-sync';
import { colors } from './src/util/Color';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';



export function main() {

    let opcao: number;

    const cp1 = new ContaPoupanca(123, 157, 2, "Ezequiel Almeida", 2000, 10)
    const cp2 = new ContaPoupanca(123, 160, 2, "Eduardo Almeida", 150.000, 4)
    cp1.visualizar();
    cp2.visualizar();

    //Novas Instâncias da Classe Conta (Objetos)
    //const c1: Conta = new Conta(1, 1234, 1, 'Júlia Castro', 800000.00);
    //const c2: Conta = new Conta(2, 1234, 2, 'Marcella Sanches', 600000.00);

    // Visualizando os dados da Conta c1
    //c1.visualizar();

    // Visualizando os dados da Conta c2
    //c2.visualizar();

    // Visualizando o Saldo da Conta c1
    //console.log(`\nO Saldo da conta 01 é: ${c1.saldo}`);

    // Alterando o Saldo da Conta c2
    //c2.saldo = 900000.00;

    // Visualizando o Saldo da Conta c2, depois de atualizar o valor
   // console.log(`\nO Saldo da conta 02 é: ${c2.saldo}`);

    // Saque nas Contas
   // console.log(`\nSacar 100.00 Reais da Conta C1: ${c1.sacar(100)}`); // true
    //c1.visualizar();

   // console.log(`\nSacar 1000000.00 Reais da Conta C2: ${c2.sacar(1000000)}`); // false
   //c2.visualizar();

    // Depósito nas Contas
    //console.log(`\nDepositar 200000.00 Reais da Conta C1: `); 
    //c1.depositar(200000)
   // c1.visualizar();

   // console.log(`\nDepositar 300000.25 Reais da Conta C2: `); 
   // c2.depositar(300000.25)
   // c2.visualizar();

//Novas Instâncias da Classe Conta Corrente (Objetos)
const cc1: Conta = new ContaCorrente(1, 1234, 1, 'Amanda Magro', 100000.00, 100000);
const cc2: Conta = new ContaCorrente(2, 1234, 1, 'Joao Silva', 1000.00, 100.00);



cc1.visualizar();
cc2.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.blue, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.magenta, 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre(): void {


    }
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ezequiel Almeida ");
    console.log("Generation Brasil - ezequiellalmeida2003@gmail.com");
    console.log("github.com/EzeAlmeida");
    console.log("*****************************************************");


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();