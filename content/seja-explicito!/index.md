---
title: "Seja explícito!"
description: "Uma das novidades do javascript ES6 foi a inserção do let e const no reinado solitário do var na declaração de variáveis."
date: "2017-08-30T14:28:49.841Z"
categories: 
  - JavaScript
  - Programming
  - Web Development
  - Software Development

published: true
canonical_link: https://medium.com/gdg-aracaju/seja-explicito-let-const-3a645af932d9
redirect_from:
  - /seja-explicito-let-const-3a645af932d9
---

![[CLEAR ](https://www.flickr.com/photos/coofdy/14816686262/)— Martin Kenny (CC BY-NC-SA 2.0)](./asset-1.jpeg)

## Aumente a legibilidade do seu javascript com const e let.

Uma das novidades da versão ES6 do javascript (ou ES2015 — pra você que torceu o nariz) foi a inserção do `let` e `const` no reinado solitário do `var` na declaração de variáveis. Apesar de não ser algo recente, muitos desenvolvedores ainda utilizam o velho conhecido por inúmeras razões. Mas existem algumas boas justificativas para que o uso do `var` fique apenas no passado.

### var e hoisting

Quando usamos `var` em javascript, o escopo da variável é a função onde a mesma foi declarada (ou global, caso não tenha sido declarada dentro de nenhuma função). Isso permite que algumas coisas, não tão comum em outras linguagens, funcionem. Por exemplo:

<Embed src="https://gist.github.com/gabrielaraujof/e15ea77d231f5f9320944204d6d63bbf.js" aspectRatio={0.357} caption="Escopo da variável quando declarada com var" />

Se por um lado isso pode ser visto como flexibilidade, por outro, isso pode ser fonte para problemas de legibilidade no código e até facilitar o aparecimento de bugs. Uma variável que é declarada em algum ponto do código pode estar visível em outra parte do código onde ela não é necessária. Como consequência, acidentalmente um desenvolvedor pode reutilizar essas variáveis e gerar efeitos inesperados. Além disso, imagine quão complicado seria identificar em que parte da função uma variável está sendo utilizada ou alterada — não vou nem falar no caso de ser uma variável global!

> Uma variável deve ter um único propósito e seu escopo deve ser o menor possível.

E não só isso, _é possível referenciar uma variável antes dela ser declarada!_ Mas como isso pode ser possível? Calma. Na verdade, o que acontece _por baixo dos panos_ é que todas as declarações são processadas antes de qualquer código ser executado. Na prática é como se todas as declarações fossem movidas para o topo da função. Este comportamento é popularmente conhecido como [_hoisting_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)_._

<Embed src="https://gist.github.com/gabrielaraujof/d680f6f61737f419779d51a30cc90f31.js" aspectRatio={0.357} caption="Hoisting e declarações com var" />

Por muito tempo recomendou-se declarar variáveis sempre no topo da função. Felizmente, isso não é mais necessário desde o ES6 com a chegada do `let` e `const`.

### `let`

Diferentemente do `var`, o uso do `let` permite que você declare variáveis com acesso apenas ao bloco, instrução ou expressão em que foram declaradas, ou seja, possui o mais conhecido escopo de bloco (_block escope_).

<Embed src="https://gist.github.com/gabrielaraujof/497fdd65443e2e67e5d0d3536f26b28f.js" aspectRatio={0.357} caption="let e escopo de bloco" />

Apesar de não ser possível acessar a variável fora do escopo em que foi declarada, isso não quer dizer que não existe _hoisting_ com o `let`. [Existe](https://stackoverflow.com/a/31222689/1704862). A diferença é que as variáveis não são inicializadas com `undefined`, como acontece com o `var`. Deste modo, qualquer tentativa de acesso a uma variável antes da sua declaração irá gerar um erro de referência. Este período entre o início do escopo e a execução da declaração da variável é conhecido como **_temporal dead zone_**, ou _TDZ._

<Embed src="https://gist.github.com/gabrielaraujof/9c884a24f429cd3d4c4054936f6479e4.js" aspectRatio={0.357} caption="_Temporal Dead Zone_" />

### const

O `const` obedece as mesmas regras de escopo e TDZ do `let` mas com duas pequenas diferenças: você precisa a _inicializar a variável no momento da declaração_ e você _não pode reatribuir valores_ a ela — daí vem o nome “const” em que o objetivo é declarar valores constantes.

<Embed src="https://gist.github.com/gabrielaraujof/135de8817ba5b261df80e2843ce4f957.js" aspectRatio={0.357} caption="Escopo e TDZ em declarações com const" />

_Mas cuidado! Sua variável pode ser constante mas o objeto que ela referencia_ **_não é imutável!_** É exatamente isso. Não poder reatribuir somente garante que a variável irá referenciar sempre o mesmo objeto, mas o objeto em si continua sendo mutável. Por exemplo, uma constante inicializada com um lista não poderá mais referenciar um outro valor, mas a lista qual ela referencia pode ter suas propriedades alteradas, como adicionar ou remover itens.

<Embed src="https://gist.github.com/gabrielaraujof/0c13b6c64da5c7ed4253e1eab7d34e0e.js" aspectRatio={0.357} caption="Declarações com const vs imutabilidade" />

Caso você realmente precise de um objeto imutável você tem algumas outras opções como o [Object.freeze()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), [immutable.js](https://facebook.github.io/immutable-js/), [mori](http://swannodette.github.io/mori/).

### let vs const

O propósito de uma variável deve sempre estar explícito, e por isso, devemos evitar reusar a mesma variável a menos que isto seja essencial. Deste modo, é preferível utilizar `const` ao invés de `let` já que ele nos impõe este comportamento.

A verdade é que na ampla maioria dos casos não precisamos reutilizar variáveis. Somos tentados a fazer por facilidade. Quando você achar que precisa utilizar um `let`, desafie você mesmo e refatore. E verá que você realmente não precisava — não acredita? dê uma olhada nos exemplos do artigo abaixo.

[**Let’s use const! Here’s why.**  
_When developing software, most of our time is spent reading code. ES6 offers let and const as new flavors of variable…_hackernoon.com](https://hackernoon.com/lets-use-const-here-s-why-6549dcb80708 "https://hackernoon.com/lets-use-const-here-s-why-6549dcb80708")[](https://hackernoon.com/lets-use-const-here-s-why-6549dcb80708)

É claro que existem casos em que a presença de um `let` é indiscutível, como o uso de contadores e acumuladores em loops, flags em algoritmos matemáticos, etc. Mas de maneira geral, recomenda-se:

-   **Sempre** use `**const**`;
-   **Raramente** use `**let**` (quando estritamente necessário);
-   **Nunca** use `**var**`;

E se você está achando que vai ser difícil lembrar ou se disciplinar a isto, eu tenho uma ótima notícia: _linters!_ ([eslint](https://eslint.org/), [tslint](https://palantir.github.io/tslint/), [jshint](http://jshint.com/), [jslint](http://www.jslint.com/), etc). Eles irão lembrar por você e garantir que você não cometa nenhuma atrocidade com a legibilidade. Os leitores do seu código irão te agradecer por isso — incluindo você.

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
-   [http://wesbos.com/let-vs-const/](http://wesbos.com/let-vs-const/)
