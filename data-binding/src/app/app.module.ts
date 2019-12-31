import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para inserir o [(ngModule)] >> Two-Way Data Binding
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent // adicionar dentro de declarações permite 
  ],
  imports: [
  BrowserModule,FormsModule, // para inserir o [(ngModule)] >> Two-Way Data Binding
  MeuFormModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
