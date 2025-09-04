import FinalizarCompra from '../page-objects/FinalizarCompra';
import HomePageAmazon from '../page-objects/HomePageAmazon'
import PaginaDetalheProduto from '../page-objects/PaginaDetalheProduto';
import PesquisaSelecaoProduto from '../page-objects/PesquisaSelecaoProduto';

describe('Aceder ao site da amazon', () => {
  beforeEach(() => {
    HomePageAmazon.visitar();
    HomePageAmazon.fecharPopup();
    HomePageAmazon.recusarCookies();
    
   });


  it('Pesquisar, Adicionar um produto ao carrinho e Finalizar Compra', () => {
    //validar que o carrinho está vazio
    HomePageAmazon.validarValorCarrinho(0);

    //fazer a pesquisa por um produto
    PesquisaSelecaoProduto.pesquisarProduto('Pokémon: Let\'s Go, Pikachu!');
  

    //selecionar o produto 
    PesquisaSelecaoProduto.selecionarProduto(2);
  

    //adicionar o produto ao carrinho
    PaginaDetalheProduto.adicionarAoCarrinho().click();
    

    //validar que o produto foi adicionado ao carrinho 
    HomePageAmazon.validarValorCarrinho(1);
    PaginaDetalheProduto.obterMensagemDeValidação();
  

    // finalizar a compra
    FinalizarCompra.finalizarCompra().click();
    FinalizarCompra.validartURLFinalizarCompra();
    

    });

    it('Pesquisar por produto que não existe', () => {
      //fazer pesquisa por produto inexistente
      const produtoInexistente = '123123142534534bnkmfbasdnmfb smnc smadfkjfnsdkf';

      PesquisaSelecaoProduto.pesquisarProduto(produtoInexistente);
      PesquisaSelecaoProduto.produtoinexistente(produtoInexistente);
    })

  });
    