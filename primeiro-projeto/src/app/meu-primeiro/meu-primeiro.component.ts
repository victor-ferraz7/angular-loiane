import { Component } from "@angular/core";

@Component({ // Anguar usa o Padrão Web Components
    selector: 'meu-primeiro-component', // Seletor , vira uma tag HTML
    template: `
        <p> Meu primeiro Component com Angular 2!</p>
    `
})

export class MeuPrimeiroComponent {
    // Dentro da Classe é onde irá ficar a lógica JS
}