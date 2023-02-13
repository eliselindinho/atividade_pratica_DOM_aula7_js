/*
Utilizando os conhecimentos adquiridos na aula, leia todos os elementos com a tag, e exiba seu texto no console do navegador.

Dicas:
● Você pode utilizar uma estrutura de repetição para fazer a exibição.
● Utilizando o getElementsByTagName da forma correta, você poderá armazenar o objeto que será percorrido.
● Se você conseguir achar o caminho mais curto conseguirá resolver com 4 linhas de código no máximo.

*/

let paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);
for (let p of paragrafos) {
  console.log(p.textContent);
}
