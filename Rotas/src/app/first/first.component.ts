import { Component, OnInit } from '@angular/core';
//IMPORTANDO PARA CAPTAR PARAMETROS DA ROTA
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  umId: string = '';
  constructor(private rota: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rota.queryParams.subscribe(params => {
    this.umId = params['id'];
    }); //CAPTANDO PARAMETRO ID
  }
}
