# Shorthand

- junção de propriedades
- resumido
- legível

```CSS
{
  /* backgroud properties */
  background-color: #000;
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* backgroud shorthand */
  background: #000 url(images/bg.gif) no-repeat left top;

  /* font properties */
  font-style: italic;
  font-weight: bold;
  font-size: .8em;
  font-family: Arial, sans-serif;

  /* font shorthand */
  font: Arial, sans-serif bold italic .8em

}
```

## Detalhes

- não irá considerar propriedades anteriores
- valores não especificados irão assumir o valor padrão
- geralmente a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas

# Propriedades que aceitam shorthand

animation, background, border, border-bottom, border-color, border-left ...

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**
