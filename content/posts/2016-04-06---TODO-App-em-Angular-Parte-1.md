---
template: post
title: TODO App em Angular 2 — Parte 1
slug: todo-app-em-angular-2-parte-1
draft: false
date: 2016-06-04T13:58:47.524Z
description: "Nova versão do Angular já está disponível.
  Dê os primeiros passos e crie seu primeiro app."
category: Programming
tags:
  - angular
  - typescript
  - beginner
---

**\[Atualizado em 16/09/2016\]**

![](/media/todo-app-angular-1.cover.jpeg)

Cerca de dois anos após os primeiros anúncios, o framework web Angular 2 foi oficialmente lançado como uma versão estável. E mesmo após esse curto período já detém de todo um ecossistema de desenvolvimento mobile e desktop — como foi amplamente divulgado na última [ng-conf](https://www.youtube.com/watch?v=gdlpE9vPQFs). A última versão do framework não só é mais performático que seu antecessor, como também mais otimizado e voltado à filosofia de [componentes web](https://www.w3.org/wiki/WebComponents/).

Nesta série de artigos faremos um passo-a-passo na criação de um app em Angular 2 para o gerenciamento simples de tarefas. O código dessa primeira parte pode ser encontrado [aqui](https://gitlab.com/avantez/todo-ng2/tree/part1).

---

#### Criando o projeto

Um dos principais esforços nessa nova versão do framework é facilitar ainda mais a vida dos desenvolvedores e promover um padrão de projeto entre a comunidade. Para isto, o time do angular desenvolveu uma ferramenta de apoio na criação de aplicações angular 2, a [Angular CLI](https://github.com/angular/angular-cli) (que atualmente está em versão beta). Deste modo, os únicos pré-requisitos para o nosso projeto são os da própria ferramenta, sendo eles:

-   Node.js v.4+

E nada mais. Sim! O node é a única dependência que você vai precisar se preocupar em instalar. Todas as outras dependências básicas do projeto serão gerenciadas pelo npm—aliás, a Angular CLI faz o “trabalho sujo” e instala todas elas pra você na criação do projeto. Então chega de conversa e vamos criar nosso projeto. Mas antes, instalamos a Angular CLI:

```
npm install -g angular-cli
```

Com a CLI em mãos, podemos criar nosso primeiro projeto utilizando seu comando **_new_**_:_

```
ng new todo-ng2
```

Será criado um diretório chamado _todo-ng2_, e dentro dele uma estrutura inicial do projeto. Automaticamente também serão instaladas todas as dependências do projeto via npm. Esta etapa pode levar alguns poucos minutos, então seja paciente e aguarde enquanto as dependências são baixadas e instaladas.

#### Estrutura do projeto

A estrutura criada para o projeto deverá ser similar ao seguinte:

```
todo-ng2/
|- e2e/
|- src/
|  |- environments/ 
|  |- app/
|     |- shared/
|     |- ...
|     |- todo-angular2.component.css
|     |- todo-angular2.component.html
|     |- todo-angular2.component.spec.ts
|     |- todo-angular2.component.ts
|  |- ...
|  |- index.html
|  |- styles.css
|  |- main.ts
|  |- tsconfig.json
|- ...
|- angular-cli.json
|- package.json
```

Nosso foco inicial será o diretório **_src/_**, pois é lá onde estarão os principais arquivos utilizados pelo build da aplicação, ou seja, tudo aquilo que vai para o servidor no processo de deploy. Na raiz de **_src/_** temos alguns arquivos importantes. São eles:

-   **_index.html_**: página inicial da nossa aplicação.
-   **_main.ts_**: responsável pela inicialização da aplicação.
-   **_styles.css_**: folha de estilo global da aplicação.
-   **_tsconfig.json_**: configurações de compilação do Typescript.

_Nota: A configuração da aplicação e o conteúdo desses arquivos está fora do escopo deste post. Por enquanto usaremos as configurações predefinidas pela Angular CLI na criação do projeto._

Na maior parte do tempo estaremos trabalhando em **_src/app/_**, pois é lá onde estará o nosso código Angular (components, services, directives, pipes, templates...). Dentro de **_src/app/_** temos alguns arquivos que definem o componente raiz da nossa aplicação:

-   **_todo-angular2.component.ts_**: definição do componente.
-   **_todo-angular2.component.html_**: template utilizado pelo componente.
-   **_todo-angular2.component.css_**: folha de estilo utilizada pelo componente.
-   **_todo-angular2.component.spec.ts_**: testes unitários do componente.

A estrutura de pastas e arquivos gerada pela Angular CLI segue o [Angular 2 Style Guide](https://angular.io/styleguide), criado pelo próprio time do Angular — e eu fortemente recomendo que você dê uma lida nele!

#### Executando o projeto

Agora vamos testar o nosso projeto e verificar se está tudo funcionando corretamente. Para isso utilizamos o comando **_serve_** da Angular CLI:

```
ng serve
```

Acesse a aplicação em [https://localhost:5100](https://localhost:5100) e, se tudo estiver funcionando como o esperado, a página exibida será similar ao seguinte:

![](/media/angular-app.png)

No próximo artigo falaremos em detalhes sobre componentes Angular 2 e criaremos a primeira funcionalidade da nossa aplicação. Até lá!

---

#### Indo além

-   [5 min Quickstart](https://angular.io/docs/ts/latest/quickstart.html)
-   [Angular CLI](https://github.com/angular/angular-cli)