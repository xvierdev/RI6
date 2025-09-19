import * as readline from "readline";

import Soma from "./soma";
import subtracao from "./subtracao";
import multiplicacao from "./multiplicacao";
import Divisao from "./disivao";
import Potenciacao from "./potenciacao";
import Radiciacao from "./radiciacao";
import SegundoGrau from "./segundoGrau";

let iniciar = (): void => {
    let leitor: readline.Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question("Quais são os números e operação desejada?\n", (valor: string) => {
        let instrucoes: string[] = valor.split(" ");
        leitor.close();

        if (instrucoes.length < 3) {
            console.log("Número de argumentos insuficiente.");
            return;
        }

        let numero1: number = Number(instrucoes[0]);
        let numero2: number = Number(instrucoes[1]);
        let numero3: number = Number(instrucoes[2])
        let operacao: string = instrucoes[instrucoes.length - 1];

        switch (operacao.toLowerCase()) {
            case 'somar':
                let calculo_soma = new Soma();
                console.log(`O resultado da operação é: ${calculo_soma.calcular(numero1, numero2)}`);
                break;
            case 'subtrair':
                let calculo_subtracao = new subtracao();
                console.log(`O resultado da operação é: ${calculo_subtracao.calcular(numero1, numero2)}`);
                break;
            case 'multiplicar':
                let calculo_multiplicacao = new multiplicacao();
                console.log(`O resultado da operação é: ${calculo_multiplicacao.calcular(numero1, numero2)}`);
                break;
            case 'dividir':
                let calculo_divisao = new Divisao();
                console.log(`O resultado da operação é: ${calculo_divisao.calcular(numero1, numero2)}`);
                break;
            case 'potenciacao':
                let calculo_potenciacao = new Potenciacao();
                console.log(`O resultado da operação é: ${calculo_potenciacao.calcular(numero1, numero2)}`);
                break;
            case 'radiciacao':
                let calculo_radiciacao = new Radiciacao();
                console.log(`O resultado da operação é: ${calculo_radiciacao.calcular(numero1, numero2)}`);
                break;
            case 'segundograu':
                let raizes = new SegundoGrau(numero1, numero2, numero3);
                console.log(`O resultado da operação é: ${raizes.calcularRaizes()}`)
            case 'sair':
                console.log('Até ...');
                break;
            default:
                console.log('Operação inválida.');
                break;
        }
    });
}

iniciar();