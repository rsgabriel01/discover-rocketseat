## font-variant

- Variações na apresentação das fontes

```css
p {
  font-variant: small-caps;
}
```

## font-stretch

- Alargamento ou encolhimento da fonte
- Aceita palavra-chave como: expanded, condensed, normal
- Aceita porcentagem de 50% a 200%

```css
p {
  font-stretch: expanded;
}
```

## letter-spacing

- espaço entre caracteres

```css
p {
  letter-spacing: 4px;
}
```

## word-spacing

- espaço entre palavras

```css
p {
  word-spacing: 10px;
}
```

## line-height

- Espaços entre linhas
- Pode ser com unidades ou sem unidades de medida
- Comuns: 1.5 ou 2

```css
p {
  line-height: 1.6;
}
```

## text-transform

- Transformação do texto

```css
p {
  text-transform: uppercase; /* capitalize | lowercase | none */
}
```

## text-decoration

- Aparencia decorativa de um texto
- line: underline | overline | line-through
  - podemos aplicar mais de 1 valor
- style: wavy | dotted | double | dashed | solid
- color: `<color>` values

```css
p {
  text-decoration: underline; /* shorthand */
}
```

## text-align

- Alinhamento de um texto

```css
p {
  text-align: center; /* left | right | center | justify */
}
```

## text-shadow

- Sombra aplicada a um texto
- Permite multiplos valores

```css
p {
  text-shadow: 1px 1px 1px red, 2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```

## Shorthand

- font-style, font-variant, font-weght, font-stretch, font-size, line-height, e font-family

```css
p {
  /* -style, -variant, -weght, -stretch, -size, line-height, e -family */
  font: italic normal bold normal 3em/1.5 Helvetica, arial, sans-serif;
}
```
