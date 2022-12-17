import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProduit1Component } from './ajout-produit1.component';

describe('AjoutProduit1Component', () => {
  let component: AjoutProduit1Component;
  let fixture: ComponentFixture<AjoutProduit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutProduit1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutProduit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
