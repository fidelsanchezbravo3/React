import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => { 

    const inicio = 100;

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={ inicio } /> );
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el valor inicial de 100', () => { 
        
        render( <CounterApp value={ inicio } /> );
        expect( screen.getByText(100) ).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( '100' );

     });

     test('Debe de incrementar con el boton +1', () => {

        render( <CounterApp value={ inicio } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('101') ).toBeTruthy();

     });

     test('Debe de decrementar con el boton -1', () => { 

        render( <CounterApp value={ inicio } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('99') ).toBeTruthy();

      });

      test('Debe de regresar al valor inicial con el boton reset', () => {
        
        render( <CounterApp value={ inicio } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' } ) );
        expect( screen.getByText( inicio ) ).toBeTruthy();

      });

 });