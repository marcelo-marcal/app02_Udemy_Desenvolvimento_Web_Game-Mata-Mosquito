### app02_Udemy_Desenvolvimento_Web_Game-Mata-Mosquito

app02_Udemy_Desenvolvimento_Web_Game-Mata-Mosquito



### Controlando os pontos de vida
Logica:
Se clicar no elemento ele deve ser removido e nada deve acontecer.

Se o elemento não for clicado antes do tempo termina o ponto deve ser removido.

1 - implementa o evento de click no mosquito e sua remoção:
    Inicialmento vamos só criar o evento de click de forma simples.
```
 mosquito.onclick = function() {
    alert("Elemento clicado");
  }
```
    Agora vamos criar o evento de remoção  do elemento ao clicar nele.
    como a função está associada ao elemento html, eu posso usar o operador `this` fazendo referencia ao propio elemento html da função.
```
mosquito.onclick = function() {
    this.remove()
  }
```
    Agora vamos criar o evento para tirar os pontos de vida caso termine o tempo.
    1 - Vamos na `<div class="vidas">` dentro dela vamos adicionar um `id` para as tag `<img>`, ficando assim:
    E todas a imagem deve começa com o carração cheio
    `
    <div class="vidas">
      <img id="v1" src="../img/coracao_cheio.png">
      <img id="v2" src="../img/coracao_cheio.png">
      <img id="v3" src="../img/coracao_cheio.png">
    </div>
    `

    2 - E vamos adicionar esse evento nessa função a baixo: 
```
if(document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
  }
```
Fazendo as seguntes alterações:
 1 - Criar uma variavel global `var vidas = 1;` que vai receber `1`.

 2 - Criar outra condição que o nosso limite seja ate tres:

```

```