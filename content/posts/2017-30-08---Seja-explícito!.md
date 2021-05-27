---
template: post
title: "Seja explícito!"
slug: seja-explicito
draft: false
published: true
date: 2017-08-30T14:28:49.841Z
description: "Aumente a legibilidade do seu javascript com const e let."
category: Programming
tags: 
  - JavaScript
  - ES6
  - hoisting
---

![[CLEAR](https://www.flickr.com/photos/coofdy/14816686262/) — Martin Kenny (CC BY-NC-SA 2.0)](/media/be-clear.jpeg)

## Aumente a legibilidade do seu javascript com const e let.

Uma das novidades da versão ES6 do javascript (ou ES2015 — pra você que torceu o nariz) foi a inserção do `javascript›let` e `javascript›const` no reinado solitário do `javascript›var` na declaração de variáveis. Apesar de não ser algo recente, muitos desenvolvedores ainda utilizam o velho conhecido por inúmeras razões. Mas existem algumas boas justificativas para que o uso do `javascript›var` fique apenas no passado.

### var e hoisting

Quando usamos `javascript›var` em javascript, o escopo da variável é a função onde a mesma foi declarada (ou global, caso não tenha sido declarada dentro de nenhuma função). Isso permite que algumas coisas, não tão comum em outras linguagens, funcionem. Por exemplo:

```javascript
function dummy() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }
  for (; i < 10; i++) {
    console.log(i); // 5, 6, 7, 8, 9
  }
  return i;
}
console.log(dummy()); // 10
```
<figcaption>Escopo da variável quando declarada com var</figcaption>

Se por um lado isso pode ser visto como flexibilidade, por outro, isso pode ser fonte para problemas de legibilidade no código e até facilitar o aparecimento de bugs. Uma variável que é declarada em algum ponto do código pode estar visível em outra parte do código onde ela não é necessária. Como consequência, acidentalmente um desenvolvedor pode reutilizar essas variáveis e gerar efeitos inesperados. Além disso, imagine quão complicado seria identificar em que parte da função uma variável está sendo utilizada ou alterada — não vou nem falar no caso de ser uma variável global!

> Uma variável deve ter um único propósito e seu escopo deve ser o menor possível.

E não só isso, _é possível referenciar uma variável antes dela ser declarada!_ Mas como isso pode ser possível? Calma. Na verdade, o que acontece _por baixo dos panos_ é que todas as declarações são processadas antes de qualquer código ser executado. Na prática é como se todas as declarações fossem movidas para o topo da função. Este comportamento é popularmente conhecido como [_hoisting_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)_._

```javascript
function dummy() {
  console.log(message);  // undefined
  var message = 'Olá mundo';
  console.log(message);  // Olá mundo
}
dummy();
```
<figcaption>Hoisting e declarações com var</figcaption>

Por muito tempo recomendou-se declarar variáveis sempre no topo da função. Felizmente, isso não é mais necessário desde o ES6 com a chegada do `javascript›let` e `javascript›const`.

### `javascript›let`

Diferentemente do `javascript›var`, o uso do `javascript›let` permite que você declare variáveis com acesso apenas ao bloco, instrução ou expressão em que foram declaradas, ou seja, possui o mais conhecido escopo de bloco (_block escope_).

```javascript
function dummy() {
    if (true) {
        var message = 'Olá mundo';
        let anotherMessage = 'Tchau mundo';
    }
    console.log(message);  // Olá mundo
    console.log(anotherMessage);
    // ReferenceError: anotherMessage is not defined
}
```
<figcaption>let e escopo de bloco</figcaption>

Apesar de não ser possível acessar a variável fora do escopo em que foi declarada, isso não quer dizer que não existe _hoisting_ com o `javascript›let`. [Existe](https://stackoverflow.com/a/31222689/1704862). A diferença é que as variáveis não são inicializadas com `javascript›undefined`, como acontece com o `javascript›var`. Deste modo, qualquer tentativa de acesso a uma variável antes da sua declaração irá gerar um erro de referência. Este período entre o início do escopo e a execução da declaração da variável é conhecido como **_temporal dead zone_**, ou _TDZ._

```javascript
function dummy() {
    // início da TDZ de message
    console.log(message);
    // ReferenceError: message is not defined
    let message;
    // fim da TDZ de message
  
    console.log(message);  // undefined
    message = 'Olá mundo';
    console.log(message);  // Olá mundo
}
```
<figcaption>Temporal Dead Zone</figcaption>

### const

O `javascript›const` obedece as mesmas regras de escopo e TDZ do `javascript›let` mas com duas pequenas diferenças: você precisa a _inicializar a variável no momento da declaração_ e você _não pode reatribuir valores_ a ela — daí vem o nome “const” em que o objetivo é declarar valores constantes.

```javascript
const message;
// SyntaxError: Missing initializer in const declaration

const message = 'Olá mundo';
console.log(message);  // Olá mundo
 
message = 'Tchau mundo!';
// TypeError: Assignment to constant variable
```
<figcaption>Escopo e TDZ em declarações com const</figcaption>

_Mas cuidado! Sua variável pode ser constante mas o objeto que ela referencia_ **_não é imutável!_** É exatamente isso. Não poder reatribuir somente garante que a variável irá referenciar sempre o mesmo objeto, mas o objeto em si continua sendo mutável. Por exemplo, uma constante inicializada com um lista não poderá mais referenciar um outro valor, mas a lista qual ela referencia pode ter suas propriedades alteradas, como adicionar ou remover itens.

```javascript
const fruits = ['maçã', 'banana'];  // maçã, banana

fruits[1] = 'melão';  // maçã, melão
fruits.push('abacaxi');  // maçã, melão, abacaxi
fruits.pop();  // maçã, melão
fruits.length = 10;  // maça, melão, undefined x 8

fruits = ['maracujá', 'tomate'];
// TypeError: Assignment to constant variable
```
<figcaption>Declarações com const vs imutabilidade</figcaption>

Caso você realmente precise de um objeto imutável você tem algumas outras opções como o [Object.freeze()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), [immutable.js](https://facebook.github.io/immutable-js/), [mori](https://swannodette.github.io/mori/).

### let vs const

O propósito de uma variável deve sempre estar explícito, e por isso, devemos evitar reusar a mesma variável a menos que isto seja essencial. Deste modo, é preferível utilizar `javascript›const` ao invés de `javascript›let` já que ele nos impõe este comportamento.

A verdade é que na ampla maioria dos casos não precisamos reutilizar variáveis. Somos tentados a fazer por facilidade. Quando você achar que precisa utilizar um `javascript›let`, desafie você mesmo e refatore. E verá que você realmente não precisava — não acredita? dê uma olhada nos exemplos do artigo abaixo.

[**Let’s use const! Here’s why.**  
_When developing software, most of our time is spent reading code. ES6 offers let and const as new flavors of variable…_hackernoon.com](https://hackernoon.com/lets-use-const-here-s-why-6549dcb80708 "https://hackernoon.com/lets-use-const-here-s-why-6549dcb80708")[](https://hackernoon.com/lets-use-const-here-s-why-6549dcb80708)

É claro que existem casos em que a presença de um `javascript›let` é indiscutível, como o uso de contadores e acumuladores em loops, flags em algoritmos matemáticos, etc. Mas de maneira geral, recomenda-se:

-   **Sempre** use `javascript›const`;
-   **Raramente** use `javascript›let` (quando estritamente necessário);
-   **Nunca** use `javascript›var`;

E se você está achando que vai ser difícil lembrar ou se disciplinar a isto, eu tenho uma ótima notícia: _linters!_ ([eslint](https://eslint.org/), [tslint](https://palantir.github.io/tslint/), [jshint](https://jshint.com/), [jslint](https://www.jslint.com/), etc). Eles irão lembrar por você e garantir que você não cometa nenhuma atrocidade com a legibilidade. Os leitores do seu código irão te agradecer por isso — incluindo você.

---

#### \--verbose

[**JavaScript ES6+: var, let, or const?**  
_Perhaps the most important thing you can learn to be a better coder is to keep things simple. In the context of…_sdasdasdadaxdadadmedium.com](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75 "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75")[](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

[**var, let and const — What, why and how — ES6 JavaScript Features**  
_In ES5, we only had one type of variable, var, but in ES6, we have three. types of variables: var, let and const. In…_medium.com](https://medium.com/humans-create-software/var-let-and-const-what-why-and-how-es6-javascript-features-92f1833f56d0 "https://medium.com/humans-create-software/var-let-and-const-what-why-and-how-es6-javascript-features-92f1833f56d0")[](https://medium.com/humans-create-software/var-let-and-const-what-why-and-how-es6-javascript-features-92f1833f56d0)

[**A guide to JavaScript variable hoisting 🚩 with let and const**  
_New JavaScript developers often have a hard time understanding the unique behaviour of variable/function hoisting._medium.freecodecamp.org](https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d "https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d")[](https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d)

[**Learn ES6 The Dope Way Part I: const, let & var**  
_Welcome to Part I of Learn ES6 The Dope Way, a series created to help you easily understand ES6 (ECMAScript 6)!_medium.freecodecamp.org](https://medium.freecodecamp.org/learn-es6-the-dope-way-i-const-let-var-ae828580472b "https://medium.freecodecamp.org/learn-es6-the-dope-way-i-const-let-var-ae828580472b")[](https://medium.freecodecamp.org/learn-es6-the-dope-way-i-const-let-var-ae828580472b)

-   [https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
-   [https://wesbos.com/let-vs-const/](https://wesbos.com/let-vs-const/)