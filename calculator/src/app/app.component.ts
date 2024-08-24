import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  
  numero1!: number;
  numero2!: number;
  resultado!: number;
  ngOnInit() {
    this.numero1 = 0;
    this.numero2=0;
    this.resultado=0;
  }

  
  actualizarValorNro1($event: any) {
    this.numero1 = $event.target.value;
    console.log(this.numero1);
  }
  actualizarValorNro2($event: any) {
    this.numero2 = $event.target.value;
    console.log(this.numero2);
  }

  calcularResultado(valor:number){
    this.resultado = valor
  }
  limpiar(event: any){
    this.numero1 = 0;
    this.numero2=0;
    this.resultado=0;
  }
}
