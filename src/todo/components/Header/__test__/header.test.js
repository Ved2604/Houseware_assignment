import React from 'react';
import { render, screen } from '@testing-library/react'; 
import { Header } from '../header';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom' 


it("should render the Header component",()=>{
    render(<Header />
) 
   const Headercomponent =screen.getByTestId('header');
   expect(Headercomponent).toBeInTheDocument()
})

it("Todos text should exit",()=>{
    render(<Header />)
    const todoheading=screen.getByRole("heading",{name:'todos'})
    expect(todoheading).toBeInTheDocument();
})

