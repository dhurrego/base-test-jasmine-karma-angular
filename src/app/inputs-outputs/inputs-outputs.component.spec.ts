import { InputsOutputsComponent } from './inputs-outputs.component';

describe('Probando InputOutpusComponent', () => {

    let componente: InputsOutputsComponent;

    beforeEach(() => {
        componente = new InputsOutputsComponent();
    });

    it('probando input entrada', () => {
        expect(componente.entrada).toEqual('default');
        componente.borrarEntrada();
        expect(componente.entrada).toEqual('');
    });

    it('probando output salida', () => {
        const ARGUMENTO: string = 'emitiendo';
        
        componente.salida.subscribe( valor => {
            expect(valor).toBe(ARGUMENTO);
        });

        componente.emitirAlgo(ARGUMENTO);
    });

});