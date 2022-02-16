import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; //APP COMPONENT PADRAO
import { TopoBarraComponent } from './topo-barra/topo-barra.component';
import { ListaProdutosComponent } from './produto-lista/produto-lista.component';
import { ProdutosAlertasComponent as ProdutosAlertasComponent } from './produtos-alertas/produtos-alertas.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListaProdutosComponent }, //O router-outlet DO APPCOMPONENT COMPONENT PADRAO NA URL RAIZ '/' RECEBERA A ROTA PARA ListaProdutosComponent
    ])
  ],
  declarations: [
    AppComponent,
    TopoBarraComponent,
    ListaProdutosComponent,
    ProdutosAlertasComponent
  ],
  bootstrap: [
    AppComponent  //INICIA NO CHAMADO DA URL RAIZ '/' O APPCOMPONENT
  ]
})
export class AppModule { }