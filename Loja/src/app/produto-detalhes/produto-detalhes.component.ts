import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//IMPORTA A LISTA DE PRODUTOS COM interface + LISTA DE DADOS
import { Produto, produtosRecebidos } from '../produtos';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  produto: Produto | undefined;

  constructor(private rota: ActivatedRoute) { }

  ngOnInit(): void {
    // CAPTANDO VALOR DA URL
    const parametrosDaRota = this.rota.snapshot.paramMap;
    const produtoIdDaRota = Number(parametrosDaRota.get('produtoId'));

    // CAPTANDO O PRODUTO ALVO QUE O PARAMETRO DA ROTA NOS INDICOU
    this.produto = produtosRecebidos.find(produtosRecebidos => produtosRecebidos.id === produtoIdDaRota);
  }

}
