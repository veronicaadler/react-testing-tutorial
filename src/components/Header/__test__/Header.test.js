import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render the same text as passed into title prop', () => {
    render(<Header title='My Header'/>); //component to be tested, receiving a prop of title
    const headingElement = screen.getByText(/my header/i) //getByText matches the component
    //by the text within that component.  Here, we are using a regex.
    expect(headingElement.toBeInTheDocument) //Here, we assert that this element should be in the 
    //component.

})

/*

it('should render the same text as passed into title prop', () => {
    render(<Header title='My Header'/>);
    const headingElement = screen.getByRole("heading") //Here, we are indicating that we wish to
    //target the element with the role of heading.  If there is more than one, it will throw an error.
    expect(headingElement.toBeInTheDocument)

})

it('should render the same text as passed into title prop', () => {
    render(<Header title='My Header'/>);
    const headingElement = screen.getByTitle('Header') //Here, we are targeting the element by its title.
    expect(headingElement.toBeInTheDocument)

})

//the following example demonstrates use of the findByText method, which would be used to call
//elements with asynchronous functionality

it('should render the same text as passed into title prop', async () => {
    render(<Header title='My Header'/>);
    const headingElement = await screen.findbyText('Header')
    expect(headingElement.toBeInTheDocument)

})

//Query by Example.  Demonstrates a use where we are testing whether a document
//is not in the component.

it('should render the same text as passed into title prop', () => {
    render(<Header title='My Header'/>);
    const headingElement = screen.queryByText(/dogs/i) //Here, we are targeting the element by its title.
    expect(headingElement.not.toBeInTheDocument)

})

//Get All by Role Example.  Used when we are trying to grab multiple elements, will return an array
//of all the corresponding elements

it('should render the same text as passed into title prop', () => {
    render(<Header title='My Header'/>);
    const headingElement = screen.getAllByRole('heading') //Here, we are targeting the element by its title.
    expect(headingElement.not.toBeInTheDocument)

})

*/
















/*describe("Header", () => {
    it('should render same text passed into title prop', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = screen.getByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });
}) */

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading", { name: /todo/i });
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByTitle("Header");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h2Element = screen.getByTestId("header-2");
//     expect(h2Element).toBeInTheDocument();
// });

// // WITH FINDBY

// it('should render same text passed into title prop', async () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = await screen.findByText(/todo/i);
//     expect(h1Element).toBeInTheDocument();
// });

// // WITH QUERYBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.queryByText(/dogs/i);
//     expect(h1Element).not.toBeInTheDocument
// });

// // WITH GETALLBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Elements = screen.getAllByText(/todo/i);
//     expect(h1Elements.length).toBe(1);
// });