### app02_Udemy_Desenvolvimento_Web_Game-Mata-Mosquito

app02_Udemy_Desenvolvimento_Web_Game-Mata-Mosquito



### Controlando os pontos de vida
Logica:
Se clicar no elemento ele deve ser removido e nada deve acontecer.

Se o elemento não for clicado antes do tempo termina o ponto deve ser removido.

1 - implementa o evento de click no mosquito e sua remoção:
    Inicialmento vamos só criar o evento de click de forma simples.
```js
 mosquito.onclick = function() {
    alert("Elemento clicado");
  }
```
    Agora vamos criar o evento de remoção  do elemento ao clicar nele.
    como a função está associada ao elemento html, eu posso usar o operador `this` fazendo referencia ao propio elemento html da função.
```js
mosquito.onclick = function() {
    this.remove()
  }
```

    Agora vamos criar o evento para tirar os pontos de vida caso termine o tempo.
    1 - Vamos na `<div class="vidas">` dentro dela vamos adicionar um `id` para as tag `<img>`, ficando assim:
    E todas a imagem deve começa com o carração cheio
```html
    `
    <div class="vidas">
      <img id="v1" src="../img/coracao_cheio.png">
      <img id="v2" src="../img/coracao_cheio.png">
      <img id="v3" src="../img/coracao_cheio.png">
    </div>
    `
```
    2 - E vamos adicionar esse evento nessa função a baixo: 
```js
if(document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
  }
```
Fazendo as seguntes alterações:
### 1 - Criar uma variavel global `var vidas = 1;` que vai receber `1`.

 ### 2 - Criar outra condição que o nosso limite seja ate tres:

```js
function posicaoRandonica() {
  //remover elemento (caso exista)
  if(document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    
    if(vidas > 3) {
      alert("Interroper o jogo!")
    }

    document.getElementById("v" + vidas).src = "../img/coracao_vazio.png";
    vidas++
  }
```

### 3 - Estabelece o fluxo de game ove

E dentro do controller vamos adicionar a seguinte linha de codigo. 
```js
  if(vidas > 3) {
    window.location.href = "../src/controller/fim_de_jogo.html"
  }else {
		document.getElementById('v' + vidas).src = "../img/coracao_vazio.png"

		vidas++
	}
```
### 3.1 - Vamos cria o arquivo `html`, da pagina fim de jogo
`fim_de_jogo.html`
E pegando as características dos componentes do Bootstrap, para ajudar a encaixar as imagens e o botão que serão utilizados nessa página.
Na pagina do `https://getbootstrap.com/`, vamos pegar o link cdn apenas do CSS only para utilizar em nosso codigo:
`https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

	<link rel="stylesheet" href="../style/estilo.css" />
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="d-flex justify-content-center">
                    <img src="../../img/game_over.png" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-dark btn-lg" onclick="window.location.href = '../app.html' ">Reiniciar</button>
                </div>
            </div>
        </div>
    </div>    
</body>
</html>
```

### 4 - Criar o cronometro
```js
var cronometro = setInterval(function() {
  tempo -= 1
}, 1000);
```
E agora e so adicionar no `app.html` o segunte codigo na tag
```html
<div class="cronometro">Tempo restante: <span id="cronometro"></span></div>
```
E mais a abaixo adicionar a seguinte linha:
```html
<script>
  document.getElementById("cronometro").innerHTML = tempo;
    
  setInterval(function(){
    posicaoRandonica();      
  }, 2000);
</script>
```
E no arquivo anterior:
innerHTML = Tudo que esta entre as tag
```js
var cronometro = setInterval(function() {
  tempo -= 1
  document.getElementById("cronometro").innerHTML = tempo;
}, 1000);
```
Para corrigi os valores negativos vamos criar uma logica.
Fazendo um teste para verica se o tempo e menor que zero
```js
var cronometro = setInterval(function() {
  tempo -= 1
  if(tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarMosquito);
    alert("vitoria")
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);
```