import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    
    render(<App />);
    const taskInput = screen.getByLabelText('Tarefa:');
    const addButton = screen.getByText('Adicionar');

    listTodo.forEach((task) => {
      userEvent.type(taskInput, task);
      userEvent.click(addButton);
      const savedTask = screen.getByText(task);
      expect(savedTask).toBeInTheDocument();
    });

  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const TASK_DESCRIPTION = 'Comer';
    render(<Item content={TASK_DESCRIPTION} />);
    const renderedTask = screen.getByText(TASK_DESCRIPTION);
    expect(renderedTask).toBeInTheDocument();
  })
})
