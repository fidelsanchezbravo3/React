import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

     });

     test('getHeroeById debe de retornar undefined si no existe el id', () => {

        const id = 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();

     });

     // Tarea:
     // Debe retornar un arreglo con los heroes de DC
     // Length === 3
     // toEqual al arreglo filtrado
     test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );


     });

     // Debe de retornar un arreglo con los heroes de Marvel
     // Length === 2
     test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heros = getHeroesByOwner( owner );

        expect( heros.length ).toBe( 2 );
        expect( heros ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
     });

 });