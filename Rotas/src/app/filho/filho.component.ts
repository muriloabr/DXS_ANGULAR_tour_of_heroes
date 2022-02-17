import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {
filho: string;
  constructor(private rota: ActivatedRoute, private router: Router) {
    this.filho = "";
  }

  ngOnInit(): void {
    this.rota.queryParams.subscribe(params => {
    this.filho = this.router.url + " | PARAM id VALOR: " + params["id"];
    }); //CAPTANDO URL PRA EXIBIR
  }

}
