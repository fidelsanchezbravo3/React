import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => { 
    
    const user = {
        id: 123,
        name: 'Juan',
        email: 'juan@google.com'
    };
    
    test('Debe de mostar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );

     });

    test('Debe de mostar el componente con el usuario', () => { 

        render(
            <UserContext.Provider value={{ user }} >
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.id.toString() );
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.email );

     });

    test('Debe de llamarse la funcion al dar click en el boton', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }} >
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith( {id: 123, name: 'Juan', email: 'juan@google.com'} );
        
     });

 });