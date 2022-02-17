import { ContentChild, NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//COMPONENTS SENDO IMPORTADOS PARA USO NAS ROTAS
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FilhoComponent } from './filho/filho.component';

const rotas: Routes = [ //ADICIONANDO AS TORAS NO ROUNTING-MODULE
  { path: 'primeiro',
   component: FirstComponent ,
    children: [
      {
        path: 'filho-a', 
        component: FilhoComponent, 
      },
      {
        path: 'filho-b',
        component: FilhoComponent,
      },
    ]
  },
  {path: 'segundo', component: SecondComponent },
  //{ path: '',   redirectTo: '/primeiro', pathMatch: 'full' }, // SE A ROTA FOR FULL IGUAL A '' FAZER O REDIRECT
  { path: '**', component: AppComponent  } //SE A ROTA NAO BATER COM NENHUMA ACIMA
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
