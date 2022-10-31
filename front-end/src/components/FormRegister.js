import React from 'react';
// import { useHistory } from 'react-router-dom';

function FormRegister() {
  return (
    <form>
      <h2>Cadastro</h2>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu nome"
          data-testid="common_register__input-name"
        />
      </label>

      <br />
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="seu-email@site.com.br"
          data-testid="common_register__input-email"
        />
      </label>

      <br />
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          data-testid="common_register__input-password"
        />
      </label>

      <br />
      <button
        type="button"
        data-testid="common_register__button-register"
      >
        Cadastro
      </button>
    </form>
  );
}

export default FormRegister;
