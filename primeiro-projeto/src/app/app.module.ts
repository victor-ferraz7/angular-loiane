import { BrowserModule } from '@angular/platform-browser'; //  Prepara a aplicação para ser executada em 
// um Browser
import { NgModule } from '@angular/core'; // Importa o Decorator @NgModule

// Import das Classes do Projeto 
import { CursosModule } from './cursos/cursos.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { Browser } from 'protractor';
import { from } from 'rxjs';

@NgModule({ // Decorator
  declarations: [ // Dentro do Declaration serão listados todos os componentes, diretivas e pipes que queremos 
// utilizar dentro desse módulo    
    AppComponent,
    MeuPrimeiroComponent, //#Aula #03
    MeuSegundoComponent
  ],
  imports: [ // Declarados os outros módulos que serão utilizados nesse módulo ou dentro de algum componente
// que pertence a esse módulo     
    BrowserModule,
    CursosModule // Com essa importação, consigo utilizar tudo que estiver dentro de exports do cursos module
  ],
  providers: [], // Serviços que ficarão disponíveis para todos os componentes declarado nesse módulo
  bootstrap: [AppComponent] // Componente que deve ser instanciado quando executar a aplicação, componente 
// container da aplicação
})
export class AppModule { } // Módulo Raíz da Aplicação
