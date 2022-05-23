const AparelhoEletronico = require('./AparelhoEletronico');

class Esp32 extends AparelhoEletronico {
    constructor(botao, pinos, led, comunicacao){
        super(botao, pinos, led, comunicacao);
    }

    emitirLuz(){
        console.log("Led piscando!");
    }

    emitirComunicacao(){
        console.log("Comunicando via WI-FI!")
    }
}

const stm32 = new Stm32(2, 132, 3, "UART");
console.log(`Quantidade de botões: ${stm32.getBotao()}`);
console.log(`Quantidade de pinos: ${stm32.getPinos()}`);
console.log(`Quantidade de leds: ${stm32.getLed()}`);
console.log(`Comunicando por: ${stm32.getComunicacao()}`);
stm32.emitirLuz();
stm32.emitirComunicacao();