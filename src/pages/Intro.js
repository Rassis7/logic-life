import React, { useState } from 'react';
import { purple, blue, green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

export default function Intro({ history }) {
  const [open, setOpen] = useState('false');

  return (
    <div style={{ position: 'relative', width: '100%', height: 500 }}>
      <Button onClick={() => setOpen({ open: true })}>Open carousel</Button>
      <AutoRotatingCarousel
        label="Próximo"
        open={open}
        onClose={() => setOpen({ open: false })}
        onStart={() => setOpen({ open: false })}
        mobile
        autoplay={true}
        style={{ position: 'absolute' }}
      >
        <Slide
          media={
            <img src="/images/logo.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: purple[400] }}
          style={{ backgroundColor: purple[600] }}
          title="IF / ELSE (condicionais)"
          subtitle="Utilizamos estruturas condicionais quando precisamos definir variações de fluxo em uma aplicação.

          Ex.: if (saldo_em_conta >= valor_saque) {
            saldo_em_conta = saldo_em_conta - valor_saque;
                  } else {
          throw Error('Saldo insuficiente!');
                 }
          
          "
        />
        <Slide
          media={
            <img src="/images/logo.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: purple[400] }}
          style={{ backgroundColor: purple[600] }}
          title="SWITCH"
          subtitle="Quando uma variável tende a assumir alguns valores pré-definidos, como por exemplo:

          tipo_de_alimento: carboidrato, proteina ou gordura, podemos utilizar um switch caso seja necessário tratar cada tipo com uma abordagem. Ex.: 
          
          
          switch(TIPO_ALIMENTO){
          case CARBOIDRATO:
          quantidade_maxima = 100gr;
            break;
          case PROTEINA:
          quantidade_maxima = 200gr;
            break;
          case GORDURA:
          quantidade_maxima = 50gr;
            break;
          }
          "
        />
        <Slide
          media={
            <img src="/images/logo.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: purple[400] }}
          style={{ backgroundColor: purple[600] }}
          title="FOR"
          subtitle="Os comandos de repetição são um recurso que permite que algo possa ser repetido mais de uma vez de acordo com uma condição ou com um contador.

          O For é utilizado para executar um conjunto de comandos executado por um número X de vezes.
          É passada uma situação inicial, uma condição e uma ação a ser executada a cada repetição.
          Uma variável é inicializada com uma valor inicial.
          Essa variável é utilizada para controlar a quantidade de vezes em que o conjunto de comandos será executado.
          E ao final do conjunto de comandos a variável sempre sofrerá uma alteração, aumentando ou diminuindo de acordo com a lógica utilizada.
          
          for($contador = 0; $contador < 10; $contador++){
             echo $contador;
          }
          "
        />
        <Slide
          media={
            <img src="/images/logo.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: purple[400] }}
          style={{ backgroundColor: purple[600] }}
          title="WHILE"
          subtitle="São utilizadas, por exemplo, para repetir ações semelhantes que são executadas para todos os elementos de uma lista de dados, ou simplesmente para repetir um mesmo processamento até que a condição seja satisfeita.

          O While, repete um bloco de código enquanto uma condição permanecer verdadeira.
          
          numero = 42;
          divisor = 1;
          
          while (divisor <= numero) {
              resto = numero % divisor;
              if (resto == 0) {
                  printf('Divisor encontrado: %d \n', divisor);
              }
              divisor = divisor + 1;
          }
          The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
        />
       
      </AutoRotatingCarousel>
    </div>
  );
}
