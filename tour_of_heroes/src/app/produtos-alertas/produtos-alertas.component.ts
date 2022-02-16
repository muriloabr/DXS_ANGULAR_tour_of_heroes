import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../produtos';

@Component({ //MOSTRA QUE CLASSE A SEGUIR É 
  selector: 'app-produtos-alertas',
  templateUrl: './produtos-alertas.component.html',
  styleUrls: ['./produtos-alertas.component.css']
})
export class ProdutosAlertasComponent implements OnInit {

  /*CRIO ESSA PROPRIEDADE PARA RECEBER INPUT DE VALORES DO COMPONENTE PAI
    [AQUELE QUE INCLUIR ESTE COMPONENTE NO HTML] COMO O produto-lista.component*/
  @Input() produtoRecebido!: Produto;  /*OBRIGATORIO INSTANCIAR*/
  /*SE ELA NÃO FOR NULA [EM TS: var! IGUAL A NOTAÇÃO: var?]
    ELA HERDARÁ AS CARACTERISTICAS DA INTERFACE PRODUTO SE TORNANDO INSTANCIA NULA DE UM*/

  /*CRIO ESSA PROPRIEDADE PARA ENVIAR OUTPUT DE VALORES PARA O COMPONENTE PAI
    [AQUELE QUE INCLUIR ESTE COMPONENTE NO HTML] COMO O produto-lista.component*/
  @Output() notificar = new EventEmitter();  /*OBRIGATORIO INSTANCIAR*/
  /*É DO TIPO EMISSOR DE EVENTOS*/

  constructor() { }

  ngOnInit(): void {
  }

}
