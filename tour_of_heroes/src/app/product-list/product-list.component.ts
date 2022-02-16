import { Component } from '@angular/core';

import { produtosRecebidos } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ListaProdutosComponent {
  produtos = produtosRecebidos;

  compartilhar() {
    window.alert('Obrigado por compartilhar este produto!');
  }
}