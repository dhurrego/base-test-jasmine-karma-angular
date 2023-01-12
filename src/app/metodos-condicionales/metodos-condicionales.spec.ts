import { MetodosCondicionales } from './metodos-condicionales';

describe('Probando MetodosCondicionales', () => {

    let componente: MetodosCondicionales;
    
    beforeEach(() => {
        componente = new MetodosCondicionales();
    });

    it('probando metodo variable 1 verdadero', () => {
        expect(componente.probandoCondicionales()).toBe('variable 1 verdadero');
    });

    it('probando metodo variable 1 falsa y 2/3 verdadero', () => {
        componente.variable1 = false;
        expect(componente.probandoCondicionales()).toBe('variable 2 y 3 verdadero');
    });

    it('probando metodo variable 1/2 falsa y 3 verdadero', () => {
        componente.variable1 = false;
        componente.variable2 = false;
        expect(componente.probandoCondicionales()).toBe('variable 3 verdadero');
    });

    it('probando metodo variable 1/3 falsa y 2 verdadero', () => {
        componente.variable1 = false;
        componente.variable3 = false;
        expect(componente.probandoCondicionales()).toBe('variable 2 verdadero');
    });

    it('probando metodo todas variables falsas', () => {
        componente.variable1 = false;
        componente.variable2 = false;
        componente.variable3 = false;
        expect(componente.probandoCondicionales()).toBe('todas son falsas');
    });

});