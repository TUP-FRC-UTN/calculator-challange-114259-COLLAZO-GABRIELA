import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css',
})
export class BotonesComponent {
  @Input() nro1: number = 0;
  @Input() nro2: number = 0;
  @Output() resultado = new EventEmitter<number>();
  @Output() limpiando = new EventEmitter<number>();

  result!: number;

  enviarResultado() {
    this.resultado.emit(this.result);
  }

  onSuma() {
    this.result = Number(this.nro1) + Number(this.nro2);
    this.enviarResultado();
  }

  onResta() {
    this.result = this.nro1 - this.nro2;
    this.enviarResultado();
  }
  onMultiplicacion() {
    this.result = this.nro1 * this.nro2;
    this.enviarResultado();
  }
  onDivison() {
    this.result = this.nro1 / this.nro2;
    this.enviarResultado();
  }

  limpiar() {
    this.result = 0;
    this.nro1 = 0;
    this.nro2 = 0;
    this.limpiando.emit();
  }
}
