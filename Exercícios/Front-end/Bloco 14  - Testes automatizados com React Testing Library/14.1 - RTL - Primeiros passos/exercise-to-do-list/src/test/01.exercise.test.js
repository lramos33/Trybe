import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(cleanup);

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    render(<App />);
    const addButton = screen.getByText('Adicionar');
    expect(addButton).toBeInTheDocument();
    expect(addButton.type).toBe('button');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    render(<App />);
    const TASK_DESCRIPTION = 'Comer';
    
    const taskInput = screen.getByLabelText('Tarefa:');
    const addButton = screen.getByText('Adicionar');

    userEvent.type(taskInput, TASK_DESCRIPTION);
    userEvent.click(addButton);

    const savedTask = screen.getByText(TASK_DESCRIPTION);
    expect(savedTask).toBeInTheDocument();
  });
});
