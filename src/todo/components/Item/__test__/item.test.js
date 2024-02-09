import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Item } from '../item';
import '@testing-library/jest-dom' 
import classnames from "classnames" 
const todo = {
  id: 1,
  title: "Buy groceries",
  completed: false,
};

it('Renders input component on double click of todo item label', async () => {
  render(<Item todo={todo}  />);

  const itemTitle = screen.getByTestId('todo-item-label', { name: /buy groceries/i });

  fireEvent.dblClick(itemTitle);

  await waitFor(() => {
    expect(screen.getByRole('textbox')).toBeInTheDocument(); 
  });
});

