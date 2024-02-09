import React from 'react';
import { render, screen } from '@testing-library/react'; 
import { App } from '../App';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react';
const MockApp=()=>{
    return ( 
        <HashRouter>
            <App />
        </HashRouter>
 
    )
}

it("should render the App component",()=>{
    render(<MockApp />) 

    const appComponent = screen.getByTestId("app-component");
    expect(appComponent).toBeInTheDocument();  
})  

it('Adds a new todo item from the input', () => {
    render(<MockApp />); 
    const inputElement = screen.getByTestId('text-input') 
    const newTodo = 'Buy groceries';
    fireEvent.change(inputElement, { target: { value: newTodo } });
    fireEvent.keyDown(inputElement, { key: 'Enter' }); 
    const newTodotext=screen.getByText('Buy groceries');
    expect(newTodotext).toBeInTheDocument();
  });