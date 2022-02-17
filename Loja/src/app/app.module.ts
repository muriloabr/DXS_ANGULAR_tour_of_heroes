import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; //APP COMPONENT PADRAO
import { TopoBarraComponent } from './topo-barra/topo-barra.component';
import { ListaProdutosComponent } from './produto-lista/produto-lista.component';
import { ProdutosAlertasComponent as ProdutosAlertasComponent } from './produtos-alertas/produtos-alertas.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([ //O router-outlet DO APPCOMPONENT CARREGARA OS COMPONENTES CONFORME ESTAS ROTAS ABAIXO
      { path: '', component: ListaProdutosComponent },  //PARA URL RAIZ '' SERÁ CHAMADO ListaProdutosComponent 
      { path: 'produto/:produtoId', component: ProdutoDetalhesComponent } //PARA URL 'produto/:produtoId' SERÁ CHAMADO ProdutoDetalhesComponent...
    ]),
  ],
  declarations: [
    AppComponent,
    TopoBarraComponent,
    ListaProdutosComponent,
    ProdutosAlertasComponent,
    ProdutoDetalhesComponent
  ],
  bootstrap: [
    AppComponent  //APPCOMPONENT SERÁ SEMPRE CHAMADO AO INICIAR A NAVEGAÇÃO NO SITE
  ]
})
export class AppModule { }