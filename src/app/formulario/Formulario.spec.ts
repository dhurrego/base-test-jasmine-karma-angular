import { unFormulario } from "./Formulario";
import { FormBuilder } from '@angular/forms';

describe('Probando formulario', () => {

    const componente = new unFormulario(new FormBuilder());

    it('primera prueba formulario', () => {
        expect(componente.form.contains('email')).not.toBeFalsy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it('probando validador email requerido', () => {
        const controlEmail = componente.form.get('email');
        controlEmail?.setValue('');
        expect(controlEmail?.hasError('required')).toBeTruthy();
    });

    it('probando validador email tiene un formato valido y no es vacio', () => {
        const controlEmail = componente.form.get('email');
        controlEmail?.setValue('sofka@sofka.com.co');
        expect(controlEmail?.hasError('email')).toBeFalsy();
        expect(controlEmail?.hasError('required')).toBeFalsy();
    });

    it('probando validador email tiene un formato invalido', () => {
        const controlEmail = componente.form.get('email');
        controlEmail?.setValue('sofkasofka.com.co');
        expect(controlEmail?.hasError('email')).toBeTruthy();
    });


});