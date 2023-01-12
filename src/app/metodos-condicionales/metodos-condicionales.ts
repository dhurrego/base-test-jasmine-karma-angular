
export class MetodosCondicionales {

    public variable1: boolean = true;
    public variable2: boolean = true;
    public variable3: boolean = true;

    constructor() {}

    public probandoCondicionales(): string {
        if(this.variable1) {
            return 'variable 1 verdadero';
        } else if(this.variable2) {
            if(this.variable3) {
                return 'variable 2 y 3 verdadero';
            }
            return 'variable 2 verdadero';
        } else if(this.variable3) {
            return 'variable 3 verdadero';
        }

        return 'todas son falsas';
    }

}