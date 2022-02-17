import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosAlertasComponent } from './produtos-alertas.component';

describe('ProductAlertsComponent', () => {
  let component: ProdutosAlertasComponent;
  let fixture: ComponentFixture<ProdutosAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosAlertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
