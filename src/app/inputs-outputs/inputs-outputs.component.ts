import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputs-outputs',
  templateUrl: './inputs-outputs.component.html',
  styleUrls: ['./inputs-outputs.component.css']
})
export class InputsOutputsComponent {

   @Input('entrada') entrada: string = 'default';
   @Output() salida: EventEmitter<String> = new EventEmitter();

   constructor() {}

   public emitirAlgo(arg: string): void {
    this.salida.emit(arg);
   }

   public borrarEntrada(): void {
    this.entrada = '';
   }

}
