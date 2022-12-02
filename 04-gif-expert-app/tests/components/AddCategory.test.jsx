import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } } );
        
        expect( input.value ).toBe( 'Saitama' );
        // screen.debug();

     });

     test('Debe de llamara onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const formulario = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( formulario );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        // expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

      });

      test('No debe de llamar onNewCategory si el input no tiene valor', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const formulario = screen.getByRole('form');

        fireEvent.submit( formulario );

        expect( onNewCategory ).not.toHaveBeenCalled();

       });
 });