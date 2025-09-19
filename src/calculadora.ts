import *  as readline from "readline";

import Soma from "./soma";
import subtracao from "./subtracao";
import multiplicacao from "./multiplicacao";

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Quais são os números e operação desejada?\n", (valor) => {
        let instrucoes = valor.split(" ");
        let numero1 = Number(instrucoes[0]);
        let numero2 = Number(instrucoes[1]);
        let operacao = instrucoes[2];
        let resultado: number;
        if (instrucoes.length == 1) {
            operacao = instrucoes[0];
        }
        console.log(`Essas foram suas instruções: ${instrucoes}\n`);
    })
}