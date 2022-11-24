import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => { 
    test('usContext debe de retornar un objeto', () => { 

        const heroe = {
            clave: 'Ironman',
            edad: 45,
        };

        const user = usContext( heroe );

        expect(user).toEqual({
            nombreClave: heroe.clave,
            anios: heroe.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

     });
 });