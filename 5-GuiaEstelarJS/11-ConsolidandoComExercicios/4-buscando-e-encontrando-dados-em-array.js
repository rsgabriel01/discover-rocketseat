/*
  ### Buscando e contando dados em arrays

  Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios
   
    - Contar o npumero de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - Mostrar livros do autor Augusto Cury
    - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligêcia Emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

console.log(`Total de categorias: ${totalCategories}`)

for (const category of booksByCategory) {
  console.log(
    `Total de livros da categoria ${category.category}: ${category.books.length}`
  )
}

function countAuthors() {
  let authors = []

  for (const category of booksByCategory) {
    for (const book of category.books) {
      if (authors.indexOf(book.author) === -1) {
        authors.push(book.author)
      }
    }
  }

  console.log(`Total de autores: ${authors.length}`)
}

countAuthors()

function booksOfAuthor(author) {
  let books = []

  for (const category of booksByCategory) {
    for (const book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}

booksOfAuthor('George S. Clason')
