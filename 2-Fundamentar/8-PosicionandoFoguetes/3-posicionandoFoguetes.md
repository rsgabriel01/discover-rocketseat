# Page Layouts

- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid

# Posicionamentos

Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed

## Relative

- top, right, bottom, left, z-index

## Absolute

- top, right, bottom, left, z-index

## Fixed

- Coloca o elemento em uma "nova camada" tornando ele fixo na rolagem, os demais elemento rolam e ele fica sempre visivel

## Element Stacking

- Usa o z-index para empilhar os elementos, definindo sua posição de camada em relção ao eixo z

# Flexbox

- Nos permite posicionar os elementos dentro da caixa;
- Controle em uma dimenção (horizontal ou vertical);
- Alinhamento, direcionamento, ordenar e tamanhos;

```css
div.parent {
  display: flex;
}
```

## flex-direction

- Qual a direção do flex: horizontal ou vertical;
- row | column

## alinhamento

- justify-content
- align-items

# Grid

- Posicionamento dos elementos dentro da caixa
- Posicionamento horizontal e vertical ao mesmo tempo
- Pode ser flexivel ou fixo
- Cria espaços para os elementos filhos habitarem
