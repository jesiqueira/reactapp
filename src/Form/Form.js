import React from 'react';
import Input from './Input';
import Button from './Button';

function Form() {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome: </label>
        <Input />
      </p>
      <p>
        <label htmlFor="cpf">CPF: </label>
        <Input />
      </p>
      <Button />
    </form>
  );
}

export default Form;
