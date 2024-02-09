import React from 'react';
import { getByText, render, screen } from '@testing-library/react'; 
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom' 
import { Input } from '../../Input/input'; 

it("should render the Input element with the default value if default value prop is given",()=>{ 
    let defVal="Task 1"
    render(<Input 
        defaultValue={defVal} />)  
    const inputElement = screen.getByTestId('text-input');    
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue("Task 1")
})

it("should render the Input element with the placeholder if placeholder prop is given",()=>{ 
    let place_holder_text="This is the placeholder text"
    render(<Input 
        placeholder={place_holder_text} />) 
    const place_holder=screen.getByPlaceholderText(/This is the placeholder text/i)
    expect(place_holder).toBeInTheDocument();    
}) 

