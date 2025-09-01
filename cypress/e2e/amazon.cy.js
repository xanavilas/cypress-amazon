import FinalizarCompra from '../page-objects/FinalizarCompra';
import HomePageAmazon from '../page-objects/HomePageAmazon'
import PaginaProduto from '../page-objects/PaginaProduto';
import PesquisaProduto from '../page-objects/PesquisaProduto';

describe('Aceder ao site da amazon', () => {
  beforeEach(() => {
    HomePageAmazon.visitar();
    HomePageAmazon.fecharpopup();
    
   });


  it('Pesquisar, Adicionar um produto ao carrinho e Finalizar Compra', () => {
    //validar que o carrinho está vazio
    HomePageAmazon.validarValorCarrinho(0);

    //fazer a pesquisa por um produto
    PesquisaProduto.pesquisaProduto('Pokémon: Let\'s Go, Pikachu!');
  

    //selecionar o produto 
    PesquisaProduto.selecionarProduto(1);
  

    //adicionar o produto ao carrinho
    PaginaProduto.adicionarAoCarrinho().click();
    

    //validar que o produto foi adicionado ao carrinho 
    HomePageAmazon.validarValorCarrinho(1);
    PaginaProduto.obterMensagemDeValidação('Adicionado ao carrinho');
  

    // finalizar a compra
    FinalizarCompra.finalizarCompra().click();
    FinalizarCompra.validartURLFinalizarCompra();
    

    });

    it('Pesquisar por produto que não existe', () => {
      //fazer pesquisa por produto inexistente
      PesquisaProduto.pesquisaProduto('123123142534534bnkmfbasdnmfb smnc smadfkjfnsdkf');
      PesquisaProduto.produtoinexistente('123123142534534bnkmfbasdnmfb smnc smadfkjfnsdkf');
    })

  });
    