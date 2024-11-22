import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';


describe("Counter", () => {

    test("render Counter", () => {

        render(<Counter initialValue={10}/>);
        const element = screen.getByText("Counter: 10");
        expect(element).toBeInTheDocument();

    })
    test("Counter inc", () => {

        render(<Counter initialValue={10}/>);
        const element = screen.getByText("Counter: 10");
        expect(element).toBeInTheDocument();

        const incButton = screen.getByText("Inc");
        fireEvent.click(incButton);

        let updated_element = screen.getByText("Counter: 11");
        expect(updated_element).toBeInTheDocument();

        const inputElement = screen.getByPlaceholderText("Counter");
        fireEvent.change(inputElement, {target: {value: '20'}});

        updated_element = screen.getByText("Counter: 20");
        expect(updated_element).toBeInTheDocument();


    })


})