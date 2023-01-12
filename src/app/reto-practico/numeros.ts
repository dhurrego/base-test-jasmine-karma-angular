export class Numeros {

    public obtenerNumeroMayor(numeros: number[]): number {
        const listaOrdenada: number[] = numeros?.sort((num1, num2) => num2 - num1);
        
        if(listaOrdenada.length == 0) {
            throw new Error('La lista no puede ser vacia');
        }

        return listaOrdenada[0];
    }

    public realizarDivisionNumerosPositivos(numerador: number, denominador: number): number {
        if(denominador == 0) {
            throw new Error('El denominador no puede ser igual a cero');
        }

        if(denominador < 0 || numerador < 0) {
            throw new Error('Solo se permiten numeros positivos');
        }

        return numerador / denominador;
    }
    
}