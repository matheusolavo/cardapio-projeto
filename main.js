//simulação de adição de itens de pedido
//seleciona todos os botões que possuem a classe 'adicionar'

const botoesAdicionar = document.querySelectorAll('.adicionar');

// seleciona a lista onde os itens do pedido serão exibidos
const listaPedido = document.getElementById('lista-pedido');

const totalElement = document.getElementById('total');

// cria variavel que armazena o total do pedido
let total = 0;

// Percorre todos os botões 'adicionar' e adiciona um evento de clique em cada um 
botoesAdicionar.forEach((botao) =>{
   botao.addEventListener('click',() => {
    //obtem o elemento pai do botao
    const produto = botao.parentElement;

    //obtem o nome do produto a partir do texto da tag <h3>
    const nome = produto.querySelector('h3').textContent

    //obtem o preço do produto, removendo o texto R$ e converte o valor para decimal

    const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$",""));
    
    //obtem um novo item da lista <li> para adicionar o produto ao pedido
    const itemPedido = document.createElement('li');
      
   itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

   // adiciona o item criado a lista de pedidos
   listaPedido.appendChild(itemPedido);
   
   //atualiza o total da compra
   total += preco;

   totalElement.textContent = `tota:R$ ${total.toFixed(2)}`;


   });
   

} );

//simula finalização do pedido
const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

botaoFinalizarPedido.addEventListener('click',() =>{
    alert("pedido finalzado com sucesso" + totalElement.textContent);
});