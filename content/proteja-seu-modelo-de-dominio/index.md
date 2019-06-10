---
title: "Proteja seu modelo de domínio"
description: "Como se preparar para o futuro"
date: "2019-06-10T23:19:37.780Z"
categories: []
published: false
---

![Photo by: Rob Pongsajapan — (CC) [https://www.flickr.com/photos/pong/288491653/](https://www.flickr.com/photos/pong/288491653/)](./asset-1.png)

Aplicações de alta complexidade podem ser implementadas de maneira mais efetiva quando consideramos certos princípios e padrões de projeto. O **Domain-Driven Design** é um deles. O **_DDD_**, como é bastante conhecido, é uma abordagem de desenvolvimento que facilita o processo evolutivo de softwares complexos, principalmente focado na expansão gradativa do núcleo da aplicação: _o modelo do domínio_.

Os princípios do DDD não impõem que você utilize alguma arquitetura em particular, entretanto, _é vital que o_ **_modelo de domínio seja totalmente independente e isolado_**, escondendo assim detalhes das regras de negócio e impedindo que elas sejam violadas.

> “Uma coisa que sua arquitetura precisa suportar é o isolamento da lógica do seu domínio.” (Millett; Tune, 2015)

---

#### Uma arquitetura focada no negócio

Um dos exemplos mais comuns de arquitetura que atende aos princípios do DDD contém essencialmente três camadas: _camada de serviços_, _camada de domínio_ e _camada de infraestrutura_. Vamos falar rapidamente sobre cada uma delas.

**Camada de Domínio**

> Simplesmente o cerne da sua aplicação.

A camada de domínio representa uma **_visão abstrata_** do domínio do problema. É nesta camada que o _estado_ e _comportamento_ dos conceitos envolvidos são modelados de maneira isolada de qualquer outra coisa, ou seja, independente de tecnicalidades dos clientes, plataforma, infraestrutura de dados e inclusive das outras camadas da aplicação.

Esse isolamento da camada de domínio garante, entre outras coisas, que suas regras de negócio sejam altamente testáveis e manuteníveis, aumentando assim a confiabilidade da sua aplicação. Será muito mais fácil e seguro adaptar e expandir seu código a medida que a sua aplicação evolui e as regras de negócio mudam.

**Camada de Serviços**

A camada de serviços orquestra os casos de uso e comportamento da aplicação. 

**Camada de Infraestrutura**

Nulla et sem in ipsum vehicula lacinia eu non felis. Proin laoreet, eros non finibus scelerisque, metus dui semper risus, vitae maximus augue justo non velit. Aenean nec aliquam lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum consectetur a sem sed lobortis.

**Comunicação entre as camadas**

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam viverra non ante a ultricies. Aenean aliquet varius metus, ac eleifend purus bibendum in. Donec at semper est. Fusce interdum laoreet efficitur. Donec id lorem sed ipsum molestie varius. Nullam dictum leo sit amet risus viverra aliquet. Vestibulum quis ex porta, tempor arcu et, pretium eros. Donec a arcu molestie dolor placerat porta.

---

Curabitur gravida egestas erat, quis iaculis lectus pulvinar sit amet. Sed interdum ullamcorper dolor mollis volutpat. Vestibulum tristique nibh non tellus ultricies gravida. Integer mollis mauris nec odio vestibulum, in sagittis massa convallis. Suspendisse erat diam, eleifend vel ipsum vitae, faucibus pellentesque justo. Fusce a leo orci. In hac habitasse platea dictumst.
