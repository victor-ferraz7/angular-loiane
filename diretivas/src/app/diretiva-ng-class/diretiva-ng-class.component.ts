import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.css']
})
export class DiretivaNgClassComponent implements OnInit {

  public meuFavorito: boolean = false;
  public meuFavorito2: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onFavoritoClick(){
    this.meuFavorito = !this.meuFavorito;
  }

  onFavoritoClick2(){
    this.meuFavorito2 = !this.meuFavorito2;
  }

}
