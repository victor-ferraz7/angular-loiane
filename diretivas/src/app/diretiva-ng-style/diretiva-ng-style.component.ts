import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.css']
})
export class DiretivaNgStyleComponent implements OnInit {

  public ativo: boolean = false;
  public ativo2: boolean = false;
  public tamanhoFonte: number = 30;
  public tamanhoFonte2: number = 30;

  constructor() { }

  ngOnInit() {
  }
  mudarAtivo(){
    this.ativo = !this.ativo;
  }
  mudarAtivo2(){
    this.ativo2 = !this.ativo2;
  }
}
