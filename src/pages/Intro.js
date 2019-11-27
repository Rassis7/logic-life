import React, { useState } from 'react';
import { purple, blue, green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import Main from './Main';

export default function Intro({ history }) {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ position: 'relative', width: '100%', height: 500 }}>
      {!open && <Main />}
      <AutoRotatingCarousel
        label="Começar o jogo"
        open={open}
        autoplay={false}
        onStart={() => setOpen(false)}
        style={{ position: 'absolute' }}
        label=""
      >
        <Slide
          media={
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VIUXNSELnnU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          }
          mediaBackgroundStyle={{ backgroundColor: purple[400], padding: 20 }}
          style={{ backgroundColor: purple[600] }}
          title="Bem-Vindo"
          subtitle={
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              Assista ao vídeo de apresentação do game.<br></br> Em seguida,
              serão apresentados 04 conceitos de operadores utilizados em
              programação, e um desafio com quatro perguntas para avaliar seu
              aprendizado.
            </pre>
          }
        />

        <Slide
          media={<img src="/images/logo.png" />}
          mediaBackgroundStyle={{ backgroundColor: purple[400] }}
          style={{ backgroundColor: purple[600] }}
          title="IF / ELSE (condicionais)"
          subtitle={
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              Utilizamos estruturas condicionais quando precisamos definir
              variações de fluxo em uma aplicação. Ex.:<br></br>
              Se (saldo_em_conta >= valor_saque) <br></br>
              saldo_em_conta = saldo_em_conta - valor_saque<br></br>
              então <br></br>
              Erro(Saldo insuficiente!)<br></br>}
            </pre>
          }
        />
        <Slide
          media={<img src="/images/logo.png" />}
          mediaBackgroundStyle={{ backgroundColor: purple[400] }}
          style={{ backgroundColor: purple[600] }}
          title="SWITCH"
          subtitle={
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              Quando uma variável tende a assumir alguns valores pré-definidos,
              como por exemplo: tipo_de_alimento: carboidrato, proteina ou
              gordura, podemos utilizar um switch caso seja necessário tratar
              cada tipo com uma abordagem. Ex.:<br></br> switch(TIPO_ALIMENTO)
              {'{'}case CARBOIDRATO:quantidade_maxima = 100gr;break;case
              PROTEINA: quantidade_maxima = 200gr;break;case
              GORDURA:quantidade_maxima = 50gr;break;{'}'}
            </pre>
          }
        />
        <Slide
          media={<img src="/images/logo.png" />}
          mediaBackgroundStyle={{ backgroundColor: purple[400] }}
          style={{ backgroundColor: purple[600] }}
          title="FOR"
          subtitle={
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              {
                'O For é utilizado para executar um conjunto de comandos executado por um número X de vezes. É passada uma situação inicial, uma condição e uma ação a ser executada a cada repetição. Uma variável é inicializada com uma valor inicial. Essa variável é utilizada para controlar a quantidade de vezes em que o conjunto de comandos será executado. for($contador = 0; $contador < 10; $contador++){ echo $contador;}'
              }
            </pre>
          }
        />
        <Slide
          media={<img src="/images/logo.png" />}
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
        <Slide
          media={<img src="/images/logo.png" />}
          mediaBackgroundStyle={{ backgroundColor: purple[400] }}
          style={{ backgroundColor: purple[600] }}
          title="Começar o jogo"
          subtitle={
            <Button variant="contained" onClick={() => setOpen(false)}>
              Iniciar
            </Button>
          }
        />
      </AutoRotatingCarousel>
    </div>
  );
}
