
// simple test


// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"


// test('renders greet correctly', () => {
    //     render(<Greet/>)
    //     const textElement = screen.getByText(/hello/i)
    //     expect(textElement).toBeInTheDocument()
    // })
    
    
    
    // Test Driven Development (TDD) 
    /* 
    * Greet should render the text hello and if a name is passed into the component
    * It should render hello followed by the name
    */
   
import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe("Greet", () => {
    test('Greet renders correctly', () => {
        render(<Greet/>)
        const textElement = screen.getByText(/Hello/i)
        expect(textElement).toBeInTheDocument()
    })
})