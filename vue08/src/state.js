import { reactive } from 'vue'

const state = reactive({
  filmes: [
    { "id": 1, "titulo": "Vingadores", "descricao": "Um filme de heróis", "valor": "25", "imagem": "assets/logo.png" },
    { "id": 2, "titulo": "Pantera Negra", "descricao": "Um filme de panteras", "valor": "35", "imagem": "assets/logo.png" },
    { "id": 3, "titulo": "Homem-Formiga", "descricao": "Um filme de formigas", "valor": "20", "imagem": "assets/logo.png" },
    { "id": 4, "titulo": "Capitã Marvel", "descricao": "Um filme de capitãs", "valor": "40", "imagem": "assets/logo.png" },
    { "id": 5, "titulo": "Hulk", "descricao": "Um filme de força", "valor": "10", "imagem": "assets/logo.png" }
  ]
})


export default state
