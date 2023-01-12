import { dos, primero, tres } from "./inicio";

describe('Probando Inicio', () => {

    it('Probando function primero', () => {
        const resultado = primero();
        expect(resultado).toEqual('Hola que hace');
    });

    it('Debe retornar una cadena que contenga el argumento con la function dos', () => {
        const resultado = dos('Deivid');
        expect(resultado).toBe('Hola Deivid');
        expect(resultado).toContain('Deivid');
    });

    it('Debe retornar un arreglo de string que agregue el argumento enviado con la function tres', () => {
        const resultado = tres('SofkaU');
        expect(resultado).toContain('SofkaU');
        expect(resultado).toContain('sofka');
        expect(resultado).toContain('hola');
        expect(resultado.length).toEqual(3);
    });

});