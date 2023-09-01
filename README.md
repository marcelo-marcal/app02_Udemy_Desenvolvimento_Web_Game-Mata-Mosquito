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
 1 - Criar uma variavel global `var vidas = 1;` que vai receber `1`.

 2 - Criar outra condição que o nosso limite seja ate tres:

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

3 - Estabelece o fluxo de game ove

```

```

4 - Criar o cronometro
```js
var cronometro = setInterval(function() {
  tempo -= 1
}, 1000);
```
E agora e so adicionar no `app.html` o segunte codigo na tag
```html
<div class="cronometro">Tempo restante: <span id="cronometro"></span></div>
```
E no arquivo anterior:
innerHTML = Tudo que esta entre as tag
```js
var cronometro = setInterval(function() {
  tempo -= 1
  document.getElementById("cronometro").innerHTML = tempo;
}, 1000);
```