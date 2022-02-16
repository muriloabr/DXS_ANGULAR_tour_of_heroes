import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../products';

@Component({ //MOSTRA QUE CLASSE A SEGUIR É 
  selector: 'app-produtos-alertas',
  templateUrl: './produtos-alertas.component.html',
  styleUrls: ['./produtos-alertas.component.css']
})
export class ProdutosAlertasComponent implements OnInit {
  @Input() product!: Produto;
  constructor() { }

  ngOnInit(): void {
  }

}
