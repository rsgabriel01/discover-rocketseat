# display: block vc display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

**block**
Ocupa toda a linha, colocando o próximo elemento abaixo desse;
width e height são respeitados;
paddin, margin, border irão funcionar normalmente;

**inline**
Elemento ao do outros;
width e height não funcionam;
Somente valores horizontais de margin, padding e border funcionam;

Exemplos:
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`
