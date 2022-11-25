import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => { 

    const titulo = 'One Punch';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer match con el snapshot', () => { 

        const { container } = render( <GifItem title={ titulo } url={ url }/> );
        expect( container ).toMatchSnapshot();

     });

     test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem title={ titulo } url={ url } /> );

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( titulo );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( titulo );

     });

     test('Debe de mostrar el titulo en el componente', () => { 

        render( <GifItem title={ titulo } url={ url } /> );
        

      });
 });