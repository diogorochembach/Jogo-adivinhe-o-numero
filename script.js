// 1- Objetivo do jogo é o usuário acertar o número que foi escolhido aleatoriamente entre 1 e 100
//em 10 tentativas. Após isso se o jogador não acertar o número que foi escolhido o jogo é
//encerrado automaticamente.

// 1- Pegar com o query selector o palpite ...
// Conferir palpite -> quando o usuário informe palpite, quero que mostre o resultado...

//Escolhendo o número:
var numeroAleatorio = 20; //aqui é uma variável recebendo o número 20 de valor aleatório (Random).

//query selector
var palpites = document.querySelector(".palpites"); // aqui é querySelector pegando no campo tal
var ultimoResultado = document.querySelector(".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");
var envioPalpite = document.querySelector("name[inputPalpite]");
var campoPalpite = document.getElementById("campoPalpite");
var contagemPalpites = 1; //aqui foi atribuido um valor inicial pata a contagem

// Função conferir palpites

function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);

  //exibir palpites anteriores:
  if (contagemPalpites === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }

  // o que o usuario já digitou!
  palpites.textContent += palpiteUsuario + " ";
  // Usuario digitou 20 e o valor random (resultado...) é 30!
  // Valor errado!
  // Valor Baixo do esperado!

  // 3- Acertou

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Voce acertou!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
  } else if (contagemPalpites === 10) {
    // FIM DE JOGO
    ultimoResultado.textContent = "SUAS CHANCES TERMINARAM!";
    baixoOuAlto.textContent = "";
  } else {
    ultimoResultado.textContent = "Errado!";
    ultimoResultado.style.backgroundColor = "red";

    // palpite baixo ou palpite alto!!!
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito baixo!";
    } else {
      baixoOuAlto.textContent = "Seu palpite está muito alto!";
    }
  }

  // to do: fazer contagem de palpites
  contagemPalpites++;

  // TAREFA: Se acertar o palpite, limpar o input. input.value :)
  campoPalpite.focus();
}
