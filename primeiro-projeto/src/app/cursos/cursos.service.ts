import { Injectable } from '@angular/core';

@Injectable({ // Significa que a classe CursosService pode ser injetada em outra clase para que o uso dela possa ser feito
  providedIn: 'root'
}) // Sempre que tivermos um serviço, teremos o decorator @Injectable para indicar que podemos injetar
export class CursosService {
  // Classe com métodos que realizarão alguma lógica

  // http pertence ao módulo HttpModule  ->  Para poder se conectar ao servidor 

  constructor() { }

    getCursos(){
      return ['Java','ES6', 'Angular'];
    }
 
}
