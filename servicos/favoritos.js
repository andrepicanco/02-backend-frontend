const fs = require('fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'))

    const livrosFiltrados = livros.filter( livro => livro.id !== id)

    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFiltrados))

}



module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId
}