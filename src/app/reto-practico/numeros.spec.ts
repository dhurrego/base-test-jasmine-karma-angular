import { Numeros } from './numeros';
describe('Probando Numeros', () => {

    let componente: Numeros;
    
    beforeEach(() => {
        componente = new Numeros();
    });

    it('probando metodo obtenerNumeroMayor con lista valida', () => {
        let numeroMayor: number = componente.obtenerNumeroMayor([1,3,2]);
        expect(numeroMayor).toBe(3);
        numeroMayor = componente.obtenerNumeroMayor([100,500,499,300,700,0]);
        expect(numeroMayor).toBe(700);
    });

    it('probando metodo obtenerNumeroMayor con lista vacia', () => {
        expect(() => componente.obtenerNumeroMayor([])).toThrowError('La lista no puede ser vacia');
    });

    it('probando metodo realizarDivisionNumerosPositivos con denominador igual a cero', () => {
        expect(() => componente.realizarDivisionNumerosPositivos(3, 0)).toThrowError('El denominador no puede ser igual a cero');
    });

    it('probando metodo realizarDivisionNumerosPositivos con numeros negativos', () => {
        expect(() => componente.realizarDivisionNumerosPositivos(3, -2)).toThrowError('Solo se permiten numeros positivos');
        expect(() => componente.realizarDivisionNumerosPositivos(-3, 2)).toThrowError('Solo se permiten numeros positivos');
    });

    it('probando metodo realizarDivisionNumerosPositivos con numeros positivos', () => {
        const resultado = componente.realizarDivisionNumerosPositivos(6, 2);
        expect(resultado).toBe(6/2);
    });

});