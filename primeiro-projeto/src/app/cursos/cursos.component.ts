import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];
  
  // No Angular, trabalha-se apenas com Injeção de Dependência via constructor
  constructor( private cursosService: CursosService) { // cursosService do Tipo CursosService(Classe Importada na linha 2)
    this.nomePortal = 'http://loiane.training';

    var servico = new CursosService(); // Instância de Classe
    // Injeção de Dependência : fazer que o Angular forneça automaticamente uma instância dessa classe de serviço 
    // para que façamos apenas uso dessa intancia e não precisamos nos preocupar em instanciar manualmente
    // essa  classe de serviço (igual ao que está sendo feito)
    // Conceito : Obter o serviço automaticamente e fazer o uso dele como você quizer

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
