# RI6 -  Calculadora por Linha de Comando

Este programa é uma calculadora interativa que funciona no seu terminal, permitindo que você execute várias operações matemáticas. Ele foi construído em **TypeScript** e usa classes para modular cada tipo de cálculo e aplica os conceitos de herança e polimorfismo.

## Compilação

- clone o repositório: `git clone https://github.com/xvierdev/RI6`
- instale as dependências `npm install`
- compile os arquivos `tsc`
- execute `node .\out\calculadora.js`

## Como Usar

Para utilizar a calculadora, você precisa executá-la a partir da linha de comando (terminal) e, quando o prompt aparecer, digitar os números e a operação desejada, separados por espaços.

A sintaxe geral é: `[número1] [número2] [operação]`

### Operações Suportadas

A seguir, estão todas as operações que você pode realizar.

| Operação | Comando | Exemplo de Uso | Descrição |
| :--- | :--- | :--- | :--- |
| **Soma** | `somar` | `10 5 somar` | Adiciona o primeiro número ao segundo. |
| **Subtração** | `subtrair` | `10 5 subtrair` | Subtrai o segundo número do primeiro. |
| **Multiplicação** | `multiplicar` | `10 5 multiplicar` | Multiplica o primeiro número pelo segundo. |
| **Divisão** | `dividir` | `10 5 dividir` | Divide o primeiro número pelo segundo. |
| **Potenciação** | `potenciacao` | `2 3 potenciacao` | Calcula a potência do primeiro número (base) pelo segundo (expoente). Ex: 2^3. |
| **Radiciação** | `radiciacao` | `81 2 radiciacao` | Calcula a raiz do primeiro número (radicando) pelo segundo (índice). Ex: √81. |
| **Equação de 2º Grau** | `segundograu` | `1 5 6 segundograu` | Calcula as raízes de uma equação de 2º grau do tipo ax² + bx + c, onde os números fornecidos são `a`, `b`, e `c`. |
| **Sair** | `sair` | `sair` | Encerra a execução do programa. |

### Exemplo de uso

Para somar 5 e 3, digite:

`5 3 somar`

Para calcular as raízes da equação `x² + 5x + 6 = 0`, digite:

`1 5 6 segundograu`
