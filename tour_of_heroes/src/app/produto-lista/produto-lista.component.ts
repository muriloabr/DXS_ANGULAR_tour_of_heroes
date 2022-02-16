import { Component } from '@angular/core';
import { produtosRecebidos } from '../products';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ListaProdutosComponent {
  produtos = produtosRecebidos.sort((x,y) => {return x.id - y.id});

  compartilhar(id: number) {
    window.alert('Obrigado por compartilhar: ' +  (this.produtos.find((a)=>a.id == id)?.nome ?? 'este produto') + "."); //CAPTANDO O NOME NA LISTA POR FILTRAGEM FIN() | CASO NULO MOSTRAR MENSAGEM PADRAO
  }
}