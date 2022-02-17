import { Component } from '@angular/core';

//IMPORTA A LISTA DE PRODUTOS COM interface + LISTA DE DADOS
import { produtosRecebidos } from '../produtos';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ListaProdutosComponent {
  //ORDENANDO OS PRODUTOS E COLOCANDO NA VARIAVEL produtos QUE É REFERENCIADA COMO INPUT NO COMPONENTE produtos-alertas
  produtos = produtosRecebidos.sort((x,y) => {return x.id - y.id});

  compartilhar(id: number) {
    //BUSCO O NOME NA LISTA POR FILTRAGEM FIND() POR ID | CASO NULO MOSTRAR MENSAGEM PADRAO
    window.alert('Obrigado por compartilhar: ' +  (this.produtos.find((a)=>a.id == id)?.nome ?? 'este produto') + "."); 
  }

  onNotificar() {
    window.alert('Avisaremos você quando este produto estiver em promoção!');
  }
}