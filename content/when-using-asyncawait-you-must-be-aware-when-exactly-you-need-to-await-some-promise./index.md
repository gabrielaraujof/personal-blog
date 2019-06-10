---
title: "When using async/await you must be aware when exactly you need to await some promise."
description: ""
date: "2019-06-10T23:19:33.399Z"
categories: []
published: false
---

When using `async/await` you must be aware when exactly you need to await some promise. It must seem obvious at first glance, but it may be trick to spot the best location specially when dealing with parallel HTTP requests.
