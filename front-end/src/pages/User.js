import React from 'react';
import Header from '../components/Header';

function User() {
  return (

    <div>
      <Header />
      <div>
        <p>Tela detalhes da venda</p>
        <p>
          O bot do teste clicka no sair e se
          o usuario estiver logado, ele redireciona para /customer/products
          onde ele clika no meus pedidos e vai para minha pagina
        </p>
      </div>
    </div>
  );
}

export default User;
