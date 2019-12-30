import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para inserir o [(ngModule)] >> Two-Way Data Binding
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent // adicionar dentro de declarações permite 
  ],
  imports: [
  BrowserModule,FormsModule, // para inserir o [(ngModule)] >> Two-Way Data Binding
  MeuFormModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
