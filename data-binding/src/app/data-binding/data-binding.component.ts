import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url : string = 'http://github.com/victor-ferraz7';

  urlImagem = 'http://lorempixel.com/400/200/';

  getPraia(){
    return "Pegar uma Praia";
  }

  getImagem(){
    return 'http://lorempixel.com/400/200/sports/';
  }

  constructor() { }

  ngOnInit() {
  }

}
