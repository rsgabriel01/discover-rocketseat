# Seletores

Conecta um Elemento HMTL com o CSS a fim de alterar o elemento

## Tipos

- Element selector
  - Todos os elemntos HMTL
- ID selector
  - Um elemnto que tenha um atributo `id`.
  - Cada id devcerá ser único.
- Class selector
  - Os elementos que contenha um atributo `class`.
  - Podemos ter uma ou mais classes.
- Attribute selector
  - Um elemento que tenha um atributo específico.
- Pseudo-class selector
  - Elementos em um estado específico.

## Múltiplos

Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por virgulas para isso.

```css
h1,
p,
a {
  color: red;
}
```
