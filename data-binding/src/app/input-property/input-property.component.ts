import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs:['nomeCurso']
})
export class InputPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @Input() nomeCurso: string = ''; // convenção
  // nomeCurso: string = '';

}
