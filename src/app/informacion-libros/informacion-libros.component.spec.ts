import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionLibrosComponent } from './informacion-libros.component';

describe('InformacionLibrosComponent', () => {
  let component: InformacionLibrosComponent;
  let fixture: ComponentFixture<InformacionLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
