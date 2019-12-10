//Módulo de funcionalidade  
// Não importa o Browser Module, mas Sim CommonModule

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule // contem as diretivas e pipes mais comuns 
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [ // informa ao angular quais as declarações(Componentes, diretivas, pipes) desse módulo que queremos expor
// para outros módulos
      CursosComponent
  ]
})
export class CursosModule { }

