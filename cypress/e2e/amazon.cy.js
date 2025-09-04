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
    PesquisaSelecaoProduto.pesquisarProduto('Super Mario Odyssey');
  

    //selecionar o produto 
    PesquisaSelecaoProduto.selecionarProduto(0);
  

    //adicionar o produto ao carrinho
    PaginaDetalheProduto.adicionarAoCarrinho().click();
    

    //validar que o produto foi adicionado ao carrinho 
    HomePageAmazon.validarValorCarrinho(1);
    PaginaDetalheProduto.obterMensagemDeValidação();
  

    // finalizar a compra
    FinalizarCompra.finalizarCompra().click();
    FinalizarCompra.validartURLFinalizarCompra();
    FinalizarCompra.iniciarSessao('testeana646@gmail.com','33Testeana33');

    });

    /*it('Pesquisar por produto que não existe', () => {
      //fazer pesquisa por produto inexistente
      const produtoInexistente = '123123142534534bnkmfbasdnmfb smnc smadfkjfnsdkf';

      PesquisaSelecaoProduto.pesquisarProduto(produtoInexistente);
      PesquisaSelecaoProduto.produtoinexistente(produtoInexistente);
    })*/

  });
    