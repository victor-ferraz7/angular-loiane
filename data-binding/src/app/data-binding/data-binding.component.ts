import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public url: string = 'http://github.com/victor-ferraz7';

  public urlImagem = 'http://lorempixel.com/400/200/';

  public valorAtual: string = '';

  public valorSalvo: string = '';

  public valorSalvo2: string = '';

  public isMouseOver: boolean = false;

  public nome: string = "Victor";

  public nome2: string = '';

  public nomeCurso: string = 'Curso Angular'

  public valorInicial: number = 100;

  getPropertyBinding() {
    return 'Valor do Component no Template';
  }

  getPraia() {
    return "Pegar uma Praia";
  }

  getImagem() {
    return 'http://lorempixel.com/400/200/sports/';
  }

  botaoClicado() {
    return alert('Você clicou no botão!');
  }

  onKeyUp(evento: KeyboardEvent) {
    // console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor
  }

  salvarValor2(valor) {
    this.valorSalvo2 = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

}
