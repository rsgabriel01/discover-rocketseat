// Criando e Adicionando Elementos Na Pagina

// createElement
const div = document.createElement('div');
div.innerText = "Olá Devs!"

// insertBefore
const body = document.querySelector('body')
const header = body.querySelector('script')

body.insertBefore(div, header)
body.insertBefore(div, header.nextElementSibling)