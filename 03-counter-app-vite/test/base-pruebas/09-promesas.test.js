import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('Pruebas en 09-promesas', () => { 
    test('getHeroesByIdAsync debe de retornar un heroe', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                
                expect( heroe ).toEqual( heroes.find( hero => hero.id === id) );

                done();
            });

    });

    test('getHeroeByIdAsync debe obtener un error si heroe no existe', ( done ) => { 

        const id = 100;
        getHeroeByIdAsync( id )
            .catch( err => {

                expect(err).toBe( 'No se pudo encontrar el héroe ' + id );

                done();

            });

     });
 });