var altura = 0;
var largura = 0;
var vidas = 1;

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(largura, altura);
}
ajustaTamanhoPalcoJogo();

function posicaoRandonica() {
  //remover elemento (caso exista)
  if(document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    // console.log("Elemento selecionado foi: v" + vidas);
    document.getElementById("v" + vidas).src = "../img/coracao_vazio.png";
    vidas++
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);
  //criar elemento html
  var mosquito = document.createElement("img");
  mosquito.src = "../img/mosquito.png";
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function() {
    this.remove()
  }

  document.body.appendChild(mosquito);
  // tamanhoAleatorio();
  // ladoAleatorio();
  // console.log(ladoAleatorio());
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);
  switch(classe) {
    case 0:
      return "mosquito1"
    case 1:
      return "mosquito2"
    case 2:
      return "mosquito3"
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);  
  switch(classe) {
    case 0:
      return "ladoA"
    case 1:
      return "ladoB"
  }
}